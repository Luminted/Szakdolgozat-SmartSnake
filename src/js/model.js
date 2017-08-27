import Board from './board.js'
import Snake from './snake.js'
import cloneDeep from 'lodash/cloneDeep'


const _snake = new Snake();
const _board = new Board();

function moveSnake() {
    _snake.move();
    putSnakeOnBoard(_snake, _board);
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

document.addEventListener('keydown', function(event){
    event.preventDefault();
    switch(event.key){
        case 'ArrowLeft':
            _snake.setDirection('LEFT');
            break;
        case 'ArrowUp':
            _snake.setDirection('UP');
            break;
        case 'ArrowRight':
            _snake.setDirection('RIGHT');
            break;
        case 'ArrowDown':
            _snake.setDirection('DOWN');
            break;
    }
    console.log(_snake._direction);
}, false)

export {
    moveSnake,
    getBoardStatus
}