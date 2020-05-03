const CONSTANTS = {
    // FIRE_SPEED: 3,
    ROCK_SPEED: 2,
    WARM_UP_SECONDS: 1,
    ROCK_SPACING: Math.floor(Math.random() * 64 + 48),
    GROUND_HEIGHT: 30
}
    
class Background {
    constructor(ctx, image, posY, imgWidth, speed) {
        this.image = image;
        this.speed = speed;
        this.x = 0;
        this.y = posY;
        this.imgWidth = imgWidth;
        this.ctx = ctx;

        // this.rocks = [
        //     this.randomRock(firstRockDistance),
        //     this.randomRock(firstRockDistance + CONSTANTS.ROCK_SPACING),
        //     this.randomRock(firstRockDistance + (CONSTANTS.ROCK_SPACING * 2)),
        // ];
    }

    // randomRock(x) {
    //     const rock = {
    //         left: x,
    //         right: CONSTANTS.ROCK_WIDTH + x,
    //         bottom: 30,
    //         passed: false
    //     }
    //     return rock;
    // }

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
        this.scrollingBg();
    }

    scrollingBg() {
        this.x -= this.speed;
    }

}

export default Background;


