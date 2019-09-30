import assert from 'assert';
import sinon from 'sinon';

import Pill from '../model/Pill.js';

describe('Unit testing Pill.js', function(){
    let pill;
    beforeEach('setup', function(){
        pill = new Pill();
    });

    describe("* function _generateNewPosition", function(){
        it("should return and object with fields posX and posY", function(){
            let gameState = {
                snakes: [],
                pills: []
            }
            let boardState = {
                dimX: 10,
                dimY: 10,
                walls: []
            }

            let result = pill._generatePosition(boardState, gameState);

            assert.notEqual(result.posX, undefined);
            assert.notEqual(result.posY, undefined);
        });
        it("should return a position that is not overlapping with any other objects position in given gameState", function(){
            let mockSnake = {
                body: [{
                    posX: 0,
                    posY: 0
                }]
            };
            let mockPill = {
                position:{
                    posX: 2,
                    posY: 1
                }
            };
            let mockWall = {posX: 3, posY: 1};
            let gameState = {
                snakes: [mockSnake],
                pills: [mockPill]
            };
            let boardState = {
                dimX: 4,
                dimY: 1,
                walls: [mockWall]
            };

            let result = pill._generatePosition(boardState, gameState);

            assert.notDeepEqual(result, mockSnake.body[0]);
            assert.notDeepEqual(result, mockPill.position);
            assert.notDeepEqual(result, mockWall);
        });
        it("should return a position within the dimensions of the given boardState", function(){
            let gameState = {
                snakes: [],
                pills: []
            }
            let boardState = {
                dimX: 1,
                dimY: 1,
                walls:[]
            }

            let result = pill._generatePosition(boardState, gameState);

            assert.equal(result.posX < boardState.dimX);
            assert.equal(result.posX >= 0);
            assert.equal(result.posY < boardState.dimY);
            assert.equal(result.posY >= 0);            
        });
    })

    describe('* function processNotifications', function(){
        //TODO: test different cases
        it("should empty _notificationBuffer", function(){
            let notifications = [
                {
                    type: 'test1'
                },
                {
                    type: 'test2'
                }
            ];
            pill._state.notificationBuffer = notifications;

            pill.processNotifications();

            assert.equal(pill._state.notificationBuffer.length, 0);
        });
        it("should call setState with the result of _generatePosition if notifications type is 'PILL_COLLISION'", function(){
            let notification = {
                type: 'PILL_COLLISION'
            };
            let position = {
                posX: 1,
                posY: 1
            };
            let expectedArgument = {
                posX: position.posX,
                posY: position.posY
            }
            pill._state.notificationBuffer = [notification];
            pill._generatePosition = sinon.stub().returns(position);
            pill._setState = sinon.spy();

            pill.processNotifications();

            assert.deepEqual(pill._setState.args[0][0], expectedArgument);
        })
    })
})