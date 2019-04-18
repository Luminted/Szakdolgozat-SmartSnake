import Model from '../model.js';
import config from '../../config/config.json';
import configError from '../errors/ConfigError.js';
import LeftTurnCommand from '../Commands/LeftTurnCommand';
import RightTurnCommand from '../Commands/RightTurnCommand';
import DownTurnCommand from '../Commands/DownTurnCommand';
import UpTurnCommand from '../Commands/UpTurnCommand';

import assert from 'assert';


export default {
    "snakeTest": describe('Unit testing snake.js', function () {
        let model = null;
        let snake = null;
        console.log("config", config)

        beforeEach(function () {
            model = new Model(config)
            snake = model.getEntityList().snake;
        });
        describe('function parseConfig', function(){
            it('should return an object with fields body: [{posX: integer, posY: integer}], direction: (LEFT | RIGHT | UP | DOWN), baseVelocity: integer', function(){
                let snakeConfig = {
                    startVelocity: "1",
                    baseLength: "2",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT"
                }
                let directions = new Set(['LEFT','RIGHT','UP','DOWN']);
                let parsedConfig = snake.parseConfig(snakeConfig);
                assert.equal(parsedConfig.body == undefined, false);
                assert.equal(parsedConfig.body instanceof Array, true);
                for(let node of parsedConfig.body){
                    assert(Number.isInteger(node.posX), true);
                    assert(Number.isInteger(node.posY), true);
                }
                assert.equal(Number.isInteger(parsedConfig.baseVelocity), true);
                assert.equal(directions.has(parsedConfig.direction), true);
            });
            it('should raise an error if the config is missing vital information', function(){
                let config1 = {
                    // startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT"
                }
                let config2 = {
                    startVelocity: "1",
                    // baseLength: "3",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT"
                }
                let config3 = {
                    startVelocity: "1",
                    baseLength: "3",
                    // startX: "0",
                    startY: "0",
                    startDirection: "RIGHT"
                }
                let config4 = {
                    startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    // startY: "0",
                    startDirection: "RIGHT"
                }
                let config5 = {
                    startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    startY: "0",
                    // startDirection: "RIGHT"
                }
                //TODO: check for custom error
                assert.throws(function() {snake.parseConfig(config1)},Error);
                assert.throws(function() {snake.parseConfig(config2)},Error);
                assert.throws(function() {snake.parseConfig(config3)},Error);
                assert.throws(function() {snake.parseConfig(config4)},Error);
                assert.throws(function() {snake.parseConfig(config5)},Error);
            });
            it('should not raise an error with a proper config', function(){
                let config = {
                    startVelocity: "1",
                    baseLength: "3",
                    startX: "0",
                    startY: "0",
                    startDirection: "RIGHT"
                }
                assert.doesNotThrow(function() {snake.parseConfig(config)}, Error);
            })

        });
        describe('function eat', function () {
            it('snake should grow the appropriate amount after eating food', function () {
                let foodValue = 3;
                let originalLength = snake.body.length;
                snake.eat(foodValue);
                let newLength = snake.body.length;

                assert.equal(newLength, originalLength + foodValue);
            });
        });
        describe('function calculateCommand', function () {
            it('it should return LeftTurnCommand', function () {
                snake.setState({
                    direction: "UP",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 14,
                    posY: 15
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "UP")
                assert.equal(command instanceof LeftTurnCommand, true);
            });

            it('it should not return LeftTurnCommand', function () {
                snake.setState({
                    direction: "RIGHT",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 14,
                    posY: 15
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(command instanceof LeftTurnCommand, false);
                assert.equal(snake.direction, "RIGHT");
            });

            it('it should return RightTurnCommand', function () {
                snake.setState({
                    direction: "UP",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 16,
                    posY: 15
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "UP");
                assert.equal(command instanceof RightTurnCommand, true);
            });

            it('it should not return RightTurnCommand', function () {
                snake.setState({
                    direction: "LEFT",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 14,
                    posY: 15
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "LEFT");
                assert.equal(command instanceof RightTurnCommand, false);
            });

            it('it should return UpTurnCommand', function () {
                snake.setState({
                    direction: "RIGHT",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 15,
                    posY: 14
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "RIGHT");
                assert.equal(command instanceof UpTurnCommand, true);
            });

            it('it should not return UpTurnCommand', function () {
                snake.setState({
                    direction: "DOWN",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 15,
                    posY: 14
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "DOWN");
                assert.equal(command instanceof UpTurnCommand, false);
            });

            it('it should return DownTurnCommand', function () {
                snake.setState({
                    direction: "RIGHT",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 15,
                    posY: 16
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "RIGHT");
                assert.equal(command instanceof DownTurnCommand, true);
            });

            it('it should not return DownTurnCommand', function () {
                snake.setState({
                    direction: "UP",
                });
                let from = {
                    posX: 15,
                    posY: 15
                }
                let to = {
                    posX: 15,
                    posY: 16
                }

                let command = snake.calculateCommand(from, to);

                assert.equal(snake.direction, "UP");
                assert.equal(command instanceof DownTurnCommand, false);
            });
        });
        describe("function calculateNextHead", function () {
            it('should return head with position x=16, y=15', function () {
                let head = {
                    posX: 15,
                    posY: 15
                }
                let velocityX = 1;
                let velocityY = 0;
                snake.setState({
                    body: [head]
                });
                let nextHead = snake.calculateNextHead(velocityX, velocityY)
                assert.equal(nextHead.posX, head.posX + velocityX);
                assert.equal(nextHead.posY, head.posY + velocityY);
            });
            it('should return head with position x=15, y=16', function () {
                let head = {
                    posX: 15,
                    posY: 15
                }
                let velocityX = 0;
                let velocityY = 1;
                snake.setState({
                    body: [head]
                });
                let nextHead = snake.calculateNextHead(velocityX, velocityY)                
                assert.equal(nextHead.posX, head.posX + velocityX);
                assert.equal(nextHead.posY, head.posY + velocityY);
            });
            it('should return an object with integer fields posX and posY',function(){
                let head = {
                    posX: 15,
                    posY: 15
                }
                let velocityX = 0;
                let velocityY = 1;
                snake.setState({
                    body: [head]
                });
                let nextHead = snake.calculateNextHead(velocityX, velocityY);
                assert.equal(Number.isInteger(nextHead.posX),true);
                assert.equal(Number.isInteger(nextHead.posY),true);
            });
        });

        describe("function reset", function () {
            it("should reset game state of snake to values defined in it's config and constructor", function () {
                let config = snake.config;
                let state = snake.state;
                let parsedConfig = snake.parseConfig(config);

                //scramble state
                let nextState = {
                    command: new LeftTurnCommand(),
                    tmpDirection: "TEST",
                    velocityX: "TEST",
                    velocityY: "TEST",
                    status: "TEST",
                }

                for (let key in Object.keys(parsedConfig)) {
                    nextState[key] = "TEST";
                }


                snake.setState(nextState);
                snake.reset();

                //initial state check
                assert.equal(state.command, undefined);
                assert.equal(state.tmpDirection, undefined);
                assert.equal(state.status, "ALIVE");

                //config check
                for (let key in Object.keys.parsedConfig) {
                    if (key == "body") {
                        assert.deepEqual(state.body, parsedConfig.body);
                    } else {
                        assert.equal(state[key], parsedConfig[key]);
                    }
                }

            });
        });
        describe('function isAlive', function(){
            it('should return ALIVE', function(){
                snake.setState({
                    status: 'ALIVE'
                });
                let isALive = snake.isAlive();
                assert.equal(isALive, true);
            });
            it('should return DEAD', function(){
                snake.setState({
                    status: 'DEAD'
                });
                let isALive = snake.isAlive();
                assert.equal(isALive, false);
            });
        })
        describe('function onNotify', function () {
            it('Notification: PILL_COLLISION. Should call eat function.', function () {
                let originalLength = snake.bodyLength;
                let notification = {
                    type: 'PILL_COLLISION',
                    nourishment: 2
                }
                snake.onNotify(null, notification);
                assert.equal(snake.bodyLength, originalLength + notification.nourishment);
            });
            it('Notification: WALL_COLLISION. Should set status to DEAD', function () {
                let notification = {
                    type: 'WALL_COLLISION'
                }
                snake.onNotify(null, notification);

                assert.equal(snake.status, 'DEAD');
            });
            it('Notification: BODY_COLLISION. Should set status to DEAD', function () {
                let notification = {
                    type: 'BODY_COLLISION'
                }
                snake.onNotify(null, notification);

                assert.equal(snake.status, 'DEAD');
            });
            it('Notification: TARGET_REACHED. Should set target to position of pill.', function () {
                let pill = model.getEntityList().pill;
                snake.setState({
                    target: {
                        posX: 15,
                        posY: 15
                    }
                });
                pill.setState({
                    posX: 16,
                    posY: 16
                });
                let notification = {
                    type: 'TARGET_REACHED'
                }
                snake.onNotify(null, notification);

                assert.equal(snake.target.posX, pill.position.posX);
                assert.equal(snake.target.posY, pill.position.posY);
            });
        });
        describe('function move', function(){
            it('should move head of snake by 1 to the right', function(){
                let velocityX = 1;
                let velocityY = 0;
                snake.setState({
                    body: [{posX: 1, posY: 1}],
                })
                let originalHeadX = snake.head.posX;
                let originalHeadY = snake.head.posY;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].posX, originalHeadX + velocityX);
                assert.equal(nextBody[0].posY, originalHeadY + velocityY);
            });
            it('should move head of snake by 1 to the left', function(){
                let velocityX = -1;
                let velocityY = 0;
                snake.setState({
                    body: [{posX: 1, posY: 1}],
                })
                let originalHeadX = snake.head.posX;
                let originalHeadY = snake.head.posY;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].posX, originalHeadX + velocityX);
                assert.equal(nextBody[0].posY, originalHeadY + velocityY);
            });
            it('should move head of snake by 1 upward', function(){
                let velocityX = 0;
                let velocityY = -1;
                snake.setState({
                    body: [{posX: 1, posY: 1}],
                })
                let originalHeadX = snake.head.posX;
                let originalHeadY = snake.head.posY;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].posX, originalHeadX + velocityX);
                assert.equal(nextBody[0].posY, originalHeadY + velocityY);
            });
            it('should move head of snake by 1 down', function(){
                let velocityX = 0;
                let velocityY = 1;
                snake.setState({
                    body: [{posX: 1, posY: 1}],
                })
                let originalHeadX = snake.head.posX;
                let originalHeadY = snake.head.posY;
                let nextBody = snake.move(velocityX, velocityY);
                assert.equal(nextBody[0].posX, originalHeadX + velocityX);
                assert.equal(nextBody[0].posY, originalHeadY + velocityY);
            });
        });
        describe('function handleInput', function(){
            it('should set state.tmpDirection to LEFT', function(){
                snake.setState({
                    direction: 'UP',
                    tmpDirection: undefined
                });
                let direction = 'LEFT';
                snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(snake.state.tmpDirection, 'LEFT');
            });
            it('should set state.tmpDirection to RIGHT', function(){
                snake.setState({
                    direction: 'UP',
                    tmpDirection: undefined
                });
                let direction = 'RIGHT';
                snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(snake.state.tmpDirection, 'RIGHT');
            });
            it('should set state.tmpDirection to UP', function(){
                snake.setState({
                    direction: 'LEFT',
                    tmpDirection: undefined
                });
                let direction = 'UP';
                snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(snake.state.tmpDirection, 'UP');
            });
            it('should set state.tmpDirection to DOWN', function(){
                snake.setState({
                    direction: 'LEFT',
                    tmpDirection: undefined
                });
                let direction = 'DOWN';
                snake.handleInput(direction);
                assert.equal(snake.isOppositeDirection(direction), false);
                assert.equal(snake.state.tmpDirection, 'DOWN');
            });
        });
        describe('function isOppositeDirection', function(){
            it('Snake direction: UP, input direction: DOWN', function(){
                snake.setState({
                    direction: 'UP'
                });
                let direction = 'DOWN';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: DOWN, input direction: UP', function(){
                snake.setState({
                    direction: 'DOWN'
                });
                let direction = 'UP';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: LEFT, input direction: RIGHT', function(){
                snake.setState({
                    direction: 'LEFT'
                });
                let direction = 'RIGHT';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: RIGHT, input direction: LEFT', function(){
                snake.setState({
                    direction: 'RIGHT'
                });
                let direction = 'LEFT';
                assert.equal(snake.isOppositeDirection(direction), true);
            });
            it('Snake direction: UP, input directions: UP, LEFT, RIGHT', function(){
                snake.setState({
                    direction: 'UP'
                });
                let directions = ['LEFT', 'UP', 'RIGHT'];
                let isOpposite = false;
                for(let direction of directions){
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
            it('Snake direction: DOWN, input directions: DOWN, LEFT, RIGHT', function(){
                snake.setState({
                    direction: 'DOWN'
                });
                let directions = ['DOWN', 'LEFT', 'RIGHT'];
                let isOpposite = false;
                for(let direction of directions){
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
            it('Snake direction: LEFT, input directions: LEFT, UP, DOWN', function(){
                snake.setState({
                    direction: 'LEFT'
                });
                let directions = ['LEFT', 'UP', 'DOWN'];
                let isOpposite = false;
                for(let direction of directions){
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
            it('Snake direction: RIGHT, input directions: RIGHT, UP, DOWN', function(){
                snake.setState({
                    direction: 'RIGHT'
                });
                let directions = ['RIGHT', 'UP', 'DOWN'];
                let isOpposite = false;
                for(let direction of directions){
                    isOpposite = isOpposite || snake.isOppositeDirection(direction);
                }
                assert.equal(isOpposite, false);
            });
        });
        describe('function calculateVelocity', function(){
            it('should return an object with fields x and y for every possible direction', function(){
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

                for(let velocityObject of velocityObjects){
                    assert.notEqual(velocityObject.x, undefined);
                    assert.notEqual(velocityObject.y, undefined);
                }
            })
            it('Calculating for direction LEFT', function(){
                let direction = 'LEFT';
                let baseVelocity = 1;
                snake.setState({
                    baseVelocity: baseVelocity
                })

                let velocity = snake.calculateVelocity(direction);
                assert.equal(velocity.x, -baseVelocity);
                assert.equal(velocity.y, 0);
            })
            it('Calculating for direction RIGHT', function(){
                let direction = 'RIGHT';
                let baseVelocity = 1;
                snake.setState({
                    baseVelocity: baseVelocity
                })

                let velocity = snake.calculateVelocity(direction);
                assert.equal(velocity.x, baseVelocity);
                assert.equal(velocity.y, 0);
            })
            it('Calculating for direction UP', function(){
                let direction = 'UP';
                let baseVelocity = 1;
                snake.setState({
                    baseVelocity: baseVelocity
                })

                let velocity = snake.calculateVelocity(direction);
                assert.equal(velocity.x, 0);
                assert.equal(velocity.y, -baseVelocity);
            })
            it('Calculating for direction DOWN', function(){
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
    })
}