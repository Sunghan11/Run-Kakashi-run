import Kakashi from "./kakashi";
import Background from "./background";

export default class RunKakashiRun {
    constructor(canvasCtx, canvas, bgCtx) {
        // document.getElementById('game-kakashi').focus();
        this.ctx = canvasCtx;
        this.canvas = canvas;
        // this.dimensions = { width: canvas.width, height: canvas.height};
        // this.registerEvents();
        this.kakashi = new Kakashi([100, 210]);
        // this.restart();
        this.loadBackground(bgCtx);
        // this.gamePlaying = true;
        // this.gameOver = false;
        // this.kakashi.position [100,210]
        this.restart = this.restart.bind(this);
        this.draw = this.draw.bind(this);
        this.jump = this.jump.bind(this);

    }

    restart() {
        this.running = false;
        this.kakashi = new Kakashi(this.dimensions);
        this.start();
        // this.background = new Ba
    }

    setButtonListeners() {
        this.canvas.addEventListener('keydown', this.jump);
        this.canvas.addEventListener('keydown', this.restart);
    }

    loadBackground(bgCtx) {
        const backgroundImage = new Image();
        backgroundImage.src = '../images/background.png';
        this.background = new Background(bgCtx, backgroundImage, .8, 800, -35)
    }

    start() {
        document.getElementById('game-kakashi').focus();
        this.kakashi.position = [100,210];
        this.draw();
    }

    openMenu() {
        this.score.setScore();
    }

    jump(e) {
        if(e.code === 'Space' && this.gamePlaying) {
            e.preventDefault();
            if (!this.gameOver)
            this.player.toggleJump();
        }
    }

    draw() {
        if (!this.gameOver) {
            requestAnimationFrame(this.draw);
            this.kakashi.animate(this.ctx);
            this.background.drawBackground();
        }
    }



}