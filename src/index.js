import "./styles/index.css";
import RunKakashiRun from "./game";

document.addEventListener("DOMContentLoaded", () => {

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