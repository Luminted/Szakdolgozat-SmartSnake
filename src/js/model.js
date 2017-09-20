import Board from './board.js';
import Snake from './snake.js';
import Pill from './pill.js';
import { calculateStepCollisionType } from './physics';

import cloneDeep from 'lodash/cloneDeep';

const baseWidth = 30;
const baseHeight = 30;



const _snake = new Snake(10);
const _board = new Board();
const _pill = new Pill();
let tmpDirection = _snake.getDirection();

function moveSnake() {
    let nextDirection = _snake.handleInput(tmpDirection);
    _snake.setDirection(nextDirection);
    _snake.calculateVelocity();
    const collision = calculateStepCollisionType(_snake, _board);
    if (collision === 'WALL_COLLISION' || collision === 'BODY_COLLISION') {

    } else if (collision === 'PILL_COLLISION') {
        let nourishment = _pill.getNourishment();
        _snake.eat(nourishment);
        let dimensions = _board.getDimensions();
        _pill.changePositionRandomly(dimensions.dimX, dimensions.dimY);
        _snake.move();
        putSnakeOnBoard(_snake, _board);
    } else {
        _snake.move();
        putSnakeOnBoard(_snake, _board);
    }
    return collision;
}

function getBoardStatus() {
    let tiles = [];
    for (let i = 0; i < 30; ++i) {
        for (let j = 0; j < 30; ++j) {
            tiles.push(_board.getTileByPosition(i, j));
        }
    }
    return tiles;
}

function putPillOnBoard() {
    let position = _pill.getPosition();
    _board.getTileByPosition(position.posX, position.posY).status = 'PILL';
}


function putSnakeOnBoard(snake, board) {
    const snakeBody = snake.getBody();
    //TODO: This is not a nice way to do this. Deepcopy a reference to the board instead
    for (let i = 0; i < 30; ++i) {
        for (let j = 0; j < 30; ++j) {
            board.getTileByPosition(i, j).status = 'EMPTY';
        }
    }
    for (let part of snakeBody) {
        let bodyPosX = part.posX;
        let bodyPosY = part.posY;
        let correspondingTile = board.getTileByPosition(bodyPosX, bodyPosY);
        correspondingTile.status = 'SNAKE';
    }
}

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'ArrowLeft':
            event.preventDefault();
            tmpDirection = _snake.handleInput('LEFT');
            break;
        case 'ArrowUp':
            event.preventDefault();
            tmpDirection = _snake.handleInput('UP');
            break;
        case 'ArrowRight':
            event.preventDefault();
            tmpDirection = _snake.handleInput('RIGHT');
            break;
        case 'ArrowDown':
            event.preventDefault();
            tmpDirection = _snake.handleInput('DOWN');
            break;
    }
    console.log(_snake._direction);
}, false)

export {
    moveSnake,
    getBoardStatus,
    putPillOnBoard,
}