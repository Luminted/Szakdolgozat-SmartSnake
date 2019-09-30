import assert from 'assert';
import sinon from 'sinon';

import Snake from '../model/Snake.js';

describe('Unit tests of Snake.js' ,function(){
    let config = {
        startPosX: 1,
        startPosY: 1,
        velocity: 1,
        length: 2,
        direction: 'RIGHT',
    }
    let snake;
    let mockStrategy = {
        getInput: function(){
            return null;
        }
    }

    beforeEach('setup' ,function(){
        snake = new Snake(config);
        snake._strategy = mockStrategy;
    });
    describe("* constructor", function(){
        it("should fill up body array to length specified in config object", function(){
            let config = {
                length: 10,
                posX: 1,
                posY: 2,
            };

            let snake = new Snake(config);

            assert.equal(snake._state.length, config.length);

        });
        it("should set position of every part of body to posX and posY specified in config object", function(){
            let config = {
                length: 10,
                posX: 1,
                posY: 2,
            };

            let snake = new Snake(config);

            for(let i = 0; i < snake.body.length; i++){
                assert.equal(snake.body[i].posX, config.posX);
                assert.equal(snake.body[i].posY, config.posY);
            }
        })
    })
    describe("* function _setState", function(){
        it("should merge given object with _state", function(){
            let mockState = {
                foo: 'bar'
            };
            let nextState = {
                bar: 'foo'
            }
            let mergedStates = Object.assign(mockState, nextState);
            snake._state = mockState;
            
            snake._setState(nextState);

            assert.deepEqual(snake._state, mergedStates);
        });
        it("should override fields in _state", function(){
            let mockState = {
                foo: 'bar1'
            };
            let nextState = {
                foo: 'bar2'
            }
            snake._state = mockState;

            snake._setState(nextState);

            assert.deepEqual(snake._state, nextState);
        })
    })

    describe("* function _move", function(){
        it("-should return a body array with the head moved in the given direction by 'velocity' amount, case: LEFT", function(){
            let direction = 'LEFT';
            let velocity = 1;
            let body = [
                {
                    posX: 1,
                    posY: 1
                },
                {
                    posX: 2,
                    posY: 1
                }
            ]

            let newBody = snake._move(body, direction, velocity);

            let newHead = newBody[0];
            let oldHead = body[0];
            assert.equal(newHead.posX, oldHead.posX - velocity);
            assert.equal(newHead.posY, oldHead.posY);
        });
        it("-should return a body array with the head moved in the given direction by 'velocity' amount, case: RIGHT", function(){
            let direction = 'RIGHT';
            let velocity = 1;
            let body = [
                {
                    posX: 1,
                    posY: 1
                },
                {
                    posX: 2,
                    posY: 1
                }
            ]

            let newBody = snake._move(body, direction, velocity);

            let newHead = newBody[0];
            let oldHead = body[0];
            assert.equal(newHead.posX, oldHead.posX + velocity);
            assert.equal(newHead.posY, oldHead.posY);
        });
        it("-should return a body array with the head moved in the given direction by 'velocity' amount, case: UP", function(){
            let direction = 'UP';
            let velocity = 1;
            let body = [
                {
                    posX: 1,
                    posY: 1
                },
                {
                    posX: 2,
                    posY: 1
                }
            ]

            let newBody = snake._move(body, direction, velocity);

            let newHead = newBody[0];
            let oldHead = body[0];
            assert.equal(newHead.posX, oldHead.posX);
            assert.equal(newHead.posY, oldHead.posY - velocity);
        });
        it("-should return a body array with the head moved in the given direction by 'velocity' amount, case: DOWN", function(){
            let direction = 'DOWN';
            let velocity = 1;
            let body = [
                {
                    posX: 1,
                    posY: 1
                },
                {
                    posX: 2,
                    posY: 1
                }
            ]

            let newBody = snake._move(body, direction, velocity);

            let newHead = newBody[0];
            let oldHead = body[0];
            assert.equal(newHead.posX, oldHead.posX);
            assert.equal(newHead.posY, oldHead.posY + velocity);
        });

        it("-should not alter given body", function(){
            let body = [
                {
                    posX: 1,
                    posY: 1
                },
                {
                    posX: 2,
                    posY: 1
                }
            ];
            let bodySnapshot = body.map((node) => {return {...node}});
            let direction = 'RIGHT';

            snake._move(body,direction);

            assert.deepEqual(body, bodySnapshot);

        });
    });
    describe("* function _handleInput", function(){
        it("-should call the execute method of the given command", function(){
            let mockCommand = {
                execute: sinon.spy()
            };

            snake._handleInput(mockCommand);
            assert.equal(mockCommand.execute.called, true);
        });
    });

    describe("* function processStep", function(){
        it("should call strategy.getInput, with result call _handleInput and then call _move", function(){
            let mockCommand = {
                execute: function() {}
            }
            let mockStrategy = {
                getInput: sinon.stub().returns(mockCommand)
            }
            snake._strategy = mockStrategy;
            snake._handleInput = sinon.spy();
            snake._move = sinon.spy();

            snake.processStep();

            assert.equal(mockStrategy.getInput.called, true);
            assert.equal(snake._handleInput.calledWith(mockCommand), true);
            assert.equal(snake._move.calledAfter(snake._handleInput), true);
        });
        it("should just call move if strategy.getInput's return is not executable", function(){
            let mockStrategy = {
                getInput: sinon.stub().returns(null)
            }
            snake._strategy = mockStrategy;
            snake._handleInput = sinon.spy();
            snake._move = sinon.spy();

            snake.processStep();

            assert.equal(mockStrategy.getInput.called, true);
            assert.equal(snake._handleInput.called, false);
            assert.equal(snake._move.calledAfter(mockStrategy.getInput), true);
        });
        it("should set result of _move to _state.body", function(){
            let _moveStub = sinon.stub(snake, '_move');
            let mockBody = [{posX: 0, posY: 0}];
            _moveStub.returns(mockBody);

            snake.processStep();

            assert.deepEqual(snake._state.body, mockBody);
        });
        it("should set current body as _state.prevBody", function(){
            let mockBody = [{posX: 0, posY: 0}];
            snake._state.body = mockBody;

            snake.processStep();

            assert.deepEqual(snake._state.prevBody, mockBody);
        })
    });
    describe("*function processNotifications", function(){
        it("should call _handleWallCollision if processed notification type is equal to 'WALL_COLLISION'", function(){
            let notification = {
                type: 'WALL_COLLISION'
            }
            snake._handleWallCollision = sinon.spy();
            snake._state.notificationBuffer = [notification];

            snake.processNotifications();

            assert.equal(snake._handleWallCollision.called, true);

        });
        it("should call _handleTailCollision if processed notification type is equal to 'TAIL_COLLISION'", function(){
            let notification = {
                type: 'TAIL_COLLISION'
            }
            snake._handleTailCollision = sinon.spy();
            snake._state.notificationBuffer = [notification];

            snake.processNotifications();

            assert.equal(snake._handleTailCollision.called, true);

        });
        it("should call _handleMutualCollision if processed notification type is equal to 'MUTUAL_COLLISION'", function(){
            let notification = {
                type: 'MUTUAL_COLLISION'
            }
            snake._handleMutualCollision = sinon.spy();
            snake._state.notificationBuffer = [notification];

            snake.processNotifications();

            assert.equal(snake._handleMutualCollision.called, true);

        });
        it("should call _handlePillCollision if processed notification type is equal to 'PILL_COLLISION'", function(){
            let notification = {
                type: 'PILL_COLLISION'
            }
            snake._handlePillCollision = sinon.spy();
            snake._state.notificationBuffer = [notification];

            snake.processNotifications();

            assert.equal(snake._handlePillCollision.called, true);

        })

        it("should empty _state.notificationBuffer", function(){
            let notifications = [{
                type: 'test1'
            },  
            {
                type: 'test2'
            }
        ];
        snake._state.notificationBuffer = notifications;

        snake.processNotifications();

        assert.equal(snake._state.notificationBuffer.length, 0);
        })
    })
    describe("function _handleWallCollision", function(){
        it("should set status.alive to false", function(){
            snake._handleWallCollision();

            assert.equal(snake.isAlive(), false);
        });
        it("should set state.body to value in status.prevBody", function(){
            snake._state.body = 'body';
            snake._state.prevBody = 'prevBody';

            snake._handleWallCollision();

            assert.equal(snake._state.body, snake._state.prevBody);
        });
    })
    describe("* function _handleTailCollision", function(){
        it("should set status.alive to false", function(){
            snake._handleTailCollision();

            assert.equal(snake.isAlive(), false);
        });
        it("should set state.body to value in status.prevBody", function(){
            snake._state.body = 'body';
            snake._state.prevBody = 'prevBody';

            snake._handleTailCollision();

            assert.equal(snake._state.body, snake._state.prevBody);
        });
    });
    describe("* function _handleMutualCollision", function(){
        it("should set status.alive to false", function(){
            snake._handleMutualCollision();

            assert.equal(snake.isAlive(), false);
        });
    });
    describe("* function _handlePillCollision", function(){
        it("should call execute of payload.effect with itself as the argument", function(){
            let payload = {
                pill: {
                    effect: {
                        execute: sinon.spy()
                    }
                }
            };
            snake._handlePillCollision(payload);

            assert.equal(payload.pill.effect.execute.calledWith(snake), true);
        })
    })
});