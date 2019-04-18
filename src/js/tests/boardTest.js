import assert from 'assert';
import Board from '../board';

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
            it('should return an object with the following fields: width: integer, height: integer, tiles: [{id: string, posX: integer, posY: integer, status: string}]', function () {
                let config = {
                    width: "3",
                    height: "3"
                }
                let parsedConfig = board.parseConfig(config);
                assert.equal(Number.isInteger(parsedConfig.width), true);
                assert.equal(Number.isInteger(parsedConfig.height), true);
                for (let row in parsedConfig.tiles) {
                    for (let tile of parsedConfig.tiles[row]) {
                        assert.equal(Number.isInteger(tile.posX), true);
                        assert.equal(Number.isInteger(tile.posY), true);
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
                board.state.tiles[2][2].posX = 5;
                board.state.tiles[1][0].posy = 6;

                board.reset();

                assert.deepEqual(board.tiles, initialTiles);

            });
        });
        describe('dimension getter', function(){
            it('should return an object with fields dimX: integer, dimY: integer', function(){
                let dimensions = board.dimensions;
                assert(Number.isInteger(dimensions.dimX), true);
                assert(Number.isInteger(dimensions.dimY), true);
            });
        });
        describe('function getTilesAsArray', function(){
            it('should return a flattened array of the tiles', function(){
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
            it('should return undefined if given x or y position is below zero', function(){
                let controllTile = board.getTileByPosition(0,0);
                let returnedTile1 = board.getTileByPosition(-1,0);
                let returnedTile2 = board.getTileByPosition(0,-1);
                assert.notEqual(controllTile, undefined);
                assert.equal(returnedTile1, undefined);
                assert.equal(returnedTile2, undefined);
            });
            it('should return undefined if given x or y position is over dimX or dimY',function(){
                let dimensions = board.dimensions;
                let controllTile = board.getTileByPosition(dimensions.dimX-1, dimensions.dimY-1);
                let retunedTile1 = board.getTileByPosition(dimensions.dimX, 0);
                let retunedTile2 = board.getTileByPosition(dimensions.dimY, 0);

                assert.notEqual(controllTile, undefined);
                assert.equal(retunedTile1, undefined);
                assert.equal(retunedTile2, undefined);
            });
        });
    })
}