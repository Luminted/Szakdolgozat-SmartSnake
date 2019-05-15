import assert from 'assert';
import Board from '../../board.js';
import IntCoordinate from '../../intCoordinate.js';
import sinon from 'sinon';
import cloneDeep from 'lodash/cloneDeep'

export default describe('unit testing board.js', function () {

    let boardConfig = {
        width: "3",
        height: "3"
    }
    let mockCallbacks = {
        propagateError: function(){},
        test: function () {}
    }
    let board;

    beforeEach(function setUp() {
        board = new Board(undefined, boardConfig);
    });

    describe('constructor', function () {
        it('should have the following inner state after instatiating it with a full config and callbacks -> callbacks: callbacks, config: config, state.ID: idGenerator(), and state should also contain the result of parsedConfig.', function () {
            let newBoard = new Board(mockCallbacks, boardConfig);
            assert.deepEqual(newBoard.config, boardConfig);
            assert.deepEqual(newBoard.callbacks, mockCallbacks);
            assert.equal(newBoard.state.ID.split('-')[0], 'id');
            let parsedConfig = newBoard.parseConfig(boardConfig);
            for (let key of Object.keys(parsedConfig)) {
                assert.deepEqual(newBoard.state[key], parsedConfig[key]);
            }
        });
        it('should not absolutely depend on callbacks', function () {
            assert.doesNotThrow(() => new Board(undefined, boardConfig), Error);
        });
        it('should handle ConfigError by calling propagateError callback with thrown error if propagateError is a function and parseConfig throws an error', function(){
            let propagateErrorSpy = sinon.spy(mockCallbacks, 'propagateError');
            let improperConfig = {};


            new Board(mockCallbacks,improperConfig);
            assert.equal(propagateErrorSpy.called,true);
            assert.equal(propagateErrorSpy.args[0][0] instanceof Error,true);
        })
    })
    describe('function parseConfig', function () {
        it('should return an object with the following fields: width: integer, height: integer, obstacles: [IntCoordinate]', function () {
            let config = {
                width: "3",
                height: "3",
                obstacles: [
                    {
                        position: {
                            x:1,
                            y:2,
                        }
                    },
                    {
                        position: {
                            x:2,
                            y:2,
                        }
                    }
                ]
            }
            let parsedConfig = board.parseConfig(config);
            assert.equal(Number.isInteger(parsedConfig.width), true);
            assert.equal(Number.isInteger(parsedConfig.height), true);
            for(let i = 0; i < parsedConfig.obstacles.length; i++){
                assert.equal(parsedConfig.obstacles[i] instanceof IntCoordinate, true);
                assert.equal(parsedConfig.obstacles[i].coordinates.x, config.obstacles[i].position.x);
                assert.equal(parsedConfig.obstacles[i].coordinates.y, config.obstacles[i].position.y);
            }
            
        });
        it('should return an empty array if config.obstacles is not defined', function(){
            let config = {
                width: "3",
                height: "3",
            }

            let parsedConfig = board.parseConfig(config);
            assert.deepEqual([], parsedConfig.obstacles)
        })
        it('should throw error if needed fields are undefined', function () {
            let config1 = {
                // width: "3",
                height: "3"
            }
            let config2 = {
                width: "3",
                // height: "3"
            }

            assert.throws(function () {
                board.parseConfig(config1)
            }, Error);
            assert.throws(function () {
                board.parseConfig(config2)
            }, Error);
        });
        it('should not throw error on a proper config', function () {
            let config = {
                width: "3",
                height: "3"
            }
            assert.doesNotThrow(function () {
                board.parseConfig(config)
            }, Error);
        })
    });
    describe('function reset', function () {
        it('should not change the state', function () {
            let originalState = cloneDeep(board.state);

            board.reset();

            assert.deepEqual(board.state, originalState);
        });
    });
    describe('dimension getter', function () {
        it('should return an object with fields dimX: integer, dimY: integer', function () {
            let dimensions = board.dimensions;
            assert(Number.isInteger(dimensions.dimX), true);
            assert(Number.isInteger(dimensions.dimY), true);
        });
    });
    describe('tiles getter', function () {
        it('should return the tiles property of board', function () {
            let tiles = board.state.tiles;
            let getterTiles = board.tiles;
            assert.deepEqual(getterTiles, tiles);
        });
    });
})