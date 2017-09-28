"use strict"

import log from 'loglevel';
import Mainloop from 'mainloop.js';
import CanvasWrapper from './canvasWrapper';
import Model from './model';

let viewPort
let viewPortWrapperElement
let canvas


initViewPort();
const model = new Model();

//Játékloop
Mainloop.setMaxAllowedFPS(10).setBegin(() => { }).setUpdate(() => { }).setDraw(() => {

}).setEnd(() => {
    model.update();
    let tiles = model.getEntityList().board.getTilesAsArray();
    drawTiles(tiles);
    canvas.renderScene();
    canvas.clearScene();
}).start();

//TODO: This should be in a separate render module
function drawTiles(tiles) {
    for (let tile of tiles) {
        if (tile.status === 'SNAKE') {
            canvas.createRect(tile.posX * 500 / 30, tile.posY * 500 / 30, 500 / 30, 500 / 30);
        } else if (tile.status === 'PILL') {
            canvas.createRect(tile.posX * 500 / 30, tile.posY * 500 / 30, 500 / 30, 500 / 30, 'red');
        }
    }
}


/*************************** METÓDUSOK ******************************/
/********************************************************************/

/**
 * Játék ablakának inicializálása
 */
function initViewPort(hoistOn = 'viewport-container', viewPortX = 500, viewPortY = 500) {
    log.info('Initiating Viewport');
    viewPort = document.createElement('canvas');
    viewPort.id = 'viewPort';
    viewPort.innerHTML = 'No canvas support :(';
    viewPortWrapperElement = document.createElement('div');
    viewPortWrapperElement.id = 'viewPortWrapperElement';

    //Stílus
    viewPortWrapperElement.style.width = '100%';
    viewPortWrapperElement.style.textAlign = 'center';
    viewPort.style.display = 'inline';
    viewPort.style.border = 'solid 1px';

    //Hozzáadás a DOM-hoz
    viewPortWrapperElement.appendChild(viewPort);
    document.getElementById(hoistOn).appendChild(viewPortWrapperElement);
    canvas = new CanvasWrapper(500, 500, 'viewPort', '2d');

    log.info('Viewport initiated');
}