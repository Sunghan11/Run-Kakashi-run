import {collision} from './collision';
import fireballSrc from "./images/fireball.png";

const CONSTANTS = {

}

const FIRESPRITE = {
    fire1: [0, 0, 70, 40],
    fire2: [0, 40, 70, 40],
    fire3: [0, 80, 70, 40],
    fire4: [0, 120, 70, 40]
}

class Fireball {
    constructor() {
        this.spriteSheet = new Image();
        this.spriteSheet.src = fireballSrc;
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
        ctx.clearRect(0, 0, 800, 300);
        const sprite = this.getFrame();
        ctx.drawImage(
            this.spriteSheet,
            sprite[0],
            sprite[1],
            sprite[2],
            sprite[3],
            this.position[0],
            this.position[1],
            sprite[2],
            sprite[3]
        );
    }
}

export default Fireball