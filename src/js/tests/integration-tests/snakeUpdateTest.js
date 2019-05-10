import LeftTurnCommand from '../../Commands/LeftTurnCommand';
import RightTurnCommand from '../../Commands/RightTurnCommand';
import DownTurnCommand from '../../Commands/DownTurnCommand';
import UpTurnCommand from '../../Commands/UpTurnCommand';
import IntCoordinate from '../../intCoordinate.js'

import assert from 'assert'
import cloneDeep from 'lodash/cloneDeep';
import sinon from 'sinon';
import Snake from '../../snake';
import Notifier from '../../notifier';
import Pill from '../../pill';


describe('Integration test of Snake', function () {
    let snake;
    let notifier;
    let pill;
    let mockCallbacks = {
        getEntityList: function(){}
    }
    let mockNotifier = {
        calculateStepCollisionType: function(){},
        subscribe: function(){}

    }
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
        limitX: "3",
        limitY: "3"
    }

    let mockStrategy = {
        pathfinder: function () {
            return [new IntCoordinate(1,0)]
        },
        targetSetter: function () {}
    }

    beforeEach(function setUp() {
        snake = new Snake(mockCallbacks, snakeConfig,mockStrategy, mockNotifier);
        pill = new Pill({}, pillConfig);
    });

    describe('function calculatePath', function () {
        it("should call function in state.strategy.pathfinder and return it's result", function () {
            let pathfinderStub = sinon.stub(snake.state.strategy, 'pathfinder');
            let path = [new IntCoordinate(1,0), new IntCoordinate(1,1)];
            pathfinderStub.returns(path);
            let calculatedPath = snake.calculatePath();
            assert.equal(pathfinderStub.called, true);
            assert.deepEqual(calculatedPath, path);
            pathfinderStub.restore();
        });
    });
     describe('function update where isAlive() = true', function () {

        beforeEach(function aliveAssertion() {
            assert.equal(snake.status, 'ALIVE');
        });

        it('should call calculatePath if state.strategy.pathfinder is not undefined', function () {
            let calculatePathSpy = sinon.spy(snake, 'calculatePath');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            calculateCommandStub.returns(undefined);
            snake.update();
            assert.notEqual(snake.state.strategy.pathfinder, undefined)
            assert.equal(calculatePathSpy.called, true);
        });
        it('should not call calculateCommand and calculatePath if state.strategy or state.strategy.pathfinder is undefined', function () {
            let calculateCommandSpy = sinon.spy(snake, 'calculateCommand');
            let calculatePathSpy = sinon.spy(snake, 'calculatePath');

            // state.strategy == undefined case
            snake.setState({
                strategy: undefined,
            });
            snake.update();
            assert.equal(calculateCommandSpy.called, false);
            assert.equal(calculatePathSpy.called, false);

            //state.strategy.pathfider == undefined case
            snake.setState({
                strategy: {}
            });
            snake.update();
            assert.equal(calculateCommandSpy.called, false);
            assert.equal(calculatePathSpy.called, false);

        })
        it("should call calculateCommand after calling calculatePath with the head of it's result and head of Snake", function () {
            let pathfinderStub = sinon.stub(snake.state.strategy, 'pathfinder');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            calculateCommandStub.returns(undefined);
            let path = [new IntCoordinate(1,0), new IntCoordinate(1,1)];
            pathfinderStub.returns(path);
            let snakeOriginalHead = snake.head;
            snake.update();
            let pathHead = path[0];
            assert.equal(pathfinderStub.called, true);
            assert.equal(calculateCommandStub.calledImmediatelyAfter(pathfinderStub), true);
            assert.equal(calculateCommandStub.calledWith(snakeOriginalHead, pathHead), true);
            pathfinderStub.restore();

        })

        it("should call Notifier.calculateStepCollisionType, once, with the head of move's result body, if notifier is not undefined", function () {
            let calculateStepCollisionTypeSpy = sinon.spy(mockNotifier, 'calculateStepCollisionType');
            let moveSpy = sinon.spy(snake, 'move');
            snake.update();
            assert.notEqual(snake.notifier, undefined);
            assert.equal(calculateStepCollisionTypeSpy.calledOnce, true);
            assert.equal(calculateStepCollisionTypeSpy.calledAfter(moveSpy), true);
            let nextHead = moveSpy.returnValues[0][0];
            assert.equal(calculateStepCollisionTypeSpy.calledOnceWith(nextHead), true);
            calculateStepCollisionTypeSpy.restore();
            
        });
        it('should call isAlive after calling Notifier.calculateStepCollisionType', function () {
            let isAliveSpy = sinon.spy(snake, 'isAlive');
            let calculateStepCollisionTypeSpy = sinon.spy(mockNotifier, 'calculateStepCollisionType');
            snake.update();
            assert.equal(isAliveSpy.calledAfter(calculateStepCollisionTypeSpy), true);
            calculateStepCollisionTypeSpy.restore()
        });

        it('should execute result command of calculateCommand if it is not undefined', function () {
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let command = new DownTurnCommand();
            let commandExecuteSpy = sinon.spy(command, 'execute');
            calculateCommandStub.returns(command);

            snake.update();
            let returnValue = calculateCommandStub.returnValues[0];
            assert.equal(calculateCommandStub.called, true);
            assert.notEqual(returnValue, undefined);
            assert.equal(commandExecuteSpy.called, true);

        });
        it("should execute state.command if it is not undefined and calculateCommand's result is undefined", function () {
            let command = new DownTurnCommand();
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let commandExecuteSpy = sinon.spy(command, 'execute');
            calculateCommandStub.returns(undefined);

            snake.setState({
                command: command,
            });
            snake.update();
            assert.equal(calculateCommandStub.returnValues[0], undefined);
            assert.equal(commandExecuteSpy.called, true);
        });
        it("should call the returned command from calculateCommand if it is not undefined and state.command is not undefined", function () {
            let command = new DownTurnCommand();
            let calculatedCommand = new UpTurnCommand();
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let commandExecuteSpy = sinon.spy(command, 'execute');
            let calculatedCommandExecuteSpy = sinon.spy(calculatedCommand, 'execute')
            calculateCommandStub.returns(calculatedCommand);
            snake.setState({
                direction: 'RIGHT',
                command: command,
            });
            snake.update();
            assert.equal(commandExecuteSpy.called, false);
            assert.equal(calculatedCommandExecuteSpy.called, true);
        })
        it('should call calculateVelocity immediately after calculateCommand if it was called and it returned undefined', function () {
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity')
            calculateCommandStub.returns(undefined);

            snake.update();
            let command = calculateCommandStub.returnValues[0];
            assert.equal(calculateCommandStub.called, true);
            assert.equal(command, undefined);
            assert.equal(calculateVelocitySpy.calledImmediatelyAfter(calculateCommandStub), true);

        });
        it("should call calculateVelocity with the result of the executed command if the result is not undefined", function () {
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let command = new DownTurnCommand();
            let commandExecuteStub = sinon.stub(command, 'execute');
            commandExecuteStub.returns('DOWN');
            calculateCommandStub.returns(command);
            snake.setState({
                direction: 'RIGHT'
            });
            snake.update();

            assert.equal(calculateCommandStub.called, true);
            let returnDirection = command.execute(snake);
            assert.notEqual(returnDirection, undefined);
            assert.equal(calculateVelocitySpy.calledWith(returnDirection), true);
        });
        it('should call calculateVelocity with the value snake.status.direction if there was no command executed', function () {
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');

            //forcing calculateCommand to return undefined
            snake.setState({
                direction: 'RIGHT',
                command: undefined
            });
            snake.update();
            let calculatedCommand = calculateCommandStub.returnValues[0];
            assert.equal(calculatedCommand, undefined);
            assert.equal(calculateVelocitySpy.calledWithExactly(snake.state.direction), true);
        });

        it('should call move with the result of calculateVelocity', function () {
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity');
            let moveSpy = sinon.spy(snake, 'move');

            snake.update();
            let velocity = calculateVelocitySpy.returnValues[0];
            assert.equal(moveSpy.calledAfter(calculateVelocitySpy), true);
            assert(moveSpy.calledWithExactly(velocity.x, velocity.y), true);
        });

        it('should call setState immediately after isAlive', function () {
            let isAliveSpy = sinon.spy(snake, 'isAlive');
            let setStateSpy = sinon.spy(snake, 'setState');
            snake.update();
            assert.equal(setStateSpy.calledImmediatelyAfter(isAliveSpy), true);
        })

        it('should call setState with the object: {direction: snake.state.direction or the non-undefined result of the executed command, body: result of move, velocity: result of calculateVelocity, path:[IntCoordinates]} ', function () {
            let setStateSpy = sinon.spy(snake, 'setState');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity');
            let moveSpy = sinon.spy(snake, 'move');
            let pathfinderStub = sinon.stub(snake.state.strategy, 'pathfinder');
            let command = new DownTurnCommand();
            let commandExecuteStub = sinon.stub(command, 'execute');
            calculateCommandStub.returns(undefined);
            pathfinderStub.returns([new IntCoordinate(1, 1), new IntCoordinate(1, 2)])
            commandExecuteStub.returns('DOWN');
            // Where command returns non-undefined
            snake.setState({
                direction: 'RIGHT',
                command: command
            });

            setStateSpy.resetHistory();
            snake.update();
            let commandReturnValue = commandExecuteStub.returnValues[0]
            let nextBody = moveSpy.returnValues[0];
            let nextDirection = commandReturnValue || snake.direction;
            let nextVelocity = calculateVelocitySpy.returnValues[0];
            let nextPath = pathfinderStub.returnValues[0];
            let nextState = {
                velocity: nextVelocity,
                body: nextBody,
                direction: nextDirection,
                path: nextPath,
            };
            assert.notEqual(commandReturnValue, undefined);
            assert.equal(nextDirection, commandReturnValue);
            assert.equal(setStateSpy.calledWith(nextState), true);

            //Where command returns undefined

            setStateSpy.resetHistory();
            calculateVelocitySpy.resetHistory();
            moveSpy.resetHistory();
            pathfinderStub.resetHistory();
            calculateCommandStub.resetHistory();
            commandExecuteStub.reset();


            commandExecuteStub.returns(undefined);
            snake.setState({
                direction: 'RIGHT',
            });
            setStateSpy.resetHistory();
            snake.update();

            commandReturnValue = commandExecuteStub.returnValues[0];
            nextBody = moveSpy.returnValues[0];
            nextDirection = commandReturnValue || snake.direction;
            nextVelocity = calculateVelocitySpy.returnValues[0];
            nextPath = pathfinderStub.returnValues[0];


            nextState = {
                body: nextBody,
                direction: nextDirection,
                velocity: nextVelocity,
                path: nextPath
            }

            assert.equal(commandReturnValue, undefined);
            assert.equal(nextDirection, snake.direction);
            assert.equal(setStateSpy.calledWithExactly(nextState), true);

            setStateSpy.restore();
            calculateVelocitySpy.restore();
            moveSpy.restore();
            pathfinderStub.restore();
        });
        it('should call processNotification if the notificationBuffer is not empty', function () {
            let processNotificationpy = sinon.spy(snake, 'processNotification');
            let notification = {
                type: 'TEST',
                payload: {}
            }

            snake.setState({
                notificationBuffer: [notification]
            });
            assert.equal(snake.state.notificationBuffer.length > 0, true);
            snake.update();
            assert.equal(processNotificationpy.called, true);
        });
        it('should empty notificationBuffer', function () {
            let processNotificationSpy = sinon.spy(snake, 'processNotification');
            let notifications = [{
                    type: 'TEST1',
                    payload: {}
                },
                {
                    type: 'TEST2',
                    payload: {}
                }
            ]
            snake.setState({
                notificationBuffer: notifications
            })
            snake.update();
            assert.equal(processNotificationSpy.calledTwice, true);
            assert.equal(snake.state.notificationBuffer.length, 0);

        })
        it('if die has been called, isAlive should be false', function () {
            let dieSpy = sinon.spy(snake, 'die');
            let notification = {
                type: 'WALL_COLLISION'
            }
            //forcing WALL_COLLISION notification
            snake.setState({
                notificationBuffer: [notification]
            });
            snake.update();
            assert.equal(dieSpy.called, true);
            let isAlive = snake.isAlive();
            assert.equal(isAlive, false);
        });

    });
    describe('function update where isAlive = false', function () {
        it('should not change the inner state of snake', function () {
            snake.setState({
                status: 'DEAD',
            })
            let originalState = cloneDeep(snake.state);
            snake.update();
            assert.equal(snake.isAlive(), false);
            assert.deepEqual(snake.state, originalState);
        });
    });
    describe('function processNotification', function () {
        it("Notification: PILL_COLLISION.Should call eat with payload Pill's pillValue and append the body in nextState with result", function () {
            let eatSpy = sinon.spy(snake, 'eat');
            let body = [new IntCoordinate(1, 1), new IntCoordinate(2, 1)]
            let nextState = {
                body: body
            }
            let notification = {
                type: 'PILL_COLLISION',
                payload: {
                    entity: pill
                }
            }
            snake.processNotification(notification, nextState);
            let eatResult = eatSpy.returnValues[0];
            body.push(...eatResult);
            assert.equal(eatSpy.calledWithExactly(notification.payload.entity.pillValue), true);
            assert.deepEqual(nextState.body, body);
        });
        it("Notification: WALL_COLLISION. Should call die", function () {
            let dieSpy = sinon.spy(snake, 'die');
            let notification = {
                type: 'WALL_COLLISION',
                payload: {
                    entity: pill
                }
            }
            snake.processNotification(notification);
            assert.equal(dieSpy.called, true);
        });
        it("Notification: BODY_COLLISION. Should call die.", function () {
            let dieSpy = sinon.spy(snake, 'die');
            let notification = {
                type: 'BODY_COLLISION',
                payload: {
                    entity: pill
                }
            }
            snake.processNotification(notification);
            assert.equal(dieSpy.called, true);
        });
        it("Notification: TARGET_REACHED. Should call state.strategy.targetSetter with itself if state.strategy and state.strategy.targetSetter are not undefined", function () {
            let targetSetterSpy = sinon.spy(snake.state.strategy, 'targetSetter');
            let notification = {
                type: 'TARGET_REACHED',
                payload: {
                    entity: pill
                }
            }
            snake.processNotification(notification);
            assert.notEqual(snake.state.strategy, undefined);
            assert.notEqual(snake.state.strategy.targetSetter, undefined);
            assert.equal(targetSetterSpy.called, true);
            assert.equal(targetSetterSpy.calledWith(snake), true);
        });
    })
    describe('function onNotify', function () {
        it('Notification: PILL_COLLISION. Should call storeNotification with type="PILL_COLLISION",  which should return true.', function () {
            let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
            let notification = {
                type: 'PILL_COLLISION',
            }
            snake.onNotify(pill, notification);
            let returnValue = storeNotificationSpy.returnValues[0];
            let callWithType = storeNotificationSpy.args[0][0].type
            assert.equal(callWithType, 'PILL_COLLISION');
            assert.equal(returnValue, true);
        });
        it('Notification: WALL_COLLISION. Should call storeNotification with type="WALL_COLLISION", which should retrn true', function () {
            let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
            let notification = {
                type: 'WALL_COLLISION'
            }
            snake.onNotify(null, notification);

            snake.onNotify(pill, notification);
            let returnValue = storeNotificationSpy.returnValues[0];
            let callWithType = storeNotificationSpy.args[0][0].type
            assert.equal(callWithType, 'WALL_COLLISION');
            assert.equal(returnValue, true);
        });
        it('Notification: BODY_COLLISION. Should call storeNotification with type="BODY_COLLISION", which should return true', function () {
            let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
            let notification = {
                type: 'BODY_COLLISION'
            }
            snake.onNotify(snake, notification);
            let returnValue = storeNotificationSpy.returnValues[0];
            let callWithType = storeNotificationSpy.args[0][0].type
            assert.equal(callWithType, 'BODY_COLLISION');
            assert.equal(returnValue, true);
        });
        it('Notification: TARGET_REACHED. Should call storeNotification with type="TARGET_REACHED", which should return true.', function () {
            let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
            snake.setState({
                target: new IntCoordinate(15, 15)
            });
            pill.setState({
                position: new IntCoordinate(16, 16)
            });
            let notification = {
                type: 'TARGET_REACHED'
            }
            snake.onNotify(snake.target, notification);

            let returnValue = storeNotificationSpy.returnValues[0];
            let callWithType = storeNotificationSpy.args[0][0].type
            assert.equal(callWithType, 'TARGET_REACHED');
            assert.equal(returnValue, true);
        });
    });
})