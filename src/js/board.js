import Entity from './AbstractClasses/Entity';
import cloneDeep from 'lodash/cloneDeep';
import ConfigError from './errors/ConfigError.js';
import IntCoordinate from './intCoordinate.js';
import {idGenerator} from './customUtils.js';

export default class Board extends Entity {
    constructor(callbacks, config) {
        //log.info('Initializing board...');

        super();
        this.state = {};
        this.state.ID = idGenerator();
        let parsedConfig = this.parseConfig(config);
        Object.assign(this.state, parsedConfig);
        this.callbacks = callbacks;
        this.state.initialTiles = cloneDeep(this.state.tiles);
        this.config = config;
    }

    parseConfig(config) {
        if (config.width == undefined || config.height == undefined) {
            throw new ConfigError('Missing fields in config. Fields needed: width:integer, height: integer');
        }
        let parsedConfig = {};
        parsedConfig.config = config;
        parsedConfig.width = Number(config.width);
        parsedConfig.height = Number(config.height);
        parsedConfig.tiles = [];
        for (let i = 0; i < parsedConfig.width; ++i) {
            parsedConfig.tiles.push([]);
            for (let j = 0; j < parsedConfig.height; ++j) {
                parsedConfig.tiles[i].push({
                    id: '' + i + j,
                    position: new IntCoordinate(i, j),
                    status: 'EMPTY'
                })
            }
        }

        return parsedConfig;
    }

    update() {
        let nextTiles = cloneDeep(this.state.initialTiles);
        let snakes = this.callbacks.getEntityList().snakes;
        let pills = this.callbacks.getEntityList().pills;

        //Adding snakes to board
        for (let snake of snakes) {
            let snakeBody = snake.body;
            for (let node of snakeBody) {
                if (!node.nullPosition) {
                    nextTiles[node.coordinates.x][node.coordinates.y].status = 'SNAKE';
                }
            }
        }

        //Adding pills to board
        for (let pill of pills) {
            let pillPosition = pill.position;
            if (!pill.position.nullPosition) {
                nextTiles[pillPosition.coordinates.x][pillPosition.coordinates.y].status = 'PILL';
            }
        }


        let nextState = Object.assign({}, {
            tiles: nextTiles
        });
        this.setState(nextState);
    }

    reset() {
        this.setState({
            tiles: this.state.initialTiles
        });
    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);

        //log.info('BOARD');
        //log.info('prevState', this.state);
        //log.info('next state', nextState);

        this.state = nextState;
    }

    getTileByPosition(x, y) {
        if (x >= 0 && x < this.state.width && y >= 0 && y < this.state.height) {
            return this.state.tiles[x][y];
        }
        return undefined
    }

    getTilesAsArray() {
        let tiles = [];
        for (let i = 0; i < this.state.width; ++i) {
            for (let j = 0; j < this.state.height; ++j) {
                tiles.push(this.tiles[i][j]);
            }
        }
        return tiles;
    }

    get dimensions() {
        return {
            dimX: this.state.width,
            dimY: this.state.height
        }
    }

    get tiles() {
        return this.state.tiles;
    }

    get ID(){
        return this.state.ID;
    }

}