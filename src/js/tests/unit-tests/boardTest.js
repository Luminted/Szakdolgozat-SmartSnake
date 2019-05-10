import assert from 'assert';
import Board from '../../board.js';
import IntCoordinate from '../../intCoordinate.js';

export default {
    "boardTest": describe('unit testing board.js', function () {
        let config = {
            width: "3",
            height: "3"
        }
        let board;

        beforeEach(function () {
            board = new Board(undefined, config);
        });
        describe('function parseConfig', function () {
            it('should return an object with the following fields: width: integer, height: integer, tiles: [{id: string, IntCoord->nullPosition = false, status: string}]', function () {
                let config = {
                    width: "3",
                    height: "3"
                }
                let parsedConfig = board.parseConfig(config);
                assert.equal(Number.isInteger(parsedConfig.width), true);
                assert.equal(Number.isInteger(parsedConfig.height), true);
                for (let row in parsedConfig.tiles) {
                    for (let tile of parsedConfig.tiles[row]) {
                        assert.equal(tile.position instanceof IntCoordinate, true);
                        assert.equal(tile.position.nullPosition, false);
                         assert.equal(typeof tile.id  == 'string', true);
                        assert.equal( typeof tile.status == 'string', true);
                    }
                }
            });
            it('should throw error if needed fields are undefined', function () {
                let config1 = {
                    // width: "3",
                    height: "3"
                }
                let config2 = {
                    width: "3",
                    // height: "3"
                }

                //TODO: Check for configError
                assert.throws(function () {
                    board.parseConfig(config1)
                }, Error);
                assert.throws(function () {
                    board.parseConfig(config2)
                }, Error);
            });
            it('should not throw error on a proper config', function(){
                let config = {
                    width: "3",
                    height: "3"
                }
                assert.doesNotThrow(function(){board.parseConfig(config)}, Error);
            })
        });
        describe('function reset', function(){
            it('should reset state.tiles to state.initialTiles', function(){
                let initialTiles = board.state.initialTiles;
                //scrambling original data
                board.state.tiles[0][1].id = "a";
                board.state.tiles[1][2].status = 'SNAKE';
                board.state.tiles[2][2].position = new IntCoordinate(5, 6, true);

                board.reset();

                assert.deepEqual(board.tiles, initialTiles);

            });
        });
        describe('function getTilesAsArray', function(){
            it('should return a flattened array of IntCoords corresponding to the tiles', function(){
                let tilesAsArray = board.getTilesAsArray();
                let dimensions = board.dimensions;
                for(let i = 0; i < dimensions.dimX; i++){
                    for(let j = 0; j < dimensions.dimY; j++){
                        assert.deepEqual(board.tiles[i][j], tilesAsArray[i*dimensions.dimX+j])
                    }
                }
            });
        });
        
        describe('function getTileByPosition', function(){
            if('should return a tile object if given x and y are within the dimension limits', function(){
                let dimensions = board.dimensions;
                let bottomRightCornerX = dimensions.dimX - 1;
                let bottomRightCornerY = dimensions.dimY - 1;
                let topRightCornerX = dimensions.dimX - 1;
                let topRightCornerY = 0;
                let topLeftCornerX = 0;
                let topLeftCornerY = 0;
                let bottomLeftCornerX = 0;
                let bottomLeftCornerY = dimensions.dimY - 1;
                let middleX = Math.round(dimensions.dimX / 2);
                let middleY = Math.round(dimensions.dimY / 2);

                //middle
                assert.doesNotThrow(board.getTileByPosition(middleX,middleY), Error);
                assert.notEqual(board.getTileByPosition(middleX,middleY), undefined);
                assert.deepEqual(board.getTileByPosition(middleX,middleY).position, new IntCoordinate(middleX, middleY));
                //edge case top left corner
                assert.doesNotThrow(board.getTileByPosition(topLeftCornerX,topLeftCornerY), Error);
                assert.notEqual(board.getTileByPosition(topLeftCornerX,topLeftCornerY), undefined);
                assert.deepEqual(board.getTileByPosition(topLeftCornerX, topLeftCornerY).position, new IntCoordinate(middleX, middleY));
                //edge case top right corner
                assert.doesNotThrow(board.getTileByPosition(topRightCornerX,topRightCornerY), Error);
                assert.notEqual(board.getTileByPosition(topRightCornerX,topRightCornerY), undefined);
                assert.deepEqual(board.getTileByPosition(topRightCornerX, topRightCornerY).position, new IntCoordinate(topRightCornerX, topRightCornerY));
                //edge case bottom left corner
                assert.doesNotThrow(board.getTileByPosition(bottomLeftCornerX,bottomLeftCornerY), Error);
                assert.notEqual(board.getTileByPosition(bottomLeftCornerX,bottomLeftCornerY), undefined);
                assert.deepEqual(board.getTileByPosition(bottomLeftCornerX,bottomLeftCornerY).position, new IntCoordinate(bottomLeftCornerX,bottomLeftCornerY));
                //edge case bottom right corner
                assert.doesNotThrow(board.getTileByPosition(bottomRightCornerX,bottomRightCornerY), Error);
                assert.notEqual(board.getTileByPosition(bottomRightCornerX,bottomRightCornerY), undefined);
                assert.deepEqual(board.getTileByPosition(bottomRightCornerX, bottomRightCornerY).position, new IntCoordinate(bottomRightCornerX, bottomRightCornerY));
            })
            it('should return IntCoordinate with nullPosition = true, if given x or y position is below zero', function(){
                let controllTile = board.getTileByPosition(0,0);
                let returnedTile1 = board.getTileByPosition(-1,0);
                let returnedTile2 = board.getTileByPosition(0,-1);

                assert.notDeepEqual(controllTile, undefined);
                assert.equal(returnedTile1, undefined);
                assert.equal(returnedTile2, undefined);
            });
            it('should return IntCoordinate with nullPosition = true, if given x or y position is over dimX or dimY',function(){
                let dimensions = board.dimensions;
                let controllTile = board.getTileByPosition(dimensions.dimX-1, dimensions.dimY-1);
                let returnedTile1 = board.getTileByPosition(dimensions.dimX, 0);
                let returnedTile2 = board.getTileByPosition(dimensions.dimY, 0);

                assert.notDeepEqual(controllTile, undefined);
                assert.equal(returnedTile1, undefined);
                assert.equal(returnedTile2, undefined);
            });
        });
        describe('dimension getter', function(){
            it('should return an object with fields dimX: integer, dimY: integer', function(){
                let dimensions = board.dimensions;
                assert(Number.isInteger(dimensions.dimX), true);
                assert(Number.isInteger(dimensions.dimY), true);
            });
        });
        describe('tiles getter', function(){
            it('should return the tiles property of board', function(){
                let tiles = board.state.tiles;
                let getterTiles = board.tiles;
                assert.deepEqual(getterTiles, tiles);
            });
        });
    })
}