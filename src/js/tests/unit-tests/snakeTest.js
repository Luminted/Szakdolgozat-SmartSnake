import Model from '../../model.js';
import LeftTurnCommand from '../../Commands/LeftTurnCommand';
import RightTurnCommand from '../../Commands/RightTurnCommand';
import DownTurnCommand from '../../Commands/DownTurnCommand';
import UpTurnCommand from '../../Commands/UpTurnCommand';
import IntCoordinate from '../../intCoordinate.js';

import assert from 'assert';
import sinon from 'sinon';
import cloneDeep from 'lodash/cloneDeep'
import Snake from '../../snake.js';
import Pill from '../../pill.js';


export default {
    "snakeTest": describe('Unit testing snake.js', function () {
        let snakeConfig = {
            baseLength: "1",
            startX: "0",
            startY: "0",
            startDirection: 'RIGHT',
            startVelocity: "1",
            strategy: "AStar"
        }
        let pillConfig = {
            pillValue: "1",
            startPosX: "1",
            startPosY: "1",
            limitX: "2",
            limitY: "2",
        }
        let snake = null;
        let pill = null;

        beforeEach(function () {
            snake = new Snake({}, snakeConfig);
            pill = new Pill({}, pillConfig);
        });
        describe('function parseConfig', function () {
            it('should return an object with fields body: [IntCoordinates->nullPosition = false], direction: (LEFT | RIGHT | UP | DOWN), baseVelocity: integer', function () {
                let snakeConfig = {
                    startVelocity: "1",
                    baseLength: "2",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT",
                }
                let directions = new Set(['LEFT', 'RIGHT', 'UP', 'DOWN']);
                let parsedConfig = snake.parseConfig(snakeConfig);
                assert.equal(parsedConfig.body == undefined, false);
                assert.equal(parsedConfig.body instanceof Array, true);
                for (let node of parsedConfig.body) {
                    assert.equal(node instanceof IntCoordinate, true);
                    assert.equal(node.nullPosition, false);
                }
                assert.equal(Number.isInteger(parsedConfig.baseVelocity), true);
                assert.equal(directions.has(parsedConfig.direction), true);
            });
            it('should raise an error if the config is missing vital information', function () {
                let config1 = {
                    // startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT",
                    
                }
                let config2 = {
                    startVelocity: "1",
                    // baseLength: "3",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT",
                    
                }
                let config3 = {
                    startVelocity: "1",
                    baseLength: "3",
                    // startX: "0",
                    startY: "0",
                    startDirection: "RIGHT",
                    
                }
                let config4 = {
                    startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    // startY: "0",
                    startDirection: "RIGHT",
                    
                }
                let config5 = {
                    startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    startY: "0",
                    // startDirection: "RIGHT",
                    
                }

                //TODO: check for custom error
                assert.throws(function () {
                    snake.parseConfig(config1)
                }, Error);
                assert.throws(function () {
                    snake.parseConfig(config2)
                }, Error);
                assert.throws(function () {
                    snake.parseConfig(config3)
                }, Error);
                assert.throws(function () {
                    snake.parseConfig(config4)
                }, Error);
                assert.throws(function () {
                    snake.parseConfig(config5)
                }, Error);

            });
            it('should not raise an error with a proper config', function () {
                let config = {
                    startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT",
                }
                assert.doesNotThrow(function () {
                    snake.parseConfig(config)
                }, Error);
            })

        });
        describe('function eat', function () {
            it('should return a list of nodes which length is equal to the given argument. Nodes should have the same coordinates as the last node ', function () {
                let foodValue = 3;
                let lastNode = snake.body[snake.bodyLength - 1];
                let additionalNodes = snake.eat(foodValue);
                for(let node of additionalNodes){
                    assert.deepEqual(node, lastNode);
                }
                assert.equal(additionalNodes.length, foodValue);
            });
            it('should not change the inner state of Snake', function(){
                let originalState = cloneDeep(snake.state);
                let foodValue = 3;
                snake.eat(foodValue);
                let newState = snake.state;
                assert.deepEqual(originalState, newState);
            })
        });
        describe('function calculateCommand', function () {
            it('it should return LeftTurnCommand', function () {
                snake.setState({
                    direction: "UP",
                });
                let from = new IntCoordinate(15, 15);
                let to = new IntCoordinate(14, 15);

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "UP")
                assert.equal(command instanceof LeftTurnCommand, true);
            });

            it('it should not return LeftTurnCommand', function () {
                snake.setState({
                    direction: "RIGHT",
                });
                let from = new IntCoordinate(15, 15);

                let to = new IntCoordinate(14, 15);

                let command = snake.calculateCommand(from, to);

                assert.equal(command instanceof LeftTurnCommand, false);
                assert.equal(snake.direction, "RIGHT");
            });

            it('it should return RightTurnCommand', function () {
                snake.setState({
                    direction: "UP",
                });
                let from = new IntCoordinate(15, 15);
                let to = new IntCoordinate(16, 15);

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "UP");
                assert.equal(command instanceof RightTurnCommand, true);
            });

            it('it should not return RightTurnCommand', function () {
                snake.setState({
                    direction: "LEFT",
                });
                let from = new IntCoordinate(15, 15);

                let to = new IntCoordinate(14, 15);

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "LEFT");
                assert.equal(command instanceof RightTurnCommand, false);
            });

            it('it should return UpTurnCommand', function () {
                snake.setState({
                    direction: "RIGHT",
                });
                let from = new IntCoordinate(15, 15);
                let to = new IntCoordinate(15, 14);

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "RIGHT");
                assert.equal(command instanceof UpTurnCommand, true);
            });

            it('it should not return UpTurnCommand', function () {
                snake.setState({
                    direction: "DOWN",
                });
                let from = new IntCoordinate(15, 15);
                let to = new IntCoordinate(15, 14);

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "DOWN");
                assert.equal(command instanceof UpTurnCommand, false);
            });
            
            it('it should return DownTurnCommand', function () {
                snake.setState({
                    direction: "RIGHT",
                });
                let from = new IntCoordinate(15, 15);
                let to = new IntCoordinate(15, 16);

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "RIGHT");
                assert.equal(command instanceof DownTurnCommand, true);
            });

            it('it should not return DownTurnCommand', function () {
                snake.setState({
                    direction: "UP",
                });
                let from = new IntCoordinate(15, 15);
                let to = new IntCoordinate(15, 16);

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "UP");
                assert.equal(command instanceof DownTurnCommand, false);
            });
            it('should return undefined if from and to are the same positions', function(){
                let from = new IntCoordinate(15,15);
                let to = new IntCoordinate(15,15);
                let command = snake.calculateCommand(from, to);
                assert.equal(command, undefined);
            })
        });
        describe("function calculateNextHead", function () {
            it('should return new IntCoordinate with position x=16, y=15', function () {
                let head = new IntCoordinate(15, 15);

                let velocityX = 1;
                let velocityY = 0;
                snake.setState({
                    body: [head]
                });
                let nextHead = snake.calculateNextHead(velocityX, velocityY)
                assert.equal(nextHead.coordinates.x, head.coordinates.x + velocityX);
                assert.equal(nextHead.coordinates.y, head.coordinates.y + velocityY);
            });
            it('should return head with position x=15, y=16', function () {
                let head = new IntCoordinate(15, 15);

                let velocityX = 0;
                let velocityY = 1;
                snake.setState({
                    body: [head]
                });
                let nextHead = snake.calculateNextHead(velocityX, velocityY)
                assert.equal(nextHead.coordinates.x, head.coordinates.x + velocityX);
                assert.equal(nextHead.coordinates.y, head.coordinates.y + velocityY);
            });
            it('should return an new IntCoordinate', function () {
                let head = new IntCoordinate(15, 15);
                let velocityX = 0;
                let velocityY = 1;
                snake.setState({
                    body: [head]
                });
                let nextHead = snake.calculateNextHead(velocityX, velocityY);
                assert.equal(nextHead instanceof IntCoordinate, true);
            });
        });

        describe("function reset", function () {
            it("should reset game state of snake to values defined in it's config and constructor", function () {
                let snakeConfig = snake.config;
                let initialState = snake.state;
                let parsedConfig = snake.parseConfig(snakeConfig);

                //scrambling state
                let nextState = {
                    velocity: {
                        x: 'TEST',
                        y: 'TEST'
                    },
                    status: "TEST",
                }

                snake.setState(nextState);
                snake.reset();

                assert.deepEqual(snake.state, Object.assign(initialState, parsedConfig));

            });
        });
        describe('function isAlive', function () {
            it('should return ALIVE', function () {
                snake.setState({
                    status: 'ALIVE'
                });
                let isALive = snake.isAlive();
                assert.equal(isALive, true);
            });
            it('should return DEAD', function () {
                snake.setState({
                    status: 'DEAD'
                });
                let isALive = snake.isAlive();
                assert.equal(isALive, false);
            });
        })
        describe('function storeNotification', function () {
            it('should add given object to the end of buffer, if valid, and return true', function () {
                let notification1 = {
                    type: 'TEST1',
                    payload: {
                        entity: 'TEST1'
                    }
                }
                let notification2 = {
                    type: 'TEST2',
                    payload: {
                        entity: 'TEST2'
                    }
                }
                let returnValue;
                returnValue = snake.storeNotification(notification1);
                assert.equal(returnValue, true);
                returnValue = snake.storeNotification(notification2);
                assert.equal(returnValue, true);
                let startOfBuffer = snake.state.notificationBuffer[0];
                assert.deepEqual(startOfBuffer, notification2);
            });
            it('should not add object to notificationBuffer if it has no field type and should return false', function () {
                let notification = {
                    payload: {
                        entity: 'TEST'
                    }
                }
                let returnValue = snake.storeNotification(notification);
                assert.equal(returnValue, false);
                assert.deepEqual(snake.state.notificationBuffernotification, undefined);
            });
            it('should not add object to notificationBuffer if it has no field payload and should return false', function () {
                let notification = {
                    type: 'TEST'
                }
                let returnValue = snake.storeNotification(notification);
                assert.equal(returnValue, false);
                assert.deepEqual(snake.state.notificationBuffernotification, undefined);
            })
        })
        describe('function move', function () {
            it('should move head of snake by velocityX to the right', function () {
                let velocityX = 1;
                let velocityY = 0;
                snake.setState({
                    body: [new IntCoordinate(1, 1)],
                })
                let originalHeadX = snake.head.coordinates.x;
                let originalHeadY = snake.head.coordinates.y;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].coordinates.x, originalHeadX + velocityX);
                assert.equal(nextBody[0].coordinates.y, originalHeadY + velocityY);
            });
            it('should move head of snake by velocityX to the left', function () {
                let velocityX = -1;
                let velocityY = 0;
                snake.setState({
                    body: [new IntCoordinate(1, 1)],
                })
                let originalHeadX = snake.head.coordinates.x;
                let originalHeadY = snake.head.coordinates.y;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].coordinates.x, originalHeadX + velocityX);
                assert.equal(nextBody[0].coordinates.y, originalHeadY + velocityY);
            });
            it('should move head of snake by velocityY upward', function () {
                let velocityX = 0;
                let velocityY = -1;
                snake.setState({
                    body: [new IntCoordinate(1, 1)],
                })
                let originalHeadX = snake.head.coordinates.x;
                let originalHeadY = snake.head.coordinates.y;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].coordinates.x, originalHeadX + velocityX);
                assert.equal(nextBody[0].coordinates.y, originalHeadY + velocityY);
            });
            it('should move head of snake by velocityY down', function () {
                let velocityX = 0;
                let velocityY = 1;
                snake.setState({
                    body: [new IntCoordinate(1, 1)],
                })
                let originalHeadX = snake.head.coordinates.x;
                let originalHeadY = snake.head.coordinates.y;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].coordinates.x, originalHeadX + velocityX);
                assert.equal(nextBody[0].coordinates.y, originalHeadY + velocityY);
            });
        });
        describe('function handleInput', function () {
            it('should return "LEFT"', function () {
                snake.setState({
                    direction: 'UP',
                });
                let direction = 'LEFT';
                let handledInput = snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(handledInput, 'LEFT');
            });
            it('should return "RIGHT"', function () {
                snake.setState({
                    direction: 'UP',
                });
                let direction = 'RIGHT';
                let handledInput = snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(handledInput, 'RIGHT');
            });
            it('should return "UP"', function () {
                snake.setState({
                    direction: 'LEFT',
                });
                let direction = 'UP';
                let handledInput = snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(handledInput, 'UP');
            });
            it('should return "DOWN"', function () {
                snake.setState({
                    direction: 'LEFT',
                });
                let direction = 'DOWN';
                let handledInput = snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(handledInput, 'DOWN');
            });
            it('should return undefined if isOppositeDirection returns true', function () {
                snake.setState({
                    direction: 'LEFT'
                })
                let direction = 'RIGHT';
                let handleInput = snake.handleInput(direction);
                assert.equal(handleInput, undefined);
            })
        });
        describe('function isOppositeDirection', function () {
            it('should return false if snake.state.direction is undefined', function () {
                snake.setState({
                    direction: undefined
                })
                let directions = ['LEFT', 'RIGHT', 'UP', 'DOWN'];
                let isOpposite = false;
                for (let direction of directions) {
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            })
            it('Snake direction: UP, input direction: DOWN', function () {
                snake.setState({
                    direction: 'UP'
                });
                let direction = 'DOWN';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: DOWN, input direction: UP', function () {
                snake.setState({
                    direction: 'DOWN'
                });
                let direction = 'UP';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: LEFT, input direction: RIGHT', function () {
                snake.setState({
                    direction: 'LEFT'
                });
                let direction = 'RIGHT';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: RIGHT, input direction: LEFT', function () {
                snake.setState({
                    direction: 'RIGHT'
                });
                let direction = 'LEFT';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: UP, input directions: UP, LEFT, RIGHT', function () {
                snake.setState({
                    direction: 'UP'
                });
                let directions = ['LEFT', 'UP', 'RIGHT'];
                let isOpposite = false;
                for (let direction of directions) {
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
            it('Snake direction: DOWN, input directions: DOWN, LEFT, RIGHT', function () {
                snake.setState({
                    direction: 'DOWN'
                });
                let directions = ['DOWN', 'LEFT', 'RIGHT'];
                let isOpposite = false;
                for (let direction of directions) {
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
            it('Snake direction: LEFT, input directions: LEFT, UP, DOWN', function () {
                snake.setState({
                    direction: 'LEFT'
                });
                let directions = ['LEFT', 'UP', 'DOWN'];
                let isOpposite = false;
                for (let direction of directions) {
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
            it('Snake direction: RIGHT, input directions: RIGHT, UP, DOWN', function () {
                snake.setState({
                    direction: 'RIGHT'
                });
                let directions = ['RIGHT', 'UP', 'DOWN'];
                let isOpposite = false;
                for (let direction of directions) {
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
        });
        describe('function die', function () {
            it('should set status of Snake to "DEAD"', function () {
                snake.die();
                assert.equal(snake.status, 'DEAD');
            })
        })
        describe('function calculateVelocity', function () {
            it('should return an object with fields x and y for every possible direction', function () {
                let direction;
                let velocityObjects = [];

                //LEFT
                direction = 'LEFT';
                velocityObjects.push(snake.calculateVelocity(direction));
                //RIGHT
                direction = 'RIGHT';
                velocityObjects.push(snake.calculateVelocity(direction));
                //UP
                direction = 'UP';
                velocityObjects.push(snake.calculateVelocity(direction));
                //DOWN
                direction = 'DOWN';
                velocityObjects.push(snake.calculateVelocity(direction));

                for (let velocityObject of velocityObjects) {
                    assert.notEqual(velocityObject.x, undefined);
                    assert.notEqual(velocityObject.y, undefined);
                }
            })
            it('Calculating for direction LEFT', function () {
                let direction = 'LEFT';
                let baseVelocity = 1;
                snake.setState({
                    baseVelocity: baseVelocity
                })

                let velocity = snake.calculateVelocity(direction);
                assert.equal(velocity.x, -baseVelocity);
                assert.equal(velocity.y, 0);
            })
            it('Calculating for direction RIGHT', function () {
                let direction = 'RIGHT';
                let baseVelocity = 1;
                snake.setState({
                    baseVelocity: baseVelocity
                })

                let velocity = snake.calculateVelocity(direction);
                assert.equal(velocity.x, baseVelocity);
                assert.equal(velocity.y, 0);
            })
            it('Calculating for direction UP', function () {
                let direction = 'UP';
                let baseVelocity = 1;
                snake.setState({
                    baseVelocity: baseVelocity
                })

                let velocity = snake.calculateVelocity(direction);
                assert.equal(velocity.x, 0);
                assert.equal(velocity.y, -baseVelocity);
            })
            it('Calculating for direction DOWN', function () {
                let direction = 'DOWN';
                let baseVelocity = 1;
                snake.setState({
                    baseVelocity: baseVelocity
                })

                let velocity = snake.calculateVelocity(direction);
                assert.equal(velocity.x, 0);
                assert.equal(velocity.y, baseVelocity);
            })
        })
        describe('Getter functions', function () {
            describe('getter tail', function () {
                it("should return Snakes's body without it's head", function () {
                    let head = new IntCoordinate(0, 0);
                    let tail = [new IntCoordinate(1, 0), new IntCoordinate(2, 0)];
                    let body = [];
                    // with an actual tail
                    body.push(head, tail);
                    snake.setState({
                        body: body
                    });
                    let getterTail = snake.tail;
                    assert.deepEqual(getterTail, [tail]);

                    //with only a head
                    snake.setState({
                        body: [head]
                    });
                    getterTail = snake.tail;
                    assert.deepEqual(getterTail, []);

                });
            })
        })
    })

}