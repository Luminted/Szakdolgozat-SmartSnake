import sinon from 'sinon';
import assert, { deepStrictEqual } from 'assert';
import Model from '../../model';
import IntCoordinate from '../../intCoordinate';
import cloneDeep from 'lodash/cloneDeep';
import LeftTurnCommand from '../../Commands/LeftTurnCommand';
import ObserverEntity from '../../AbstractClasses/ObserverEntity.js';

// Testing module integrations with by calling their update functions and validating the results
describe('Running complex integration tests', function () {
    class MockObserverEntityClass extends ObserverEntity{
        constructor(){
            super();
        }
        onNotify (entity, notification){}
        update() {}
        reset() {}
    }
    let model;
    let snake;
    let pill;
    let board;
    let notifier;
    let observers;
    let mockObserverEntity;
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
    let config = {
        main: {
            speed: "10"
        },
        boardConfig: {
            width: "4",
            height: "4"
        },
        snakeConfigs:[ {
            baseLength: "1",
            startX: "0",
            startY: "0",
            startDirection: 'RIGHT',
            startVelocity: "1",
            strategy: "mockStrategy1"
        }],
        pillConfigs: [{
            pillValue: "1",
            startPosX: "1",
            startPosY: "1"
        }]
    }
    let curledUpBody = [new IntCoordinate(1,1), new IntCoordinate(2,1), new IntCoordinate(2,2), new IntCoordinate(1,2), new IntCoordinate(0,2)]
    let upperLeftCornerBody = [new IntCoordinate(0,0)];
    let lowerLeftCornerBody = [new IntCoordinate(0,3)];
    let upperRightCornerBody = [new IntCoordinate(3,0)];
    let lowerRightCornerBody = [new IntCoordinate(3,3)];
    let HeadOnlyUpperMiddleLeftBody = [new IntCoordinate(1,1)];

    beforeEach(function setUp(){
        mockObserverEntity = new MockObserverEntityClass();
        model = new Model(config, mockStrategiesIndex);
        notifier = model.getSubjectsList().notifier;
        let entityList = model.getEntityList();
        pill  = entityList.pill;
        board = entityList.board;
        snake = entityList.snake;
        notifier.subscribe(mockObserverEntity);
        observers = notifier.observers;
        snake.state.strategy = undefined;

    });

    describe('Collisions', function () {
        describe('WALL_COLLISION cases', function(){
            describe('Snake starts in upper left corner', function(){
                it('Sets a direction = "LEFT" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'LEFT'
                    snake.setState({
                        body: upperLeftCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(3,3)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
                it('Sets a direction = "UP" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'UP'
                    snake.setState({
                        body: upperLeftCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(3,3)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
            })
            describe('Snake starts in upper right corner', function(){
                it('Sets a direction = "RIGHT" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'RIGHT'
                    snake.setState({
                        body: upperRightCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(3,3)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
                it('Sets a direction = "UP" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'UP'
                    snake.setState({
                        body: upperRightCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(3,3)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
            })
            describe('Snake starts in lower left corner', function(){
                it('Sets a direction = "LEFT" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'LEFT'
                    snake.setState({
                        body: lowerLeftCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(3,3)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
                it('Sets a direction = "DOWN" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'DOWN'
                    snake.setState({
                        body: lowerLeftCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(3,3)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
            })
            describe('Snake starts in lower right corner', function(){
                it('Sets a direction = "RIGHT" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'RIGHT'
                    snake.setState({
                        body: lowerRightCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(0,0)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(onNotifySpy.args[0][1].type, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
                it('Sets a direction = "DOWN" for Snake. After tick finishes Snake should be dead, Snake head position should not be nullPosition, Board update does not throw error, Pill state should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'DOWN'
                    snake.setState({
                        body: lowerRightCornerBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(0,0)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    snake.update();
                    board.update();
                    pill.update();
                    let snakeHeadPosition = snake.head;
                    let snakeStatus = snake.status;
                    let updatedPillState = cloneDeep(pill.state);
                    let notificationType = onNotifySpy.args[0][1].type;

                    assert.equal(snakeHeadPosition.nullPosition, false);
                    assert.equal(snakeStatus, 'DEAD');
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(notificationType, 'WALL_COLLISION');
                    assert.deepEqual(originalPillState, updatedPillState);
                })
            })
        })
        describe('BODY_COLLISION cases', function(){
            describe('Snake starts curled up in the middle of the board. Head is in position (1,1)', function(){
                it('Sets direction="RIGHT" for Snake.Notifier should send a BODY_COLLISION notification. After tick Snake status should be "DEAD, Snake head position should be unchanged, update of Board should not throw an error, state of Pill should be unchanged.', function(){
                    let onNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let boardUpdateSpy = sinon.spy(board, 'update');
                    let direction = 'DOWN'
                    snake.setState({
                        body: curledUpBody,
                        direction: direction
                    });
                    pill.setState({
                        position: new IntCoordinate(0,0)
                    });
                    let originalPillState = cloneDeep(pill.state);
                    let originalSnakeHead = cloneDeep(snake.head);

                    snake.update();
                    board.update();
                    pill.update();

                    let updatedSnakeHead = snake.head;
                    let updatedPillState = pill.state;
                    let notificationType = onNotifySpy.args[0][1].type;


                    assert.equal(snake.status, 'DEAD');
                    assert.deepEqual(originalSnakeHead, updatedSnakeHead);
                    assert.deepEqual(originalPillState, updatedPillState);
                    assert.equal(boardUpdateSpy.exceptions[0], undefined);
                    assert.equal(notificationType, 'BODY_COLLISION');

                })
            })
        });
        describe('PILL_COLLISION cases', function(){
            describe('Snake starts in the upper left corner of the middle tiles (1,1)', function(){
                it('Pill is aproached from the left. Notifier should send a PILL_COLLISION notification. Board should record new Pill location',function(){
                    let mockObserverEntityOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let pillPosition = new IntCoordinate(2,1);
                    snake.setState({
                        body: HeadOnlyUpperMiddleLeftBody,
                        direction: 'RIGHT'
                    });
                    pill.setState({
                        position: pillPosition
                    });
                    snake.update();
                    pill.update();
                    board.update();

                    let tilesArray = board.getTilesAsArray();
                    let snakeTiles = tilesArray.filter((tile) => tile.status == 'SNAKE');
                    let notificationType = mockObserverEntityOnNotifySpy.args[0][1].type;
                    let newPillPosition = pill.position;
                    let pillTile = board.getTileByPosition(newPillPosition.coordinates.x, newPillPosition.coordinates.y);
                    assert.equal(notificationType, 'PILL_COLLISION');
                    assert.equal(pillTile.status, 'PILL');


                })
                it('Pill is aproached from the bottom. Notifier should send a PILL_COLLISION notification. Board should record new Pill location',function(){
                    let mockObserverEntityOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let pillPosition = new IntCoordinate(1,0);
                    snake.setState({
                        body: HeadOnlyUpperMiddleLeftBody,
                        direction: 'UP'
                    });
                    pill.setState({
                        position: pillPosition
                    });
                    snake.update();
                    pill.update();
                    board.update();

                    let tilesArray = board.getTilesAsArray();
                    let snakeTiles = tilesArray.filter((tile) => tile.status == 'SNAKE');
                    let notificationType = mockObserverEntityOnNotifySpy.args[0][1].type;
                    let newPillPosition = pill.position;
                    let pillTile = board.getTileByPosition(newPillPosition.coordinates.x, newPillPosition.coordinates.y);
                    assert.equal(notificationType, 'PILL_COLLISION');
                    assert.equal(pillTile.status, 'PILL');
                
                })
                it('Pill is aproached from the right. Notifier should send a PILL_COLLISION notification. Board should record new Pill location',function(){
                    let mockObserverEntityOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let pillPosition = new IntCoordinate(0,1);
                    snake.setState({
                        body: HeadOnlyUpperMiddleLeftBody,
                        direction: 'LEFT'
                    });
                    pill.setState({
                        position: pillPosition
                    });
                    snake.update();
                    pill.update();
                    board.update();

                    let notificationType = mockObserverEntityOnNotifySpy.args[0][1].type;
                    let newPillPosition = pill.position;
                    let pillTile = board.getTileByPosition(newPillPosition.coordinates.x, newPillPosition.coordinates.y);
                    assert.equal(notificationType, 'PILL_COLLISION');
                    assert.equal(pillTile.status, 'PILL');
                
                })
                it('Pill is aproached from the top. Notifier should send a PILL_COLLISION notification. Board should record new Pill location',function(){
                    let mockObserverEntityOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                    let pillPosition = new IntCoordinate(1,2);
                    snake.setState({
                        body: HeadOnlyUpperMiddleLeftBody,
                        direction: 'DOWN'
                    });
                    pill.setState({
                        position: pillPosition
                    });
                    snake.update();
                    pill.update();
                    board.update();

                    let notificationType = mockObserverEntityOnNotifySpy.args[0][1].type;
                    let newPillPosition = pill.position;
                    let pillTile = board.getTileByPosition(newPillPosition.coordinates.x, newPillPosition.coordinates.y);
                    assert.equal(notificationType, 'PILL_COLLISION');
                    assert.equal(pillTile.status, 'PILL');
                })              
            })
        })
        describe('TARGET_REACHED cases',function(){
            describe('Snake starts in the upper left corner of the middle tiles (1,1)', function(){
                it('If Pill position and Snake target are on the same coordinates, Snake should receive two notifications with proper types and process them. Board should record the new position of Pill', function(){
                    let snakeOnNotifySpy = sinon.spy(snake, 'onNotify');
                    let pillPosition = new IntCoordinate(2,1);
                    snake.setState({
                        body: HeadOnlyUpperMiddleLeftBody,
                        direction: 'RIGHT',
                        target: pillPosition
                    });
                    pill.setState({
                        position: pillPosition
                    });
                    snake.update();
                    pill.update();
                    board.update();

                    let onNotifyCallArgs = snakeOnNotifySpy.args;
                    let newPillPosition = pill.position;
                    assert.equal(onNotifyCallArgs.length,2);
                    assert.equal((onNotifyCallArgs[0][1].type == 'PILL_COLLISION') || (onNotifyCallArgs[1][1].type == 'TARGET_REACHED'), true);
                    assert.equal((onNotifyCallArgs[0][1].type == 'PILL_COLLISION') || (onNotifyCallArgs[1][1].type == 'TARGET_REACHED'), true);
                    assert.notDeepEqual(snake.target, pillPosition);
                    assert.notDeepEqual(newPillPosition, pillPosition);
                    assert.equal(board.getTileByPosition(newPillPosition.coordinates.x, newPillPosition.coordinates.y).status == 'PILL', true);
                })
            })
        })
    })
    describe('Regular steps', function(){
        describe('Snake starts in the upper left corner of the middle tiles (1,1).', function(){
            it('Scenario: Snake eats neighboring Pill worth 1 and takes one more step', function(){
                snake.setState({
                    body: HeadOnlyUpperMiddleLeftBody,
                    direction: 'RIGHT'
                })
                pill.setState({
                    position: new IntCoordinate(2,1)
                });
                snake.update();
                pill.update();
                board.update();
                pill.setState({
                    position: new IntCoordinate(undefined,undefined,true)
                });
                snake.update();
                pill.update();
                board.update();
                let expectedBody = [new IntCoordinate(3,1), new IntCoordinate(2,1)]
                let tilesAsArray = board.getTilesAsArray();
                let snakeTiles = tilesAsArray.filter((tile) => tile.status == 'SNAKE');
                assert.deepEqual(snake.body, expectedBody);
                assert.equal(snakeTiles.length, snake.bodyLength);
                for(let tile of snakeTiles){
                    assert.equal(tile.status, 'SNAKE');
                }
            })
        })
    })
})