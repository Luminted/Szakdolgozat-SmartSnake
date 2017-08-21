"use strict"

export default class Snake {
    constructor(baseLength = 3, startX = 0, startY=0, startDirection='RIGHT', velocity = 1){
        console.info('Initializing Snake...');
        this._length = baseLength;
        this._body = [];

        for(let i = 0; i < this._length; ++i){
            this._body[i] = {
                posX: startX,
                posY: startY,
            }
        }

        this._direction = startDirection;
        this._velocity = velocity;
        this._velocityY = 0;
        this._velocityX = 0;
        console.info('Snake initialized ', this._body);
    }

    setDirection(direction){
        this._direction = direction;
    }

    move(){
        switch(this._direction){
            case 'RIGHT':
                this._velocityX = this._velocity;
                this._velocityY = 0;
                break;
            case 'LEFT':
                this._velocityX = -this._velocity;
                this._velocityY = 0; 
                break;
            case 'DOWN':
                this._velocityX = 0;
                this._velocityY = this._velocity; 
                break;
            case 'UP':
                this._velocityX = 0;
                this._velocityY = -this._velocity;
        };
        //console.info('velX ', this._velocityX);
        //console.info('velY ', this._velocityY);

        let nextHead = this._body.pop();
        let head = this._body[0];
        nextHead.posX = head.posX + this._velocityX;
        nextHead.posY = head.posY + this._velocityY;
        this._body.unshift(nextHead);
        //console.info(this._body);
    }

    getBody(){
        return this._body;
    }


}