class Score {
    constructor() {
        this.score = 0;
        this.highScore = 0;
    }

    drawScore(ctx) {
        let score = `Score: ${this.score} / ${this.highScore}`;
        ctx.font = "16px Arial";
        ctx.strokeText(score, 640, 40);
        ctx.fillText(score, 640, 40);
        ctx.fillStyle = 'orange';
        ctx.lineWidth = 3;
        this.countScore();
        this.getHighScore();
    }

    countScore() {
        this.score += 1;
    }

    getHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
        return this.highScore;
    }
}

module.exports = Score;
