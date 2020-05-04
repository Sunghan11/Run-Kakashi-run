import Kakashi from './kakashi';
import Background from './background';
import Score from './score';
import { Menu } from './menu';


class RunKakashiRun {
    constructor(ctx, gameCanvas, bgCtx, treeCtx, grassCtx) {
        this.ctx = ctx;
        this.gameCanvas = gameCanvas;
        this.kakashi = new Kakashi({ position: [100, 220] });
        this.obstacles = [];
        this.score = new Score(1);
        this.muteMusic = false;

        this.jump = this.jump.bind(this);
        this.slide = this.slide.bind(this);
        this.draw = this.draw.bind(this);
        this.createBackground(bgCtx, treeCtx, grassCtx);
        this.setButtonListeners();
        // this.restart = this.restart.bind(this);

        Menu.menuButtons(this);
    }



    jump(event) {
        if ((event.code === 'Space' || event.code === 'KeyW' || event.code === 'ArrowUp') && this.gamePlaying) {
            event.preventDefault();
            this.kakashi.toggleJump();
        }
    }

    slide(event) {
        if ((event.code === 'ControlLeft' || event.code === 'KeyS' || event.code === 'ArrowDown') && this.gamePlaying) {
            event.preventDefault();
            this.kakashi.toggleSlide();
        }
    }


    setButtonListeners() {
        this.gameCanvas.addEventListener('keydown', this.jump);
        this.gameCanvas.addEventListener('keydown', this.slide);
        this.gameCanvas.addEventListener('keydown', this.restart);
        this.gameCanvas.addEventListener('keydown', e => {
            if (e.code === 'Escape' && this.gamePlaying) {
                e.preventDefault();
            }
        })
    }

    createBackground(bgCtx, treeCtx, grassCtx) {
        const bgImage = new Image();
        bgImage.src = '../images/backgroundWater.jpg';
        this.bg = new Background(bgCtx, bgImage, -35, 1400, 1);

        const treeImage = new Image();
        treeImage.src = '../images/darkTrees.png';
        this.tree = new Background(treeCtx, treeImage, 115, 400, 3);

        const grassImage = new Image();
        grassImage.src = '../images/grass.png';
        this.grass = new Background(grassCtx, grassImage, 263, 400, 5);


    }

    restart() {
        this.gamePlaying = false;
        this.score = 0;
        this.kakashi = new Kakashi()
    }

    gameOver() {
        return (
            this.gameCanvas.collidesWith(this.kakashi.bounds())
        )
    }

    start() {
        document.getElementById('canvas').focus();
        this.gamePlaying = true;
        this.gameOver = false;
        this.score.score = 0;
        this.kakashi.position = [100, 220];
        this.draw();
    }

    draw() {
        if (!this.gameOver) {
            requestAnimationFrame(this.draw);
            this.kakashi.update(this.ctx);
            this.score.drawScore(this.ctx);
            this.bg.draw();
            this.tree.draw();
            this.grass.draw();
            this.grass.drawRocks();
            this.grass.moveRocks();
        }
    }
}

export default RunKakashiRun;
