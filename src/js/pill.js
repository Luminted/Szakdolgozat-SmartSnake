import ObserverEntity from './AbstractClasses/ObserverEntity';
import cloneDeep from 'lodash/cloneDeep';
import ConfigError from './errors/ConfigError.js';
import IntCoordinate from './intCoordinate.js';
import CoordinateError from './errors/IntCoordinateError';


export default class Pill extends ObserverEntity {
    constructor(callbacks, config) {
        //log.info('Initializing Pill...');
        super();
        let board = callbacks.getEntityList().board;
        let parsedConfig = this.parseConfig(config);

        this.state = parsedConfig;
        this.callbacks = callbacks;
        this.state.limitX = board.dimensions.dimX;
        this.state.limitY = board.dimensions.dimY;

        this.callbacks.getSubjectSubscribeFunctions().physics.subscribe(this);
    }

    parseConfig(config) {
        if (config == undefined || config.pillValue == undefined || config.startPosX == undefined || config.startPosY == undefined) {
            throw new ConfigError('Missing config or missing fields in config. Fields needed: pillValue: integer, startPosX: Integer, startPosY: Integer.');
        }

        let parsedConfig = {};
        parsedConfig.pillValue = Number(config.pillValue);
        parsedConfig.position = new IntCoordinate(Number(config.startPosX),Number(config.startPosY))
        parsedConfig.config = config;

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
        let parsedConfig = this.parseConfig(this.state.config);

        this.setState({
            position: parsedConfig.position,
            pillValue: parsedConfig.pillValue
        });
    }

    onNotify(entity, event) {
        switch (event.type) {
            case ('PILL_COLLISION'):
            let snake = this.callbacks.getEntityList().snake
                let newPosition = this.calculateNewRandomPosition(snake.body);
                this.setState({
                    position: newPosition
                });
                break;
        }
    }

    calculateNewRandomPosition(snakeBody) {
        let limitX = this.state.limitX;
        let limitY = this.state.limitY;
        if(snakeBody.length == limitX * limitY){
            return new IntCoordinate(undefined,undefined,true); 
        }else{
            let xPositions = [];
            let yPositions = [];
            for (let i = 0; i < limitX; i++){
                let contains = false;
                for(let node of snakeBody){
                    contains = contains || node.posX == i;
                }
                if(!contains){
                    xPositions.push(i);
                }
            }
            for (let i = 0; i < limitY; i++){
                let contains = false;
                for(let node of snakeBody){
                    contains = contains || node.posY == i;
                }
                if(!contains){
                    yPositions.push(i);
                }
            }
            let posX = xPositions[Math.trunc(Math.random() * xPositions.length)];
            let posY = yPositions[Math.trunc(Math.random() * yPositions.length)];

            return new IntCoordinate(posX, posY);
        }

    }

    get position() {
        return this.state.position;
    }

    get pillValue() {
        return this.state.pillValue;
    }

    get config() {
        return this.state.config;
    }
}