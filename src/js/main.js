"use strict"

import log from 'loglevel';
import Mainloop from 'mainloop.js';
import CanvasWrapper from './canvasWrapper';
import Model from './model';

window.onload = () => {
    let viewPort
    let viewPortWrapperElement
    let canvas

    let config = {
        speed: 10
    }

    initViewPort();
    const model = new Model();
    initComponents(config);


    //Játékloop
    config.mainloop = Mainloop.setMaxAllowedFPS(config.speed).setBegin(() => {}).setUpdate(() => {}).setDraw(() => {

    }).setEnd(() => {
        model.update();
        let tiles = model.getEntityList().board.getTilesAsArray();
        drawTiles(tiles);
        canvas.renderScene();
        canvas.clearScene();
    }).start();

    let colors = ['#E8E85C', '#ECA880', '#DCB468', '#ECA0A0', '#DC9CD0', '#C49CEC', '#A8A0EC', '#90B4EC', '#90CCE8', '#90E4C0', '#A4E4A4', '#A4E4A4', '#B4E490', '#B4E490', '#E8CC7C'];

    //TODO: This should be in a separate render module
    function drawTiles(tiles) {
        for (let i = 0; i < tiles.length; ++i) {
            if (tiles[i].status === 'SNAKE') {
                canvas.createRect(tiles[i].posX * 500 / 30, tiles[i].posY * 500 / 30, Math.ceil(500 / 30), Math.ceil(500 / 30), colors[i % colors.length]);
            } else if (tiles[i].status === 'PILL') {
                canvas.createCircle(tiles[i].posX * 500 / 30 + 500 / 60, tiles[i].posY * 500 / 30 + 500 / 60, 500 / 60, 'red');
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
        if (document.querySelectorAll('canvas').length === 0) {
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
    }

    function initComponents(config) {
        //speed selector
        let speedSelector = document.querySelector('#speed-selector');
        speedSelector.value = config.speed;
        speedSelector.addEventListener('input', function (event) {
            config.mainloop.setMaxAllowedFPS(speedSelector.value);
        });

        //dashboard
        let dashboard = document.querySelector('#dashboard');
        dashboard.style = "background-color: #d6c182; text-align: center; padding: 10px";

        //restart button
        let restartButton = document.querySelector('#restart-button');
        restartButton.addEventListener('click', function(event){
            model.reset();
        })

        let stopButton = document.querySelector('#stop-button');
        stopButton.addEventListener('click', function(event){
            config.mainloop.stop()
        })

        let startButton = document.querySelector('#start-button');
        startButton.addEventListener('click', function(event){
            config.mainloop.start()
        })
    }


}