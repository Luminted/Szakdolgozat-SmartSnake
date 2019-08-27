import IntCoordinate from '../intCoordinate.js';
import {EuclideanDistance} from '../customUtils.js';

export default function AStar(heurisim, start, goal, gscoreTable, fScoreTable, dimensions) {
    let closedLabelSet = new Set();
    let openLabelSet = new Set(['' + start.coordinates.x  + start.coordinates.y]);
    let cameFrom = {}

    let startLabel = '' + start.coordinates.x + start.coordinates.y;
    gscoreTable[startLabel].score = 0;
    fScoreTable[startLabel].score = heuristicCostEstimate(heurisim, start, goal);

    while (openLabelSet.size > 0) {
        let currentLabel = minScoreLabelSelect(openLabelSet, fScoreTable);
        if (currentLabel === '' + goal.coordinates.x + goal.coordinates.y) {
            return reconstructPath(cameFrom, currentLabel, fScoreTable);
        }
        openLabelSet.delete(currentLabel);
        closedLabelSet.add(currentLabel);

        let neighbors = getNeighbors(fScoreTable[currentLabel], dimensions.dimX - 1, dimensions.dimY - 1, fScoreTable);

        for (let neighbor of neighbors) {
            if (closedLabelSet.has(neighbor)) {
                continue;
            }

            //szomszédos mező távolsága
            let tentativegscore = gscoreTable[currentLabel].score + EuclideanDistance(fScoreTable[currentLabel].position, fScoreTable[neighbor].position);

            if (!openLabelSet.has(neighbor)) {
                openLabelSet.add(neighbor);
            } else if (tentativegscore >= gscoreTable[neighbor].score) {
                continue;
            }

            cameFrom[neighbor] = currentLabel;
            gscoreTable[neighbor].score = tentativegscore;
            fScoreTable[neighbor].score = gscoreTable[neighbor].score + heuristicCostEstimate(heurisim, fScoreTable[neighbor].position, goal);
        }
    }
    return  [];
}

//Square of Eucllabelean distance
// TODO: makes this passed argument
function heuristicCostEstimate(heurisim, from, to) {
    return heurisim(from, to);
}

export function minScoreLabelSelect(labelSet, table) {
    let setAsArray = Array.from(labelSet);
    let minEntry = setAsArray[0];
    for (let entry of labelSet) {
        if (table[minEntry].score > table[entry].score) {
            minEntry = entry;
        }
    }
    return minEntry;
}

export function reconstructPath(cameFromLabelList, currentLabel, tiles) {
    let totalPath = []
    totalPath.push(tiles[currentLabel].position);
    let keys = new Set(Object.keys(cameFromLabelList))
    while (keys.has(currentLabel)) {
        currentLabel = cameFromLabelList[currentLabel];
        totalPath.unshift(tiles[currentLabel].position);
    }
    return totalPath;
}

export function getNeighbors(tableTile, maxX, maxY, table) {
    let neighbors = [];
    let posX = tableTile.position.coordinates.x;
    let posY = tableTile.position.coordinates.y;
    

    if (posX != 0) {
        let label = '' + (posX - 1) + posY;
        let neighbor = table[label];
        if(neighbor.status != 'SNAKE' && neighbor.status != 'OBSTACLE'){
            neighbors.push(label);
        }
    }
    if (posY != 0) {
        let label = '' + posX + (posY - 1);
        let neighbor = table[label];
        if(neighbor.status != 'SNAKE' && neighbor.status != 'OBSTACLE'){
            neighbors.push(label);
        }
    }
    if (posX < maxX) {
        let label = '' + (posX + 1) + posY
        let neighbor = table[label];
        if(neighbor.status != 'SNAKE' && neighbor.status != 'OBSTACLE'){
            neighbors.push(label);
        }
    }
    if (posY < maxY) {
        let label = '' + posX + (posY + 1);
        let neighbor = table[label];
        if(neighbor.status != 'SNAKE' && neighbor.status != 'OBSTACLE'){
            neighbors.push(label);
        }
    }

    return neighbors;

}

export function AStarPreprocess(board, snakes, pills){
    let dimensions = board.dimensions;
    let obstacles = board.obstacles;
    let gScoreTable = {};
    let fScoreTable = {};
    for (let i = 0; i < dimensions.dimX; i++) {
        for (let j = 0; j < dimensions.dimY; j++) {
            let status = 'EMPTY'

            if(status == 'EMPTY'){
                for(let obstacle of obstacles){
                    if(obstacle.coordinates.x == i && obstacle.coordinates.y == j){
                        status = 'OBSTACLE';
                        break;
                    }
                }
            }

            for(let pill of pills){
                if(pill.position.coordinates.x == i && pill.position.coordinates.y == j){
                    status = 'PILL';
                    break;
                }
            }
            if(status == 'EMPTY'){
                for(let snake of snakes){
                    for(let node of snake.body){
                        if(node.coordinates.x == i && node.coordinates.y == j){
                            status = 'SNAKE';
                            break;
                        }
                    }
                }
            }
            gScoreTable['' + i + j] = {
                score: Infinity,
                position: new IntCoordinate(i,j),
                status: status
            }
            fScoreTable['' + i + j] = {
                score: Infinity,
                position: new IntCoordinate(i,j),
                status: status
            }
        }
    }
    return {
        gScoreTable: gScoreTable,
        fScoreTable: fScoreTable
    };
}