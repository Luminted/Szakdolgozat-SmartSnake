"use strict"

import Mainloop from 'mainloop.js';
import CanvasWrapper from './canvasWrapper';
import {
    moveSnake,
    getBoardStatus,
    putPillOnBoard,
    checkHeadCollision
} from './model';

let viewPort
let viewPortWrapperElement
let canvas


initViewPort();


//Játékloop
Mainloop.setMaxAllowedFPS(3).setBegin(() => {}).setUpdate(() => {}).setDraw(() => {

}).setEnd(() => {
    let collision = checkHeadCollision();
    console.log(collision)
    if(collision === 'WALL_COLLISION'){
        console.log('GAME OVER')
    }else{
    moveSnake();
    putPillOnBoard();
    let tiles = getBoardStatus();
    drawTiles(tiles);
    canvas.renderScene();
    canvas.clearScene();
    }
}).start();


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
    console.info('Initiating Viewport');
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

    console.info('Viewport initiated');
}