import Board from './board.js';
import Snake from './snake.js';
import Pill from './pill.js';
import Physics from './physics';

import LeftTurnCommand from './commands/LeftTurnCommand';
import RightTurnCommand from './commands/RightTurnCommand';
import DownTurnCommand from './commands/DownTurnCommand';
import UpTurnCommand from './commands/UpTurnCommand';

import log from 'loglevel';

export default class Model {
    constructor() {
        this.Commands = {};

        this.Commands.LeftTurn = new LeftTurnCommand();
        this.Commands.RightTurn = new RightTurnCommand();
        this.Commands.DownTurn = new DownTurnCommand();
        this.Commands.UpTurn = new UpTurnCommand();

        this.getEntityList = this.getEntityList.bind(this);
        this.getSubjectSubscribeFunctions = this.getSubjectSubscribeFunctions.bind(this);
        this.addEventListener = this.addEventListener.bind(this);
        this.update = this.update.bind(this);
        this.reset = this.reset.bind(this);

        this.Entities = {};
        this.Subjects = {}
        this.callbacks = {
            getEntityList: this.getEntityList,
            getSubjectSubscribeFunctions: this.getSubjectSubscribeFunctions
        }

        this._physics = new Physics(this.callbacks);
        this.Subjects.physics = this._physics;

        //TODO: Do something about initializatuion prevedence

        const _snake = new Snake(this.callbacks, 30);
        this.Entities.snake = _snake;
        const _board = new Board(this.callbacks);
        this.Entities.board = _board;
        const _pill = new Pill(this.callbacks);
        this.Entities.pill = _pill;
        

        this.addEventListener = this.addEventListener.bind(this);
        this.addEventListener();
    }

    update() {
        for (let entity in this.Entities) {
            this.Entities[entity].update();
        }

        this._physics.update();
    }

    reset(){
        this.Entities.board.reset();
        this.Entities.snake.reset();
        this.Entities.pill.reset();
        log.info('>>>>>>Game Reset<<<<<<')
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
        let commands = this.Commands;
        let snake = this.Entities.snake;
        document.addEventListener('keydown', function (event) {
            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    snake.setState({
                        command: commands.LeftTurn
                    })
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    snake.setState({
                        command: commands.UpTurn
                    })
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    snake.setState({
                        command: commands.RightTurn
                    })
                    break;
                case 'ArrowDown':
                    event.preventDefault();
                    snake.setState({
                        command: commands.DownTurn
                    })          
                    break;
            }
            log.info(snake.state.direction);
        }, false);
    }

}