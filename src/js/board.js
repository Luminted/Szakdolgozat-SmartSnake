import Entity from './AbstractClasses/Entity';
import cloneDeep from 'lodash/cloneDeep';
import ConfigError from './errors/ConfigError.js';
import IntCoordinate from './intCoordinate.js';
import {idGenerator} from './customUtils.js';

export default class Board extends Entity {
    constructor(callbacks, config) {
        super();

        let parsedConfig
        try{
           parsedConfig = this.parseConfig(config);
        }catch(e){
            if(typeof callbacks.propagateError == 'function'){
                callbacks.propagateError(e);
            }else{
                throw e;
            }
        }

        this.state = {};
        this.state.ID = idGenerator();

        Object.assign(this.state, parsedConfig);
        this.callbacks = callbacks;
        this.config = config;
    }

    parseConfig(config) {
        if (config.width == undefined || config.height == undefined || config.obstacles != undefined && typeof config.obstacles == 'function') {
            throw new ConfigError('Missing fields in config or given obstacle field is not a list. Fields needed: width:integer, height: integer');
        }
        let parsedConfig = {};
        parsedConfig.config = config;
        parsedConfig.width = Number(config.width);
        parsedConfig.height = Number(config.height);
        
        let parsedObstacles = [];
        if(config.obstacles){
            for(let obstacle of config.obstacles){
                parsedObstacles.push(new IntCoordinate(Number(obstacle.position.x), Number(obstacle.position.y)));
            }
        }

        parsedConfig.obstacles = parsedObstacles;

        return parsedConfig;
    }

    update() {}

    reset() {}

    setState(options) {
        let nextState = this.state;
        Object.assign(nextState, options);

        this.state = nextState;
    }

    get dimensions() {
        return {
            dimX: this.state.width,
            dimY: this.state.height
        }
    }

    get ID(){
        return this.state.ID;
    }

    get obstacles(){
        return this.state.obstacles;
    }

}