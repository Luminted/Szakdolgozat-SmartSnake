import Board from './board.js';
import Snake from './snake.js';
import Pill from './pill.js';
import Notifier from './notifier';

import ConfigError from './errors/ConfigError.js';


export default class Model {
    constructor(callbacks, config, strategies) {
        this.getEntityList = this.getEntityList.bind(this);
        this.getEntityByID = this.getEntityByID.bind(this);
        this.propagateError = this.propagateError.bind(this);

        this.passedDownCallbacks = {
            getEntityList: this.getEntityList,
            getEntityByID: this.getEntityByID,
            propagateError: this.propagateError
        }
        
        this.notifier = new Notifier(this.passedDownCallbacks);
        this.strategies = strategies;
        this.callbacks = callbacks;

        
        let parsedConfig = this.parseConfig(config);

        this.config = config;
        this.simulationSpeed = parsedConfig.simulationSpeed;
        this.Entities = {
            snakes: parsedConfig.snakes,
            pills: parsedConfig.pills,
            board: parsedConfig.board,
        };
        
    }

    update() {
        if (!this.isGameOver()) {
            let snakes = this.Entities.snakes;
            let pills = this.Entities.pills;
            let board = this.Entities.board;
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
        let strategy = this.strategies[strategyName];
        let snake = new Snake(this.passedDownCallbacks, snakeConfig, strategy, notifier);
        return snake;
    }

    isGameOver(){
        let isGameOver = false;
        let snakes = this.Entities.snakes;
        for(let snake of snakes){
            isGameOver = isGameOver || !(snake.isAlive());
        }
        return isGameOver;
    }

    parseConfig(config) {
        let parsedConfig = {}
        let enrichedConfig = this.enrichConfig(config);
        let snakeConfigs = enrichedConfig.snakeConfigs;
        let pillConfigs = enrichedConfig.pillConfigs;
        let boardConfig = enrichedConfig.boardConfig;
        let mainConfig = enrichedConfig.main;

        if (snakeConfigs) {
            if (Array.isArray(snakeConfigs)) {
                let snakes = [];
                for (let snakeConfig of snakeConfigs) {
                    if (this.strategies[snakeConfig.strategy]) {
                        let snake = this.snakeFactory(snakeConfig);
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
                    let pill = new Pill(this.passedDownCallbacks, pillConfig);
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
        if (boardConfig) {
            limitX = boardConfig.width || limitX;
            limitY = boardConfig.height || limitY;
        }
        if (pillConfigs && Array.isArray(pillConfigs)) {
            for (let pillConfig of config.pillConfigs) {
                pillConfig.limitX = limitX;
                pillConfig.limitY = limitY;
            }
        }
        return config
    }


    //*************************************************** CALLBACKS *******************************************************************************//

    getEntityList() {
        return this.Entities;
    }

    propagateError(error){
        if(error instanceof Error){
            return error;
        }
        return undefined
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

    // //************************************************EVENTLISTENERS****************************************************************************

    // //TODO: Move this in a separate file
    // setupKeyboardCommands() {
    //     let commands = this.Commands;
    //     let snake = this.Entities.snake;
    //     document.addEventListener('keydown', (event) => {
    //         switch (event.key) {
    //             case 'ArrowLeft':
    //                 event.preventDefault();
    //                 snake.setState({
    //                     command: commands.LeftTurn
    //                 })
    //                 break;
    //             case 'ArrowUp':
    //                 event.preventDefault();
    //                 snake.setState({
    //                     command: commands.UpTurn
    //                 })
    //                 break;
    //             case 'ArrowRight':
    //                 event.preventDefault();
    //                 snake.setState({
    //                     command: commands.RightTurn
    //                 })
    //                 break;
    //             case 'ArrowDown':
    //                 event.preventDefault();
    //                 snake.setState({
    //                     command: commands.DownTurn
    //                 })
    //                 break;
    //             case 'r':
    //                 event.preventDefault();
    //                 this.reset();
    //                 break;
    //         }
    //     }, false);
    // }

}