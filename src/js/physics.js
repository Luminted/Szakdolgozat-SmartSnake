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

        //TODO maybe board returns wall objects if position is out of bounds?
        //TODO Game does not end when hitting a wall. Fix that!
        if (snake.head.posX < 0 || snake.head.posY > board.state.width || snake.head.posY < 0 || snake.head.posX > board.state.length) {
            log.info('<---------------WALL_COLLISION_ACITON--------------->');
            for (let observer of this.observers) {
                observer.onNotify(undefined, {
                    type: "WALL_COLLISION"
                });
            }
        }

        if (pill.position.posX === snake.head.posX && pill.position.posY === snake.head.posY) {
            log.info('<---------------PILL_COLLISION_ACITON--------------->');
            for (let observer of this.observers) {
                observer.onNotify(pill, {
                    type: 'PILL_COLLISION',
                    nourishment: this.callbacks.getEntityList().pill.nourishment
                });
            }
        }

        if(snake.target.posX === snake.head.posX && snake.target.posY === snake.head.posY){
            log.info('<---------------TARGET_REACHED--------------->');
            for(let observer of this.observers){
                observer.onNotify(snake, {
                    type: 'TARGET_REACHED',
                })
            }
        }

        for (let node of snake.state.body.slice(1)) {
            if (snake.head.posX === node.posX && snake.head.posY === node.posY) {
                log.info('<---------------BODY_COLLISION_ACITON--------------->');
                for (let observer of this.observers) {
                    observer.onNotify(node, {
                        type: 'BODY_COLLISION'
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