"use strict"

import Command from '../AbstractClasses/Command';
import Snake from '../snake';

import log from 'loglevel';

export default class UpTurnCommand extends Command{
    constructor(){
        super();
    }

    execute(snake){
        if(!(snake instanceof Snake)){
            //log.error('Not a Snake!');
        }else{
            snake.handleInput('UP');
        }
    }
}