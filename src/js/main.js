//'use strict'

//import log from 'loglevel';
import Mainloop from 'mainloop.js';
import CanvasWrapper from './canvasWrapper';
import Model from './model';
import strategies from './pathfinding-algorithms/index.js';

import config from '../config/config.json';


window.onload = () => {
    const model = new Model(config, strategies);
    const numberOfColumns = Number(config.boardConfig.width);
    const numberOfRows = Number(config.boardConfig.height);
    const viewPortWidth = 1280;
    const viewPortHeight = 720;
    const tileWidth = viewPortWidth / numberOfColumns;
    const tileHeight = viewPortHeight / numberOfRows;

    let viewPort = initViewPort(document.querySelector('#viewport-container'));
    let wrappedCanvas = new CanvasWrapper(viewPortWidth, viewPortHeight, viewPort, '2d');
    let mainloop;

    initComponents(config);


    //Játékloop
    mainloop = Mainloop.setUpdate(() => {
        model.update();
        updateStatScreen(model.runtimes)
    }).setDraw(() => {
        wrappedCanvas.clearScene();
        drawBoard(model);
        wrappedCanvas.renderScene()
    }).setSimulationTimestep(1000 / 15)

    let colors = ['#E8E85C', '#ECA880', '#DCB468', '#ECA0A0', '#DC9CD0', '#C49CEC', '#A8A0EC', '#90B4EC', '#90CCE8', '#90E4C0', '#A4E4A4', '#A4E4A4', '#B4E490', '#B4E490', '#E8CC7C'];

    //TODO: This should be in a separate render module
    function drawBoard(model) {
        let snakes = model.getEntityList().snakes;
        let pills = model.getEntityList().pills;

        for (let snake of snakes) {
            for (let element of snake.path) {
                wrappedCanvas.createRect(element.coordinates.x * tileWidth, element.coordinates.y * tileHeight, tileWidth / 2, tileHeight / 2, 'red');
            }
            for (let node of snake.body)
                wrappedCanvas.createRect(node.coordinates.x * tileWidth, node.coordinates.y * tileHeight, tileWidth, tileHeight, 'green');
        }
        for (let pill of pills) {
            wrappedCanvas.createCircle(pill.position.coordinates.x * tileHeight, pill.position.coordinates.y * tileHeight, tileHeight / 2);
        }
    }


    /*************************** METÓDUSOK ******************************/
    /********************************************************************/

    /**
     * Játék ablakának inicializálása
     */
    function initViewPort(hoistOn) {
        if (hoistOn == undefined || typeof hoistOn.appendChild != 'function') {
            throw new Error('Cannot hoist on given element!.');
        }

        let viewPort = document.createElement('canvas');
        viewPort.id = 'viewPort';
        viewPort.innerHTML = 'No canvas support :(';

        let viewPortWrapperElement = document.createElement('div');
        viewPortWrapperElement.id = 'viewPortWrapperElement';

        //Stílus
        viewPortWrapperElement.style.width = '100%';
        viewPortWrapperElement.style.textAlign = 'center';
        viewPort.style.display = 'inline';
        viewPort.style.border = 'solid 1px';

        //Hozzáadás a DOM-hoz
        viewPortWrapperElement.appendChild(viewPort);
        hoistOn.appendChild(viewPortWrapperElement);
        return viewPort;
    }

    function initComponents(config) {
        let snakes = model.getEntityList().snakes;

        //speed selector
        let speedSelector = document.querySelector('#speed-selector');
        speedSelector.value = Number(config.main.simulationSpeed);
        speedSelector.addEventListener('input', function (event) {
            mainloop.setSimulationTimestep(1000 / speedSelector.value);
        });

        //dashboard
        let dashboard = document.querySelector('#dashboard');
        dashboard.style = "background-color: #d6c182; text-align: center; padding: 10px";

        //restart button
        let restartButton = document.querySelector('#restart-button');
        restartButton.addEventListener('click', function (event) {
            model.reset();
        })

        //stop button
        let stopButton = document.querySelector('#stop-button');
        stopButton.addEventListener('click', function (event) {
            mainloop.stop()
        })

        //start button
        let startButton = document.querySelector('#start-button');
        startButton.addEventListener('click', function (event) {
            mainloop.start()
        })

        //stat screen
        let statScreen = document.querySelector('#statScreen');
        statScreen.style = "background-color: #d6c182; text-align: center; padding: 10px";
        statScreen.style.width = '300PX';
        statScreen.style.textAlign = 'center';
        let snakeStatScreen = document.createElement('div');
        snakeStatScreen.style.display = 'inline';
        snakeStatScreen.style.width = '100%';
        snakeStatScreen.id = 'snakeStatScreen';
        for (let snake of snakes) {
            //color
            let colorDisplay = document.createElement('div');
            colorDisplay.id = 'colorDisplay-' + snake.ID;
            let colorLabel = document.createElement('label');
            colorLabel.innerHTML = 'color:'
            let colorDisplayContent = document.createElement('p');
            colorDisplayContent.innerHTML = 'RED';
            colorDisplay.appendChild(colorLabel);
            colorDisplay.appendChild(colorDisplayContent);

            //score
            let scoreDisplay = document.createElement('div');
            scoreDisplay.id = 'scoreDisplay-' + snake.ID;
            let scoreLabel = document.createElement('label');
            scoreLabel.innerHTML = 'score:'
            let scoreDisplayContent = document.createElement('p');
            scoreDisplayContent.innerHTML = 'RED';
            scoreDisplay.appendChild(scoreLabel);
            scoreDisplay.appendChild(scoreDisplayContent);

            snakeStatScreen.appendChild(colorDisplay);
            snakeStatScreen.appendChild(scoreDisplay);
        }
        statScreen.appendChild(snakeStatScreen);
    }

    function updateStatScreen(stats) {
        let paragraph = document.querySelector('#innerStatScreenParagraph');
        for (let key of Object.keys(stats)) {
            paragraph.innerHTML = stats[key];
        }
    }


}