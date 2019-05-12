import assert from 'assert';
import IntCoordinate from '../../intCoordinate.js';
import sinon from 'sinon';
import Pill from '../../pill.js';
import Notifier from '../../notifier.js';

describe('Unit testing pill.js', function () {
    let pillConfig = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "1",
        limitX: "2",
        limitY: "2",
    }
    let mockCallbacks = {
        test: function(){}
    }
    let pill;
    let notifier;
    beforeEach(function () {
        notifier = new Notifier();
        pill = new Pill({}, pillConfig);
    });

    describe('constructor', function(){
        it('should have the following inner state after instantiated by a full config, callbacks and Notifier -> config: config, callbacks: callbacks, state.ID: idGenerator() and state should contain the result of parseConfig. It should subscribe to given notifier.', function(){
            let subscribeSpy = sinon.spy(notifier, 'subscribe');
            let newPill = new Pill(mockCallbacks,pillConfig,notifier);

            console.log(newPill)
            assert.deepEqual(newPill.callbacks, mockCallbacks);
            assert.deepEqual(newPill.config, pillConfig);
            let parsedConfig = newPill.parseConfig(pillConfig);
            for(let key of Object.keys(parsedConfig)){
                assert.deepEqual(newPill.state[key], parsedConfig[key]);
            }
            assert.equal(subscribeSpy.calledWith(newPill), true);
            
            subscribeSpy.restore();
        });
        it('should not depend on callbacks or given notifier', function(){
            assert.doesNotThrow(()=> new Pill(undefined,pillConfig,undefined),Error);
        });
    })

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
        it('should return an object with fields: position: IntCoordinate, pillValue: Integer,limits:{x:Integer, y:Integer}', function () {
            let parsedConfig = pill.parseConfig(pillConfig);
            assert.equal(parsedConfig.pillValue, pillConfig.pillValue);
            assert.equal(Number.isInteger(parsedConfig.pillValue), true);
            assert.equal(parsedConfig.position instanceof IntCoordinate, true);
            assert.equal(parsedConfig.position.coordinates.x, Number(pillConfig.startPosX));
            assert.equal(parsedConfig.position.coordinates.y, Number(pillConfig.startPosY));
            assert.equal(parsedConfig.limits.x, Number(pillConfig.limitX));
            assert.equal(parsedConfig.limits.y, Number(pillConfig.limitY));

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