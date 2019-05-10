import assert from 'assert';
import sinon from 'sinon';
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
        }
        onNotify() {}
        update() {}
        reset() {}
    }


    let boardConfig = {
        width: "3",
        height: "3"
    }
    let snakeConfig1 = {
        baseLength: "1",
        startX: "1",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar"
    }
    let snakeConfig3 = {
        baseLength: "1",
        startX: "0",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar"
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
    let mockObserverEntity;
    let notifier

    beforeEach(function setUp() {
        mockObserverEntity = new MockObserverEntityClass();
        notifier = new Notifier(mockCallBacks);
        snake1 = new Snake(mockCallBacks, snakeConfig1, {}, notifier);
        snake2 = new Snake(mockCallBacks, snakeConfig2, {}, notifier);
        snake3 = new Snake(mockCallBacks, snakeConfig3,{}, notifier);
        pill1 = new Pill(mockCallBacks, pillConfig1, notifier);
        pill2 = new Pill(mockCallBacks, pillConfig2, notifier);
        board = new Board(mockCallBacks, boardConfig);
    })

    describe('function calculateStepCollisionType', function () {
        beforeEach(function subScribeMockObserver() {
            notifier.subscribe(mockObserverEntity);
        })
        describe('WALL_COLLISION case:', function () {


            it("should send a notification, once, with type: 'WALL_COLLISION' and entity: caller Snake, if given next step is over board dimensions", function () {
                let dimensions = board.dimensions;
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');
                let nextStep;

                // x coord out of upper bound
                nextStep = new IntCoordinate(dimensions.dimX, 0);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'WALL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.resetHistory();

                // x coord out of lower bound
                nextStep = new IntCoordinate(-1, 0);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'WALL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.resetHistory();

                // y coord out of upper bound
                nextStep = new IntCoordinate(0, dimensions.dimY);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'WALL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.resetHistory();

                // y coord out of lower bound
                nextStep = new IntCoordinate(0, -1);
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'WALL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, callerID);

                mockObserverOnNotifySpy.restore();
            });
        });
        describe('PILL_COLLISION case:', function () {
            it("should send a notification, once, with type: 'PILL_COLLISION' and entity: Pill that was collided with, if next step coordinates are equal to one Pill's coordinates", function () {
                let nextStep;
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');

                //collides with pill1
                nextStep = pill1.position;
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'PILL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, pill1.ID);

                mockObserverOnNotifySpy.resetHistory();

                //collides with pill2
                nextStep = pill2.position;
                notifier.calculateStepCollisionType(nextStep, callerID);
                assert.equal(mockObserverOnNotifySpy.called, true);
                assert.equal(mockObserverOnNotifySpy.args[0][1].type, 'PILL_COLLISION');
                assert.equal(mockObserverOnNotifySpy.args[0][0].ID, pill2.ID);


                mockObserverOnNotifySpy.restore();

            });
        });
        describe('TARGET_REACHED case:', function () {
            it("should send a notification, once, with type:'TARGET_REACHED' and entity: called Snake, if next step coordinates are equal to caller Snake's target coordinates", function () {
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
            it("should send a notification, once, with type: BODY_COLLISION and entity: caller Snake, if next step coordinates are equal to a Snake's coordinates", function () {
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
            it('should send a BODY_COLLISION, once, to all Snakes that are trying to step on the same coordinate in the same tick with themselves as entities. Notifications should be sent in the last call to calculateStepCollisionType in the tick.', function () {
                let callerIDs = ["1", "2", "3"];
                let getEntityByIDStub = sinon.stub(mockCallBacks, 'getEntityByID');
                let nextStep = new IntCoordinate(2, 2);
                let mockObserverOnNotifySpy = sinon.spy(mockObserverEntity, 'onNotify');

                getEntityByIDStub.returns({
                    ID: callerIDs[0]
                });
                notifier.calculateStepCollisionType(nextStep, callerIDs[0]);
                assert.equal(mockObserverOnNotifySpy.called, false);
                getEntityByIDStub.reset();

                getEntityByIDStub.returns({
                    ID: callerIDs[1]
                })
                notifier.calculateStepCollisionType(nextStep, callerIDs[1]);
                assert.equal(mockObserverOnNotifySpy.called, false);
                getEntityByIDStub.returns({
                    ID: callerIDs[2]
                });
                getEntityByIDStub.restore();

                notifier.calculateStepCollisionType(nextStep, callerIDs[2]);
                let onNotifyCalls = mockObserverOnNotifySpy.getCalls();
                assert.equal(onNotifyCalls.length, callerIDs.length);
                for (let call of onNotifyCalls) {
                    console.log(call.args);
                    assert.equal(call.args[0].ID, callerID);
                    assert.equal(call.args[1].type, 'BODY_COLLISION')
                }

                // getEntityByIDStub.restore();
                mockObserverOnNotifySpy.restore();

            });
            // it('should empty the nextStepBuffer is it has as many elements as there are number of snakes', function () {
            //     notifier.nextStepBuffer = {
            //         1: 'TEST',
            //         2: 'TEST',
            //         3: 'TEST',
            //     }
            // })
        })
    });
});