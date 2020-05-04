import "./styles/index.css";
import RunKakashiRun from "./game";

document.addEventListener("DOMContentLoaded", () => {
    // document.body.classList.add("center");
    // const card = document.createElement("div");
    // card.classList.add("card", "center");
    // card.innerHTML = `<h2>${greeting} Run!</h2>`;
    // document.body.append(card);
    // const imgCard = document.createElement("div");
    // imgCard.classList.add("card", "center", "image-card");
    // document.body.appendChild(imgCard);

    const gameCanvas = document.getElementById('canvas');
    const canvasContext = gameCanvas.getContext('2d');

    const bgCanvas = document.getElementById('bg-canvas');
    const bgCtx = bgCanvas.getContext('2d');

    const treeCanvas = document.getElementById('tree-canvas');
    const treeCtx = treeCanvas.getContext('2d');

    const grassCanvas = document.getElementById('grass-canvas');
    const grassCtx = grassCanvas.getContext('2d');

    const game = new RunKakashiRun(canvasContext, gameCanvas, bgCtx, treeCtx, grassCtx
    );

});