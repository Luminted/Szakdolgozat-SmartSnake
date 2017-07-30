import Board from './board.js'
import Snake from './snake.js'


let maxX
let maxY
let _board
let _snake

function init() {
    maxX = 30;
    maxY = 30;
    _board = new Board(maxX, maxY);
    _snake = new Snake(15,15);
    placeSnakeOnBoard(_snake);
}


function move(x,y){
    _snake.move(x,y);
}

function moveSnake(){
    _snake.move();
    placeSnakeOnBoard(_snake);
}

function getBoardTiles(){
    let boardTiles = [];
    for(let row of _board){
        for(let tile of row){
            boardStatus.push(tile.status);
        }
    }
    console.log(boardTiles);
    return boardTiles;
}

function placeSnakeOnBoard(snake){
    let snakeBody = _snake.getBody();
    for(let node of snakeBody){
        _board.setTileStatus(node.x, node.y, 'SNAKE');
    }
}



export {
    init,
    getBoardTiles,
    moveSnake
}