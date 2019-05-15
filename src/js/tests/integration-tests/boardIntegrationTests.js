import assert from 'assert';
import Board from '../../board';
import cloneDeep from 'lodash/cloneDeep';

export default describe('Integration test of Board', function () {
    let board = null;
    let boardConfig = {
        width: "3",
        height: "3"
    }

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
    });

    describe('function update', function () {
        it('should not alter state', function () {
            let originalState = cloneDeep(board.state);
            board.update();
            assert.deepEqual(board.state, originalState);
        })
    })
})