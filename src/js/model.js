import Board from './board.js';
import Snake from './snake.js';
import Pill from './pill.js';
import {
    calculateStepCollisionType
} from './physics';

import log from 'loglevel';
import cloneDeep from 'lodash/cloneDeep';

export default class Model {
    constructor() {
        this.getEntityList = this.getEntityList.bind(this);
        this.addEventListener = this.addEventListener.bind(this);

        this.Entities = {};
        this.callbacks = {
            getEntityList: this.getEntityList
        }

        const _snake = new Snake(this.callbacks, 10);
        const _board = new Board(this.callbacks);
        const _pill = new Pill(this.callbacks);

        this.Entities.snake = _snake;
        this.Entities.board = _board;
        this.Entities.pill = _pill;

        this.addEventListener();
    }

    update() {
        for (let entity in this.Entities) {
            this.Entities[entity].update();
        }
    }


    //***************************************************************** CALLBACCKS *******************************************************************************//

    getEntityList() {
        return this.Entities;
    }

    addEventListener() {
        let snake = this.Entities.snake;
        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    snake.handleInput('LEFT');
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    snake.handleInput('UP');
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    snake.handleInput('RIGHT');
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    snake.handleInput('DOWN');          
                    break;
            }
            log.info(snake.state.direction);
        }, false);
    }

}