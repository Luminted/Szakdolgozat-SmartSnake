import assert from 'assert';
import sinon from 'sinon';
import Model from '../model/Model';

describe("Unit testing Model.js", function(){
    let model;

    beforeEach("setup", function(){
        model = new Model();
    })
    describe("* function addSnake", function(){
        it("should return a Snake setup according to given config", function(){
            let testStrategyName = 'testStrategy';
            let config = {
                length: 10,
                posX: 2,
                posY: 1,
                strategyName: testStrategyName
            }
            model.strategies = {
                [testStrategyName]: {
                    id: testStrategyName
                }
            };

            let snake = model.addSnake(config);

            assert.deepEqual(snake.config, config);
            assert.equal(snake.strategy.id, testStrategyName);
        });
        it("should add created Snake to _state.snakes", function(){
            let testStrategyName = 'testStrategy';
            let config = {
                length: 10,
                posX: 2,
                posY: 1,
                strategyName: testStrategyName
            }
            model.strategies = {
                [testStrategyName]: {
                    id: testStrategyName
                }
            };

            let snake = model.addSnake(config);

            assert.deepEqual(model.snakes[0], snake);
        })
    })
    describe("* function addPill", function(){
        it("should return Pill setup according to given config", function(){
            let testEffectName = 'testEffectName';
            let testEffect = {
                id: testEffectName
            }
            let config = {
                effect: testEffectName,
                posX: 2,
                posY: 1
            };
            model.effects = {
                [testEffectName]: testEffect
            }

            let pill = model.addPill(config);

            assert.deepEqual(pill.config, config);
            assert.deepEqual(pill.effect.id, testEffectName);
        });
        it("should add pill to _state.pills", function(){
            let testEffectName = 'testEffectName';
            let testEffect = {
                id: testEffectName
            }
            let config = {
                effect: testEffectName,
                posX: 2,
                posY: 1
            };
            model.effects = {
                [testEffectName]: testEffect
            }

            let pill = model.addPill(config);

            assert.deepEqual(model.pills[0], pill);
        })
    })
})