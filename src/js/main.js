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
Mainloop.setMaxAllowedFPS(10).setBegin(() => {}).setUpdate(() => {}).setDraw(() => {

}).setEnd(() => {
    model.update();
    let tiles = model.getEntityList().board.getTilesAsArray();
    drawTiles(tiles);
    canvas.renderScene();
    canvas.clearScene();
}).start();

let colors = ['#E8E85C', '#DCB468', '#ECA880', '#ECA0A0', '#DC9CD0', '#C49CEC', '#A8A0EC', '#90B4EC', '#90CCE8', '#90E4C0', '#A4E4A4', '#A4E4A4', '#B4E490', '#B4E490', '#E8CC7C'];

//TODO: This should be in a separate render module
function drawTiles(tiles) {
    for (let i = 0; i < tiles.length; ++i) {
        if (tiles[i].status === 'SNAKE') {
            canvas.createRect(tiles[i].posX * 500 / 30, tiles[i].posY * 500 / 30, 500 / 30, 500 / 30, colors[i % colors.length]);
        } else if (tiles[i].status === 'PILL') {
            canvas.createRect(tiles[i].posX * 500 / 30, tiles[i].posY * 500 / 30, 500 / 30, 500 / 30, 'red');
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