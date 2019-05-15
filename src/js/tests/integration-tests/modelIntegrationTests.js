import assert from 'assert';
import sinon from 'sinon';
import Model from '../../model';
import Entity from '../../AbstractClasses/Entity';
import Snake from '../../snake.js';
import Pill from '../../pill.js';
import Board from '../../board.js';
import Notifier from '../../notifier';
import Strategy from '../../AbstractClasses/Strategy';


describe('Integration tests of class Model', function () {
    class MockEntityClass extends Entity {
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
    let model;
    let boardConfig = {
        width: "3",
        height: "3"

    }
    let pillConfig1 = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "1"
    }
    let pillConfig2 = {
        pillValue: "2",
        startPosX: "2",
        startPosY: "2"
    }
    let snakeConfig1 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "mockStrategy1"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "mockStrategy2"
    }

    let snakeConfig3 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "mockStrategy3"
    }
    let mainConfig = {
        simulationSpeed: "10"
    }
    let config = {
        main: mainConfig,
        boardConfig: boardConfig,
        snakeConfigs: [snakeConfig1, snakeConfig2, snakeConfig3],
        pillConfigs: [pillConfig1, pillConfig2]
    }

    beforeEach(function setUp() {
        model = new Model(config, mockStrategiesIndex);
    })

    describe('constructor', function () {
        it('should have the following inner state after instantiating with a full config and strategies index -> notifier: Notifier, strategies: strategies, runtimes: {}, passedDownCallbacks:{function getEntityList, function getEntityByID, function propagateError}, Entities :{snakes: [Snake], pills: [Pill], board: Board}, simulationSpeed: Integer. Model.notifier instantiated with passedDownCallbacks', function () {
            let newModel = new Model(config, mockStrategiesIndex);
            let parsedConfig = newModel.parseConfig(config);

            assert.equal(newModel.notifier instanceof Notifier, true);
            assert.deepEqual(newModel.strategies, mockStrategiesIndex);
            assert.equal(typeof newModel.passedDownCallbacks.getEntityList, 'function');
            assert.equal(typeof newModel.passedDownCallbacks.getEntityByID, 'function');
            assert.equal(typeof newModel.passedDownCallbacks.propagateError, 'function');
            assert.equal(typeof newModel.passedDownCallbacks.propagateRuntime, 'function');
            assert.equal(newModel.simulationSpeed, parsedConfig.simulationSpeed);
            for (let snake of newModel.Entities.snakes) {
                assert.equal(snake instanceof Snake, true);
            }
            for (let pill of newModel.Entities.pills) {
                assert.equal(pill instanceof Pill, true);
            }
            assert.equal(newModel.Entities.board instanceof Board, true);
        });
        it('should handle arising from parseConfig by calling propagateError callback with thrown error if propagateError is a function', function(){
            let newModel = new Model();

            assert.notEqual(newModel.errorBuffer, undefined);
        })
    })
    describe('function update', function () {
        it('should call update on all entities, once, if isGameOver returns false', function () {
            let snakes = model.Entities.snakes;
            let pills = model.Entities.pills;
            let board = model.Entities.board;
            let entityUpdateSpies = [];
            let isGameOverSpy = sinon.spy(model, 'isGameOver');
            entityUpdateSpies.push(sinon.spy(board, 'update'));

            for (let i = 0; i < snakes.length; i++) {
                entityUpdateSpies.push(sinon.spy(snakes[i], 'update'));
            }
            for (let i = 0; i < pills.length; i++) {
                entityUpdateSpies.push(sinon.spy(pills[i], 'update'));
            }
            model.update();

            assert.equal(isGameOverSpy.returnValues[0], false);
            for (let spy of entityUpdateSpies) {
                assert.equal(spy.calledOnce, true);
                spy.restore();
            }
            isGameOverSpy.restore();
        });
        it('should not call any update on entities, if isGameOver returns true', function () {
            let snakes = model.Entities.snakes;
            let pills = model.Entities.pills;
            let board = model.Entities.board;
            let entityUpdateSpies = [];
            let isGameOverStub = sinon.stub(model, 'isGameOver');
            isGameOverStub.returns('true');
            entityUpdateSpies.push(sinon.spy(board, 'update'));
            for (let i = 0; i < snakes.length; i++) {
                entityUpdateSpies.push(sinon.spy(snakes[i], 'update'));
            }
            for (let i = 0; i < pills.length; i++) {
                entityUpdateSpies.push(sinon.spy(pills[i], 'update'));
            }
            model.update();

            for (let spy of entityUpdateSpies) {
                assert.equal(spy.calledOnce, false);
                spy.restore();
            }
            isGameOverStub.restore();
        });
        it('should update Entities in the following order: Snakes, Pills, Board', function () {
            let snakes = model.Entities.snakes;
            let lastSnake = snakes[snakes.length - 1];
            let pills = model.Entities.pills;
            let lastPill = pills[pills.length - 1];
            let board = model.Entities.board;
            let lastSnakeUpdateSpy = sinon.spy(lastSnake, 'update');
            let lastPillUpdateSpy = sinon.spy(lastPill, 'update');
            let boardUpdateSpy = sinon.spy(board, 'update');

            model.update();

            assert.equal(lastPillUpdateSpy.calledAfter(lastSnakeUpdateSpy), true);
            assert.equal(boardUpdateSpy.calledAfter(lastPillUpdateSpy), true);

            lastSnakeUpdateSpy.restore();
            lastPillUpdateSpy.restore();
            boardUpdateSpy.restore();
        })
    });
    describe('function reset', function () {
        it('should call reset on all entities once', function () {
            let snakes = model.Entities.snakes;
            let pills = model.Entities.pills;
            let board = model.Entities.board;
            let entityResetSpies = [];
            entityResetSpies.push(sinon.spy(board, 'reset'));
            for (let i = 0; i < snakes.length; i++) {
                entityResetSpies.push(sinon.spy(snakes[i], 'reset'));
            }
            for (let i = 0; i < pills.length; i++) {
                entityResetSpies.push(sinon.spy(pills[i], 'reset'));
            }
            model.reset();

            for (let spy of entityResetSpies) {
                assert.equal(spy.calledOnce, true);
                spy.restore();
            }
        })
    });
    describe('function isGameOver', function () {
        it('should return true if all Snakes are dead', function () {
            let snakes = model.Entities.snakes;
            for (let snake of snakes) {
                snake.setState({
                    status: 'DEAD'
                });
            }
            let isGameOver = model.isGameOver();
            assert.equal(isGameOver, true);
        });
        it('should return false if not all Snakes are dead', function () {
            let snakes = model.Entities.snakes;
            for (let i = 1; i < snakes.lengt; i++) {
                snake[i].setState({
                    status: 'DEAD'
                });
            }
            let isGameOver = model.isGameOver();
            assert.equal(isGameOver, false);
        })
    })
    describe('Callbacks', function () {
        describe('function propagateRuntime', function(){
            it('should add passed runtime to runtimes object with given ID as key', function(){
                model.runtimes = {}
                let runTime = 3;
                let ID = 'id-TEST'
                model.passedDownCallbacks.propagateRuntime(ID,runTime);
                assert.equal(model.runtimes[ID], runTime);
            });
            it('should create runtimes object if it is undefined', function(){
                model.runtimes = undefined;

                model.propagateRuntime('ID', 123);

                assert.notEqual(model.runtimes, undefined);
            })
        })
        describe('function getEntityByID', function () {
            it('should return the Entity with the given ID', function () {
                let returnedEntity;
                //testing for Snake
                let snake = model.getEntityList().snakes[0];
                let snakeID = snake.ID;
                returnedEntity = model.getEntityByID(snakeID);
                assert.equal(returnedEntity.ID, snakeID);

                //testing for Pill
                let pill = model.getEntityList().pills[0];
                let pillID = pill.ID;
                returnedEntity = model.getEntityByID(pillID);
                assert.equal(returnedEntity.ID, pillID);

                //testing for Board
                let board = model.getEntityList().board;
                let boardID = board.ID;
                returnedEntity = model.getEntityByID(boardID);
                assert.equal(returnedEntity.ID, boardID);
            });
        });
        describe('function getEntityList', function () {
            it('should return object with fields snakes: [Snake], pills: [Pill], board: Board', function () {
                let entities = model.getEntityList();
                let snakes = entities.snakes;
                let pills = entities.pills;
                let board = entities.board;

                assert.equal(Array.isArray(snakes), true);
                for (let snake of snakes) {
                    assert.equal(snake instanceof Snake, true);
                }

                assert.equal(Array.isArray(pills), true);
                for (let pill of pills) {
                    assert.equal(pill instanceof Pill, true);
                }
                assert.equal(board instanceof Board, true);
            });
        });
        describe('function propagateError', function () {
            it('should add error to errorBuffer and return true if given error instance of Error', function () {
                model.errorBuffer = [];
                let error = new Error('TEST');
                let result = model.propagateError(error);

                assert.equal(error instanceof Error, true);
                assert.deepEqual(result, true);
                assert.deepEqual(model.errorBuffer[0], error);
            });
            it('should return false and not add error to errorBuffer if argument is not instance of Error', function () {
                model.errorBuffer = [];
                let error = {
                    message: 'TEST'
                }

                let result = model.propagateError(error);

                assert.equal(error instanceof Error, false);
                assert.equal(result, false);
                assert.equal(model.errorBuffer.length == 0, true);
            });
            it('should create errorBuffer if it is undefined', function(){
                model.errorBuffer = undefined;
                let error = new Error();

                model.propagateError(error);

                assert.notEqual(model.errorBuffer, undefined);
            })
            
        })
    })
    describe('function snakeFactory', function () {
        it('should get a snake config and a notifier, and return a Snake with the given strategy in config. Strategies should have passedDownCallbacks.', function () {
            let notifier = new Notifier();
            let snake1 = model.snakeFactory(snakeConfig1, notifier);
            let snake2 = model.snakeFactory(snakeConfig2, notifier);
            let snake3 = model.snakeFactory(snakeConfig3, notifier);

            assert.equal(snake1.state.strategy instanceof model.strategies[snakeConfig1.strategy], true);
            assert.deepEqual(snake1.state.strategy.callbacks, model.passedDownCallbacks);
            assert.equal(snake1.state.notifier, snakeConfig1.notifier);
            assert.equal(snake2.state.strategy instanceof model.strategies[snakeConfig2.strategy], true);
            assert.deepEqual(snake1.state.strategy.callbacks, model.passedDownCallbacks);
            assert.equal(snake2.state.notifier, snakeConfig2.notifier);
            assert.equal(snake3.state.strategy instanceof model.strategies[snakeConfig3.strategy], true);
            assert.deepEqual(snake1.state.strategy.callbacks, model.passedDownCallbacks);
            assert.equal(snake3.state.notifier, snakeConfig3.notifier);
        });
    });
    describe('function enrichConfig', function () {
        it('should enrich given config with limitX and limitY fields in pillConfigs and snakeConfigs elements with boardConfig.width and boardConfig.width respectively, if they are defined', function () {
            let config = {
                boardConfig,
                pillConfigs: [pillConfig1, pillConfig2],
                snakeConfigs: [snakeConfig1, snakeConfig2]
            };
            let enrichedConfig = model.enrichConfig(config);
            let snakeConfigs = enrichedConfig.snakeConfigs;
            let pillconfigs = enrichedConfig.pillConfigs;
            assert.notEqual(boardConfig, undefined);
            assert.notEqual(boardConfig.width, undefined);
            assert.notEqual(boardConfig.height, undefined);
            for (let pillConfig of pillconfigs) {
                assert.equal(pillConfig.limitX, boardConfig.width);
                assert.equal(pillConfig.limitY, boardConfig.height);
            }
            for (let snakeConfig of snakeConfigs) {
                assert.equal(snakeConfig.limitX, boardConfig.width);
                assert.equal(snakeConfig.limitY, boardConfig.height);
            }
        });
        it('should set limitX and limitY fields in pillConfig elements to 0 by default if boardConfig, boardCongif.width or boardConfig.height is missing', function () {
            let config = {
                pillConfigs: [pillConfig1]
            }
            let enrichedConfig;
            let enrichedLimitX;
            let enrichedLimitY;

            // boardConfig missing case
            enrichedConfig = model.enrichConfig(config);
            enrichedLimitX = enrichedConfig.pillConfigs[0].limitX;
            enrichedLimitY = enrichedConfig.pillConfigs[0].limitY;
            assert.equal(config.boardConfig, undefined);
            assert.equal(enrichedLimitX, 0);
            assert.equal(enrichedLimitY, 0);



            // boardConfig.height missing case
            config = {
                pillConfigs: [pillConfig1],
                boardConfig: {
                    width: 2
                }
            }

            enrichedConfig = model.enrichConfig(config);
            enrichedLimitX = enrichedConfig.pillConfigs[0].limitX;
            enrichedLimitY = enrichedConfig.pillConfigs[0].limitY;
            assert.equal(config.boardConfig.height, undefined);
            assert.equal(enrichedLimitX, config.boardConfig.width);
            assert.equal(enrichedLimitY, 0);

            // boardConfig.width missing case
            config = {
                pillConfigs: [pillConfig1],
                boardConfig: {
                    height: 2
                }
            }

            enrichedConfig = model.enrichConfig(config);
            enrichedLimitX = enrichedConfig.pillConfigs[0].limitX;
            enrichedLimitY = enrichedConfig.pillConfigs[0].limitY;
            assert.equal(config.boardConfig.width, undefined);
            assert.equal(enrichedLimitX, 0);
            assert.equal(enrichedLimitY, config.boardConfig.height);
        });
        it('should not throw Error if config.pillConfigs is not an array or is undefined', function () {
            let config = {
                boardConfig,
                pillConfigs: undefined
            };
            assert.doesNotThrow(() => model.enrichConfig(config), Error);
        })
        it('should not throw Error if config.snakeConfigs is not an array or is undefined', function () {
            let config = {
                boardConfig,
                snakeConfigs: undefined
            };
            assert.doesNotThrow(() => model.enrichConfig(config), Error);
        })
    })
    describe('function parseConfig', function () {
        it('should return an object with fields: snakes:[Snake], pills: [Pill], board: Board, simulationSpeed: Integer. Values of returned object should match given config values. Callbacks field of entities should be models passedDownCallbacks. Notifier field of entites should be models notifier', function () {
            let config = {
                main: mainConfig,
                boardConfig: boardConfig,
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let passedDownCallbacks = model.passedDownCallbacks;
            let result = model.parseConfig(config);
            assert.equal(Array.isArray(result.snakes), true);
            let snakes = result.snakes;
            for (let i = 0; i < snakes.length; i++) {
                assert.equal(snakes[i] instanceof Snake, true);
                assert.equal(snakes[i].state.strategy instanceof model.strategies[config.snakeConfigs[i].strategy], true);
                assert.deepEqual(snakes[i].config, config.snakeConfigs[i]);
                assert.deepEqual(snakes[i].callbacks, passedDownCallbacks);
                assert.equal(snakes[i].notifier, model.notifier);
            }
            assert.equal(Array.isArray(result.pills), true);
            let pills = result.pills;
            for (let i = 0; i < pills.length; i++) {
                assert.equal(pills[i] instanceof Pill, true);
                assert.deepEqual(pills[i].config, config.pillConfigs[i]);
                assert.deepEqual(pills[i].callbacks, passedDownCallbacks);
                assert.equal(pills[i].notifier, model.notifier);


            }
            assert.equal(result.board instanceof Board, true);
            assert.deepEqual(result.board.config, config.boardConfig);
            assert.deepEqual(result.board.callbacks, passedDownCallbacks);
            assert.equal(Number.isInteger(result.simulationSpeed), true);
            assert.equal(result.simulationSpeed, Number(config.main.simulationSpeed));
        });
        it('should throw a ConfigError if given config is undefined', function(){
            assert.throws(() => model.parseConfig(), Error);
            try{
                model.parseConfig();
            }catch(e){
                assert.equal(e.name, 'ConfigError');
            }
        })
        it('should throw ConfigError if essential fields are missing from config or if config is misshapen. Essential fields: main.simulationSpeed, snakeConfig.strategy. Proper shape: {mainConfig: Object, snakeConfigs: Array, pillConfigs: Array, boardConfig: Object}. Fields may be undefined', function () {
            let MissingMainSpeed = {
                main: {},
                boardConfig: boardConfig,
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let MainSpeedNotInteger = {
                main: {
                    simulationSpeed: '0.5'
                },
                boardConfig: boardConfig,
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let MainNotObject = {
                main: '2',
                boardConfig: boardConfig,
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let BoardConfigNotObject = {
                main: mainConfig,
                boardConfig: "2",
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let SnakeConfigsNotArray = {
                main: mainConfig,
                boardConfig: boardConfig,
                snakeConfigs: {},
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let pillConfigsNotArray = {
                main: mainConfig,
                boardConfig: boardConfig,
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: {}
            }
            let snakeMissingStrategy = {
                main: {
                    simulationSpeed: 10
                },
                boardConfig: boardConfig,
                snakeConfigs: [{
                    baseLength: "1",
                    startX: "0",
                    startY: "0",
                    startDirection: 'RIGHT',
                    startVelocity: "1"
                }],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            assert.throws(() => model.parseConfig(MissingMainSpeed), Error);
            try {
                model.parseConfig(MissingMainSpeed);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            assert.throws(() => model.parseConfig(MainSpeedNotInteger), Error);
            try {
                model.parseConfig(MainSpeedNotInteger);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            assert.throws(() => model.parseConfig(MainNotObject), Error);
            try {
                model.parseConfig(MainNotObject);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            assert.throws(() => model.parseConfig(BoardConfigNotObject), Error);
            try {
                model.parseConfig(BoardConfigNotObject);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            assert.throws(() => model.parseConfig(SnakeConfigsNotArray), Error);
            try {
                model.parseConfig(SnakeConfigsNotArray);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            assert.throws(() => model.parseConfig(pillConfigsNotArray), Error);
            try {
                model.parseConfig(pillConfigsNotArray);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            assert.throws(() => model.parseConfig(snakeMissingStrategy), Error);
            try {
                model.parseConfig(snakeMissingStrategy);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
        });
        it('does not throw error if config fields are undefined', function () {
            let config = {};
            assert.doesNotThrow(() => model.parseConfig(config), Error);
        })
        it("should throw ConfigError if given strategy name in snake config does not correspond to any in Model's strategies filed", function () {
            let snakeConfig = {
                baseLength: "1",
                startX: "0",
                startY: "0",
                startDirection: 'RIGHT',
                startVelocity: "1",
                strategy: 'strategyNotInIndex'
            }
            let config = {
                snakeConfigs: [snakeConfig],
            }
            assert.equal(model.strategies[snakeConfig.strategy], undefined);
            assert.throws(() => model.parseConfig(config), Error);
            try {
                model.parseConfig(config);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
        });
        it('should call snakeFactory with snakeConfigs and add the result to the snakes field of the result object', function () {
            let config = {
                snakeConfigs: [snakeConfig1]
            };
            let snakeFactorySpy = sinon.spy(model, 'snakeFactory');
            let parseResult = model.parseConfig(config);
            let snakeFactoryArgs = snakeFactorySpy.args[0];
            assert.deepEqual(snakeFactoryArgs[0], snakeConfig1);
            assert.deepEqual(snakeFactoryArgs[1], model.notifier);
            let factorySnake = snakeFactorySpy.returnValues[0];
            assert.deepEqual(parseResult.snakes[0], factorySnake);
        });
        it('should call enrichConfig and use the result for parsing', function () {
            let config = {
                boardConfig: boardConfig,
                pillConfigs: [pillConfig1]
            };
            let enrichConfigSpy = sinon.spy(model, 'enrichConfig');
            let parsedConfig = model.parseConfig(config);
            let pill = parsedConfig.pills[0];
            let enrichedConfig = enrichConfigSpy.returnValues[0]
            assert.equal(enrichConfigSpy.called, true);
            assert.deepEqual(pill.config, enrichedConfig.pillConfigs[0]);
        })
    })
})