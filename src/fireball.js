import {collision} from './collision';
import fireballSrc from "./images/fireball.png";

const CONSTANTS = {
    SPEED: 7,
    WARM_UP_SECONDS: 5,
    EDGE_BUFFER: 50,
}

const FIRESPRITE = {
    fire1: [0, 0, 70, 40],
    fire2: [0, 40, 70, 40],
    fire3: [0, 80, 70, 40],
    fire4: [0, 120, 70, 40]
}

class Fireball {
    constructor() {
        this.fireSprites = new Image();
        this.fireSprites.src = fireballSrc;
        this.fireAnimation = 0;
    }

    getFrame() {
        if(this.fireAnimation < 5) {
            this.fireAnimation += 1;
            return FIRESPRITE.fire1;
        } else if (this.fireAnimation < 10) {
            this.fireAnimation += 1;
            return FIRESPRITE.fire2;
        } else if (this.fireAnimation < 15) {
            this.fireAnimation += 1;
            return FIRESPRITE.fire3;
        } else if (this.fireAnimation < 20) {
            this.fireAnimation += 1;
            return FIRESPRITE.fire4;
        } else {
            this.fireAnimation = 0;
            return FIRESPRITE.fire1;
        }
    }

    draw(ctx) {
        ctx.beginPath();
      
        console.log('fireballl');
        // ctx.clearRect(0, 0, 800, 300);
        const sprite = this.getFrame();
        ctx.drawImage(
            this.fireSprites, //image
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

    move() {
        this.position[0] -= CONSTANTS.SPEED;
    }

    update(ctx) {
        this.draw(ctx);
        this.move();
    }
}

export default Fireball