import IntCoordinate from '../intCoordinate';
import Strategy from '../AbstractClasses/Strategy';
import AStartAlgorithm from './aStarAlgorithm'

export default class PlainAStarStrategy extends Strategy{
    constructor(callbacks){
        super();
        this.callbacks = callbacks;
    }

    pathfinder(snake) {
        let path = [new IntCoordinate(1,1)]
        // let pill = this.callbacks.getEntityList().pills[0];
        // let board = this.callbacks.getEntityList().board;
        // let path = AStartAlgorithm(snake.head, pill.position, board);
        return path;
    }

    calculateTarget() {
        snake.setTarget(new IntCoordinate(1,1));
    }
}