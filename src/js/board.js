"use strict"

export default class Board{
    constructor(numberOfTilesX, numberOfTilesY){
        this._board = new Array(numberOfTilesX);
        this._maxX = numberOfTilesX;
        this._maxY = numberOfTilesY;

        this.initBoard(numberOfTilesX, numberOfTilesY);
    }

    initBoard(x,y){
        for(let i = 0; i < x; ++i){
            this._board[i] = new Array(this._maxY);
            for(let j = 0; j < this._maxY; ++j){
                let tile = {
                    posX: i,
                    posY: j,
                    info: {
                        status: 'FREE',
                    }
                }
                this._board[i][j] = tile;
            }
        }
    }

    getTileStatus(x,y){
        if(x <= this._maxX || y <= this._maxY){
            return this._board[x][y].info.status;
        }else{
            console.error('Given index over the array limit: ', {x, y});
        }
    }

    getTile(x,y){
        if(x <= this._maxX || y <= this._maxY){
            return this._board[x][y];
        }else{
            console.error('Given index over the array limit: ', {x, y});
        }
    }

    getMaxX(){
        return this._maxX;
    }

    getMaxY(){
        return this._maxY;
    }

    move(x,y){
        this.setTileStatus(x,y,'HEAD');
    }

    setTileStatus(x,y,status){
        this.getTile(x,y)['info']['status'] = status;
    }
}