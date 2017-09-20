"use strict"

export default class Board {
    constructor(width = 30, length = 30) {
        console.info('Initializing board...');
        this._width = width;
        this._length = length;
        this._board = [];
        for (let i = 0; i < this._width; ++i) {
            this._board.push([]);
            for (let j = 0; j < this._length; ++j) {
                this._board[i].push({
                    id: '' + i + j,
                    posX: i,
                    posY: j,
                    status: 'EMPTY'
                })
            }
        }
        console.info('Board initialized' , this._board);
    }

    getTileByPosition(x,y){
        return this._board[x][y];
    }

    getDimensions(){
        return {
            dimX:  this._width,
            dimY: this._length
        }
    }

}