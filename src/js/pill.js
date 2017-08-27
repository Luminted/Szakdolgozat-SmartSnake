"use strict";

export default class Pill {
    constructor(width, height, nourishment = 1){
        this._boardWidth = width;
        this._boardHeight = height;
        this._posX = Math.round(Math.random() * width);
        this._posY = Math.round(Math.random() * height);
        this._nourishment = nourishment;
        console.log(this._posX, this._posY);
    }

    changePositionRandomly(){
        this._posX = Math.round(Math.random() * this._boardWidth);
        this._posY = Math.round(Math.random() * this._boardHeight);
        console.log(this._posX, this._posY);
    }

    changePosition(x, y){
        this._posX = x;
        this._posY = y;
    }

    getPosition(){
        return ({
            posX: this._posX,
            posY: this._posY
        })
    }

    getNourishment(){
        return this._nourishment;
    }
}