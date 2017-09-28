"use strinct";

import log from 'loglevel';
import Subject from './AbstractClasses/Subject'

export default class Physics extends Subject {

    constructor(callbacks) {
        super();

        this.observers = [];
        this.callbacks = callbacks;

        this.subscibe = this.subscibe.bind(this);
    }

    update() {
        this.calculateStepCollisionType();
    }

    calculateStepCollisionType() {
        const snake = this.callbacks.getEntityList().snake;
        const board = this.callbacks.getEntityList().board;
        const pill = this.callbacks.getEntityList().pill;
        const snakeDirection = snake.direction;
        const velocity = snake.velocity;
        const stepsTo = snake.calculateNextHead(velocity.posX, velocity.posY);

        //TODO maybe board returns wall objects if position is out of bounds?
        if (stepsTo.posX < 0 || stepsTo.posY > board.state.width || stepsTo.posY < 0 || stepsTo.posX > board.state.length) {
            log.info('<---------------WALL_COLLISION_ACITON--------------->');
            for (let observer of this.observers) {
                observer.onNotify(undefined, {
                    type: "WALL_COLLISION"
                });
            }
        }

        if (pill.position.posX === stepsTo.posX && pill.position.posY === stepsTo.posY) {
            log.info('<---------------PILL_COLLISION_ACITON--------------->');
            for (let observer of this.observers) {
                observer.onNotify(pill, {
                    type: 'PILL_COLLISION',
                    nourishment: this.callbacks.getEntityList().pill.nourishment
                });
            }
        }

        for (let node of snake.state.body) {
            if (stepsTo.posX === node.posX && stepsTo.posY === node.posY) {
                log.info('<---------------BODY_COLLISION_ACITON--------------->');
                for (let observer of this.observers) {
                    observer.onNotify(node, {
                        type: 'BODY_COLLISION_ACTION'
                    });
                }
            }
        }
    }

    subscibe(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {

    }
}