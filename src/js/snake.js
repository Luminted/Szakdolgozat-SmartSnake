"use strict"

export default class Snake {
    constructor(baseLength = 3, startX = 0, startY = 0, startDirection = 'RIGHT', velocity = 1) {
        console.info('Initializing Snake...');
        this._length = baseLength;
        this._body = [];

        for (let i = 0; i < this._length; ++i) {
            this._body[i] = {
                posX: startX,
                posY: startY,
            }
        }

        this._direction = startDirection;
        this._velocity = velocity;
        this._velocityY = void 0;
        this._velocityX = void 0;
        this.calculateVelocity();
        console.info('Snake initialized ', this._body);
    }

    handleInput(direction) {
        if(!this.isOppositeDirection(direction)){
            return direction;
        }else{
             console.info('Not a valid direction');
        }
        return this._direction;
    }

    setDirection(direction){
        this._direction = direction;
    }

    move() {
        this._body.pop();
        this._body.unshift(this.calculateNextHead(this._velocityX, this._velocityY));
    }

    calculateVelocity(){
        switch (this._direction) {
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
                break;
        };
    }

    calculateNextHead(velocityX, velocityY){
        let head = this.getHead();
        let nextHead = Object.assign({}, head);
        nextHead.posX = head.posX + velocityX;
        nextHead.posY = head.posY + velocityY;

        return nextHead;

    }

    getBody() {
        return this._body;
    }

    getVelocity(){
        return {
            X: this._velocityX,
            Y: this._velocityY
        }
    }

    getDirection(){
        return this._direction;
    }

    getHead() {
        return this._body[0];
    }

    eat(nourishment) {
        let tailNode = this._body[this._length - 1];

        for (let i = 0; i < nourishment; i++) {
            this._body.push({ posX: tailNode.posX, posY: tailNode.posY });
        }
        this._length = this._body.length;
    }

    isOppositeDirection(direction){
        if(this._direction === 'RIGHT' && direction === 'LEFT'){
            return true;
        }
        else if(this._direction === 'LEFT' && direction === 'RIGHT'){
            return true;
        }
        else if(this._direction === 'UP' && direction === 'DOWN'){
            return true;
        }
        else if(this._direction === 'DOWN' && direction === 'UP'){
            return true;
        }
        return false;
    }
}