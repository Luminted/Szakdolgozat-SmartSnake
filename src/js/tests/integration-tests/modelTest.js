import assert from 'assert';
import sinon from 'sinon';
import Model from '../../model';
import Entity from '../../AbstractClasses/Entity';
import Snake from '../../snake.js';
import Pill from '../../pill.js';
import Board from '../../board.js';


describe('Integration tests of class Model', function () {
    class MockEntityClass extends Entity {
        update() {}
        reset() {}
    }
    let mockStrategiesIndex = {
        mockStrategy1: {
            name: "mockStrategy1"
        },
        mockStrategy2: {
            name: "mockStrategy2"
        },
        mockStrategy3: {
            name: "mockStrategy3"

        },
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
        speed: "10"
    }
    let config = {
        main: mainConfig,
        boardConfig: boardConfig,
        snakeConfigs: [snakeConfig1, snakeConfig2, snakeConfig3],
        pillConfigs: [pillConfig1, pillConfig2]
    }
    beforeEach(function setUp() {
        model = new Model(config, mockStrategiesIndex);
        model.strategies = mockStrategiesIndex;
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
        describe('function getEntityList', function(){
            it('should return object with fields snakes: [Snake], pills: [Pill], board: Board', function(){
                let entities = model.getEntityList();
                let snakes = entities.snakes;
                let pills = entities.pills;
                let board = entities.board;

                assert.equal(Array.isArray(snakes), true);
                for(let snake of snakes){
                    assert.equal(snake instanceof Snake,true);
                }

                assert.equal(Array.isArray(pills), true);
                for(let pill of pills){
                    assert.equal(pill instanceof Pill,true);
                }
                assert.equal(board instanceof Board,true);
            });
        });
        describe('function propagateError', function(){
            it('should return error given as argument it is actually an error', function(){
                let error = new Error('TEST');
                let propagatedError = model.propagateError(error);
                assert.deepEqual(propagatedError, error);
            });
            it('should return undefined if argument is not instance of Error', function(){
                let error = {
                    message: 'TEST'
                }
                let propagatedError = model.propagateError(error);
                assert.equal(propagatedError,undefined);
            })
        })
    })
    describe('function snakeFactory', function () {
        it('should receive a list of snake configs and return a Snake with the given strategy in config', function () {
            let snake1 = model.snakeFactory(snakeConfig1);
            let snake2 = model.snakeFactory(snakeConfig2);
            let snake3 = model.snakeFactory(snakeConfig3);

            assert.equal(snake1.state.strategy.name, snakeConfig1.strategy);
            assert.equal(snake2.state.strategy.name, snakeConfig2.strategy);
            assert.equal(snake3.state.strategy.name, snakeConfig3.strategy);
        });
    });
    describe('function enrichConfig', function () {
        it('should enrich given config with limitX and limitY fields in pillConfigs elements with boardConfig.width and boardConfig.width respectively, if they are defined', function () {
            let config = {
                boardConfig,
                pillConfigs: [pillConfig1, pillConfig2]
            };
            let enrichedConfig = model.enrichConfig(config);
            let pillconfigs = enrichedConfig.pillConfigs;
            assert.notEqual(boardConfig, undefined);
            assert.notEqual(boardConfig.width, undefined);
            assert.notEqual(boardConfig.height, undefined);
            for (let pillConfig of pillconfigs) {
                assert.equal(pillConfig.limitX, boardConfig.width);
                assert.equal(pillConfig.limitY, boardConfig.height);
            }
        });
        it('should set limitX and limitY fields in pillConfig elements to 0 by default', function () {
            let config = {
                pillConfigs: [pillConfig1]
            }
            let enrichedConfig = model.enrichConfig(config);
            let enrichedLimitX = enrichedConfig.pillConfigs[0].limitX;
            let enrichedLimitY = enrichedConfig.pillConfigs[0].limitY;
            assert.equal(enrichedLimitX, 0);
            assert.equal(enrichedLimitY, 0);
        });
        it('should do nothing if config.pillConfigs is not an array or is undefined', function () {
            let config = {
                boardConfig,
                pillConfigs: undefined
            };
            let enrichedConfig = model.enrichConfig(config);
            assert.deepEqual(enrichedConfig, config);
        })
    })
    describe('function parseConfig', function () {
        it('should return an object with fields: snakes:[Snake], pills: [Pill], board: Board, speed: Integer. Values of returned object should match given config values. Callbacks field of entities should be models callbacks.', function () {
            let config = {
                main: mainConfig,
                boardConfig: boardConfig,
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let callbacks = model.callbacks;
            let result = model.parseConfig(config);
            assert.equal(Array.isArray(result.snakes), true);
            let snakes = result.snakes;
            for (let i = 0; i < snakes.length; i++) {
                assert.equal(snakes[i] instanceof Snake, true);
                assert.deepEqual(snakes[i].state.strategy, model.strategies[config.snakeConfigs[i].strategy]);
                assert.deepEqual(snakes[i].config, config.snakeConfigs[i]);
                assert.deepEqual(snakes[i].callbacks, callbacks);
            }
            assert.equal(Array.isArray(result.pills), true);
            let pills = result.pills;
            for (let i = 0; i < pills.length; i++) {
                assert.equal(pills[i] instanceof Pill, true);
                assert.deepEqual(pills[i].config, config.pillConfigs[i]);
                assert.deepEqual(pills[i].callbacks, callbacks);

            }
            assert.equal(result.board instanceof Board, true);
            assert.deepEqual(result.board.config, config.boardConfig);
            assert.deepEqual(result.board.callbacks, callbacks);
            assert.equal(Number.isInteger(result.speed), true);
            assert.equal(result.speed, Number(config.main.speed));
        });
        it('should throw ConfigError if essential fields are missing from config or if config is misshapen. Essential fields: main.speed, snakeConfig.strategy. Proper shape: {mainConfig: Object, snakeConfigs: Array, pillConfigs: Array, boardConfig: Object}. Fields may be undefined', function () {
            let MissingMainSpeed = {
                main: {},
                boardConfig: boardConfig,
                snakeConfigs: [snakeConfig1, snakeConfig2],
                pillConfigs: [pillConfig1, pillConfig2]
            }
            let MainSpeedNotInteger = {
                main: {
                    speed: '0.5'
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
                    speed: 10
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
            assert.equal(snakeFactorySpy.called, true);
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
        //TODO: PropagateError
    })
})