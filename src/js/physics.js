"use strinct";

import log from 'loglevel';
import Subject from './AbstractClasses/Subject'

export default class Physics extends Subject {

    constructor(callbacks) {
        super();

        this.observers = [];
        this.callbacks = callbacks;
    }

    update(){
        this.calculateStepCollisionType();
    }

    calculateStepCollisionType() {
        const snake = this.callbacks.getEntityList().snake;
        const board = this.callbacks.getEntityList().board;
        const snakeDirection = snake.direction;
        const velocity = snake.velocity;
        const stepsTo = snake.calculateNextHead(velocity.X, velocity.Y);

        //TODO maybe board returns wall objects if position is out of bounds?
        if (stepsTo.posX < 0 || stepsTo.posY > board.state.width || stepsTo.posY < 0 || stepsTo.X > board.state.length) {
            for (let observer of this.observers) {
                observer.onNotify(undefined, {
                    message: "HELLO!"
                })
            }
        }

        if (board.getTileByPosition(stepsTo.posX, stepsTo.posY).status === 'PILL') {
            for (let observer of this.observers) {
                observer.onNotify(undefined, {
                    message: "OLLEH!"
                })
            }
        }

        for (let node of snake.state.body) {
            if (stepsTo.posX === node.posX && stepsTo.posY === node.posY) {
                for (let observer of this.observers) {
                    observer.onNotify(undefined, {
                        message: "WORLD!"
                    })
                }
            }
        }
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {

    }
}