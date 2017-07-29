"use strict"

import Mainloop from 'mainloop.js';

/**
 * Játék ablakának inicializálása
 */
function initViewPort(hoistOn = 'body', viewPortX = 500, viewPortY = 500) {

    const viewPort = document.createElement('canvas');
    viewPort.id = 'viewPort';
    viewPort.innerHTML = 'No canvas support :(';
    const viewPortWrapper = document.createElement('div');
    viewPortWrapper.id = 'viewPortWrapper';

    //Stílus
    viewPortWrapper.style.width = '100%';
    viewPortWrapper.style.textAlign = 'center';
    viewPort.style.width = `${viewPortX}px`;
    viewPort.style.height = `${viewPortY}px`;
    viewPort.style.display = 'inline';


    viewPortWrapper.appendChild(viewPort);
    document.querySelector(hoistOn).appendChild(viewPortWrapper);
}

initViewPort();