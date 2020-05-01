import "./styles/index.scss";
import RunKakashiRun from "./game";

const testObj = {
    key1: "hi",
    key2: {
        key3: "Run Kakashi",
    },
};

const greeting = testObj?.key2?.key3 || testObj.key1;
document.addEventListener("DOMContentLoaded", () => {
    // document.body.classList.add("center");
    // const card = document.createElement("div");
    // card.classList.add("card", "center");
    // card.innerHTML = `<h2>${greeting} Run!</h2>`;
    // document.body.append(card);
    // const imgCard = document.createElement("div");
    // imgCard.classList.add("card", "center", "image-card");
    // document.body.appendChild(imgCard);


    const canvas = document.getElementById('game-kakashi');
    const canvasCtx = canvas.getContext('2d');

    const bgCanvas = document.getElementById('game-background');
    const bgCtx = bgCanvas.getContext('2d');
    // const game = new RunKakashiRun(canvas);
    const game = new RunKakashiRun(canvasCtx, canvas, bgCtx)

    game.openMenu();
    

});