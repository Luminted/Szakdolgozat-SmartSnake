//'use strict'

import ObserverEntity from './AbstractClasses/ObserverEntity';
import ConfigError from './errors/ConfigError.js';
import LeftTurnCommand from './Commands/LeftTurnCommand';
import RightTurnCommand from './Commands/RightTurnCommand';
import DownTurnCommand from './Commands/DownTurnCommand';
import UpTurnCommand from './Commands/UpTurnCommand';
import IntCoordinate from './intCoordinate';

import {
    idGenerator
} from './customUtils.js';
import cloneDeep from 'lodash/cloneDeep';

export default class Snake extends ObserverEntity {
    constructor(callbacks, config, strategy, notifier) {

        super();

        let parsedConfig
        try {
            parsedConfig = this.parseConfig(config);
        } catch (e) {
            if (typeof callbacks.propagateError == 'function') {
                callbacks.propagateError(e);
            } else {
                throw e;
            }
        }


        this.state = {}
        this.state.ID = idGenerator();
        this.state.velocity = {
            x: 0,
            y: 0
        }
        this.state.notificationBuffer = [];
        this.state.status = "ALIVE";
        this.state.strategy = strategy;
        this.state.path = [];
        this.state.target = undefined;
        Object.assign(this.state, parsedConfig);

        this.config = config;
        this.timer = new Date();
        this.callbacks = callbacks;
        if (notifier) {
            this.notifier = notifier;
            notifier.subscribe(this);
        }
    }

    parseConfig(config) {
        if (config.startDirection == undefined || config.startVelocity == undefined || config.startX == undefined || config.startY == undefined || config.baseLength == undefined || config.limitX == undefined || config.limitY == undefined) {
            throw new ConfigError('Missing configuration or missing fields in configuration. Needed fields: startdirection: (LEFT | RIGHT | UP | DOWN), startVelocity: integer, startX: integer, startY:integer, baseLength: integer, limitX: integer, limitY: integer');
        }
        let parsedConfig = {}
        parsedConfig.body = [];
        parsedConfig.direction = config.startDirection;
        parsedConfig.baseVelocity = Number(config.startVelocity);
        parsedConfig.limits = {
            x: Number(config.limitX),
            y: Number(config.limitY)
        }
        for (let i = 0; i < config.baseLength; ++i) {
            parsedConfig.body[i] = new IntCoordinate(Number(config.startX), Number(config.startY));
        }
        if (config.color) {
            parsedConfig.color = config.color;
        } else {
            parsedConfig.color = 'green';
        }

        return parsedConfig;
    }

    update() {
        let nextState = {};
        let nextDirection;
        let nextVelocity;
        let nextBody;
        let commandResult;
        let nextStep;
        let path;
        let command;
        let notifier = this.notifier;

        if (this.isAlive()) {
            path = this.calculatePath();
            if (path && path.length > 1) {
                command = this.calculateCommand(this.head, path[1]);
            }

            command = command;
            if (command) {
                commandResult = command.execute(this);
            }

            nextDirection = commandResult || this.direction;
            nextVelocity = this.calculateVelocity(nextDirection);
            nextBody = this.move(nextVelocity.x, nextVelocity.y);
            nextStep = nextBody[0];
            if (notifier) {
                notifier.calculateStepCollisionType(nextStep, this.ID);
            }
            Object.assign(nextState, {
                direction: nextDirection,
                body: nextBody,
                velocity: nextVelocity,
                path: path
            });
            let notificationBuffer = this.state.notificationBuffer;
            let notification = notificationBuffer.pop();
            while (notification) {
                this.processNotification(notification, nextState);
                notification = notificationBuffer.pop();
            }
            if (this.isAlive()) {
                this.setState(nextState);
            }
        }
    }


    reset() {
        let parsedConfig = this.parseConfig(this.config);
        let nextState = {
            velocity: {
                x: 0,
                y: 0
            },
            status: "ALIVE",
            target: undefined
        }
        Object.assign(nextState, parsedConfig);
        this.setState(nextState);
    }

    die() {
        this.setState({
            status: 'DEAD'
        })
    }

