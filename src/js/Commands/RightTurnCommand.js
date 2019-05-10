//'use strict'

import Command from '../AbstractClasses/Command';

//import log from 'loglevel';

export default class RightTurnCommand extends Command{
    constructor(){
        super();
    }

    execute(snake){
        return snake.handleInput('RIGHT');
    }
}