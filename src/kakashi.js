import kakashi2Src from "./images/kakashi2.png"

const CONSTANTS = {
    GRAVITY: 0.4,
    VELOCITY: 11,
    KAKASHI_WIDTH: 55,
    KAKASHI_HEIGHT: 55,
}

const RUNSPRITE = {
    run1: [0, 0, 55, 55],
    run2: [55, 0, 55, 55],
    run3: [110, 0, 55, 55],
    run4: [165, 0, 55, 55],
    run5: [220, 0, 55, 55],
    run6: [0, 55, 55, 55]
}

const JUMPSPRITE = {
    jump1: [55, 55, 55, 55],
    jump2: [110, 55, 55, 55],
    jump3: [165, 55, 55, 55],
    jump4: [220, 55, 55, 55],
    jump5: [0, 110, 55, 55],
    jump6: [110, 110, 55, 55],
    jump7: [165, 110, 55, 55],
    jump8: [220, 165, 55, 55],
    jump9: [0, 165, 55, 55],
    jump10: [55, 110, 55, 55],
    jump11: [110, 165, 55, 55],
    jump12: [220, 165, 55, 55],
}

const SLIDESPRITE = {
    slide1: [220,220,55,55],
}

const POSESPRITE = {
    pose1: [0, 220, 55, 55],
    pose2: [55, 220, 55, 55],
    pose3: [110, 220, 55, 55],
    pose4: [165, 220, 55, 55],
}


class Kakashi {

    constructor() {
        // this.position = props.position;
        this.jumping = false;
        this.sliding = false;
        this.jumpCount = 0;
        this.slideCount = 0;
        this.sprites = new Image();
        this.sprites.src = kakashi2Src;
        this.runAnimation = 0;
        this.jumpAnimation = 0;
        this.poseAnimation = 0;
        this.slideAnimation = 0;
        this.gameOver = false;
        this.x = 100;
        this.y = 220;
    }

    jump() {
        if (this.jumping) {
            if (this.jumpCount === 0 || !this.onGround()) {
                this.position[1] -= CONSTANTS.VELOCITY - CONSTANTS.GRAVITY * this.jumpCount;
                this.jumpCount += 1;
                // this.jumping = false;
            } else if (this.jumpCount === 1 && !this.onGround()) {
                this.jumpCount = 0;
                this.position[1] -= CONSTANTS.VELOCITY - CONSTANTS.GRAVITY * this.jumpCount;
                // }
            } else {
                this.position[1] = 220;
                this.jumpCount = 0;
                this.jumping = false;
            }
        }
    }

    slide() {
        if (this.sliding) {
            if(this.slideCount === 0 || this.onGround()) {
                this.position[1] = 230;
                this.slideCount += 1
            } else {
                this.position[1] = 220;
                this.slideCount = 0;
                this.sliding = false;
            }
        }
    }

    onGround() {
        return this.position[0] === 100 && this.position[1] >= 220;
    }
    
    toggleJump() {
        if (this.sliding !== true) {
            this.jumping = true;
        }
    }
    
    toggleSlide() {
        if (this.jumping !== true) {
            this.sliding = true;
        }
    }

    getFrame() {
        if (this.gameOver && this.poseAnimation < 10) {
            this.poseAnimate += 1;
            return POSESPRITE.pose1;
        } else if (this.gameOver && this.poseAnimation < 20) {
            this.poseAnimation += 1;
            return POSESPRITE.pose2;
        } else if (this.gameOver && this.poseAnimaton === 20) {
            this.poseAnimation = 0;
            return POSESPRITE.pose1;
        } else if(this.sliding && this.onGround() && this.slideAnimation < 50) {
            this.slideAnimation += 1;
            return SLIDESPRITE.slide1;
        }else if (this.slideAnimation >= 50) {
            this.sliding = false;
            this.position[1] = 220;
            this.slideAnimation = 0;
            return RUNSPRITE.run1;
        } else if (this.onGround() && this.runAnimation < 5) {
            this.runAnimation += 1;
            return RUNSPRITE.run1;
        } else if (this.onGround() && this.runAnimation < 10) {
            this.runAnimation += 1;
            return RUNSPRITE.run2;
        } else if (this.onGround() && this.runAnimation < 15) {
            this.runAnimation += 1;
            return RUNSPRITE.run3;
        } else if (this.onGround() && this.runAnimation < 20) {
            this.runAnimation += 1;
            return RUNSPRITE.run4;
        } else if (this.onGround() && this.runAnimation < 25) {
            this.runAnimation += 1;
            return RUNSPRITE.run5;
        } else if (this.onGround() && this.runAnimation < 30) {
            this.runAnimation += 1;
            return RUNSPRITE.run6;
        } else if (this.onGround() && this.runAnimation >= 30) {
            this.runAnimation = 0;
            return RUNSPRITE.run1;
        } else if (!this.onGround() && this.jumpAnimation < 4) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump1;
        } else if (!this.onGround() && this.jumpAnimation < 8) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump2;
        } else if (!this.onGround() && this.jumpAnimation < 12) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump3;
        } else if (!this.onGround() && this.jumpAnimation < 16) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump4;
        } else if (!this.onGround() && this.jumpAnimation < 20) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump5;
        } else if (!this.onGround() && this.jumpAnimation < 24) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump6;
        } else if (!this.onGround() && this.jumpAnimation < 30) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump7;
        } else if (!this.onGround() && this.jumpAnimation < 36) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump8;
            // } else if (!this.onGround() && this.jumpAnimation < 42) {
            //     this.jumpAnimation += 1;
            //     return JUMPSPRITE.jump9;
        } else if (!this.onGround() && this.jumpAnimation < 46) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump10;
        } else if (!this.onGround() && this.jumpAnimation < 50) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump11;
        } else if (!this.onGround() && this.jumpAnimation < 54) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump12;
        } else if (!this.onGround() && this.jumpAnimation >= 54) {
            this.jumpAnimation = 0;
            return RUNSPRITE.run1;
        // } else if (this.sliding && this.onGround() && this.slideAnimation < 50) {
        //     this.slideAnimation += 1;
        //     return SLIDESPRITE.slide1;
        } else {
            this.slideAnimation = 0;
            return RUNSPRITE.run1;
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        const sprite = this.getFrame();
        ctx.drawImage(
            this.sprites, //image
            sprite[0], //sx
            sprite[1], //sy
            sprite[2], //sWidth
            sprite[3], //sHeight
            this.position[0], //dx
            this.position[1], //dy
            sprite[2], //dWidth
            sprite[3] //dHeight
        );
    }

    update(ctx) {
        this.jump();
        this.slide();
        this.draw(ctx);
    }

    bounds() {
        return {
            left: this.x,
            right: this.x + CONSTANTS.KAKASHI_WIDTH,
            top: this.y,
            bottom: this.y + CONSTANTS.KAKASHI_HEIGHT
        };
    }

    collidesWith(rock, fireball) {
        const _overlap = (obstacle, kakashi) => {
            if (obstacle.left > kakashi.right || obstacle.right < kakashi.left) {
                return false;
            }
            if (obstacle.top < kakashi.bottom || obstacle.bottom > kakashi.top) {
                return false;
            }
            return true;
        };
        let collision = false;
        // this.eachRock((rock) => {
            if (_overlap(rock, kakashi || _overlap(fireball, kakashi))) {
                collision = true;
                console.log("hit");
            }
        return collision;
    }

}

export default Kakashi;
