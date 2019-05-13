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
        getEntityList: function () {},
        propagateRuntime: function(){}
    }
    let mockNotifier = {
        calculateStepCollisionType: function () {},
        subscribe: function () {}

    }
    let snakeConfig = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar",
        limitX: "3",
        limitY: "3"
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
            return [new IntCoordinate(1, 0)]
        },
        calculateTarget: function (pills) {}
    }

    beforeEach(function setUp() {

        snake = new Snake(mockCallbacks, snakeConfig, mockStrategy, mockNotifier);
        pill = new Pill({}, pillConfig);
    });

    describe('function calculatePath', function () {
        it("should call function in state.strategy.pathfinder with itself and callbacks.propagateRuntime with ID and calculated runtime of pathfinder and return it's result", function () {
            let pathfinderStub = sinon.stub(snake.state.strategy, 'pathfinder');
            let propagateRuntimeSpy = sinon.spy(mockCallbacks, 'propagateRuntime')
            let path = [new IntCoordinate(1, 0), new IntCoordinate(1, 1)];
            pathfinderStub.returns(path);

            let calculatedPath = snake.calculatePath();

            assert.equal(pathfinderStub.called, true);
            assert.equal(propagateRuntimeSpy.called, true);
            assert.equal(propagateRuntimeSpy.calledWith(snake.ID), true);
            assert.deepEqual(calculatedPath, path);
            pathfinderStub.restore();
        });
        it('it should return undefined if state.strategy or state.strategy.pathfinder is undefined', function () {
            let calculatedPath;

            // pathfinder undefined case
            snake.setState({
                strategy: {}
            });
            calculatedPath = snake.calculatePath();
            assert.equal(calculatedPath, undefined);

            // strategy undefined case
            snake.setState({
                strategy: undefined
            });
            calculatedPath = snake.calculatePath();
            assert.equal(calculatedPath, undefined);
        });
    });
    describe('function update where isAlive() = true', function () {

        beforeEach(function aliveAssertion() {
            assert.equal(snake.status, 'ALIVE');
        });

        it('should call calculatePath before calculateCommand', function () {
            let calculatePathSpy = sinon.spy(snake, 'calculatePath');
            let calculateCommandSpy = sinon.spy(snake, 'calculateCommand');

            snake.update();

            assert.equal(calculatePathSpy.calledBefore(calculateCommandSpy), true);
            calculatePathSpy.restore();
            calculateCommandSpy.restore();
        });
        it("should call calculateCommand with Snake.head and first element of result of calculatePath if it is not undefined or empty", function () {
            let calculatePathStub = sinon.stub(snake, 'calculatePath');
            let calculateCommandSpy = sinon.spy(snake, 'calculateCommand');
            let path = [new IntCoordinate(1, 0), new IntCoordinate(1, 1)];
            let snakeHead = new IntCoordinate(0, 0);
            calculatePathStub.returns(path);
            snake.setState({
                body: [snakeHead]
            });

            snake.update();

            assert.equal(calculatePathStub.calledBefore(calculateCommandSpy), true);
            assert.equal(calculateCommandSpy.called, true);
            assert.equal(calculateCommandSpy.calledWith(snakeHead, path[0]), true);

            calculatePathStub.restore();
            calculateCommandSpy.restore();

        });
        it('should not call calculateCommand if result of calculatePath is undefined or empty', function () {
            let calculatePathStub = sinon.stub(snake, 'calculatePath');
            let calculateCommandSpy = sinon.spy(snake, 'calculateCommand');
            let path;

            //undefined case
            path = undefined;
            calculatePathStub.returns(path);

            snake.update();

            assert.equal(calculateCommandSpy.called, false);
            calculatePathStub.reset();

            //empty case
            path = [];
            calculatePathStub.returns(path);

            snake.update();

            assert.equal(calculateCommandSpy.called, false);

            calculatePathStub.restore();
            calculateCommandSpy.restore();
        })

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

            calculateCommandStub.restore();
            commandExecuteSpy.restore();

        });
        it("should execute state.command if calculateCommand's result is undefined", function () {
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

            calculateCommandStub.restore();
            commandExecuteSpy.restore();
        });

        it("should call calculateVelocity with the result of the executed command if the result is not undefined", function () {
            let calculatePathStub = sinon.stub(snake, 'calculatePath');
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let command = new DownTurnCommand();
            let commandExecuteStub = sinon.stub(command, 'execute');
            let path = [new IntCoordinate(1, 0)];
            calculatePathStub.returns(path);
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

            calculatePathStub.restore();
            calculateVelocitySpy.restore();
            calculateCommandStub.restore();
            commandExecuteStub.restore();
        });

        it('should call calculateVelocity with the value snake.status.direction if there was no command to be executed', function () {
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            calculateCommandStub.returns(undefined);

            snake.setState({
                command: undefined
            });

            snake.update();

            let calculatedCommand = calculateCommandStub.returnValues[0];
            assert.equal(calculatedCommand, undefined);
            assert.equal(calculateVelocitySpy.calledWithExactly(snake.state.direction), true);

            calculateVelocitySpy.restore();
            calculateCommandStub.restore();
        });

        it('should call move with the result of calculateVelocity', function () {
            let calculateVelocityStub = sinon.stub(snake, 'calculateVelocity');
            let moveSpy = sinon.spy(snake, 'move');
            let velocity = {
                x: 1,
                y: 0
            };
            calculateVelocityStub.returns(velocity);

            snake.update();

            assert.equal(moveSpy.calledAfter(calculateVelocityStub), true);
            assert(moveSpy.calledWithExactly(velocity.x, velocity.y), true);

            calculateVelocityStub.restore();
            moveSpy.restore();
        });

        it("should call Notifier.calculateStepCollisionType, once, with the head of move's result body and Snake's ID, if notifier is not undefined", function () {
            let calculateStepCollisionTypeSpy = sinon.spy(mockNotifier, 'calculateStepCollisionType');
            let moveStub = sinon.stub(snake, 'move');
            let nextBody = [new IntCoordinate(1, 1), new IntCoordinate(1, 2)];
            moveStub.returns(nextBody);

            snake.update();

            assert.notEqual(snake.notifier, undefined);
            assert.equal(calculateStepCollisionTypeSpy.calledAfter(moveStub), true);
            let nextHead = nextBody[0];
            assert.equal(calculateStepCollisionTypeSpy.calledOnceWith(nextHead,snake.ID), true);

            moveStub.restore();
            calculateStepCollisionTypeSpy.restore();

        });

        it("should call processNotification if the notificationBuffer is not empty", function () {
            let processNotificationSpy = sinon.spy(snake, 'processNotification');
            let notification = {
                type: 'TEST',
                payload: {
                    entity: {
                        ID: snake.ID
                    }
                }
            }

            snake.setState({
                notificationBuffer: [notification]
            });
            assert.equal(snake.state.notificationBuffer.length > 0, true);
            snake.update();
            assert.equal(processNotificationSpy.calledWith(notification), true);

            processNotificationSpy.restore();
        });

        it('should not call processNotification if the notificationBuffer is empty', function () {
            let processNotificationSpy = sinon.spy(snake, 'processNotification');

            snake.setState({
                notificationBuffer: []
            });
            assert.equal(snake.state.notificationBuffer.length == 0, true);

            snake.update();

            assert.equal(processNotificationSpy.called, false);

            processNotificationSpy.restore();
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

            processNotificationSpy.restore();

        });

        it('should call isAlive immediately after calling processNotification if notificationBuffer was not empty', function () {
            let isAliveSpy = sinon.spy(snake, 'isAlive');
            let processNotificationSpy = sinon.spy(snake, 'processNotification');
            let notification = {
                type: 'TEST',
                payload: {}
            }
            snake.setState({
                notificationBuffer: [notification]
            });

            assert.notEqual(snake.state.notificationBuffer.length, 0);

            snake.update();

            assert.equal(isAliveSpy.calledImmediatelyAfter(processNotificationSpy), true);

            isAliveSpy.restore();
            processNotificationSpy.restore();
        });

        it('should call isAlive immediately after calling Notifier.calculateStepCollisionType if Snake.notifier is not undefined and state.notificationBuffer is empty', function () {
            let isAliveSpy = sinon.spy(snake, 'isAlive');
            let calculateStepCollisionTypeSpy = sinon.spy(mockNotifier, 'calculateStepCollisionType');

            snake.setState({
                notificationBuffer: []
            });

            assert.notEqual(snake.notifier, undefined);
            assert.equal(snake.state.notificationBuffer.length, 0)

            snake.update();

            assert.equal(isAliveSpy.calledImmediatelyAfter(calculateStepCollisionTypeSpy), true);

            isAliveSpy.restore();
            calculateStepCollisionTypeSpy.restore();
        });

        it('should call isAlive immediately after calling Notifier.calculateStepCollisionType if Snake.notifier is undefined and state.notificationBuffer is empty', function () {
            let isAliveSpy = sinon.spy(snake, 'isAlive');
            let moveSpy = sinon.spy(snake, 'move');

            snake.notifier = undefined;
            snake.setState({
                notificationBuffer: []
            });

            assert.equal(snake.notifier, undefined);
            assert.equal(snake.state.notificationBuffer.length, 0)

            snake.update();

            assert.equal(isAliveSpy.calledImmediatelyAfter(moveSpy), true);

            isAliveSpy.restore();
            moveSpy.restore();
        });

        it('should call setState immediately after isAlive', function () {
            let isAliveSpy = sinon.spy(snake, 'isAlive');
            let setStateSpy = sinon.spy(snake, 'setState');

            snake.update();

            assert.equal(setStateSpy.calledImmediatelyAfter(isAliveSpy), true);

            isAliveSpy.restore();
            setStateSpy.restore();
        });

        it('should call setState with the object: {direction: snake.state.direction or the non-undefined result of the executed command, body: result of move, velocity: result of calculateVelocity, path: result of calculatePath} if isAlive returns true', function () {
            let isAliveStub = sinon.stub(snake, 'isAlive');
            let setStateSpy = sinon.spy(snake, 'setState');
            let calculateCommandStub = sinon.stub(snake, 'calculateCommand');
            let moveStub = sinon.stub(snake, 'move');
            let calculatePathStub = sinon.stub(snake, 'calculatePath');
            let calculateVelocityStub = sinon.stub(snake, 'calculateVelocity');
            let command = new DownTurnCommand();
            let commandExecuteSpy = sinon.spy(command, 'execute');
            let nextBody = [new IntCoordinate(0, 0), new IntCoordinate(1, 0)];
            let path = [new IntCoordinate(0, 1)];
            let direction = 'LEFT';
            let nextVelocity = {
                x: -1,
                y: 0
            }
            let nextState;
            calculateVelocityStub.returns(nextVelocity);
            calculatePathStub.returns(path);
            moveStub.returns(nextBody);
            isAliveStub.returns(true);

            //command is executed case
            calculateCommandStub.returns(command);
            snake.setState({
                command: undefined
            });

            snake.update();

            let commandResult = commandExecuteSpy.returnValues[0];
            nextState = {
                direction: commandResult,
                body: nextBody,
                velocity: nextVelocity,
                path: path
            }
            assert.equal(commandExecuteSpy.called, true);
            assert.notEqual(commandResult, undefined);
            assert.equal(setStateSpy.calledWith(nextState), true);

            calculateCommandStub.reset();
            setStateSpy.resetHistory();
            commandExecuteSpy.resetHistory();

            //command not executed case
            calculateCommandStub.returns(undefined);
            snake.setState({
                command: undefined,
                direction: direction
            });

            snake.update();

            nextState = {
                direction: direction,
                body: nextBody,
                velocity: nextVelocity,
                path: path
            }
            assert.equal(commandExecuteSpy.called, false);
            assert.notEqual(commandResult, undefined);
            assert.equal(setStateSpy.calledWith(nextState), true);

        });

    });
    describe('function update where isAlive() = false', function () {
        it('should not call setState', function () {
            snake.setState({
                status: 'DEAD',
            });

            snake.update();

            let setStateSpy = sinon.spy(snake, 'setState');
            assert.equal(setStateSpy.called, false)
        });
        it('should not call calculatePath, calculateVelocity or move', function () {
            let calculatePathSpy = sinon.spy(snake, 'calculatePath');
            let calculateVelocitySpy = sinon.spy(snake, 'calculateVelocity');
            let moveSpy = sinon.spy(snake, 'move');

            assert.equal(calculatePathSpy.called, false);
            assert.equal(calculateVelocitySpy.called, false);
            assert.equal(moveSpy.called, false);

            calculatePathSpy.restore();
            calculateVelocitySpy.restore();
            moveSpy.restore();

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
                    pill: pill,
                }
            }
            let pillValue = pill.pillValue;

            snake.processNotification(notification, nextState);

            assert.equal(eatSpy.called, true);
            assert.equal(eatSpy.calledWith(pillValue), true);
            let eatResult = eatSpy.returnValues[0];
            body.push(...eatResult);
            assert.deepEqual(nextState.body, body);
        });
        it("Notification: WALL_COLLISION. Should call die", function () {
            let dieSpy = sinon.spy(snake, 'die');
            let notification = {
                type: 'WALL_COLLISION',
                payload: {
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
                }
            }
            snake.processNotification(notification);
            assert.equal(dieSpy.called, true);
        });
        it("Notification: TARGET_REACHED. Should call state.strategy.calculateTarget with itself and set state.target to the result, if state.strategy and state.strategy.calculateTarget are not undefined", function () {
            let calculateTargetSpy = sinon.spy(snake.state.strategy, 'calculateTarget');
            let nextState = {
                target: undefined
            }
            let notification = {
                type: 'TARGET_REACHED',
                payload: {
                }
            }
            assert.notEqual(snake.state.strategy, undefined);
            assert.notEqual(snake.state.strategy.calculateTarget, undefined);

            snake.processNotification(notification,nextState);

            assert.equal(calculateTargetSpy.called, true);
            assert.equal(calculateTargetSpy.calledWith(snake), true);
            let newTarget = calculateTargetSpy.returnValues[0];
            assert.deepEqual(nextState.target, newTarget);
        });
    })
    describe('function onNotify', function () {
        describe("PILL_COLLISION case:", function () {
            it("should call storeNotification with notification ={type:'PILL_COLLISION', and palyoad={pill: event.pill}}  which should return true if entity.ID matches Snake's ID then it should ", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'PILL_COLLISION',
                    pill: pill
                }
                snake.onNotify(snake, notification);
                let returnValue = storeNotificationSpy.returnValues[0];
                let callWithType = storeNotificationSpy.args[0][0].type;
                let callWithPayload = storeNotificationSpy.args[0][0].payload;
                assert.equal(callWithType, 'PILL_COLLISION');
                assert.equal(callWithPayload.pill.ID, pill.ID);
                assert.equal(returnValue, true);
            });
            it("should not call storeNotification if entity.ID does not match Snake's ID", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'PILL_COLLISION',
                    pill: pill
                }
                let entity = {
                    ID: 'TEST'
                }

                snake.onNotify(entity, notification);

                assert.notEqual(snake.ID, entity.ID);
                assert.equal(storeNotificationSpy.called, false);
            });
        });
        describe("WALL_COLLISION case:", function () {
            it("should call storeNotification with notification = {type:'WALL_COLLISION', payload:{}} which should retrn true if entity.ID matches Snake's ID.", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'WALL_COLLISION'
                }
                snake.onNotify(snake, notification);

                snake.onNotify(pill, notification);
                let returnValue = storeNotificationSpy.returnValues[0];
                let callWithType = storeNotificationSpy.args[0][0].type;
                assert.equal(callWithType, 'WALL_COLLISION');
                assert.equal(returnValue, true);
            });
            it("should not call storeNotification if entity.ID does not match Snake's ID", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'WALL_COLLISION',
                    pill: pill
                }
                let entity = {
                    ID: 'TEST'
                }

                snake.onNotify(entity, notification);

                assert.notEqual(snake.ID, entity.ID);
                assert.equal(storeNotificationSpy.called, false);
            });
        });
        describe("BODY_COLLISION case:", function () {
            it("should call storeNotification withnotification = {type:'BODY_COLLISION', payload:{}}, which should return true if entity.ID matches Snake's ID", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'BODY_COLLISION'
                }
                snake.onNotify(snake, notification);
                let returnValue = storeNotificationSpy.returnValues[0];
                let callWithType = storeNotificationSpy.args[0][0].type;
                assert.equal(callWithType, 'BODY_COLLISION');
                assert.equal(returnValue, true);
            });
            it("should not call storeNotification if entity.ID does not match Snake's ID", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'BODY_COLLISION',
                    pill: pill
                }
                let entity = {
                    ID: 'TEST'
                }

                snake.onNotify(entity, notification);

                assert.notEqual(snake.ID, entity.ID);
                assert.equal(storeNotificationSpy.called, false);
            });
        });
        describe("TARGET_REACHED case:", function () {
            it("should call storeNotification with notification = {type:'TARGET_REACHED', payload:{}}, which should return true if entity.ID matches Snake's ID.", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'TARGET_REACHED'
                }
                snake.onNotify(snake, notification);

                let returnValue = storeNotificationSpy.returnValues[0];
                let callWithType = storeNotificationSpy.args[0][0].type;
                assert.equal(callWithType, 'TARGET_REACHED');
                assert.equal(returnValue, true);
            });
            it("should not call storeNotification if entity.ID does not match Snake's ID", function () {
                let storeNotificationSpy = sinon.spy(snake, 'storeNotification');
                let notification = {
                    type: 'TARGET_REACHED',
                    pill: pill
                }
                let entity = {
                    ID: 'TEST'
                }

                snake.onNotify(entity, notification);

                assert.notEqual(snake.ID, entity.ID);
                assert.equal(storeNotificationSpy.called, false);
            });
        });
    });
})