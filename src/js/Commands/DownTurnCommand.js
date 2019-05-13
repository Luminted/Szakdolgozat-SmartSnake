//'use strict'

import Command from '../AbstractClasses/Command';

//import log from 'loglevel';

export default class DownTurnCommand extends Command{
    constructor(){
        super();
    }

    execute(snake){
        return snake.handleInput('DOWN');
    }
}