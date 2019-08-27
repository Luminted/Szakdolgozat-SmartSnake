import assert from 'assert';
import sinon from 'sinon';
import LeftTurnCommand from '../../Commands/LeftTurnCommand';
import RightTurnCommand from '../../Commands/RightTurnCommand';
import UpTurnCommand from '../../Commands/UpTurnCommand';
import DownTurnCommand from '../../Commands/DownTurnCommand';
import Snake from '../../snake.js';

describe('Unit testing Command classes', function(){
    let snake;
    let handleInputSpy;
    let snakeConfig = {
        baseLength: "1",
            startX: "0",
            startY: "0",
            startDirection: 'RIGHT',
            startVelocity: "1",
            strategy: "EucledianSquared",
            limitX: "3",
            limitY: "3"
    }
    beforeEach(function setUp(){
        snake = new Snake({},snakeConfig);
        handleInputSpy = sinon.spy(snake, 'handleInput');

    })
    describe('LeftTurnCommand execute', function(){
        it('should call snake.handleInput with argument "LEFT" once', function(){
            let command = new LeftTurnCommand();
            command.execute(snake);
            assert.equal(handleInputSpy.calledOnceWith('LEFT'), true);
        })
    })
    describe('RightTurnCommand execute', function(){
        it('should call snake.handleInput with argument "RIGHT" once', function(){
            let command = new RightTurnCommand();
            command.execute(snake);
            assert.equal(handleInputSpy.calledOnceWith('RIGHT'), true);
        })
    })
    describe('DownTurnCommand execute', function(){
        it('should call snake.handleInput with argument "DOWN" once', function(){
            let command = new DownTurnCommand();
            command.execute(snake);
            assert.equal(handleInputSpy.calledOnceWith('DOWN'), true);
        })
    })
    describe('UpTurnCommand execute', function(){
        it('should call snake.handleInput with argument "UP" once', function(){
            let command = new UpTurnCommand();
            command.execute(snake);
            assert.equal(handleInputSpy.calledOnceWith('UP'), true);
        })
    })
})