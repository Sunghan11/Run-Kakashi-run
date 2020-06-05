import kakashi2Src from "./images/kakashi2.png"

const CONSTANTS = {
    GRAVITY: 0.2,
    VELOCITY: 5.5,
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
    slide1: [220, 220, 55, 55],
}

const POSESPRITE = {
    pose1: [0, 220, 55, 55],
    pose2: [55, 220, 55, 55],
    pose3: [110, 220, 55, 55],
    pose4: [165, 220, 55, 55],
}


class Kakashi {

    constructor(props) {
        this.position = props.pos;
        this.jumping = false;
        this.sliding = false;
        this.velocity = 0;
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
        this.countJump = 0;

        this.bounds = this.bounds.bind(this);
    }

    jump() {
        if (this.jumping) {
            // if (this.velocity === 0 && this.countJump === 1 || !this.onGround() && this.countJump === 1) {
            if (this.velocity === 0 || !this.onGround()) {
                
                console.log("first Jump");
                this.position[1] -= CONSTANTS.VELOCITY - CONSTANTS.GRAVITY * this.velocity;
                this.velocity += 0.5;
                // this.jumping = false;
            // } else if ((this.velocity <= 60 && this.countJump === 2 && this.velocity <= 100) && !this.onGround()) {
            //     let newVel = 0;
            //     console.log("second Jump");
            //     // this.velocity = 0;
            //     this.position[1] -= CONSTANTS.VELOCITY - CONSTANTS.GRAVITY * (newVel);
            //     newVel ++;
            // } else if (this.position[1] < 20) {
            //     console.log(test);
            //     this.position[1] = 220;
            //     this.jumping = false;
            //     this.velocity = 0;
            //     this.countJump = 0;
                // this.countJump ++;
            } else {
                this.position[1] = 220;
                this.velocity = 0;
                this.jumping = false;
                this.countJump = 0;
            }
        // }else if  (this.jumping && this.countJump < 2){
        //     if (this.velocity < 55 && !this.onGround()) {
        //         this.position[1] -= CONSTANTS.VELOCITY - CONSTANTS.GRAVITY * this.velocity;
        //         this.velocity ++;
        //     } else {
        //         this.position[1] = 220;
        //         this.velocity = 0;
        //         this.jumping = false;
        //     }
        }
    }

    slide() {
        if (this.sliding) {
            if (this.slideCount === 0 || this.onGround()) {
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
        this.sliding = false;
        this.slideAnimation = 0;
        if (this.countJump < 3) {
            this.jumping = true;
            console.log("jump Event");
            this.countJump += 1;
        }
    }

    toggleSlide() {
        if (this.jumping !== true) {
            this.sliding = true;
        }
    }

    getFrame() {
        if (this.gameOver && this.poseAnimation < 20) {
            this.poseAnimate += 1;
            return POSESPRITE.pose1;
        } else if (this.gameOver && this.poseAnimation < 40) {
            this.poseAnimation += 1;
            return POSESPRITE.pose2;
        } else if (this.gameOver && this.poseAnimaton === 40) {
            this.poseAnimation = 0;
            return POSESPRITE.pose1;
        } else if (this.sliding && this.onGround() && this.slideAnimation < 100) {
            this.slideAnimation += 1;
            this.jumpAnimation = 0;
            return SLIDESPRITE.slide1;
        } else if (this.slideAnimation >= 100) {
            this.sliding = false;
            this.position[1] = 220;
            this.slideAnimation = 0;
            return RUNSPRITE.run1;
        } else if (this.onGround() && this.runAnimation < 10) {
            this.jumpAnimation = 0;
            this.slideAnimation = 0;
            this.runAnimation += 1;
            return RUNSPRITE.run1;
        } else if (this.onGround() && this.runAnimation < 20) {
            this.runAnimation += 1;
            return RUNSPRITE.run2;
        } else if (this.onGround() && this.runAnimation < 30) {
            this.runAnimation += 1;
            return RUNSPRITE.run3;
        } else if (this.onGround() && this.runAnimation < 40) {
            this.runAnimation += 1;
            return RUNSPRITE.run4;
        } else if (this.onGround() && this.runAnimation < 50) {
            this.runAnimation += 1;
            return RUNSPRITE.run5;
        } else if (this.onGround() && this.runAnimation < 60) {
            this.runAnimation += 1;
            return RUNSPRITE.run6;
        } else if (this.onGround() && this.runAnimation >= 60) {
            this.runAnimation = 0;
            return RUNSPRITE.run1;
        } else if (!this.onGround() && this.jumpAnimation < 8) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump1;
        } else if (!this.onGround() && this.jumpAnimation < 16) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump2;
        } else if (!this.onGround() && this.jumpAnimation < 24) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump3;
        } else if (!this.onGround() && this.jumpAnimation < 32) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump4;
        } else if (!this.onGround() && this.jumpAnimation < 40) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump5;
        } else if (!this.onGround() && this.jumpAnimation < 48) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump6;
        } else if (!this.onGround() && this.jumpAnimation < 60) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump7;
        } else if (!this.onGround() && this.jumpAnimation < 72) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump8;
            // } else if (!this.onGround() && this.jumpAnimation < 42) {
            //     this.jumpAnimation += 1;
            //     return JUMPSPRITE.jump9;
        } else if (!this.onGround() && this.jumpAnimation < 92) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump10;
        } else if (!this.onGround() && this.jumpAnimation < 100) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump11;
        } else if (!this.onGround() && this.jumpAnimation < 108) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump12;
        } else if (!this.onGround() && this.jumpAnimation >= 108) {
            this.jumpAnimation = 0;
            return RUNSPRITE.run1;
            // } else if (this.sliding && this.onGround() && this.slideAnimation < 50) {
            //     this.slideAnimation += 1;
            //     return SLIDESPRITE.slide1;
        } else {
            this.slideAnimation = 0;
            this.jumpAnimation = 0
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
            left: this.position[0],
            right: this.position[0] + CONSTANTS.KAKASHI_WIDTH,
            top: this.position[1],
            bottom: this.position[1] + CONSTANTS.KAKASHI_HEIGHT
        };
    }

    collidesWith(obstacle) {
        let collision = false;
        // const _overlap = (obstacle) => {
        if (obstacle.position[0] + 50 > (this.position[0] + CONSTANTS.KAKASHI_WIDTH) || (obstacle.position[0] + 40) < this.position[0]) {
            return false;
        } else if
            (obstacle.position[1] > (this.position[1] + CONSTANTS.KAKASHI_HEIGHT) || (obstacle.position[1] + 82) < this.position[1]) {
            return false;
        } else {
            return true;
        };
    }
}

export default Kakashi;
