export default function AStar(start, goal, board){
    let closedSet = new Set();
    let openSet = new Set([start.posX + ',' + start.posY]);
    let cameFrom = {}
    let gScore = {}
    let fScore = {}

    let dimensions = board.dimensions;
    for(let i = 0; i < dimensions.dimX; i++){
        for(let j = 0; j < dimensions.dimY; j++){
            gScore[i+','+j] = {score: Infinity, posX: i, posY: j}
            fScore[i+','+j] = {score: Infinity, posX: i, posY: j}
        }
    }

    let startLabel = start.posX + ',' + start.posY;
    gScore[startLabel].score = 0;
    fScore[startLabel].score = heuristicCostEstimate(start, goal);

    while(openSet.size > 0){
        let current = minScoreLabelSelect(openSet, fScore);
        if(current === goal.posX + ',' + goal.posY){
            return reconstructPath(cameFrom, current, fScore)
        }
        openSet.delete(current);
        closedSet.add(current);

        let neighbors = getNeighbors(fScore[current], dimensions.dimX - 1, dimensions.dimY - 1);

        for (let neighbor of neighbors){
            if(closedSet.has(neighbor)){
                continue;
            }

            let tentativeGScore = gScore[current] + EuclideanDistance(fScore[current], fScore[neighbor]);

            if(!openSet.has(neighbor)){
                openSet.add(neighbor);
            }else if(tentativeGScore >= gScore[neighbor]){
                continue;
            }

            cameFrom[neighbor] = current;
            gScore[neighbor].score = tentativeGScore;
            fScore[neighbor].score = gScore[neighbor] + heuristicCostEstimate(fScore[neighbor], goal);
        }


    }
}

//Square of Euclidean distance
function heuristicCostEstimate(from, to){
    return Math.pow(EuclideanDistance(from,to),2);
}

function minScoreLabelSelect(set, map){
    let setAsArray = Array.from(set);
    let minEntry = setAsArray[0];
    for (let entry in set){
        if(map[minEntry].score > map[entry].score){
            minEntry = entry;
        }
    }
    return minEntry;
}

function reconstructPath(cameFrom, current, nodes){
    let totalPath = [current]
    let keys = new Set(Object.keys(cameFrom))
    while (keys.has(current)){
        current = cameFrom[current];
        totalPath.push(nodes[current])
    }
    return totalPath
}

function getNeighbors(node, maxX, maxY){
    let neighbors = [];
    let posX = node.posX;
    let posY = node.posY;

    if(posX != 0){
        neighbors.push((posX - 1) + ',' + posY);
    }
    if(posY != 0){
        neighbors.push(posX + ',' + (posY - 1))
    }
    if(posX < maxX){
        neighbors.push((posX + 1) + ',' + posY)
    }
    if(posY < maxY){
        neighbors.push(posX + ',' + (posY + 1))
    }

    return neighbors;

}

function EuclideanDistance(from,to){
    return Math.sqrt(Math.pow(from.posX - to.posX, 2) + Math.pow(from.posY - to.posY, 2));
}