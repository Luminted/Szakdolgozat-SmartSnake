"use strict";

import Entity from './AbstractClasses/Entity';
import cloneDeep from 'lodash/cloneDeep';
import log from 'loglevel';

export default class Pill extends Entity{
    constructor(callbacks, nourishment = 1){
        log.info('Initializing Pill...');
        super();

        this.state = {};
        this.callbacks = callbacks;
        //TODO: make initial position into something nicer
        this.state.posX = 15;
        this.state.posY = 15;
        this.state.nourishment = nourishment;
        log.info('Pill initialized', this.state);
    }

    update() {
        log.info('PILL')
    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options); 
        this.state = nextState;
    }

    calculateNewRandomPosition(limitX, limitY){
        let position = {};
        position.posX = Math.floor(Math.random() * limitX);
        position.posY = Math.floor(Math.random() * limitY);

         log.info('New position: ', position);
        return position;
       
    }

    get position(){
        return ({
            X: this.state.posX,
            Y: this.state.posY
        })
    }

    get nourishment(){
        return this.state.nourishment;
    }
}