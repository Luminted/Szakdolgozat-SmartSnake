import Command from '../AbstractClasses/Command';

export default class DownTurnCommand extends Command{
    constructor(){
        super();
    }

    execute(snake){
        return snake.handleInput('DOWN');
    }
}