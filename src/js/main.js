import Mainloop from 'mainloop.js';
import CanvasWrapper from './canvasWrapper';
import Model from './model';
import strategies from './pathfinding-algorithms/index.js';

import config from '../config/config.json';
import {
    initViewPort,
    drawScene,
    initComponents,
    generateErrorMessage
} from './mainFunctions';


window.onload = main;

function main() {
    const model = new Model(config, strategies);
    console.log(model.errorBuffer)
    let errors = model.errorBuffer || [];
    if (errors.length > 0) {
        let errorMessage = generateErrorMessage(errors);
        console.log(errorMessage);
        window.alert(errorMessage);
    }
    const numberOfColumns = Number(config.boardConfig.width);
    const numberOfRows = Number(config.boardConfig.height);
    const viewPortWidth = 720;
    const viewPortHeight = 720;
    const tileWidth = viewPortWidth / numberOfColumns;
    const tileHeight = viewPortHeight / numberOfRows;
    let wrappedCanvas;

    let viewPort = initViewPort(document.querySelector('#viewport-container'));
    wrappedCanvas = new CanvasWrapper(viewPort, viewPortWidth, viewPortHeight);

    let mainloop = Mainloop.setUpdate(() => {
        model.update();
    }).setDraw(() => {
        wrappedCanvas.clearScene();
        drawScene(model,wrappedCanvas, tileWidth, tileHeight);
        wrappedCanvas.renderScene()
    }).setSimulationTimestep(1000 / model.simulationSpeed);


    initComponents(config, model, mainloop);
    drawScene(model, wrappedCanvas, tileWidth, tileHeight);
    wrappedCanvas.renderScene();
}