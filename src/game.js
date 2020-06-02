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
        this.kakashi = new Kakashi({ pos: [100, 220] });
        // this.fireball = new Fireball;
        // this.fireball2 = new Fireball;
        // this.fireball3 = new Fireball;
        // this.rock = new Rock;
        this.score = new Score(1);
        this.jump = this.jump.bind(this);
        this.slide = this.slide.bind(this);
        this.draw = this.draw.bind(this);
        this.background = this.createBackground(bgCtx, treeCtx, grassCtx);
        this.addListeners();
        this.restartGame = this.restartGame.bind(this);
        this.start = this.start.bind(this);
        // this.obstacles = [];
        // this.fireballsArr = [];
        // this.rocksArr = [];
        // this.fireballs = 0;
        // this.rocks = 0;
        // this.maxObstacles = 3;
        // this.spawnTime = 70;
        // this.spawnCount = 0;
        // this.fireballSpawnCount = 0;
        // this.fireballSpawnTime = 140;



        Menu.menuButtons(this);
    }



    jump(event) {
        if ((event.code === 'Space' || event.code === 'KeyW' || event.code === 'ArrowUp') && this.gamePlaying) {
            event.preventDefault();
            if (!this.gameOver) {
                this.kakashi.toggleJump();
            }
        }
    }

    slide(event) {
        if ((event.code === 'ControlLeft' || event.code === 'KeyS' || event.code === 'ArrowDown') && this.gamePlaying) {
            event.preventDefault();
            if (!this.gameOver) {
                this.kakashi.toggleSlide();
            }
        }
    }


    addListeners() {
        this.gameCanvas.addEventListener('keydown', this.jump);
        this.gameCanvas.addEventListener('keydown', this.slide);
        // this.gameCanvas.addEventListener('keydown', this.restartGame);
        this.gameCanvas.addEventListener('keydown', e => {
            if (e.code === 'KeyR' && this.canRestart) {
                e.preventDefault();
                this.start();
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

    generateObstaclesSpacing() {
        return Math.floor(Math.random() * 500 + 150);
    }

    eachObstacle(callback) {
        this.obstacles.forEach(callback.bind(this));
    }


    createFireballs() {
        if (this.fireballsArr.length < this.maxObstacles && this.fireballSpawnCount === 0) {
            let fb1 = new Fireball({ pos: [900, 190] });
            let fb2 = new Fireball({ pos: [900, 100] });
            let fb3 = new Fireball({ pos: [900, 145] });
            this.fireballsArr.push([fb1, fb2, fb3]);
            this.fireballSpawnCount++;
        } else if (this.fireballSpawnCount === 200) {
            this.fireballSpawnCount = 0;
        } else {
            this.fireballSpawnCount++;
        }
    }

    createRocks() {
        // let rock = null;
        if (this.rocksArr.length < this.maxObstacles && this.spawnCount === 0) {
            let rock = new Rock({ pos: [(this.generateObstaclesSpacing() + 800), 195] });
            // rock.position = [this.generateObstaclesSpacing() + 800, 195];
            this.rocksArr.push(rock);
            console.log("spawn");
            // this.rocks += 1;
            this.spawnCount++;
        } else if (this.spawnCount === 150) {
            // this.rocksArr = [];
            this.spawnCount = 0;
        } else {
            this.spawnCount++;
        }
    }

    start() {
        document.getElementById('canvas').focus();
        this.gamePlaying = true;
        this.canRestart = false;
        this.gameOver = false;
        this.score.score = 0;
        this.kakashi.position = [100, 220];
        this.obstacles = [];
        this.rocksArr = [];
        this.fireballsArr = [];
        this.fireballs = 0;
        this.rocks = 0;
        this.maxObstacles = 3;
        this.spawnTime = 70;
        this.spawnCount = 0;
        this.fireballSpawnCount = 0;
        this.fireballSpawnTime = 140;
        // document.getElementById('game-over-canvas');

        this.draw();
    }

    gameOverDraw() {

        var gradient = ctx.createLinearGradient(0, 0, 800, 0);
        gradient.addColorStop("0", "#66ccff");
        gradient.addColorStop("0.5", "#ffcc66");
        gradient.addColorStop("1.0", "#ffcc66");
        this.ctx.font = '48px Arial';
        this.ctx.fillStyle = "red";
        this.ctx.lineWidth = 2;
        this.ctx.fillText('GAME OVER', 200, 50);
        this.ctx.strokeText('GAME OVER', 200, 50);
        this.ctx.font = '30px Arial';
        this.ctx.fillStyle = gradient;
        this.ctx.lineWidth = 2;
        this.ctx.strokeText("Press 'R' to run again", 200, 100);
        this.ctx.fillText("Press 'R' to run again", 200, 100);
    }

    gameStop() {
        this.gameOver = true;
        this.gamePlaing = false;
        this.canRestart = true;
        this.gameOverDraw();

    }

    restartGame(event) {
        if (event.code === 'KeyR') {
            event.preventDefault();
            // if (this.canRestart ) {
            //     console.log("r pressed")
            this.start();
            // }
        }
    }

    draw() {
        if (!this.gameOver) {
            requestAnimationFrame(this.draw);
            this.kakashi.update(this.ctx);
            this.score.drawScore(this.ctx);
            this.bg.draw();
            this.tree.draw();
            this.grass.draw();
            this.createRocks();
            this.createFireballs();


            // this.fireball.update(this.ctx);
            // this.fireball2.update(this.ctx);
            // this.fireball3.update(this.ctx);
            // this.rock.update(this.ctx);
            let idx = null;
            this.rocksArr.forEach((rock, i) => {
                rock.update(this.ctx);
                // console.log(this.kakashi.position[0]);
                // console.log(rock.position[0]);
                if (rock.position[0] < -300) {
                    // this.rocksArr.splice(0, 1);
                    idx = i;
                    // console.log("rock spawned");
                }
                if (this.kakashi.collidesWith(rock) === true) {
                    // console.log("hit")
                    this.gameStop();
                }
            });
            if (idx !== null) {
                // console.log("rock removed")
                this.rocksArr.splice(idx, 1);
            }

            let fireIdx = null;
            this.fireballsArr.forEach((fireball, i) => {
                fireball[0].update(this.ctx);
                fireball[1].update(this.ctx);
                fireball[2].update(this.ctx);
                if (fireball[0].position[0] < -300) {
                    fireIdx = i;
                    // console.log("fireball spawned");
                }
                if (this.kakashi.collidesWith(fireball[2])) {
                    this.gameStop();
                }
                if (this.kakashi.collidesWith(fireball[1])) {
                    this.gameStop();
                }
            });
            if (fireIdx !== null) {
                // console.log("fireball removed")
                this.fireballsArr.splice(fireIdx, 1);
            }
        }
    }
}

export default RunKakashiRun;
