import Model from './src/js/model';
import strtategieIndex from './src/js/pathfinding-algorithms/index'
import config from './src/config/config.json';

function simulate(times, config) {
    let runs = [];
    let model;
        
    for (let i = 0; i < times; i++) {
        model = new Model(config, strtategieIndex);
        let board = model.getEntityList().board;
        let dimensions = board.dimensions;
        while (!model.isGameOver()) {
            model.update();
        }
        
        let snakes = model.getEntityList().snakes;
        for(let snake of snakes){
            runs.push({
                id: snake.ID,
                score: calculateFitness(snake.bodyLength, dimensions),
            })
        }
    }
    createDump(runs, model, times);
}

function createDump(runs, model, times) {
    let snakes = model.getEntityList().snakes;
    let board = model.getEntityList().board;
    let dimensions = board.dimensions;

    for(let snake of snakes){
        let snakeStats = runs.filter((run) => run.id == snake.ID);
        let scoreSum = 0;
        for(let snakeStat of snakeStats){
            scoreSum += snakeStat.score;
        }
        let fitness = scoreSum / times;
        console.log('Id: ' + snake.ID + '\n' + 'strategy: ' + snake.config.strategy + '\n' + 'fitness: ' + fitness);
    }
}

function calculateFitness(score, dimensions){
    return score / (dimensions.dimX * dimensions.dimY)
}

let n = process.argv[0] || 100;

simulate(50, config);