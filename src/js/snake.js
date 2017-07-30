"use strict"

export default class Snake {
    constructor(startX = 0, startY = 0, startTailLength = 2, startDirection = 'RIGHT', baseVelocity = 1) {
        this._posX = startX;
        this._posY = startY;
        this._tailLength = startTailLength;
        this._direction = startDirection;
        this._baseVelocity = baseVelocity;
        this._velocityX = baseVelocity;
        this._velocityY = baseVelocity;
        //TODO: check for minus
        this._body = new Array(startTailLength + 1).fill({x: startX, y: startY});
    };

    getBody(){
        return this._body;
    };

    move(){
        let lastNode = this._body.pop();
        let head = this._body[0];
        switch(this._direction){
            case 'RIGHT':
                this._velocityX = this._baseVelocity;
                this._velocityY = 0;
                break;
            case 'LEFT':
                this._velocityX = -this._baseVelocity;
                this._velocityY = 0;
                break;
            case 'DOWN':
                this._velocityX = 0;
                this._velocityY = this._baseVelocity;
                break;
            case 'UP':
                this._velocityX = 0;
                this._velocityY = -this._baseVelocity;
                break;
        };

        lastNode.x = head.x + this._velocity;
        lastNode.y = head.y + this._velocity;
        this._body.unshift(lastnode);
        return this._body;
    };

    changeDirection(direction){
        this._direction = direction;
    };

    changeVelocity(velocity){
        this._baseVelocity = velocity;
    };






}