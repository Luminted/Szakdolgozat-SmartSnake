"use strict";

export default class Pill {
    constructor(nourishment = 1){
        //TODO: make initial position into something nicer
        this._posX = 15;
        this._posY = 15;
        this._nourishment = nourishment;
        console.log(this._posX, this._posY);
    }

    changePositionRandomly(limitX, limitY){
        this._posX = Math.floor(Math.random() * limitX);
        this._posY = Math.floor(Math.random() * limitY);
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