import Entity from './AbstractClasses/Entity';
import cloneDeep from 'lodash/cloneDeep';
import ConfigError from './errors/ConfigError.js'
export default class Board extends Entity {
    constructor(callbacks, config) {
        //log.info('Initializing board...');

        super();
        this.state = {};
        let parsedConfig = this.parseConfig(config);
        Object.assign(this.state, parsedConfig);
        this.callbacks = callbacks;
        this.state.initialTiles = cloneDeep(this.state.tiles);
        //log.info('Board initialized', this.state);
    }

    parseConfig(config){
        if(config.width == undefined || config.height == undefined){
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
                    posX: i,
                    posY: j,
                    status: 'EMPTY'
                })
            }
        }

        return parsedConfig;
    }

    update() {
        let nextState = cloneDeep(this.state);
        nextState.tiles = cloneDeep(this.state.initialTiles);
        
        let snake = this.callbacks.getEntityList().snake;

        let snakeBody = snake.body;
        for(let node of snakeBody){
            let nextTile = cloneDeep(nextState.tiles[node.posX][node.posY]);
            nextTile.status = 'SNAKE';
            nextState.tiles[node.posX][node.posY] = nextTile;
        }

        let targetPosition = snake.target;
        let nextTargetTile = nextState.tiles[targetPosition.posX][targetPosition.posY];
        nextTargetTile.status = 'TARGET';        

        let pillPosition = this.callbacks.getEntityList().pill.position;
        let nextPillTile = nextState.tiles[pillPosition.posX][pillPosition.posY];
        nextPillTile.status = 'PILL';

        this.state = nextState;

    }

    reset(){
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
        if(x >= 0 && x < this.state.width && y >= 0 && y < this.state.height){
            return this.state.tiles[x][y];
        }
        return void 0;
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

}