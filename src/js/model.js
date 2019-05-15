import Board from './board.js';
import Snake from './snake.js';
import Pill from './pill.js';
import Notifier from './notifier';

import ConfigError from './errors/ConfigError.js';


export default class Model {
    constructor(config, strategies) {
        this.getEntityList = this.getEntityList.bind(this);
        this.getEntityByID = this.getEntityByID.bind(this);
        this.propagateError = this.propagateError.bind(this);
        this.propagateRuntime = this.propagateRuntime.bind(this);
        

        this.passedDownCallbacks = {
            getEntityList: this.getEntityList,
            getEntityByID: this.getEntityByID,
            propagateError: this.propagateError,
            propagateRuntime: this.propagateRuntime
        }
        
        this.notifier = new Notifier(this.passedDownCallbacks);
        this.strategies = strategies;
        
        let parsedConfig;
        try{
           parsedConfig = this.parseConfig(config);
        }catch(e){
            if(typeof this.propagateError == 'function'){
                this.propagateError(e);
            }else{
                throw e;
            }
        }

        if(parsedConfig){
            this.simulationSpeed = parsedConfig.simulationSpeed;
            this.Entities = {
                snakes: parsedConfig.snakes,
                pills: parsedConfig.pills,
                board: parsedConfig.board,
            };
        }

        this.config = config;
        
    }

    update() {
        let snakes = this.Entities.snakes;
        let pills = this.Entities.pills;
        let board = this.Entities.board;
        if (!this.isGameOver()) {

            for(let snake of snakes){
                snake.update();
            }
            for(let pill of pills){
                pill.update();

            }
            board.update();

        }
    }

    reset() {
        let snakes = this.Entities.snakes;
            let pills = this.Entities.pills;
            let board = this.Entities.board;
            for(let snake of snakes){
                snake.reset();
            }
            for(let pill of pills){
                pill.reset();
            }
            board.reset();
    }

    snakeFactory(snakeConfig, notifier) {
        let strategyName = snakeConfig.strategy;
        let strategyType = this.strategies[strategyName];
        let strategy = new strategyType(this.passedDownCallbacks);
        let snake = new Snake(this.passedDownCallbacks, snakeConfig, strategy, notifier);
        return snake;
    }

    isGameOver(){
        let isGameOver = true;
        let snakes = this.Entities.snakes;
        for(let snake of snakes){
            isGameOver = isGameOver && !(snake.isAlive());
        }
        return isGameOver;
    }

    parseConfig(config) {
        let parsedConfig = {}
        let enrichedConfig;

        if(config == undefined){
            throw new ConfigError('Config is missing!');
        }

        enrichedConfig = this.enrichConfig(config);
        let snakeConfigs = enrichedConfig.snakeConfigs;
        let pillConfigs = enrichedConfig.pillConfigs;
        let boardConfig = enrichedConfig.boardConfig;
        let mainConfig = enrichedConfig.main;

        if (snakeConfigs) {
            if (Array.isArray(snakeConfigs)) {
                let snakes = [];
                for (let snakeConfig of snakeConfigs) {
                    if (this.strategies[snakeConfig.strategy]) {
                        let snake = this.snakeFactory(snakeConfig, this.notifier);
                        snakes.push(snake);
                    } else {
                        throw new ConfigError("snakeConfig's strategy is not in the index!");
                    }
                }
                parsedConfig.snakes = snakes;
            } else {
                throw new ConfigError('snakeConfigs field of config should be an Array!');
            }
        }
        if (pillConfigs) {
            if (Array.isArray(pillConfigs)) {
                let pills = [];
                for (let pillConfig of pillConfigs) {
                    let pill = new Pill(this.passedDownCallbacks, pillConfig, this.notifier);
                    pills.push(pill);
                }
                parsedConfig.pills = pills;
            } else {
                throw new ConfigError('pillConfigs field of config should be an Array!');
            }
        }
        if (boardConfig) {
            if (typeof boardConfig == 'object') {
                let board = new Board(this.passedDownCallbacks, boardConfig);
                parsedConfig.board = board;
            } else {
                throw new ConfigError('boardConfig field of config should be an Object!');
            }
        }
        if (mainConfig) {
            if (mainConfig.simulationSpeed) {
                let simulationSpeed = Number(mainConfig.simulationSpeed);
                if (Number.isInteger(simulationSpeed)) {
                    parsedConfig.simulationSpeed = simulationSpeed;
                } else {
                    throw new ConfigError('simulationSpeed value should be Integer!');
                }
            } else {
                throw new ConfigError('Missing main config field simulationSpeed!');
            }
        }

        return parsedConfig;
    }

    enrichConfig(config) {
        let boardConfig = config.boardConfig;
        let limitX = 0;
        let limitY = 0;
        let pillConfigs = config.pillConfigs;
        let snakeConfigs = config.snakeConfigs;
        if (boardConfig) {
            limitX = boardConfig.width || limitX;
            limitY = boardConfig.height || limitY;
        }
        if (pillConfigs && Array.isArray(pillConfigs)) {
            for (let pillConfig of pillConfigs) {
                pillConfig.limitX = limitX;
                pillConfig.limitY = limitY;
            }
        }
        if (snakeConfigs && Array.isArray(snakeConfigs)) {
            for (let snakeConfig of snakeConfigs) {
                snakeConfig.limitX = limitX;
                snakeConfig.limitY = limitY;
            }
        }
        return config
    }


    //*************************************************** CALLBACKS *******************************************************************************//

    propagateRuntime(snakeID, runtime){
        if(this.runtimes == undefined){
            this.runtimes = {};
        }
        this.runtimes[snakeID] = runtime;
    }

    getEntityList() {
        return this.Entities;
    }

    propagateError(error){
        if(this.errorBuffer == undefined){
            this.errorBuffer = [];
        }
        if(error instanceof Error){
            this.errorBuffer.push(error);
            return true;
        }
        return false;
    }

    getEntityByID(ID){
        let returnEntity;
        let snakes = this.Entities.snakes;
        for(let snake of snakes){
            if(snake.ID == ID){
                returnEntity = snake;
            }
        }
        let pills = this.Entities.pills;
        for(let pill of pills){
            if(pill.ID == ID){
                returnEntity = pill;
            }
        }
        let board = this.Entities.board;
        if(board.ID == ID){
            returnEntity = board;
        }
        return returnEntity;
    }
}