    onNotify(entity, event) {
        let eventType = event.type
        switch (eventType) {
            case ('PILL_COLLISION'): {
                if (entity.ID == this.ID) {
                    let storedNotification = {
                        type: eventType,
                        payload: {
                            entity: entity,
                            pill: event.pill,
                        }
                    }
                    this.storeNotification(storedNotification);
                }
                break;
            }
            case ('WALL_COLLISION'): {
                if (entity.ID == this.ID) {
                    let storedNotification = {
                        type: eventType,
                        payload: {
                            entity: entity
                        }
                    }
                    this.storeNotification(storedNotification);
                }
                break;
            }
            case ('BODY_COLLISION'): {
                if (entity.ID == this.ID) {
                    let storedNotification = {
                        type: eventType,
                        payload: {
                            entity: entity
                        }
                    }
                    this.storeNotification(storedNotification);
                }

                break;
            }
            case ('TARGET_REACHED'): {
                if (entity.ID == this.ID) {
                    let storedNotification = {
                        type: eventType,
                        payload: {
                            entity: entity
                        }
                    }
                    this.storeNotification(storedNotification);
                }
                break;
            }
        }
    }

    processNotification(notification, nextState) {
        let notificationResult = {};
        let payload = notification.payload
        switch (notification.type) {
            case ('PILL_COLLISION'):
                let result = this.eat(payload.pill.pillValue);
                nextState.body.push(...result);
                break;
            case ('WALL_COLLISION'):
                this.die();
                break;
            case ('BODY_COLLISION'):
                this.die();
                break;
            case ('TARGET_REACHED'):
                    nextState.target = undefined;
                break;
        }
        return notificationResult;
    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);

        this.state = nextState;
    }

    handleInput(direction) {
        if (!this.isOppositeDirection(direction)) {
            return direction;
        }
        return undefined;
    }

    move(velocityX, velocityY) {
        let nextBody = cloneDeep(this.body);

        nextBody.pop();
        let nextHead = this.calculateNextHead(velocityX, velocityY)
        nextBody.unshift(nextHead);

        return nextBody;
    }

    storeNotification(notification) {
        if (notification.type == undefined || notification.payload == undefined) {
            return false;
        } else {
            this.state.notificationBuffer.unshift(notification);
            return true;
        }
    }

    calculateVelocity(direction) {
        let nextVelocity = {};
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
        let nextPosX = head.coordinates.x + velocityX;
        let nextPosY = head.coordinates.y + velocityY;
        let limits = this.state.limits;


        if (nextPosX < 0 || nextPosX >= limits.x || nextPosY < 0 || nextPosY >= limits.y) {
            return new IntCoordinate(nextPosX, nextPosY, true);
        }
        return new IntCoordinate(nextPosX, nextPosY);
    }

    calculateCommand(from, to) {
        let fromX = from.coordinates.x;
        let fromY = from.coordinates.y;
        let toX = to.coordinates.x;
        let toY = to.coordinates.y;
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
        return undefined
    }

    eat(gain) {
        let additionalNodes = [];
        let tailNode = this.body[this.bodyLength - 1];
        let tailNodeCoordinates = tailNode.coordinates;
        for (let i = 0; i < gain; i++) {
            additionalNodes.push(new IntCoordinate(tailNodeCoordinates.x, tailNodeCoordinates.y));
        }

        return additionalNodes;
    }

    calculatePath() {
        let strategy = this.state.strategy;
        let path = [];
        if (strategy) {
            if (typeof strategy.calculateTarget == 'function') {
                if (this.state.target == undefined) {
                    let target = strategy.calculateTarget(this);
                    this.setState({
                        target: target
                    })
                }
            }
            if (typeof strategy.pathfinder == 'function') {
                let startTime = this.timer.getTime();
                path = strategy.pathfinder(this);
                let endTime = this.timer.getTime();
                this.timer.get
                let runtime = endTime - startTime;
                this.callbacks.propagateRuntime(this.ID, runtime);
            }
        }
        return path;
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

    get bodyLength() {
        return this.state.body.length;
    }

    get endOfBody() {
        return this.body[this.bodyLength - 1];
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
    get status() {
        return this.state.status;
    }

    get target() {
        return this.state.target;
    }

    get tail() {
        return this.body.slice(1);
    }

    get ID() {
        return this.state.ID;
    }

    get path() {
        return this.state.path;
    }

    get color() {
        return this.state.color;
    }
}