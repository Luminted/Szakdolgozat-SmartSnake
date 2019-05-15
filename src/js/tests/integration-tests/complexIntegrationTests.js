import sinon from 'sinon';
import assert from 'assert';
import Model from '../../model';
import IntCoordinate from '../../intCoordinate';
import cloneDeep from 'lodash/cloneDeep';
import LeftTurnCommand from '../../Commands/LeftTurnCommand';
import ObserverEntity from '../../AbstractClasses/ObserverEntity.js';
import Strategy from '../../AbstractClasses/Strategy'

// Testing module integrations by calling their update functions and validating the results
describe('Running complex integration tests', function () {
    class MockObserverEntityClass extends ObserverEntity {
        constructor() {
            super();
        }
        onNotify(entity, event) {}
        update() {}
        reset() {}
    }
    class mockStrategyClass1 extends Strategy {
        constructor(callbacks) {
            super();
            this.callbacks = callbacks;
        }

        pathfinder() {}
        calculateTarget() {}
    }

    class mockStrategyClass2 extends Strategy {
        constructor(callbacks) {
            super();
            this.callbacks = callbacks;
        }

        pathfinder() {}
        calculateTarget() {}
    }

    class mockStrategyClass3 extends Strategy {
        constructor(callbacks) {
            super();
            this.callbacks = callbacks;
        }

        pathfinder() {}
        calculateTarget() {}
    }

    let mockStrategiesIndex = {
        mockStrategy1: mockStrategyClass1,
        mockStrategy2: mockStrategyClass2,
        mockStrategy3: mockStrategyClass3
    }
    let mockCallbacks = {
        getEntityList: function () {
            return {
                snakes: [],
                pills: [],
                board: []
            }
        }
    }
    let boardConfig = {
        width: "4",
        height: "4"
    }
    let mainConfig = {
        simulationSpeed: 10
    }
    let snakeConfig1 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "mockStrategy1",
        limitX: "4",
        limitY: "4"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "1",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "mockStrategy2",
        limitX: "4",
        limitY: "4"
    }
    let pillConfig1 = {
        pillValue: "1",
        startPosX: "2",
        startPosY: "2",
    }
    let pillConfig2 = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "2",
    }
    let multiEntityConfig = {
        snakeConfigs: [snakeConfig1, snakeConfig2],
        pillConfigs: [pillConfig1, pillConfig2],
        boardConfig: boardConfig,
        main: mainConfig
    }
    let singleEntityConfig = {
        snakeConfigs: [snakeConfig1],
        pillConfigs: [pillConfig1],
        boardConfig: boardConfig,
        main: mainConfig
    }

    let oneSnakeOnlyConfig = {
        snakeConfigs: [snakeConfig1],
        pillConfigs: [],
        boardConfig: boardConfig,
        main: mainConfig
    }

    let model;
    let mockObserverEntity;

    let curledUpBody = [new IntCoordinate(1, 1), new IntCoordinate(2, 1), new IntCoordinate(2, 2), new IntCoordinate(1, 2), new IntCoordinate(0, 2)]
    let upperLeftCorner = new IntCoordinate(0, 0);
    let lowerLeftCorner = new IntCoordinate(0, 3);
    let upperRightCorner = new IntCoordinate(3, 0);
    let lowerRightCorner = new IntCoordinate(3, 3);

    beforeEach(function setUp() {
        mockObserverEntity = new MockObserverEntityClass();
    });

    describe('Cases without pathfinding, single Snake entity and single Pill entity', function () {
        describe('Collisions', function () {
            describe('WALL_COLLISION case:', function () {
                describe('Snake starts in upper left corner', function () {
                    it('Snake takes a step left. After tick finishes Snake should be dead, Snake head position should not be out of bounds, Board update does not throw error, Pill state should be unchanged.', function () {
                        let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                        let model = new Model(singleEntityConfig, mockStrategiesIndex);
                        let snake = model.getEntityList().snakes[0];
                        let pill = model.getEntityList().pills[0];
                        let board = model.getEntityList().board;
                        let boardUpdateSpy = sinon.spy(board, 'update');
                        let direction = 'LEFT'
                        model.notifier.subscribe(mockObserverEntity);
                        snake.setState({
                            body: [upperLeftCorner],
                            direction: direction
                        });
                        pill.setState({
                            position: new IntCoordinate(3, 3)
                        });
                        let originalPillState = cloneDeep(pill.state);
                        model.update();
                        let snakeHeadPosition = snake.head;
                        let snakeStatus = snake.status;
                        let updatedPillState = cloneDeep(pill.state);

                        assert.equal(snakeHeadPosition.nullPosition, false);
                        assert.equal(snakeStatus, 'DEAD');
                        assert.equal(boardUpdateSpy.exceptions[0], undefined);
                        assert.equal(onNotifySpy.called, true);
                        assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                        assert.deepEqual(originalPillState, updatedPillState);
                    })
                    it('Snake takes a step up. After tick finishes Snake should be dead, Snake head position should not be out of bounds, Board update does not throw error, Pill state should be unchanged.', function () {
                        let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                        let model = new Model(singleEntityConfig, mockStrategiesIndex);
                        let snake = model.getEntityList().snakes[0];
                        let pill = model.getEntityList().pills[0];
                        let board = model.getEntityList().board;
                        let boardUpdateSpy = sinon.spy(board, 'update');
                        let direction = 'UP'
                        model.notifier.subscribe(mockObserverEntity);
                        snake.setState({
                            body: [upperLeftCorner],
                            direction: direction
                        });
                        pill.setState({
                            position: new IntCoordinate(3, 3)
                        });
                        let originalPillState = cloneDeep(pill.state);
                        model.update();
                        let snakeHeadPosition = snake.head;
                        let snakeStatus = snake.status;
                        let updatedPillState = cloneDeep(pill.state);

                        assert.equal(snakeHeadPosition.nullPosition, false);
                        assert.equal(snakeStatus, 'DEAD');
                        assert.equal(boardUpdateSpy.exceptions[0], undefined);
                        assert.equal(onNotifySpy.called, true);
                        assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                        assert.deepEqual(originalPillState, updatedPillState);
                    })
                })
                describe('Snake starts in lower right corner', function () {
                    it('Snake takes a step down. After tick finishes Snake should be dead, Snake head position should not be out of bounds, Board update does not throw error, Pill state should be unchanged.', function () {
                        let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                        let model = new Model(singleEntityConfig, mockStrategiesIndex);
                        let snake = model.getEntityList().snakes[0];
                        let pill = model.getEntityList().pills[0];
                        let board = model.getEntityList().board;
                        let boardUpdateSpy = sinon.spy(board, 'update');
                        let direction = 'DOWN'
                        model.notifier.subscribe(mockObserverEntity);
                        snake.setState({
                            body: [lowerRightCorner],
                            direction: direction
                        });
                        pill.setState({
                            position: new IntCoordinate(3, 3)
                        });
                        let originalPillState = cloneDeep(pill.state);
                        model.update();
                        let snakeHeadPosition = snake.head;
                        let snakeStatus = snake.status;
                        let updatedPillState = cloneDeep(pill.state);

                        assert.equal(snakeHeadPosition.nullPosition, false);
                        assert.equal(snakeStatus, 'DEAD');
                        assert.equal(boardUpdateSpy.exceptions[0], undefined);
                        assert.equal(onNotifySpy.called, true);
                        assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                        assert.deepEqual(originalPillState, updatedPillState);
                    });
                    it('Snake takes a step right. After tick finishes Snake should be dead, Snake head position should not be out of bounds, Board update does not throw error, Pill state should be unchanged.', function () {
                        let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                        let model = new Model(singleEntityConfig, mockStrategiesIndex);
                        let snake = model.getEntityList().snakes[0];
                        let pill = model.getEntityList().pills[0];
                        let board = model.getEntityList().board;
                        let boardUpdateSpy = sinon.spy(board, 'update');
                        let direction = 'RIGHT'
                        model.notifier.subscribe(mockObserverEntity);
                        snake.setState({
                            body: [lowerRightCorner],
                            direction: direction
                        });
                        pill.setState({
                            position: new IntCoordinate(3, 3)
                        });
                        let originalPillState = cloneDeep(pill.state);
                        model.update();
                        let snakeHeadPosition = snake.head;
                        let snakeStatus = snake.status;
                        let updatedPillState = cloneDeep(pill.state);

                        assert.equal(snakeHeadPosition.nullPosition, false);
                        assert.equal(snakeStatus, 'DEAD');
                        assert.equal(boardUpdateSpy.exceptions[0], undefined);
                        assert.equal(onNotifySpy.called, true);
                        assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                        assert.deepEqual(originalPillState, updatedPillState);
                    })
                })
                describe('PILL_COLLISION case:', function () {
                    it("Snake picks up Pill. Snake should increase it's length by Pill's value, Snake's last node should stay in place after secound step. Board update does not throw error. Pill's new position is not equal to Snake's.", function () {
                        let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                        let model = new Model(singleEntityConfig, mockStrategiesIndex);
                        let snake = model.getEntityList().snakes[0];
                        let pill = model.getEntityList().pills[0];
                        let board = model.getEntityList().board;
                        let boardUpdateSpy = sinon.spy(board, 'update');
                        let direction = 'RIGHT'
                        let pillValue = 3;
                        let originalPillPosition = new IntCoordinate(1, 0);
                        let originalLastNodePosition = upperLeftCorner;
                        let originalBodyLength = snake.bodyLength;
                        model.notifier.subscribe(mockObserverEntity);
                        snake.setState({
                            body: [upperLeftCorner],
                            direction: direction
                        });
                        pill.setState({
                            position: originalPillPosition,
                            pillValue: pillValue
                        });


                        model.update();

                        let eventType = onNotifySpy.args[0][1].type;
                        let snakeHead = snake.head;
                        let newPillPosition = pill.position;
                        let newLastNodePosition = snake.endOfBody;
                        boardUpdateSpy.raise
                        assert.equal(onNotifySpy.called, true);
                        assert.equal(eventType, 'PILL_COLLISION');
                        assert.equal(snake.bodyLength, originalBodyLength + pillValue);
                        assert.deepEqual(snakeHead, originalPillPosition);
                        assert.deepEqual(newLastNodePosition, originalLastNodePosition);
                        assert.notDeepEqual(newPillPosition, snake.head);
                        assert.notDeepEqual(newPillPosition, newLastNodePosition);
                        assert.equal(boardUpdateSpy.exceptions[0], undefined);


                        onNotifySpy.restore();
                        boardUpdateSpy.restore();

                    })
                })
                describe('TARGET_REACHED case:', function(){
                    it('Snake with strategy takes a step right, reaches target. Snake target should be undefined', function(){
                        let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                        let model = new Model(singleEntityConfig, mockStrategiesIndex);
                        let snake = model.getEntityList().snakes[0];
                        let pill = model.getEntityList().pills[0];
                        let board = model.getEntityList().board;
                        let boardUpdateSpy = sinon.spy(board, 'update');
                        let direction = 'RIGHT'
                        let target = new IntCoordinate(1,0);
                        let strategy = {
                            calculateTarget: function(){}
                        }
                        pill.setState({
                            position: new IntCoordinate(3,3)
                        })
                        let newTarget = new IntCoordinate(1,1)
                        let calculateTargetStub = sinon.stub(strategy, 'calculateTarget');

                        calculateTargetStub.returns(newTarget);
                        model.notifier.subscribe(mockObserverEntity);
                        snake.setState({
                            target: target,
                            body: [upperLeftCorner],
                            direction: direction,
                            strategy: strategy
                        })

                        model.update();

                        let eventType = onNotifySpy.args[0][1].type;
                        assert.equal(eventType, 'TARGET_REACHED');
                        assert.deepEqual(snake.head, target);
                        assert.deepEqual(snake.target, undefined);

                        onNotifySpy.restore();
                        boardUpdateSpy.restore();
                        calculateTargetStub.restore();

                    })
                })
                describe('BODY_COLLISION case:', function(){
                    it("Snake takes a step down and collides with itself. Snake should be dead. Snake's body should not change.", function(){
                        let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                        let model = new Model(singleEntityConfig, mockStrategiesIndex);
                        let snake = model.getEntityList().snakes[0];

                        model.notifier.subscribe(mockObserverEntity);
                        snake.setState({
                            body: curledUpBody,
                            direction: 'DOWN'
                        });

                        model.update();

                        let eventType = onNotifySpy.args[0][1].type;
                        assert.equal(eventType, 'BODY_COLLISION');
                        assert.equal(snake.status, 'DEAD');
                        assert.deepEqual(snake.body, curledUpBody);
                    });
                })
            })
        })
    })
    describe('Cases with multiple Snake entities', function(){
        describe('Collisions', function(){
            describe('BODY_COLLISION case: ', function(){
                it('If multiple Snakes are stepping on the same place, the first one updated should survive, the others should be DEAD', function(){
                    let config = {
                        main: mainConfig,
                        boardConfig: boardConfig,
                        snakeConfigs: [snakeConfig1, snakeConfig2],
                        pillConfigs: []
                    }
                    let model = new Model(config, mockStrategiesIndex);
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let snake1 = model.getEntityList().snakes[0];
                    let snake2 = model.getEntityList().snakes[1];

                    model.notifier.subscribe(mockObserverEntity);
                    snake1.setState({
                        body: [new IntCoordinate(0,0)],
                        direction: 'RIGHT',
                    });
                    snake2.setState({
                        body: [new IntCoordinate(2,0)],
                        direction: 'LEFT'
                    });

                    model.update();


                    assert.equal(onNotifySpy.called, true);
                    let eventType = onNotifySpy.args[0][1].type;
                    assert.equal(eventType, 'BODY_COLLISION');
                    assert.equal(snake1.status, 'ALIVE');
                    assert.equal(snake2.status, 'DEAD');
                })
                it('snake1 hits body of snake2. Snake1 should be dead, snake2 should be alive', function(){
                    let config = {
                        main: mainConfig,
                        boardConfig: boardConfig,
                        snakeConfigs: [snakeConfig1, snakeConfig2],
                        pillConfigs: []
                    }
                    let model = new Model(config, mockStrategiesIndex);
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let snake1 = model.getEntityList().snakes[0];
                    let snake2 = model.getEntityList().snakes[1];

                    model.notifier.subscribe(mockObserverEntity);
                    snake1.setState({
                        body: [new IntCoordinate(2,0)],
                        direction: 'DOWN',
                    });
                    snake2.setState({
                        body: curledUpBody,
                        direction: 'LEFT'
                    });

                    model.update();


                    assert.equal(onNotifySpy.called, true);
                    let eventType = onNotifySpy.args[0][1].type;
                    assert.equal(eventType, 'BODY_COLLISION');
                    assert.equal(snake1.status, 'DEAD');
                    assert.equal(snake2.status, 'ALIVE');
                })
                it("snake1 steps to the position of snake2's last node. Both Snakes should be alive", function(){
                    let config = {
                        main: mainConfig,
                        boardConfig: boardConfig,
                        snakeConfigs: [snakeConfig1, snakeConfig2],
                        pillConfigs: []
                    }
                    let model = new Model(config, mockStrategiesIndex);
                    let snake1 = model.getEntityList().snakes[0];
                    let snake2 = model.getEntityList().snakes[1];

                    model.notifier.subscribe(mockObserverEntity);
                    snake1.setState({
                        body: [new IntCoordinate(0,1)],
                        direction: 'DOWN',
                    });
                    snake2.setState({
                        body: curledUpBody,
                        direction: 'UP'
                    });

                    model.update();

                    assert.equal(snake1.status, 'ALIVE');
                    assert.equal(snake2.status, 'ALIVE');
                });
                it("snake1 steps to the position of snake3's last node, snake2 steps on position of snake3's second to last node. Snake1 should be alive, snake2 should be dead", function(){
                    let config = {
                        main: mainConfig,
                        boardConfig: boardConfig,
                        snakeConfigs: [snakeConfig1, snakeConfig1, snakeConfig1],
                        pillConfigs: []
                    }
                    let model = new Model(config, mockStrategiesIndex);
                    let snake1 = model.getEntityList().snakes[0];
                    let snake2 = model.getEntityList().snakes[1];
                    let snake3 = model.getEntityList().snakes[2];

                    model.notifier.subscribe(mockObserverEntity);
                    model.notifier.lastNodeBuffer = {};
                    snake1.setState({
                        body: [new IntCoordinate(1,0)],
                        direction: 'LEFT',
                    });
                    snake2.setState({
                        body: [new IntCoordinate(1,1)],
                        direction: 'LEFT'
                    });
                    snake3.setState({
                        body: [new IntCoordinate(0,1), new IntCoordinate(0,0)],
                        direction: 'DOWN'
                    })

                    model.update();

                    assert.equal(snake1.status, 'ALIVE');
                    assert.equal(snake2.status, 'DEAD');
                });
            })
        })
    })
})