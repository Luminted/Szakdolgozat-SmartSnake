"use strict"

import ObserverEntity from './AbstractClasses/ObserverEntity';
import cloneDeep from 'lodash/cloneDeep';
import log from 'loglevel';

export default class Snake extends ObserverEntity {
    constructor(callbacks, baseLength = 3, startX = 0, startY = 0, startDirection = 'RIGHT', startVelocity = 1) {
        log.info('Initializing Snake...');

        super();
        this.state = {}
        this.state.length = baseLength;
        this.state.body = [];
        this.callbacks = callbacks;
        this.command = void 0;
        this.state._tmpDirection = void 0;
        this.state.direction = startDirection;
        this.state._velocity = startVelocity;
        this.state._velocityY = 0;
        this.state._velocityX = 0;
        this.state._status = "ALIVE";
        this.state._target = {
            posX: 15,
            posY: 15
        };

        for (let i = 0; i < this.state.length; ++i) {
            this.state.body[i] = {
                posX: startX,
                posY: startY
            }
        }

        this.state.startValues = {
            baseLength,
            startX,
            startY,
            startDirection,
            startVelocity,
            startBody: this.state.body
        };

        this.callbacks.getSubjectSubscribeFunctions().physics.subscribe(this);

        log.info('Snake initialized ', this.state);
    }

    update() {
        if (this.state.status === 'ALIVE') {
            let nextState = cloneDeep(this.state);

            if(this.state.command){
                this.state.command.execute(this);
                nextState.command = void 0;
            }

            if (this.state._tmpDirection && !this.isOppositeDirection(this.state._tmpDirection)) {
                nextState.direction = this.state._tmpDirection;
                //TODO: This feels hacky. Look at is later!
                nextState._tmpDirection = void 0;
            }

            let nextVelocity = this.calculateVelocity(nextState.direction);
            let nextBody = this.move(nextVelocity);

            nextState.body = nextBody;
            nextState._velocityX = nextVelocity.posX;
            nextState._velocityY = nextVelocity.posY;

            this.setState(nextState);
        }
        if (this.state.status === 'DEAD') {
            log.info('SNAKE IS DEAD');
        }
    }

    reset() {
        let startValues = this.state.startValues;
        let direction = startValues.startDirection;
        let _velocity = startValues.startVelocity;
        let _velocityY = 0;
        let _velocityX = 0;
        let body = startValues.startBody;
        let length = startValues.baseLength;
        let status = "ALIVE";

        this.setState({
            direction,
            _velocity,
            _velocityY,
            _velocityX,
            body,
            length,
            status,
        });

        log.info('<<<<Snake Reset>>>>');
    }

    onNotify(entity, event) {
        switch (event.type) {
            case ('PILL_COLLISION'):
                this.eat(event.nourishment);
                break;
            case ('WALL_COLLISION'):
                this.setState({
                    status: 'DEAD'
                });
                break;
            case ('BODY_COLLISION'):
                this.setState({
                    status: 'DEAD'
                });
                break;
            case ('TARGET_REACHED'):
                let nextTarget = this.calculateNextTarget();
                this.setState({
                    _target: nextTarget
                })
        }
    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);

        log.info('Snake');
        log.info('Prev state', this.state);
        log.info('Next state', nextState);

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
        //TODO rename pos to vel
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
        }
        ;
        return nextVelocity;
    }

    calculateNextHead(velocityX, velocityY) {
        let head = this.head;
        let nextHead = Object.assign({}, head);
        nextHead.posX = head.posX + velocityX;
        nextHead.posY = head.posY + velocityY;

        return nextHead;
    }

    calculateNextTarget(){
        let board = this.callbacks.getEntityList().board;
        let boardDimensions = board.dimensions;
        let randPosX = Math.trunc(Math.random() * boardDimensions.dimX);
        let randPosY = Math.trunc(Math.random() * boardDimensions.dimY);
        return {
            posX: randPosX,
            posY: randPosY
        }
    }

    isAlive(){
        return this.state._status === 'ALIVE';
    }

    get body() {
        return this.state.body;
    }

    get velocity() {
        return this.state._velocity;
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

    get target(){
        return this.state._target
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