import assert from 'assert';
import sinon from 'sinon';
import Model from '../../model';
import IntCoordinate from '../../intCoordinate';
import Snake from '../../snake';
import Board from '../../board';
import Pill from '../../pill';

describe('Integration test of Board', function () {
    let boardConfig = {
        width: "3",
        height: "3"
    }
    let snakeConfig1 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "1",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar"
    }
    let pillConfig1 = {
        pillValue: "1",
        startPosX: "2",
        startPosY: "2",
        limitX: "3",
        limitY: "3"
    }
    let pillConfig2 = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "2",
        limitX: "3",
        limitY: "3"
    }

    let board = null;
    let snake1 = null;
    let snake2 = null;
    let pill1 = null;
    let pill2 = null;

    let mockCallbacks = {
        getEntityList: function () {
            return {
                snakes: [snake1, snake2],
                pills: [pill1, pill2],
            }
        }
    }



    beforeEach(function setUp() {
        board = new Board(mockCallbacks, boardConfig);
        snake1 = new Snake(mockCallbacks, snakeConfig1);
        snake2 = new Snake(mockCallbacks, snakeConfig2);
        pill1 = new Pill(mockCallbacks, pillConfig1);
        pill2 = new Pill(mockCallbacks, pillConfig2);
    });

    it('should record the exact position of Snakes on the board by setting tiles status to "SNAKE"', function () {
        board.update();
        let snakes = mockCallbacks.getEntityList().snakes;
        let tilesArray = board.getTilesAsArray();
        let appendedSnakeBodies = [];
        for (let snake of snakes) {
            appendedSnakeBodies.push(...snake.body);
        }

        for (let tile of tilesArray) {
            let isSnakeTile = false;
            for (let node of appendedSnakeBodies) {
                isSnakeTile = isSnakeTile || (tile.position.coordinates.x == node.coordinates.x && tile.position.coordinates.y == node.coordinates.y);
            }
            if (!isSnakeTile) {
                assert.notEqual(tile.status, 'SNAKE');
            } else {
                assert.equal(tile.status, 'SNAKE');
            }
        }




    });
    it('should record the exact position of Snakes after they have changed position', function () {
        let snake = mockCallbacks.getEntityList().snakes[0];
        snake.setState({
            direction: 'RIGHT'
        });
        let originalTailPosition = snake.endOfBody;
        snake.update();
        board.update();
        let updatedHeadPosition = snake.head;
        let updatedTailPosition = snake.endOfBody;
        let tiles = board.tiles;
        assert.equal(tiles[updatedHeadPosition.coordinates.x][updatedHeadPosition.coordinates.y].status, 'SNAKE');
        assert.equal(tiles[updatedTailPosition.coordinates.x][updatedTailPosition.coordinates.y].status, 'SNAKE');
        assert.notEqual(tiles[originalTailPosition.coordinates.x][originalTailPosition.coordinates.y].status, 'SNAKE')
    });

    it('should record the exact position of Pills by setting status of tile to "PILL"', function () {
        let pills = mockCallbacks.getEntityList().pills;
        board.update();
        let tilesArray = board.getTilesAsArray();
        for (let tile of tilesArray) {
            let isPillTile = false
            for (let pill of pills) {
                let pillPosition = pill.position;
                isPillTile = isPillTile || (tile.position.coordinates.x == pillPosition.coordinates.x && tile.position.coordinates.y == pillPosition.coordinates.y);
            }
            if (isPillTile) {
                assert.equal(tile.status, 'PILL');
            } else {
                assert.notEqual(tile.status, 'PILL');
            }
        }
    });
    it('should erase the previous position of Pill if it changes position', function () {
        let pill = mockCallbacks.getEntityList().pills[0];
        let originalPosition = new IntCoordinate(2, 2);
        let updatedPosition = new IntCoordinate(0, 0);
        pill.setState({
            position: originalPosition
        })
        board.update();
        pill.setState({
            position: updatedPosition
        });
        board.update();
        let tiles = board.tiles;
        assert.notEqual(tiles[originalPosition.coordinates.x][originalPosition.coordinates.y].status, 'PILL')
        assert.equal(tiles[updatedPosition.coordinates.x][updatedPosition.coordinates.y].status, 'PILL')
    });
    it('should call setState with and object that has field tiles', function () {
        let setStateSpy = sinon.spy(board, 'setState');
        board.update();
        let callArgs = setStateSpy.args;
        assert.equal(setStateSpy.called, true);
        assert.notEqual(callArgs[0][0].tiles, undefined);
    });
    it('should call setState with and object that has field tiles when there are no Snakes or Pills', function () {
        let setStateSpy = sinon.spy(board, 'setState');
        let getEntityListStub = sinon.stub(mockCallbacks, 'getEntityList');
        getEntityListStub.returns({
            snakes: [],
            pills: []
        })
        board.update();
        let callArgs = setStateSpy.args;
        assert.equal(setStateSpy.called, true);
        assert.notEqual(callArgs[0][0].tiles, undefined);
    });
})