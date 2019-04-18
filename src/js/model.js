import Board from './board.js';
import Snake from './snake.js';
import Pill from './pill.js';
import Physics from './physics';

import env from '../../env.json'

import LeftTurnCommand from './Commands/LeftTurnCommand';
import RightTurnCommand from './Commands/RightTurnCommand';
import DownTurnCommand from './Commands/DownTurnCommand';
import UpTurnCommand from './Commands/UpTurnCommand';

export default class Model {
    constructor(config) {
        this.Commands = {};

        this.Commands.LeftTurn = new LeftTurnCommand();
        this.Commands.RightTurn = new RightTurnCommand();
        this.Commands.DownTurn = new DownTurnCommand();
        this.Commands.UpTurn = new UpTurnCommand();

        this.getEntityList = this.getEntityList.bind(this);
        this.getSubjectSubscribeFunctions = this.getSubjectSubscribeFunctions.bind(this);
        this.addEventListener = this.setupKeyboardCommands.bind(this);
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

        const _snake = new Snake(this.callbacks, config.snakeConfig);
        this.Entities.snake = _snake;
        const _board = new Board(this.callbacks, config.boardConfig);
        this.Entities.board = _board;
        const _pill = new Pill(this.callbacks);
        this.Entities.pill = _pill;

        if(env && env.RUN_ENV == 'browser'){
            this.addEventListener = this.setupKeyboardCommands.bind(this);
            this.setupKeyboardCommands();
        }
    }

    update() {
        if (this.Entities.snake.isAlive()) {
            this.Entities.snake.update();
            this._physics.update();
            this.Entities.pill.update();
            this.Entities.board.update();
        }
    }

    reset() {
        this.Entities.board.reset();
        this.Entities.snake.reset();
        this.Entities.pill.reset();
        //log.info('>>>>>>Game Reset<<<<<<')
    }


    //*************************************************** CALLBACCKS *******************************************************************************//

    getEntityList() {
        return this.Entities;
    }

    getSubjectSubscribeFunctions() {
        let callbacks = {};
        for (let subject in this.Subjects) {
            callbacks[subject] = {};
            callbacks[subject].subscribe = this.Subjects[subject].subscibe;
        }
        return callbacks;
    }

    //************************************************EVENTLISTENERS****************************************************************************

    //TODO: Move this in a separate file
    setupKeyboardCommands() {
        let commands = this.Commands;
        let snake = this.Entities.snake;
        document.addEventListener('keydown', (event) => {
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
                case 'r':
                    event.preventDefault();
                    this.reset();
                    break;
            }
        }, false);
    }

}