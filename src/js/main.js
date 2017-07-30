"use strict"

import Mainloop from 'mainloop.js';
import {canvasWrapper} from './canvasWrapper';



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

    //Hozzáadás a DOM-hoz
    viewPortWrapperElement.appendChild(viewPort);
    document.querySelector(hoistOn).appendChild(viewPortWrapperElement);
    canvas = new canvasWrapper(500, 500, 'viewPort', '2d');

}
initViewPort();
    let blue = canvas.createRect(50, 50, 500, 200, 'blue');
    let red = canvas.createRect(100, 100, 200, 200, 'red');

console.log(Mainloop);
Mainloop.setUpdate(function(){
    ++blue.posX; 
    ++blue.posY;
    red.width = red.width +1;  
    red.height = red.height +1;  
}).setDraw(() => canvas.renderScene()).start();