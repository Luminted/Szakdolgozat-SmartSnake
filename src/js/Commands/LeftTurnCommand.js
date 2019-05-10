//'use strict'

import Command from '../AbstractClasses/Command';


export default class LeftTurnCommand extends Command{
    constructor(){
        super();
    }

    execute(snake){
        return snake.handleInput('LEFT');
    }
}