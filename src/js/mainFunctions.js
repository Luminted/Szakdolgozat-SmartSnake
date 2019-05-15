export function initViewPort(hoistOn) {
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

export function initComponents(config, model, mainloop) {
    let snakes = model.getEntityList().snakes;

    //speed selector
    let speedSelector = document.querySelector('#speed-selector');
    speedSelector.value = Number(config.main.simulationSpeed);
    speedSelector.addEventListener('input', function (event) {
        model.simulationSpeed = speedSelector.value;
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
}

export function generateErrorMessage(errors){
    let errorMessage = errors[0].name + ': ' + errors[0].message;
    for(let i = 1; i < errors.length; i++){
        errorMessage = errors[i].name + ': ' + errors[i].message + '\n' + errorMessage;
    }
    return errorMessage;
}

export function drawScene(model, canvasWrapper, tileWidth, tileHeight) {
    let snakes = model.getEntityList().snakes;
    let pills = model.getEntityList().pills;
    let obstacles = model.getEntityList().board.obstacles;
    let pathZindex = 1;
    let pillZindex = 0;
    let snakeZindex = 2;
    let obstacleZindex = 4;

    for (let snake of snakes) {
        for (let element of snake.path) {
            let width = tileWidth / 2;
            let height = tileHeight / 2;
            let xOffset = width / 2;
            let yOffset = height / 2;
            let posX = element.coordinates.x * tileWidth + xOffset;
            let posY = element.coordinates.y * tileHeight + yOffset;
            canvasWrapper.createRect(posX, posY, width, height, snake.color, pathZindex, snakeZindex);
        }
        for (let node of snake.body) {
            let width = tileWidth;
            let height = tileHeight;
            let posX = node.coordinates.x * tileWidth;
            let posY = node.coordinates.y * tileHeight;

            canvasWrapper.createRect(posX, posY, width, height, snake.color);
        }
    }
    for (let pill of pills) {
        let radius = tileWidth / 2;
        let xOffset = tileWidth / 2;
        let yOffset = tileHeight / 2;
        let posX = pill.position.coordinates.x * tileWidth + xOffset;
        let posY = pill.position.coordinates.y * tileHeight + yOffset;

        canvasWrapper.createCircle(posX, posY, radius, pill.color, pillZindex);
    }

    for(let obstacle of obstacles){
        let width = tileWidth;
        let height = tileHeight;
        let posX = obstacle.coordinates.x * tileWidth;
        let posY = obstacle.coordinates.y * tileHeight;

        canvasWrapper.createRect(posX, posY, width, height, 'black', obstacleZindex); 
    }
}