import Command from '../AbstractClasses/Command';

export default class RightTurnCommand extends Command{
    constructor(){
        super();
    }

    execute(snake){
        return snake.handleInput('RIGHT');
    }
}