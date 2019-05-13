import assert from 'assert';
import Snake from '../../snake';
import Board from '../../board';
import Pill from '../../pill';
import cloneDeep from 'lodash/cloneDeep';

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
        strategy: "AStar",
        limitX: "3",
        limitY: "3"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "1",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar",
        limitX: "3",
        limitY: "3"
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

    describe('function update', function () {
        it('should not alter state', function(){
            let originalState = cloneDeep(board.state);
            board.update();
            assert.deepEqual(board.state, originalState);
        })
    })
})