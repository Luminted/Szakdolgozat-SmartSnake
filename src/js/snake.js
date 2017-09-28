"use strict"

import ObserverEntity from './AbstractClasses/ObserverEntity';
import cloneDeep from 'lodash/cloneDeep';
import log from 'loglevel';

export default class Snake extends ObserverEntity {
    constructor(callbacks, baseLength = 3, startX = 0, startY = 0, startDirection = 'RIGHT', velocity = 1) {
        log.info('Initializing Snake...');

        super();
        this.state = {}
        this.state.length = baseLength;
        this.state.body = [];
        this.callbacks = callbacks;
        this.state._tmpDirection = startDirection;
        this.state.direction = startDirection;
        this.state._velocity = velocity;
        this.state._velocityY = 0;
        this.state._velocityX = 0;

        for (let i = 0; i < this.state.length; ++i) {
            this.state.body[i] = {
                posX: startX,
                posY: startY,
            }
        }

        log.info('Snake initialized ', this.state);
    }

    update() {
        let nextState = cloneDeep(this.state);

        if(!this.isOppositeDirection(this.state._tmpDirection)){
            nextState.direction = this.state._tmpDirection;
        }

        let nextVelocity = this.calculateVelocity(nextState.direction);
        let nextBody = this.move(nextVelocity);

        nextState.body = nextBody;
        nextState._velocityX = nextVelocity.X;
        nextState._velocityY = nextVelocity.Y;

        log.info('Snake');
        log.info('Prev state', this.state);
        log.info('Next state', nextState);

        this.setState(nextState);
    }

    onNotify(entity, event){
        log.info(event.message);
    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);
        this.state = nextState;
    }

    handleInput(direction) {
        if (!this.isOppositeDirection(direction)) {
            this.setState({
                _tmpDirection: direction
            })
        } else {
            log.info('Not a valid direction');
        }
    }

    move(velocity) {
        let nextBody = cloneDeep(this.body);

        nextBody.pop();
        nextBody.unshift(this.calculateNextHead(velocity.posX, velocity.posY));

        return nextBody;
    }

    calculateVelocity(direction) {
        let nextVelocity = {};
        switch (direction) {
            case 'RIGHT':
                nextVelocity.posX = this.state._velocity;
                nextVelocity.posY = 0;
                break;
            case 'LEFT':
                nextVelocity.posX = -this.state._velocity;
                nextVelocity.posY = 0;
                break;
            case 'DOWN':
                nextVelocity.posX = 0;
                nextVelocity.posY = this.state._velocity;
                break;
            case 'UP':
                nextVelocity.posX = 0;
                nextVelocity.posY = -this.state._velocity;
                break;
        };
        return nextVelocity;
    }

    calculateNextHead(velocityX, velocityY) {
        let head = this.head;
        let nextHead = Object.assign({}, head);
        nextHead.posX = head.posX + velocityX;
        nextHead.posY = head.posY + velocityY;

        return nextHead;
    }

    get body() {
        return this.state.body;
    }

    get velocity() {
        return {
            posX: this.state._velocityX,
            posY: this.state._velocityY
        }
    }

    get head() {
        return this.body[0];
    }

    get direction() {
        return this.state.direction;
    }

    eat(nourishment) {
        let nextBody = cloneDeep(this.body);

        let tailNode = nextBody[this.state.length - 1];

        for (let i = 0; i < nourishment; i++) {
            nextBody.push({
                posX: tailNode.posX,
                posY: tailNode.posY
            });
        }

        this.setState({
            length: nextBody.length,
            body: nextBody
        });
    }

    isOppositeDirection(direction) {
        if (this.state.direction === 'RIGHT' && direction === 'LEFT') {
            return true;
        } else if (this.state.direction === 'LEFT' && direction === 'RIGHT') {
            return true;
        } else if (this.state.direction === 'UP' && direction === 'DOWN') {
            return true;
        } else if (this.state.direction === 'DOWN' && direction === 'UP') {
            return true;
        }
        return false;
    }
}