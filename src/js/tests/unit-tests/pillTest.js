import assert, { deepEqual } from 'assert';
import Model from '../../model.js';
import IntCoordinate from '../../intCoordinate.js';
import {
    isObject
} from 'util';
import sinon from 'sinon';
import Pill from '../../pill.js';
import Snake from '../../snake.js';

describe('Unit testing pill.js', function () {
    let snakeConfig1 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "1",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
    }
    let pillConfig = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "1",
        limitX: "2",
        limitY: "2",
    }
    let pill;
    beforeEach(function () {
        pill = new Pill({}, pillConfig);
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
                // pillValue: "1",
                startPosX: "1",
                startPosY: "1",
                limitX: "2",
                limitY: "2",
            }
            let config2 = {
                pillValue: "1",
                // startPosX: "1",
                startPosY: "1",
                limitX: "2",
                limitY: "2",
            }
            let config3 = {
                pillValue: "1",
                startPosX: "1",
                // startPosY: "1",
                limitX: "2",
                limitY: "2",
            }
            let config4 = {
                pillValue: "1",
                startPosX: "1",
                startPosY: "1",
                // limitX: "2",
                limitY: "2",
            }
            let config5 = {
                pillValue: "1",
                startPosX: "1",
                startPosY: "1",
                limitX: "2",
                // limitY: "2",
            }

            assert.throws(() => pill.parseConfig(config1), Error);
            assert.throws(() => pill.parseConfig(config2), Error);
            assert.throws(() => pill.parseConfig(config3), Error);
            assert.throws(() => pill.parseConfig(config4), Error);
            assert.throws(() => pill.parseConfig(config5), Error);

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
            try {
                pill.parseConfig(config4);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }
            try {
                pill.parseConfig(config5);
            } catch (e) {
                assert.equal(e.name, 'ConfigError');
            }

        });
        it('should return an object with fields: position: IntCoordinate, pillValue: Integer,dimensions:{x:Integer, y:Integer}, config: Object', function () {
            let parsedConfig = pill.parseConfig(pillConfig);
            assert.equal(parsedConfig.pillValue, pillConfig.pillValue);
            assert.equal(Number.isInteger(parsedConfig.pillValue), true);
            assert.equal(parsedConfig.position instanceof IntCoordinate, true);
            assert.equal(parsedConfig.position.coordinates.x, Number(pillConfig.startPosX));
            assert.equal(parsedConfig.position.coordinates.y, Number(pillConfig.startPosY));
            assert.equal(parsedConfig.limits.x, Number(pillConfig.limitX));
            assert.equal(parsedConfig.limits.y, Number(pillConfig.limitY));
            assert.deepEqual(parsedConfig.config, pillConfig);
            assert.equal(isObject(parsedConfig.config), true);

        });
        it('should not throw an error with a proper configuration', function () {
            assert.doesNotThrow(() => pill.parseConfig(pillConfig));
        });

    });
    describe('function reset', function () {
        it('should reset the values position and pillValue in state to ones described in the given configuration', function () {
            let parsedConfig = pill.parseConfig(pillConfig);
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
    describe('function update', function () {
        it('should not change the state of Pill', function () {
            let originalState = pill.state;
            pill.update();
            assert.deepEqual(pill.state, originalState);
        })
    });

    describe('getter position', function () {
        it('should return a IntCoordinate object', function () {
            assert.equal(pill.position instanceof IntCoordinate, true);
        });
    });
    describe('getter pillValue', function () {
        it('should return the value of the pillValue field', function () {
            let statePillValue = pill.state.pillValue;
            let getterPillValue = pill.pillValue;
            assert.equal(getterPillValue, statePillValue);
        });
    });
});