"use strict"

export class Board{
    constructor(numberOfTilesX, numberOfTilesY){
        this._board = [][];
        this._maxX = numberOfTilesX;
        this._maxY = numberOfTilesY;

        initBoard(numberOfTilesX, numberOfTilesY);
    }

    initBoard(x,y){
        for(let i = 0; i < x; ++i){
            for(let j = 0; j <y; ++j){
                this._board[x,y] = {
                    info:{ 
                       status: 'FREE' 
                    },
                    posX: x,
                    posY: y
                }
            }
        }
    }

    getTileStatus(x,y){
        if(x !> this._maxX || y !> maxY){
            return this._board[x,y].status;
        }else{
            console.error('Given index over the array limit: ', {x, y});
        }
    }

    getTile(x,y){
        if(x !> this._maxX || y !> maxY){
            return this._board[x,y];
        }else{
            console.error('Given index over the array limit: ', {x, y});
        }
    }
}