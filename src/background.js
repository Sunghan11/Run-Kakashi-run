const CONSTANTS = {
    // FIRE_SPEED: 3,
    ROCK_SPEED: 4,
    WARM_UP_SECONDS: 1,
    // ROCK_SPACING: Math.floor(Math.random() * 128 + 48),
    ROCK_WIDTH: 50,
    GROUND_HEIGHT: 30,
    EDGE_BUFFER: 50,
}
    
class Background {
    constructor(ctx, image, posY, imgWidth, speed) {
        this.image = image;
        this.speed = speed;
        this.x = 0;
        this.y = posY;
        this.imgWidth = imgWidth;
        this.ctx = ctx;
        // this.ROCK_SPACING = Math.floor(Math.random() * 128 + 48);

        const firstRockDistance =
            this.imgWidth + (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ROCK_SPEED);

        this.rocks = [
            
            this.randomRock(firstRockDistance),
            this.randomRock(firstRockDistance + this.generateRockSpacing()),
            this.randomRock(firstRockDistance + (this.generateRockSpacing() * 4)),
        ];
    }

    generateRockSpacing() {
        return Math.floor(Math.random() * 500 + 150);
    }

    randomRock(x) {
        const height = 100;

        const rock = {
            left: x,
            right: CONSTANTS.ROCK_WIDTH + x,
            top: 300 - height,
            bottom: height,
            passed: false
        }
        return rock;
    }

    eachRock(callback) {
        this.rocks.forEach(callback.bind(this));
    }

    passedRock(kakashi, callback) {
        this.eachRock((rock) => {
            if (rock.right < kakashi.left) {
                if (!rock.passed) {
                    rock.passed = true;
                    callback();
                }
            }
        })
    }

    collidesWith(kakashi) {
        const _overlap = (rect1, rect2) => {
            if (rect1.left > rect2.right || rect1.right < rect2.left) {
                return false;
            }
            if (rect1.top < rect2.bottom || rect1.bottom > rect2.top) {
                return false;
            }
            return true;
        };
        let collision = false;
        this.eachRock((rock) => {
            if (_overlap(rock, kakashi)) {
                    collision = true;
                    console.log("hit");
                }
        });
        return collision;
    }

    moveRocks() {
        this.eachRock(function(rock) {
            rock.left -= CONSTANTS.ROCK_SPEED;
            rock.right -= CONSTANTS.ROCK_SPEED;
        });
        if (this.rocks[0].right <= 0) {
            this.rocks.shift();
            const newX = this.rocks[1].left + this.generateRockSpacing();
            this.rocks.push(this.randomRock(newX));
        }
    }

    drawRocks() {
        this.eachRock(function(rock) {
            this.ctx.fillStyle = "grey";
            this.ctx.strokeStyle = "black";
            this.ctx.fillRect(
                rock.left,
                rock.top,
                CONSTANTS.ROCK_WIDTH,
                rock.bottom
            );
        
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, 1000, 300);
        this.ctx.drawImage(this.image, this.x, this.y);
        this.ctx.drawImage(this.image, this.x + this.imgWidth, this.y);
        if (this.imgWidth < 1000) {
            this.ctx.drawImage(this.image, this.x + this.imgWidth * 2, this.y);
        }
        if (this.x <= -this.imgWidth) {
            this.x = 0;
        }
        this.move();
        // this.moveRocks();
    }

    move() {
        this.x -= this.speed;
    }

    

}

export default Background;


