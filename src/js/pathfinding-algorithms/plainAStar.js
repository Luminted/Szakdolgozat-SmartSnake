import Strategy from '../AbstractClasses/Strategy';
import AStartAlgorithm from './aStarAlgorithm'
import {AStarPreprocess} from './aStarAlgorithm'
import {EuclideanDistance} from '../customUtils.js'

export default class PlainAStarStrategy extends Strategy{
    constructor(callbacks){
        super();
        this.callbacks = callbacks;
    }

    pathfinder(snake) {
        let pills = this.callbacks.getEntityList().pills;
        let board = this.callbacks.getEntityList().board;
        let snakes = this.callbacks.getEntityList().snakes;
        let dimensions = board.dimensions;
        let heurism = EuclideanDistance;
        let aStarPreprocessResult = AStarPreprocess(board,snakes,pills);
        let path = AStartAlgorithm(heurism, snake.head, snake.target, aStarPreprocessResult.gScoreTable, aStarPreprocessResult.fScoreTable, dimensions);
        return path;
    }

    
    calculateTarget(snake) {
        let pills = this.callbacks.getEntityList().pills;
        let firstPill = pills[0];
        let min = firstPill;
        for(let pill of pills){
            let minDist = EuclideanDistance(snake.head, min.position);
            let currDist = EuclideanDistance(snake.head, pill.position);
            if(minDist < currDist){
                min = pill;
            }
        }
        return min.position;
    }
}