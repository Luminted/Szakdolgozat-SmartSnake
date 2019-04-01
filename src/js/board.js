"use strict"

import Entity from './AbstractClasses/Entity';
import cloneDeep from 'lodash/cloneDeep';
import log from 'loglevel';

export default class Board extends Entity {
    constructor(callbacks, width = 30, height = 30) {
        //log.info('Initializing board...');

        super();
        this.state = {};
        this.state.width = width;
        this.state.height = height;
        this.callbacks = callbacks;
        this.state.board = [];
        for (let i = 0; i < this.state.width; ++i) {
            this.state.board.push([]);
            for (let j = 0; j < this.state.height; ++j) {
                this.state.board[i].push({
                    id: '' + i + j,
                    posX: i,
                    posY: j,
                    status: 'EMPTY'
                })
            }
        }
        this.initialBoard = cloneDeep(this.state.board);
        //log.info('Board initialized', this.state);
    }

    update() {
        let nextState = cloneDeep(this.state);
        nextState.board = cloneDeep(this.initialBoard);

        let snakeBody = this.callbacks.getEntityList().snake.body;
        for(let node of snakeBody){
            let nextTile = cloneDeep(nextState.board[node.posX][node.posY]);
            nextTile.status = 'SNAKE';
            nextState.board[node.posX][node.posY] = nextTile;
        }

        let pillPosition = this.callbacks.getEntityList().pill.position;
        let nextTile = nextState.board[pillPosition.posX][pillPosition.posY];
        nextTile.status = 'PILL';
        nextState.board[pillPosition.posX][pillPosition.posY] = nextTile;

        this.state = nextState;

    }

    reset(){
        this.setState({
            board: this.initialBoard
        });
        //log.info('<<<<Board Reset>>>>');
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
        return this.state.board[x][y];
    }

    getTilesAsArray() {
        let tiles = [];
        for (let i = 0; i < this.state.width; ++i) {
            for (let j = 0; j < this.state.height; ++j) {
                tiles.push(this.board[i][j]);
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

    get board() {
        return this.state.board;
    }

}