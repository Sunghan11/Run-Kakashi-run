import rocksSrc from "./images/rocks.png";

const CONSTANTS = {
    SPEED: 2.5,
    OBJECT_WIDTH: 75, //rock width
    OBJECT_HEIGHT: 75 //rock height
}

const ROCK_SPRITES = {
    rock1: [0, 0, 75, 75],
    rock2: [75, 0, 75, 75],
    rock3: [150, 0, 75, 75]
}


class Rock {
    constructor(props) {
        this.rocks = new Image();
        this.rocks.src = rocksSrc;
        this.num = Math.floor(Math.random() * 3) + 1;
        this.position = props.pos;

        this.bounds.bind(this);
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

    bounds() {
        return {
            left: this.position[0],
            right: this.position[0] + CONSTANTS.OBJECT_WIDTH,
            top: this.position[1],
            bottom: this.position[1] + CONSTANTS.OBJECT_HEIGHT
        }
    }

    move() {
        this.position[0] -= CONSTANTS.SPEED;
        // if (this.position[0] === -20) {
        //     this.position[0] = 900;
        // }
    }

    update(ctx) {
        this.draw(ctx);
        this.move();
    }
}

export default Rock;