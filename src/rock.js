import rocksSrc from "./images/rocks.png";

const CONSTANTS = {
    SPEED: 5
}

const ROCK_SPRITES = {
    rock1: [0,0,75,75],
    rock2: [75,0,75,75],
    rock3: [150,0,75,75]
}


class Rock {
    constructor() {
        this.rocks = new Image();
        this.rocks.src = rocksSrc;
        this.num = Math.floor(Math.random() * 3) + 1


    }

    getRock() {
        if (this.num === 1) {
            return ROCK_SPRITES.rock1;
        } else if (this.num === 2) {
            return ROCK_SPRITES.rock2;
        } else {
            return ROCK_SPRITES.rock3;
        }
    }

    draw(ctx) {
        ctx.beginPath();

        console.log('rock');
        // ctx.clearRect(0, 0, 800, 300);
        const sprite = this.getRock();
        ctx.drawImage(
            this.rocks, //image
            sprite[0], //sx
            sprite[1], //sy
            sprite[2], //sWidth
            sprite[3], //sHeight
            this.position[0], //dx
            this.position[1], //dy
            // this.x,
            // this.y,
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

export default Rock;