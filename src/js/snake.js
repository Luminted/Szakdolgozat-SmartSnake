//'use strict'

import ObserverEntity from './AbstractClasses/ObserverEntity';
import cloneDeep from 'lodash/cloneDeep';
import ConfigError from './errors/ConfigError.js';

import AStart from './pathfinding-algorithms/AStar';

import LeftTurnCommand from './Commands/LeftTurnCommand';
import RightTurnCommand from './Commands/RightTurnCommand';
import DownTurnCommand from './Commands/DownTurnCommand';
import UpTurnCommand from './Commands/UpTurnCommand';
import { throws } from 'assert';

export default class Snake extends ObserverEntity {
    constructor(callbacks, config){

        super();
        let parsedConfig = this.parseConfig(config)
        this.state = {}
        this.callbacks = callbacks;
        this.state.command = void 0;
        this.state.tmpDirection = void 0;
        this.state.status = "ALIVE";
        this.state.config = config;
        Object.assign(this.state, parsedConfig);

        this.callbacks.getSubjectSubscribeFunctions().physics.subscribe(this);

        //log.info('Snake initialized ', this.state);
    }

    parseConfig(config) {
        if(config.startDirection == undefined || config.startVelocity == undefined || config.startX == undefined || config.startY == undefined || config.baseLength == undefined){
            throw new ConfigError('Missing fields in configuration. Needed fields: startdirection: (LEFT | RIGHT | UP | DOWN), startVelocity: integer, startX: integer, startY:integer, baseLength: integer');
        }
        let parsedConfig = {}
        parsedConfig.body = [];
        parsedConfig.direction = config.startDirection;
        parsedConfig.baseVelocity = Number(config.startVelocity);
        for (let i = 0; i < config.baseLength; ++i) {
            parsedConfig.body[i] = {
                posX: Number(config.startX),
                posY: Number(config.startY)
            }
        }
        return parsedConfig;
    }

    update() {
        if (this.state.status === 'ALIVE') {
            let nextState = cloneDeep(this.state);
            let pill = this.callbacks.getEntityList().pill;
            let board = this.callbacks.getEntityList().board;
            let path;

            if (!this.target) {
                nextState.target = pill.position
            }
            // if(this.target){
            //     path = AStart(this.head, this.target, board);
            // }

            // if (path && path.length > 1) {
            //     let nextCommand = this.calculateCommand(this.head, path[path.length - 2]);
            //     this.setState({
            //         command: nextCommand
            //     })
            // }

            if (this.state.command) {
                this.state.command.execute(this);
                nextState.command = void 0;
            }

            if (this.state.tmpDirection && !this.isOppositeDirection(this.state.tmpDirection)) {
                nextState.direction = this.state.tmpDirection;
                //TODO: This feels hacky. Look at is later!
                nextState.tmpDirection = void 0;
            }

            let nextVelocity = this.calculateVelocity(nextState.direction);
            let nextBody = this.move(nextVelocity.x, nextVelocity.y);

            nextState.body = nextBody;

            this.setState(nextState);
        }
        if (this.state.status === 'DEAD') {
            log.info('SNAKE IS DEAD');
        }
    }

    reset() {
        let parsedConfig = this.parseConfig(this.config);
        let nextState = {
         command: void 0,
         tmpDirection: void 0,
         velocityY: 0,
         velocityX: 0,
         status: "ALIVE"
        }
        Object.assign(nextState, parsedConfig);
        this.setState(nextState);
    }

    setTarget(targetObject) {
        if (targetObject == undefined || targetObject.position == undefined) {
            this.setState({
                target: undefined
            });
        } else {
            let position = targetObject.position;
            this.setState({
                target: {
                    posX: position.posX,
                    posY: position.posY
                }
            });
        }
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
                let pill = this.callbacks.getEntityList().pill;
                let newTarget = pill.position;
                this.setState({
                    target: newTarget
                })
        }
    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);

        this.state = nextState;
    }

    handleInput(direction) {
        if (!this.isOppositeDirection(direction)) {
            this.setState({
                tmpDirection: direction
            })
        }
    }

    move(velocityX, velocityY) {
        let nextBody = cloneDeep(this.body);

        nextBody.pop();
        nextBody.unshift(this.calculateNextHead(velocityX, velocityY));

        return nextBody;
    }

    calculateVelocity(direction) {
        let nextVelocity = {};
        //TODO: rename pos to vel
        switch (direction) {
            case 'RIGHT':
                nextVelocity.x = this.state.baseVelocity;
                nextVelocity.y = 0;
                break;
            case 'LEFT':
                nextVelocity.x = -this.state.baseVelocity;
                nextVelocity.y = 0;
                break;
            case 'DOWN':
                nextVelocity.x = 0;
                nextVelocity.y = this.state.baseVelocity;
                break;
            case 'UP':
                nextVelocity.x = 0;
                nextVelocity.y = -this.state.baseVelocity;
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

    calculateCommand(from, to) {
        let fromX = from.posX;
        let fromY = from.posY;
        let toX = to.posX;
        let toY = to.posY;
        let currDirection = this.direction;

        if (fromX - toX > 0 && !(currDirection == 'RIGHT')) {
            return new LeftTurnCommand();
        }
        if (fromX - toX < 0 && !(currDirection == 'LEFT')) {
            return new RightTurnCommand();
        }
        if (fromY - toY > 0 && !(currDirection == 'DOWN')) {
            return new UpTurnCommand();
        }
        if (fromY - toY < 0 && !(currDirection == 'UP')) {
            return new DownTurnCommand();
        }
    }

    eat(gain) {
        let nextBody = cloneDeep(this.body);

        let tailNode = nextBody[this.bodyLength - 1];

        for (let i = 0; i < gain; i++) {
            nextBody.push({
                posX: tailNode.posX,
                posY: tailNode.posY
            });
        }

        this.setState({
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

    isAlive() {
        return this.state.status === 'ALIVE';
    }

    get bodyLength(){
        return this.state.body.length;
    }

    get body() {
        return this.state.body;
    }

    get baseVelocity() {
        return this.state.baseVelocity;
    }

    get head() {
        return this.body[0];
    }

    get direction() {
        return this.state.direction;
    }

    get target() {
        return this.state.target;
    }

    get config(){
        return this.state.config;
    }
    get status(){
        return this.state.status;
    }
}