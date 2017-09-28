import Board from './board.js';
import Snake from './snake.js';
import Pill from './pill.js';
import Physics from './physics';

import log from 'loglevel';
import cloneDeep from 'lodash/cloneDeep';

export default class Model {
    constructor() {
        this.getEntityList = this.getEntityList.bind(this);
        this.getSubjectSubscribeFunctions = this.getSubjectSubscribeFunctions.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.update = this.update.bind(this);

        this.Entities = {};
        this.Subjects = {}
        this.callbacks = {
            getEntityList: this.getEntityList,
            getSubjectSubscribeFunctions: this.getSubjectSubscribeFunctions
        }

        this._physics = new Physics(this.callbacks);
        this.Subjects.physics = this._physics;

        //TODO: Do something about initializatuion prevedence

        const _board = new Board(this.callbacks);
        this.Entities.board = _board;
        const _snake = new Snake(this.callbacks, 1);
        this.Entities.snake = _snake;
        const _pill = new Pill(this.callbacks);
        this.Entities.pill = _pill;

        this.addEventListener();
    }

    update() {
        for (let entity in this.Entities) {
            this.Entities[entity].update();
        }

        this._physics.update();
    }


    //*************************************************** CALLBACCKS *******************************************************************************//

    getEntityList() {
        return this.Entities;
    }

    getSubjectSubscribeFunctions(){
        let callbacks = {};
        for(let subject in this.Subjects){
            callbacks[subject] = {};
            callbacks[subject].subscribe = this.Subjects[subject].subscibe;
            console.log()
        }
        return callbacks;
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