import assert from 'assert';
import sinon from 'sinon';
import cloneDeep from 'lodash/cloneDeep';
import IntCoordinate from '../../intCoordinate';
import ObserverEntity from '../../AbstractClasses/ObserverEntity';
import Snake from '../../snake';
import Notifier from '../../notifier';
import Pill from '../../pill';
import Board from '../../board';


describe('Integration test of Notifier', function () {
    class MockObserverEntityClass extends ObserverEntity {
        constructor() {
            super();
            this.id = 'MockObserverId';
        }
        onNotify() {}
        update() {}
        reset() {}
    }


    let boardConfig = {
        width: "3",
        height: "3"
    }

    let boardConfigWithObstacles = {
        width: "3",
        height: "3",
        obstacles: [
            {
                position: {
                    x: 2,
                    y: 1
                }
            }
        ]
    }

    let snakeConfig1 = {
        baseLength: "1",
        startX: "1",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "EucledianSquared",
        limitX: "3",
        limitY: "3"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "EucledianSquared",
        limitX: "3",
        limitY: "3"
    }
    let snakeConfig3 = {
        baseLength: "1",
        startX: "0",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "EucledianSquared",
        limitX: "3",
        limitY: "3"
    }
    let pillConfig1 = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "0",
        limitX: "3",
        limitY: "3"
    }

    let pillConfig2 = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "1",
        limitX: "3",
        limitY: "3"
    }

    let mockCallBacks = {
        getEntityList: function () {
            return {
                snakes: [snake1, snake2, snake3],
                pills: [pill1, pill2],
                board: board
            }
        },
        getEntityByID: function () {
            return {
                ID: callerID,
            }
        }
    }

    let callerID = "1234";

    let snake1;
    let snake2;
    let snake3;
    let pill1;
    let pill2;
    let board;
    let boardWithObstacle;
    let mockObserverEntity;
    let notifier

    beforeEach(function setUp() {
        mockObserverEntity = new MockObserverEntityClass();
        notifier = new Notifier(mockCallBacks);
        snake1 = new Snake(mockCallBacks, snakeConfig1, {}, notifier);
        snake2 = new Snake(mockCallBacks, snakeConfig2, {}, notifier);
        snake3 = new Snake(mockCallBacks, snakeConfig3, {}, notifier);
        pill1 = new Pill(mockCallBacks, pillConfig1, notifier);
        pill2 = new Pill(mockCallBacks, pillConfig2, notifier);
        board = new Board(mockCallBacks, boardConfig);
        boardWithObstacle = new Board(mockCallBacks, boardConfigWithObstacles);
        
    })

    describe('function calculateStepCollisionType', function () {
        beforeEach(function subScribeMockObserver() {
            notifier.subscribe(mockObserverEntity);
        })

        it("should call storeLastNode with current Snake's last node and ID", function () {
            let nextStep = new IntCoordinate(1, 1);
            let getEntityByIDStub = sinon.stub(mockCallBacks, 'getEntityByID');
            let storeLastNodeSpy = sinon.spy(notifier, 'storeLastNode');
            getEntityByIDStub.returns(snake1);

            notifier.calculateStepCollisionType(nextStep, snake1.ID);

            assert.equal(storeLastNodeSpy.called, true);
            assert.equal(storeLastNodeSpy.calledWith(snake1.ID, snake1.endOfBody), true);

            getEntityByIDStub.restore();
            storeLastNodeSpy.restore();

        });
        it("should clear lastNodeBuffer if it it's size is equal to number of Snakes", function () {
            let nextStep = new IntCoordinate(1, 1);
            let storeLastNodeSpy = new sinon.spy(notifier, 'storeLastNode');
            let snakes = mockCallBacks.getEntityList().snakes;
            let getEntityByIDStub = sinon.stub(mockCallBacks, 'getEntityByID');
            let callerSnake = snake3;

            getEntityByIDStub.returns(callerSnake);
            notifier.lastNodeBuffer = {
                'TEST1': 'TEST',
                'TEST2': 'TEST'
            }

            assert.equal(Object.keys(notifier.lastNodeBuffer).length, snakes.length - 1);
            notifier.calculateStepCollisionType(nextStep, callerSnake);

            assert.equal(storeLastNodeSpy.returnValues[0], true);
            assert.deepEqual(notifier.lastNodeBuffer, {});

            storeLastNodeSpy.restore();
            getEntityByIDStub.restore();
        })

        describe('WALL_COLLISION case:', function () {


            it("should send a notification, once, with type: 'WALL_COLLISION' and entity: caller Snake, if given next step is null position or is stepping to the position of an obstacle", function () {
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                let nextStep;

                //out of bounds case
                nextStep = new IntCoordinate(0, 0, true);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'WALL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.resetHistory();

                //obstacle case
                let getEntityListStub = sinon.stub(mockCallBacks, 'getEntityList');
                getEntityListStub.returns({
                    snakes: [],
                    pills: [],
                    board: boardWithObstacle
                })
                nextStep = new IntCoordinate(2, 1, false);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'WALL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.restore();
                getEntityListStub.restore();
            });
        });
        describe('PILL_COLLISION case:', function () {
            it("should send a notification, once, with event = {type: 'PILL_COLLISION', pill: currently processed pill}, and entity = caller Snake that was collided with, if next step coordinates are equal to one Pill's coordinates", function () {
                let nextStep;
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                let originalPill1Position = cloneDeep(pill1.position);
                let originalPill2Position = cloneDeep(pill2.position);

                //collides with pill1
                nextStep = new IntCoordinate(pill1.position.coordinates.x, pill1.position.coordinates.y);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'PILL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][1].pill.ID, pill1.ID);
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.resetHistory();
                pill1.setState({
                    position: originalPill1Position
                })
                pill2.setState({
                    position: originalPill2Position
                })


                //collides with pill2
                nextStep = new IntCoordinate(pill2.position.coordinates.x, pill2.position.coordinates.y);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'PILL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][1].pill.ID, pill2.ID);
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);


                mockObserverOnNotifySpy.restore();

            });
        });
        describe('TARGET_REACHED case:', function () {
            it("should send a notification, once, with event = {type:'TARGET_REACHED'} and entity = caller Snake, if next step coordinates are equal to caller Snake's target coordinates", function () {
                let getEntityByIDStub = sinon.stub(mockCallBacks, 'getEntityByID');
                let targetCoordinate = new IntCoordinate(2, 2);
                let nextStep = targetCoordinate;
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                getEntityByIDStub.returns({
                    ID: callerID,
                    target: targetCoordinate
                });

                pill1.setState({
                    position: new IntCoordinate(undefined, undefined, true)
                });
                pill2.setState({
                    position: new IntCoordinate(undefined, undefined, true)
                });


                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.calledOnce, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'TARGET_REACHED');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.restore();
                getEntityByIDStub.restore();
            });
        });
        describe('BODY_COLLISION case:', function () {
            it("should send a notification, once, with event = {type: BODY_COLLISION} and entity = caller Snake, if next step coordinates are equal to a Snake's coordinates", function () {
                let nextStep;
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                let lastNodes = [new IntCoordinate(0, 1), new IntCoordinate(1, 0)];
                snake1.body.push(lastNodes[0]);
                snake2.body.push(lastNodes[1]);
                pill1.setState({
                    position: new IntCoordinate(undefined, undefined, true)
                });
                pill2.setState({
                    position: new IntCoordinate(undefined, undefined, true)
                });


                //testing with snake1
                nextStep = snake1.head;
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.calledOnce, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'BODY_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.resetHistory();

                //testing with snake2
                nextStep = snake2.head;
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.calledOnce, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'BODY_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.restore();
            });
            it('should not count as collision if next step is equal to coordinates of last node of one of the Snakes', function () {
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                let lastNodes = [new IntCoordinate(0, 1), new IntCoordinate(1, 0)];
                let nextStep;
                snake1.body.push(lastNodes[0]);
                snake2.body.push(lastNodes[1]);
                pill1.setState({
                    position: new IntCoordinate(undefined, undefined, true)
                });
                pill2.setState({
                    position: new IntCoordinate(undefined, undefined, true)
                });

                //testing with snake1
                nextStep = lastNodes[0];
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, false);

                mockObserverOnNotifySpy.resetHistory();

                //testing with snake2
                nextStep = lastNodes[1];
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, false);

                mockObserverOnNotifySpy.restore();
            });
        })
    });
});