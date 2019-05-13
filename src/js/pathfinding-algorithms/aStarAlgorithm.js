import IntCoordinate from '../intCoordinate.js';
export default function AStar(start, goal, board) {
    let closedSet = new Set();
    let openSet = new Set([start.coordinates.x + ',' + start.coordinates.y]);
    let cameFrom = {}
    let gScore = {}
    let fScore = {}

    let dimensions = board.dimensions;
    for (let i = 0; i < dimensions.dimX; i++) {
        for (let j = 0; j < dimensions.dimY; j++) {
            let status = board.getTileByPosition(i, j).status;
            gScore[i + ',' + j] = {
                score: Infinity,
                position: new IntCoordinate(i,j),
                status: status
            }
            fScore[i + ',' + j] = {
                score: Infinity,
                position: new IntCoordinate(i,j),
                status: status
            }
        }
    }

    let startLabel = start.coordinates.x + ',' + start.coordinates.y;
    gScore[startLabel].score = 0;
    fScore[startLabel].score = heuristicCostEstimate(start, goal);

    while (openSet.size > 0) {
        let current = minScoreLabelSelect(openSet, fScore);
        if (current === goal.coordinates.x + ',' + goal.coordinates.y) {
            return reconstructPath(cameFrom, current, fScore)
        }
        openSet.delete(current);
        closedSet.add(current);

        let neighbors = getNeighbors(fScore[current], dimensions.dimX - 1, dimensions.dimY - 1, fScore);

        for (let neighbor of neighbors) {
            if (closedSet.has(neighbor)) {
                continue;
            }

            let tentativeGScore = gScore[current] + EuclideanDistance(fScore[current].position, fScore[neighbor].position);

            if (!openSet.has(neighbor)) {
                openSet.add(neighbor);
            } else if (tentativeGScore >= gScore[neighbor]) {
                continue;
            }

            cameFrom[neighbor] = current;
            gScore[neighbor].score = tentativeGScore;
            fScore[neighbor].score = gScore[neighbor] + heuristicCostEstimate(fScore[neighbor].position, goal);
        }
    }
}

//Square of Euclidean distance
function heuristicCostEstimate(from, to) {
    return Math.pow(EuclideanDistance(from, to), 2);
}

function minScoreLabelSelect(set, map) {
    let setAsArray = Array.from(set);
    let minEntry = setAsArray[0];
    for (let entry in set) {
        if (map[minEntry].score > map[entry].score) {
            minEntry = entry;
        }
    }
    return minEntry;
}

function reconstructPath(cameFrom, current, nodes) {
    let totalPath = [current]
    let keys = new Set(Object.keys(cameFrom))
    while (keys.has(current)) {
        current = cameFrom[current];
        totalPath.push(nodes[current].position)
    }
    return totalPath
}

function getNeighbors(node, maxX, maxY, graph) {
    let neighbors = [];
    let posX = node.position.coordinates.x;
    let posY = node.position.coordinates.y;
    

    if (posX != 0) {
        let id = (posX - 1) + ',' + posY;
        let neighbor = graph[id];
        if(neighbor.status == 'EMPTY' || neighbor.status == 'PILL'){
            neighbors.push(id);
        }
    }
    if (posY != 0) {
        let id = posX + ',' + (posY - 1);
        let neighbor = graph[id];
        if(neighbor.status == 'EMPTY' || neighbor.status == 'PILL'){
            neighbors.push(id);
        }
    }
    if (posX < maxX) {
        let id = (posX + 1) + ',' + posY
        let neighbor = graph[id];
        if(neighbor.status == 'EMPTY' || neighbor.status == 'PILL'){
            neighbors.push(id);
        }
    }
    if (posY < maxY) {
        let id = posX + ',' + (posY + 1);
        let neighbor = graph[id];
        if(neighbor.status == 'EMPTY' || neighbor.status == 'PILL'){
            neighbors.push(id);
        }
    }

    return neighbors;

}

function EuclideanDistance(from, to) {
    return Math.sqrt(Math.pow(from.coordinates.x - to.coordinates.x, 2) + Math.pow(from.coordinates.y - to.coordinates.y, 2));
}