const CONSTANTS = {
    GRAVITY: 0.4,
    RUN_SPEED: 8,
    TERMINAL_VELOCITY: 12,
    SHEET_WIDTH: 270,
    SHEET_HEIGHT: 270,
};
//position, x, y, width, height
// const TILESHEET = {
//     frames: [new Frame],
//     frame_sets: []
// }

const sheetWidth = 330;
const sheetHeight = 220;


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
    jump7: [165,110, 55, 55],
    jump8: [220, 165, 55, 55],
    jump9: [0, 165, 55, 55],
    jump10: [55, 165, 55, 55, 55],
    jump11: [110, 165, 55, 55],
    jump12: [220, 165, 55, 55],
}

const canWidth = 800;
const canHeight = 300;

const POSESPRITE = {
    pose1: [0, 220, 55, 55],
    pose2: [55, 220, 55, 55],
    pose3: [110, 220, 55, 55],
    pose4: [165, 220, 55, 55],
}

setInterval(draw, 100);

export default class Kakashi {

    //constructor(startX, startY) {
    constructor(position) { //
        this.position = position;
        // this.runspeed = props.runspeed ? props.runspeed: 1;
        this.spriteSheet = new Image();
        this.spriteSheet.src = '../images/kakashi.png';

        // this.posX = startX;
        
        // this.posY = startY - this.height;
        // this.x = this.dimensions.width / 3;
        // this.y = this.dimensions.width / 4;
        this.vel = 0;
        this.image = new Image();
        this.image.src = '../images/kakashi.png';
        this.jumping = false;
        this.jumpHeight = false;
        this.stopped = false;
        this.jumpAnimation = 0;
        this.runAnimation = 0;
        this.poseAnimation = 0;
        this.jumpCount = 0; //
        
        this.currentFrame = 0;
        this.x = 0;
        this.y = 0;
        this.srcX;
        this.srcY;
        this.cols = 8;
        this.rows = 4;
        this.width = sheetWidth / this.cols;
        this.height = sheetHeight / this.rows;
        this.character = new Image();
        this.character.src = "../images/kakashi2.png";
        this.canvas = document.getElementById('canvas');
        this.canvas.width = canWidth;
        this.canvas.height = canHeight;
        this.ctx = canvas.getContext('2d');
        this.setInterval(function() {
            this.drawImage();
        }, 100);
    }

    updateFrame() {
        this.currentFrame = ++currentFrame % this.cols;

        this.srcX = this.currentFrame * this.width;
        this.srcY = 0;
        this.ctx.clearRect(x,y,width,height);
    }

    drawImage () {
        this.updateFrame();
        this.ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
    }

    jump() { //
        const initialSpeed = 12;
        if (this.jumping) {
            if (this.jumpCount === 0 || !this.onGround()) {
                this.position[1] -= initialSpeed - CONSTANTS.GRAVITY * this.jumpCount;
                this.jumpCount += 1;
            } else {
                this.position[1] = 210;
                this.jumpCount = 0;
                this.jumping = false;
            }
        }
    }



    onGround() {
        // return this.startY === posY
        return this.position[0] === 100 && this.position[1] >= 210;
    }
    // moveKakashi() {
    //     this.y += this.vel;
    // }

    running() {
        return this.poY
    }

    animate(ctx) {
        this.jump();
        this.drawKakashi(ctx);
    }

    toggleJump() {
        this.jumping = true;
    
    }


    getSprites() {
        if(this.gameOver && this.poseAnimation < 10) {
            this.poseAnimate += 1;
            return POSESPRITE.pose1;            
        } else if (this.gameOver && this.poseAnimation < 20) {
            this.poseAnimation += 1;
            return POSESPRITE.pose2;
        } else if (this.gameOver && this.poseAnimaton === 20) {
            this.poseAnimation = 0;
            return POSESPRITE.pose1;
        } else if (this.onGround && this.runAnimation < 5) {
            this.runAnimation += 1;
            return RUNSPRITE.run1;
        } else if (this.onGround && this.runAnimation < 10) {
            this.runAnimation += 1;
            return RUNSPRITE.run2;
        } else if (this.onGround && this.runAnimation < 15) {
            this.runAnimation += 1;
            return RUNSPRITE.run3;
        } else if (this.onGround && this.runAnimation < 20) {
            this.runAnimation += 1;
            return RUNSPRITE.run4;
        } else if (this.onGround && this.runAnimation < 25) {
            this.runAnimation += 1;
            return RUNSPRITE.run5;
        } else if (this.onGround && this.runAnimation < 30) {
            this.runAnimation += 1;
            return RUNSPRITE.run6;
        } else if (this.onGround && this.runAnimation === 30) {
            this.runAnimation = 0;
            return RUNSPRITE.run1;
        }else if (!this.onGround && this.jumpAnimation < 5) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump1;
        } else if (!this.onGround && this.jumpAnimation < 10) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump2;
        } else if (!this.onGround && this.jumpAnimation < 15) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump3;
        } else if (!this.onGround && this.jumpAnimation < 20) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump4;
        } else if (!this.onGround && this.jumpAnimation < 25) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump5;
        } else if (!this.onGround && this.jumpAnimation < 30) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump6;
        } else if (!this.onGround && this.jumpAnimation < 35) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump7;
        } else if (!this.onGround && this.jumpAnimation < 40) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump8;
        } else if (!this.onGround && this.jumpAnimation < 45) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump9;
        } else if (!this.onGround && this.jumpAnimation < 50) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump10;
        } else if (!this.onGround && this.jumpAnimation < 55) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump11;
        } else if (!this.onGround && this.jumpAnimation < 60) {
            this.jumpAnimation += 1;
            return JUMPSPRITE.jump12;
        } else {
            this.jumpAnimation = 0;
            return JUMPSPRITE.jump1; 
        }
    }

    // drawKakashi(ctx) {
    //     ctx.clearRect(0, 0, 800, 300);
    //     const sprite = this.getSprites();
    //     ctx.drawImage(
    //         this.spriteSheet,
    //         sprite[0],
    //         sprite[1],
    //         sprite[2],
    //         sprite[3],
    //     )
    // }

    draw() {
        updateFrame();
        ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
    }

    

    // update(ctx) {
    //     this.jump();
    //     this.drawKakashi(ctx);
    // }

    updateFrame() {
        currentFrame = ++currentFrame 
    }

}