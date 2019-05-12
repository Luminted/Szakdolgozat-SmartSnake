import ObserverEntity from './AbstractClasses/ObserverEntity';
import cloneDeep from 'lodash/cloneDeep';
import ConfigError from './errors/ConfigError.js';
import IntCoordinate from './intCoordinate.js';

import {idGenerator} from './customUtils'

export default class Pill extends ObserverEntity {
    constructor(callbacks, config, notifier) {
        super();
        let parsedConfig = this.parseConfig(config);
        this.state = parsedConfig;
        this.state.ID = idGenerator();


        this.callbacks = callbacks;
        this.config = config;

        if (notifier) {
            notifier.subscribe(this);
        }
    }

    parseConfig(config) {
        if (config == undefined || config.pillValue == undefined || config.startPosX == undefined || config.startPosY == undefined || config.limitX == undefined || config.limitY == undefined) {
            throw new ConfigError('Missing config or missing fields in config. Fields needed: pillValue: integer, startPosX: Integer, startPosY: Integer.');
        }

        let parsedConfig = {};
        parsedConfig.pillValue = Number(config.pillValue);
        parsedConfig.position = new IntCoordinate(Number(config.startPosX), Number(config.startPosY));
        parsedConfig.limits = {};
        parsedConfig.limits.x = Number(config.limitX);
        parsedConfig.limits.y = Number(config.limitY);

        return parsedConfig;
    }

    update() {

    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);

        this.state = nextState;
    }

    reset() {
        let parsedConfig = this.parseConfig(this.config);

        this.setState({
            position: parsedConfig.position,
            pillValue: parsedConfig.pillValue
        });
    }

    onNotify(entity, event) {
        switch (event.type) {
            case ('PILL_COLLISION'):
                let newPosition = this.calculateNewRandomPosition();
                this.setState({
                    position: newPosition
                });
                break;
        }
    }

    calculateNewRandomPosition() {
        let limitX = this.limits.x;
        let limitY = this.limits.x;
        let snakes = this.callbacks.getEntityList().snakes;
        let appendedSnakeBodies = [];

        for (let snake of snakes) {
            appendedSnakeBodies.push(...snake.body);
        }
        if (appendedSnakeBodies.length >= limitX * limitY) {
            return new IntCoordinate(undefined, undefined, true);
        } else {
            let freePositions = this.calculateFreePositions(appendedSnakeBodies);
            let randomPosIndex = Math.trunc(Math.random() * limitX) + Math.trunc(Math.random() * limitY);
            let randomPosition = freePositions[randomPosIndex];
            return new IntCoordinate(randomPosition.x, randomPosition.y);
        }

    }

    calculateFreePositions(snakeBody) {
        let limitX = this.limits.x;
        let limitY = this.limits.x;
        let positions = []
        for (let i = 0; i < limitX; i++) {
            for (let j = 0; j < limitY; j++) {
                positions.push({
                    x: i,
                    y: j
                });
            }
        }
        for (let node of snakeBody) {
            let index = node.coordinates.x * limitX + node.coordinates.y
            positions.splice(index, 1);
            positions;
        }
        return positions;
    }

    get position() {
        return this.state.position;
    }

    get pillValue() {
        return this.state.pillValue;
    }

    get limits() {
        return this.state.limits;
    }

    get ID(){
        return this.state.ID;
    }
}