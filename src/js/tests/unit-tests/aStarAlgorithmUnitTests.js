import assert from 'assert';
import Board from '../../board';
import Pill from '../../pill';
import Snake from '../../snake';
import IntCoordinate from '../../intCoordinate.js';
import AStarALgorithm, { getNeighbors, AStarPreprocess, reconstructPath, minScoreLabelSelect} from '../../pathfinding-algorithms/aStarAlgorithm.js';
import {EuclideanDistance} from '../../customUtils'

describe('Unit testing AStarALgorithm', function () {

    let boardConfig1 = {
        width: 10,
        height: 10
    }

    let boardConfig2 = {
        width: 10,
        height: 10,
        obstacles: [
            {
                position: {
                    x: 8,
                    y: 8
                }
            }
        ]
    }

    let smallBoard = {
        width: 3,
        height: 1,
        obstacles: [
            {
                position: {
                    x: 1,
                    y: 0
                }
            },
            {
                position: {
                    x: 2,
                    y: 0
                }
            }
        ]
    }

    let snakeConfig1 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: "RIGHT",
        startVelocity: "1",
        strategy: "plainAStarStrategy",
        color: "#E8E85C",
        limitX: 10,
        limitY: 10
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "1",
        startY: "0",
        startDirection: "RIGHT",
        startVelocity: "1",
        strategy: "plainAStarStrategy",
        color: "#E8E85C",
        limitX: 10,
        limitY: 10
    }
    let pillConfig2 = {
        pillValue: "1",
        startPosX: "7",
        startPosY: "5",
        limitX: 10,
        limitY: 10
        
    }

    let pillConfig1 = {
        pillValue: "1",
        startPosX: "5",
        startPosY: "5",
        limitX: 10,
        limitY: 10
    }

    describe('function AStar', function () {
        it('should return an array of IntCoordinates from given start to goal, with start being the first element and goal being the last element of the list', function () {
            let board = new Board(undefined, boardConfig1);
            let scoreTables = AStarPreprocess(board, [], []);
            let start = new IntCoordinate(0, 0);
            let goal = new IntCoordinate(4, 4);
            let dimensions = board.dimensions;

            assert.notDeepEqual(scoreTables.gScoreTable, undefined);
            assert.notDeepEqual(scoreTables.fScoreTable, undefined);

            let path = AStarALgorithm(EuclideanDistance,start, goal, scoreTables.gScoreTable, scoreTables.fScoreTable, dimensions);

            for (let node of path) {
                assert.equal(node instanceof IntCoordinate, true);
            }
            let pathLength = path.length;
            assert.deepEqual(path[0],start);
            assert.deepEqual(path[pathLength-1],goal);
        });
        it('should return an empty array if the target is unreachable', function(){
            let snake = new Snake(undefined, snakeConfig1);
            let board = new Board(undefined, smallBoard);
            let start = snake.head;
            let goal = new IntCoordinate(2,0)
            let dimensions = board.dimensions;
            let scoreTables = AStarPreprocess(board, [snake], []);

            assert.notDeepEqual(scoreTables.gScoreTable, undefined);
            assert.notDeepEqual(scoreTables.fScoreTable, undefined);

            let path = AStarALgorithm(EuclideanDistance,start, goal, scoreTables.gScoreTable, scoreTables.fScoreTable, dimensions);

            assert.deepEqual(path, []);
        })
    })

    describe('function reconstructPath', function () {
        it("should receive a list of labels recording the traversed path, the currently processed tile's label and the list of tiles and return a list of IntCoordinates correspoding to the received labels", function () {
            let board = new Board(undefined, boardConfig1);
            let scoreTables = AStarPreprocess(board, [], []);
            let cameFromLabels = ['00', '10', '11'];
            let currLabel = '12';
            let fScoreTable = scoreTables.fScoreTable

            let reconstructedPath = reconstructPath(cameFromLabels, currLabel, fScoreTable);
            
            let wholeLabelList = [];
            wholeLabelList.push(...cameFromLabels.push(currLabel));
            for(let i = 0; i < wholeLabelList.length; i++){
                assert.equal(reconstructedPath[i] instanceof IntCoordinate, true);
                assert.deepEqual(reconstructedPath[i], fScoreTable[i]);
            }
        })
    })

    describe('function AStarPreprocess', function () {
        it('should return an object with fields gScoreTable: [{score: integer, position: IntCoordinate, status: string}] and fScoreTable: [{score: integer, position: IntCoordinate, status: string}]. Both should record the position of obstacles, pills and snakes.', function () {
            let pill1 = new Pill(undefined, pillConfig1);
            let pill2 = new Pill(undefined, pillConfig2);
            let snake1 = new Snake(undefined, snakeConfig1);
            let snake2 = new Snake(undefined, snakeConfig2);
            let board = new Board(undefined,boardConfig2);
            let obstacles = board.obstacles
            let snakes = [snake1, snake2];
            let pills = [pill1, pill2];
            let dimensions = board.dimensions;

            let result = AStarPreprocess(board, snakes, pills, dimensions);
            let gScoreTable = result.gScoreTable;
            let fScoreTable = result.fScoreTable;

            assert.notEqual(gScoreTable, undefined);
            assert.notEqual(fScoreTable, undefined);

            //gScoreTable
            for(let snake of snakes){
                for(let node of snake.body){
                    let index = '' +  node.coordinates.x + node.coordinates.y;
                    assert.equal(gScoreTable[index].status, 'SNAKE');
                }
            }
            for(let pill of pills){
                let index = '' + pill.position.coordinates.x + pill.position.coordinates.y;
                assert.equal(gScoreTable[index].status, 'PILL');
                
            }

            for(let obstacle of obstacles){
                let index = '' + obstacle.coordinates.x + obstacle.coordinates.y;
                assert.equal(gScoreTable[index].status, 'OBSTACLE');
                
            }


            //fScoreTable
            for(let snake of snakes){
                for(let node of snake.body){
                    let index = '' +  node.coordinates.x + node.coordinates.y;
                    assert.equal(fScoreTable[index].status, 'SNAKE');
                }
            }
            for(let pill of pills){
                let index = '' + pill.position.coordinates.x + pill.position.coordinates.y;
                assert.equal(fScoreTable[index].status, 'PILL');
                
            }
            for(let obstacle of obstacles){
                let index = '' + obstacle.coordinates.x + obstacle.coordinates.y;
                assert.equal(gScoreTable[index].status, 'OBSTACLE');
                
            }
        })
    })
    describe('function minScoreLabelSelect', function(){
        it('should receive a set of labels and a table and return a label from the corresponding to the score table entry with the lowest score', function(){
            let openLabelSet = new Set(['00', '11','22', '33']);
            let mockScoreTable = {
                '00':{
                    score: 3,
                },
                '11': {
                    score: 1
                },
                '22':{
                    score: 7
                },
                '33':{
                    score: 13
                },
                '12':{
                    score:2
                },
                '21': {
                    score: 3
                }
            }

            let lowestScoreLabel = minScoreLabelSelect(openLabelSet, mockScoreTable);
            assert.equal(lowestScoreLabel, '11');
        })
    })
    describe('function getNeighbors', function(){
        it("should receive a tile, the dimensions of the board and a representation of the board and return the labels neighboring tiles that don't have status 'SNAKE' or 'OBSTACLE' as status. Neighbors are return in a clockwise order starting from the left of the given tile.", function(){
            let board = new Board(undefined, boardConfig1);
            let boardWithObstacle = new Board(undefined, boardConfig2)
            let dimensions = board.dimensions;
            let emptyScoreTables = AStarPreprocess(board, [], []);   
            let emptyFScoreTable = emptyScoreTables.fScoreTable;
            let withSnakeScoreTables = AStarPreprocess(board, [new Snake(undefined, snakeConfig2)], []);   
            let withSnakeFScoreTable = withSnakeScoreTables.fScoreTable;
            let withObstacleScoreTables = AStarPreprocess(boardWithObstacle, [], []);   
            let withObstacleFScoreTable = withObstacleScoreTables.fScoreTable;
            let tableTile = {};
            let neighbors;

            //testing with top left corner
            tableTile.position = new IntCoordinate(0,0);
            neighbors = getNeighbors(tableTile, dimensions.dimX - 1, dimensions.dimY - 1, emptyFScoreTable);
            assert.equal(neighbors[0], '10');
            assert.equal(neighbors[1], '01');

            //testing with top right corner
            tableTile.position = new IntCoordinate(dimensions.dimX - 1,0);
            neighbors = getNeighbors(tableTile, dimensions.dimX - 1, dimensions.dimY - 1, emptyFScoreTable);
            assert.equal(neighbors[0], '' + dimensions.dimX - 2 + '0');
            assert.equal(neighbors[1], '' + dimensions.dimX - 1 + '1');

            //testing with bottom left corner
            tableTile.position = new IntCoordinate(0,dimensions.dimY - 1);
            neighbors = getNeighbors(tableTile, dimensions.dimX - 1, dimensions.dimY - 1, emptyFScoreTable);
            assert.equal(neighbors[0], '' + '0' + dimensions.dimY - 2);
            assert.equal(neighbors[1], '' + '1' +  (dimensions.dimY - 1));

            //testing with bottom right corner
            tableTile.position = new IntCoordinate(dimensions.dimX - 1,dimensions.dimY - 1);
            neighbors = getNeighbors(tableTile, dimensions.dimX - 1, dimensions.dimY - 1, emptyFScoreTable);
            assert.equal(neighbors[0], '' + (dimensions.dimX - 2 )+ '' + (dimensions.dimY - 1));
            assert.equal(neighbors[1], '' + (dimensions.dimX - 1) + '' +( dimensions.dimY - 2));

            //testing with position (5,5) with not snakes or obstacles
            tableTile.position = new IntCoordinate(5,5);
            neighbors = getNeighbors(tableTile, dimensions.dimX - 1, dimensions.dimY - 1, emptyFScoreTable);
            assert.equal(neighbors[0],''+ 4 + '' + 5);
            assert.equal(neighbors[1],''+ 5 + '' + 4);
            assert.equal(neighbors[2],''+ 6 + '' + 5);
            assert.equal(neighbors[3],''+ 5 + '' + 6);

            //testing with position (1,1) and Snake in position (1,0)
            tableTile.position = new IntCoordinate(1,1);
            neighbors = getNeighbors(tableTile, dimensions.dimX - 1, dimensions.dimY - 1, withSnakeFScoreTable);
            assert.equal(neighbors[0],''+ 0 + '' + 1);
            assert.equal(neighbors[1],''+ 2 + '' + 1);
            assert.equal(neighbors[2],''+ 1 + '' + 2);

            //testing with position (7,8) and obstacle at position (8,8)
            tableTile.position = new IntCoordinate(7,8);
            neighbors = getNeighbors(tableTile, dimensions.dimX - 1, dimensions.dimY - 1, withObstacleFScoreTable);
            assert.equal(neighbors[0],''+ 6 + '' + 8);
            assert.equal(neighbors[1],''+ 7 + '' + 7);
            assert.equal(neighbors[2],''+ 7 + '' + 9);

        });
    })
})