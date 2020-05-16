import Kakashi from './kakashi';
import Background from './background';
import Score from './score';
import { Menu } from './menu';
import backgroundWaterSrc from './images/backgroundWater.jpg';
import darkTreesSrc from './images/darkTrees.png';
import grassSrc from './images/grass.png';
import Fireball from './fireball';
import Rock from './rock';


class RunKakashiRun {
    constructor(ctx, gameCanvas, bgCtx, treeCtx, grassCtx) {
        this.ctx = ctx;
        this.gameCanvas = gameCanvas;
        this.kakashi = new Kakashi;
        this.fireball = new Fireball;
        this.fireball2 = new Fireball;
        this.fireball3 = new Fireball;
        this.rock = new Rock;
        this.score = new Score(1);
        this.jump = this.jump.bind(this);
        this.slide = this.slide.bind(this);
        this.draw = this.draw.bind(this);
        this.background = this.createBackground(bgCtx, treeCtx, grassCtx);
        this.setButtonListeners();
        this.restart = this.restart.bind(this);
        this.obstacles = [];

        

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
        bgImage.src = backgroundWaterSrc;
        this.bg = new Background(bgCtx, bgImage, -35, 1400, 1);

        const treeImage = new Image();
        treeImage.src = darkTreesSrc;
        this.tree = new Background(treeCtx, treeImage, 115, 400, 3);

        const grassImage = new Image();
        grassImage.src = grassSrc;
        this.grass = new Background(grassCtx, grassImage, 263, 400, 5);
    }

    
    generateObstacles() {
        while (this.obstacles.length < 2) {  
            this.createFireball();
            this.createRock();
            // this.obstacles.shift();
        }
        // this.createFireball(this.generateObstaclesSpacing())
    }

    generateObstaclesSpacing() {
        return Math.floor(Math.random() * 500 + 150);
    }

    eachObstacle(callback) {
        this.obstacles.forEach(callback.bind(this));
    }
    

    createFireball() {
        this.fireball = null;
        this.fireball2 = null;
        this.fireball3 = null;
        // this.fireballs = [];
        this.fireball = new Fireball();
        this.fireball2 = new Fireball();
        this.fireball3 = new Fireball();
        this.fireball.position = [900, 190];
        this.fireball2.position = [900, 100];
        this.fireball3.position = [900, 145];
        // this.fireball.position = [1000, 190];
        // this.fireball2 = new Fireball(1000, 100);
        // this.fireballs.push(this.fireball);
        // this.fireballs.push(this.fireball2);
        this.obstacles.push('fireball')
        if (this.fireball.position[0] < 0) {
            this.obstacles.shift();
        }
        

        return this.fireball;
    }

    createRock() {
        this.rock = new Rock();
        this.rock.position = [1100,195];
    }

    restart() {
        this.kakashi.restart();
        this.gameOver = false;

        this.score = 0;
        this.kakashi = new Kakashi;
        this.rock = new Rock;
        this.fireball = new Fireball;
        this.background = new Background;

        this.draw();
    }

    gameOver() {
        return (
            this.background.collidesWith(this.kakashi)
        )
    }

    start() {
        document.getElementById('canvas').focus();
        this.gamePlaying = true;
        this.gameOver = false;
        this.score.score = 0;
        this.kakashi.position = [100, 220];
        // this.createFireball();
        this.createRock();
        this.generateObstacles();
     
        // this.fireball.position = [1000,190];
        // this.fireball2.position = [1000, 100];
        // this.fireball3.position = [970, 145];
        this.draw();
    }

    gameStop() {
        this.gameOver = true;
    }

    draw() {
        if (!this.gameOver) {
            requestAnimationFrame(this.draw);
            this.kakashi.update(this.ctx);
            this.score.drawScore(this.ctx);
            this.bg.draw();
            this.tree.draw();
            this.grass.draw();
            
            this.fireball.update(this.ctx);
            this.fireball2.update(this.ctx);
            this.fireball3.update(this.ctx);
            this.rock.update(this.ctx);
            if (this.obstacles.length < 2) {
                this.generateObstacles()
            }
            // this.grass.drawRocks();
            // this.grass.moveRocks();
            // this.fireballs.forEach((fireball, idx) => {
            //     fireball.animate(this.ctx);
            //     if (fireball.position[0] < -200) {
            //         this.fireballs.splice(idx, 1)
            //     }
            //     if (this.kakashi.collidesWith(rock, firebal)) {
            //         this.gameStop();
            //     }
            // })
            // this.createFireball();
            // this.createRock();
        } else {
            alert(this.score);
            this.restart();
        }

        // this.background.passedRock();
    }
}

export default RunKakashiRun;
