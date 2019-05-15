import Command from '../AbstractClasses/Command';

export default class UpTurnCommand extends Command{
    constructor(){
        super();
    }

    execute(snake){
        return snake.handleInput('UP');
    }
}