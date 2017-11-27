"use strict"

import Entity from '../AbstractClasses/Entity';

export default class GraphRepresentation extends Entity{
    constructor(callbacks){
        super();

        this.state = {};
        this.callbacks = callbacks;

        this.buildRepresentation = this.buildRepresentation.bind(this);
    }

    update(){
        this.buildRepresentation(this.callbacks.getEntityList().board, this.callbacks.getEntityList().snake);
    }

    reset(){

    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);

        log.info('GraphRepresentation');
        log.info('Prev state', this.state);
        log.info('Next state', nextState);

        this.state = nextState;
    }

    buildRepresentation(board, snake){
        let nodeMap = new Map();
        board.getTilesAsArray().forEach(function(tile) {
            
            let left = board.getTileByPosition(tile.posX - 1, tile.posY);
            let right = board.getTileByPosition(tile.posX + 1, tile.posY);
            let upper = board.getTileByPosition(tile.posX, tile.posY - 1);
            let lower = board.getTileByPosition(tile.posX, tile.posY + 1);

            let neigbours = [];

            if(left) neigbours.push(left);
            if(right) neigbours.push(right);
            if(upper) neigbours.push(upper);
            if(lower) neigbours.push(lower);

            nodeMap.set(tile.id, neigbours);
        }, this);
        
        return nodeMap;
    }
}