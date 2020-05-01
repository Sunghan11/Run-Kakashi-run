const CONSTANTS = {
    // FIRE_SPEED: 3,
    ROCK_SPEED: 2,
    WARM_UP_SECONDS: 1,
    ROCK_SPACING: Math.floor(Math.random() * 64 + 48),
    GROUND_HEIGHT: 30
}

export default class Background {
    constructor(ctx, image, speed, length, posY) {
        this.ctx = ctx;
        this.image = image;
        // this.position = position,
        this.speed = speed;
        // this.dimensions = dimensions;
        this.length = length;
        this.x = 0;
        this.y = posY;

        const firstRockDistance = 
            this.length + 
            (CONSTANTS.WARM_UP_SECONDS * 60 * CONSTANTS.ROCK_SPEED);
        
        this.rocks = [
            this.randomRock(firstRockDistance),
            this.randomRock(firstRockDistance + CONSTANTS.ROCK_SPACING),
            this.randomRock(firstRockDistance + (CONSTANTS.ROCK_SPACING * 2)),
        ];
    }

    

    randomRock(x) {
        const rock = {
            left: x,
            right: CONSTANTS.ROCK_WIDTH + x,
            bottom: 30,
            passed: false
        }
        return rock;
    }

    drawBackground() {
        this.ctx.clearRect(0,0,800, 300);
        this.ctx.drawImage(this.image, this.x, this.y);
        this.ctx.drawImage(this.image, this.x + this.length, this.y);
        if (this.length < 800) {
            this.ctx.drawImage(this.image, this.x + this.length * 2, this.y);
        }
        if (this.x <= -this.length) {
            this.x = 0;
        }
        this.bkgScroll();                
    }

    bkgScroll() {
        this.x -= this.speed;
    }


    // fireball = function (x,y) {
    //     this.alive = true;
    //     this.animation
    // }

    // animate() {
    //     this.drawBackground()
    // }
}

// module.exports = Background;