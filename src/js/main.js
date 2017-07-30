"use strict"

import Mainloop from 'mainloop.js';
import CanvasWrapper from './canvasWrapper';
import {moveSnake, init} from './model';



let viewPort
let viewPortWrapperElement
let canvas

/**
 * Játék ablakának inicializálása
 */
function initViewPort(hoistOn = 'body', viewPortX = 500, viewPortY = 500) {

    viewPort = document.createElement('canvas');
    viewPort.id = 'viewPort';
    viewPort.innerHTML = 'No canvas support :(';
    viewPortWrapperElement = document.createElement('div');
    viewPortWrapperElement.id = 'viewPortWrapperElement';

    //Stílus
    viewPortWrapperElement.style.width = '100%';
    viewPortWrapperElement.style.textAlign = 'center';
    viewPort.style.display = 'inline';
    viewPort.style.border =  'solid 1px';

    //Hozzáadás a DOM-hoz
    viewPortWrapperElement.appendChild(viewPort);
    document.querySelector(hoistOn).appendChild(viewPortWrapperElement);
    canvas = new CanvasWrapper(500, 500, 'viewPort', '2d');

}
initViewPort();
    //let blue = canvas.createRect(50, 50, 500, 200, 'blue');
    let red = canvas.createRect(10 * 500/30, 10 * 500/30, 500/30, 500/30, 'red');
    let green = canvas.createRect(0, 0, 500/30, 500/30, 'green');
    console.log(green);

let gX = 0;
let gY = 0;
let rX = 10;
let rY = 10;
init();
Mainloop.setMaxAllowedFPS(10).setUpdate(() => {

}).setDraw(() => canvas.renderScene()).setEnd(() => {
    if(gY === 0 && gX >= 0 && gX < 29){
        ++gX;
    }
    if(gX === 29 && gY >= 0 && gY < 29){
        ++gY;
    }
    if(gY === 29 && gX <= 29 && gX > 0){
        --gX;
    }
    if(gX === 0 && gY <= 29 && gY > 0){
        --gY;
    }

    if(rX === 10 && rY >= 10 && rY < 19){
        ++rY;
    }
    if(rY === 19 && rX >= 10 && rX < 19){
        ++rX;
    }
    if(rX === 19 && rY <= 19 && rY > 10){
        --rY;
    }
    if(rY === 10 && rX <= 19 && rX > 10){
        --rX;
    }
    console.log('x: ',rX);
    console.log('y: ', rY);

    green.posX = gX * (500 / 30);
    green.posY = gY * (500 / 30);
    red.posX = rX * (500 / 30);
    red.posY = rY * (500 / 30);
    
}).start();
