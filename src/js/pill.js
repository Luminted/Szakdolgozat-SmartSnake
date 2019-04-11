"use strict";

import ObserverEntity from './AbstractClasses/ObserverEntity';
import cloneDeep from 'lodash/cloneDeep';
import log from 'loglevel';

export default class Pill extends ObserverEntity {
    constructor(callbacks, nourishment = 1) {
        //log.info('Initializing Pill...');
        super();

        this.state = {};
        this.callbacks = callbacks;
        //TODO: make initial position into something nicer
        this.state.limitX = this.callbacks.getEntityList().board.dimensions.dimX;
        this.state.limitY = this.callbacks.getEntityList().board.dimensions.dimY;
        this.state.posX = Math.trunc(this.state.limitX / 2);
        this.state.posY = Math.trunc(this.state.limitY / 2);
        this.state.nourishment = nourishment;

        this.callbacks.getSubjectSubscribeFunctions().physics.subscribe(this);

        //log.info('Pill initialized', this.state);
    }

    update() {

    }

    setState(options) {
        let nextState = cloneDeep(this.state);
        Object.assign(nextState, options);

        //log.info('PILL');
        //log.info('prevState', this.state);
        //log.info('next state', nextState);

        this.state = nextState;
    }

    reset(){
        let nextPosX = Math.trunc(this.state.limitX / 2);
        let nextPosY = Math.trunc(this.state.limitY / 2);

        this.setState({
            nextPosX,
            nextPosY
        });
        //log.info('<<<<Pill Reset>>>>');
    }

    onNotify(entity, event) {
        switch (event.type) {
            case ('PILL_COLLISION'):
            let newPosition = this.calculateNewRandomPosition(this.state.limitX, this.state.limitY);
            let board = this.callbacks.getEntityList().board
            let targetTile = board.getTileByPosition(newPosition.posX, newPosition.posY)
            while(targetTile.status === 'SNAKE'){
                newPosition = this.calculateNewRandomPosition(this.state.limitX, this.state.limitY);
            }         
                this.setState({
                    posX: newPosition.posX,
                    posY: newPosition.posY
                });
                break;
        }
    }

    calculateNewRandomPosition(limitX, limitY) {
        let position = {};
        position.posX = Math.trunc(Math.random() * limitX);
        position.posY = Math.trunc(Math.random() * limitY);

        //log.info('New position: ', position);
        return position;

    }

    get position() {
        return ({
            posX: this.state.posX,
            posY: this.state.posY
        })
    }

    get nourishment() {
        return this.state.nourishment;
    }
}