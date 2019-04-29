import assert from 'assert';
import Model from '../model.js';
import IntCoordinate from '../intCoordinate.js';
import {
    isObject
} from 'util';
import sinon from 'sinon';

describe('Unit testing pill.js', function () {
    let config = {
        main: {
            speed: "10"
        },
        boardConfig: {
            width: "2",
            height: "2"
        },
        snakeConfig: {
            baseLength: "1",
            startX: "0",
            startY: "0",
            startDirection: 'RIGHT',
            startVelocity: "1"
        },
        pillConfig: {
            pillValue: "1",
            startPosX: "1",
            startPosY: "1"
        }

    }
    let pill;
    let model;
    beforeEach(function () {
        model = new Model(config);
        pill = model.getEntityList().pill;
    });

    describe('function parseConfig', function () {
        it('should throw a ConfigError if config is undefined', function () {
            assert.throws(() => pill.parseConfig(), Error);
            try {
                pill.parseConfig();
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
        });
        it('should throw a ConfigError if the config has missing fields', function () {
            let config1 = {
                // pillValue: 1,
                startPosX: 1,
                startPosY: 1
            }
            let config2 = {
                pillValue: 1,
                // startPosX: 1,
                startPosY: 1
            }
            let config3 = {
                pillValue: 1,
                startPosX: 1,
                // startPosY: 1
            }

            assert.throws(() => pill.parseConfig(config1), Error);
            assert.throws(() => pill.parseConfig(config2), Error);
            assert.throws(() => pill.parseConfig(config3), Error);

            try {
                pill.parseConfig(config1);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            try {
                pill.parseConfig(config2);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            try {
                pill.parseConfig(config3);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }

        });
        it('should return an object with fields: position: Coordinate, pillValue: Integer, config: Object', function () {
            let parsedConfig = pill.parseConfig(config.pillConfig);
            assert.equal(parsedConfig.pillValue, config.pillConfig.pillValue);
            assert.equal(Number.isInteger(parsedConfig.pillValue), true);
            assert.equal(parsedConfig.position.coordinates.x, Number(config.pillConfig.startPosX));
            assert.equal(parsedConfig.position.coordinates.y, Number(config.pillConfig.startPosY));
            assert.equal(parsedConfig.position instanceof IntCoordinate, true);
            assert.deepEqual(parsedConfig.config, config.pillConfig);
            assert.equal(isObject(parsedConfig.config), true);

        });
        it('should not throw an error with a proper configuration', function () {
            assert.doesNotThrow(() => pill.parseConfig(config.pillConfig));
        });

    });
    describe('function reset', function () {
        it('should reset the values position and pillValue in state to ones described in the given configuration', function () {
            let parsedConfig = pill.parseConfig(config.pillConfig);
            //scrambling state
            pill.setState({
                position: new IntCoordinate(parsedConfig.position.coordinates.x + 1, parsedConfig.position.coordinates.y + 1),
                pillValue: parsedConfig.pillValue + 1
            });
            pill.reset();
            assert.equal(pill.pillValue, parsedConfig.pillValue);
            assert.equal(Number.isInteger(parsedConfig.pillValue), true);
            assert.equal(parsedConfig.position.coordinates.x, parsedConfig.position.coordinates.x);
            assert.equal(parsedConfig.position.coordinates.y, parsedConfig.position.coordinates.y);
        });
    });
    describe('getter position', function () {
        it('should return a IntCoordinate object', function () {
            assert.equal(pill.position instanceof IntCoordinate, true);
        })
    });
    describe('function onNotify', function () {
        it("Notification: PILL_COLLISION. Should call calculateNewRandomPosition once and set the position based on it's return value", function () {
            let spyCalculateNewRandomPosition = sinon.spy(pill, 'calculateNewRandomPosition');
            let notification = {
                type: 'PILL_COLLISION'
            }
            pill.onNotify(undefined, notification);
            let returnValue = spyCalculateNewRandomPosition.returnValues[0];
            assert.equal(spyCalculateNewRandomPosition.calledOnce, true);
            assert.deepEqual(pill.position, returnValue);

            spyCalculateNewRandomPosition.restore();
        });
        describe('function calculateNewRandomPosition', function () {
            it('should return an IntCoord object with nullPosition = true if the board is full a.k.a the length of snake if equal to the size of the board', function () {
                let config = {
                    main: {
                        speed: "10"
                    },
                    boardConfig: {
                        width: "2",
                        height: "1"
                    },
                    snakeConfig: {
                        baseLength: "2",
                        startX: "0",
                        startY: "0",
                        startDirection: 'RIGHT',
                        startVelocity: "1"
                    },
                    pillConfig: {
                        pillValue: "1",
                        startPosX: "1",
                        startPosY: "1"
                    }

                }
                let model = new Model(config);
                let pill = model.getEntityList().pill;
                let snake = model.getEntityList().snake;
                snake.setState({
                    body: [new IntCoordinate(0, 0), new IntCoordinate(1, 0)]
                })
                let calculatedCoord = pill.calculateNewRandomPosition(snake.body);
                assert.equal(calculatedCoord.nullPosition, true);
            });
        });
    });

});