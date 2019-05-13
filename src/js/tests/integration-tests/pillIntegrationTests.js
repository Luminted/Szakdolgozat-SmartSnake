import Pill from "../../pill";
import IntCoordinate from '../../intCoordinate'
import Snake from '../../snake'
import assert from 'assert'
import sinon from 'sinon';

export default describe('Integration tests of Pill', function(){

    let pill;
    let pillConfig = {
        pillValue: "1",
        startPosX: "2",
        startPosY: "2",
        limitX: "3",
        limitY: "3"
    }
    let snakeConfig1 = {
        baseLength: "1",
        startX: "1",
        startY: "1",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar",
        limitX: "3",
        limitY: "3"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "AStar",
        limitX: "3",
        limitY: "3"
    }
    let mockCallbacks = {
        getEntityList: function(){}
    }

    beforeEach(function setUp(){
        pill = new Pill(mockCallbacks, pillConfig, undefined);
    })
    
    //TODO: this is a unit test
    describe('function onNotify', function () {
        it("Notification: PILL_COLLISION. Should call calculateNewRandomPosition once and set the position based on it's return value", function () {
            let calculateNewRandomPositionSpy = sinon.spy(pill, 'calculateNewRandomPosition');
            let getEntityListStub = sinon.stub(mockCallbacks, 'getEntityList');
            let snake = new Snake(undefined, snakeConfig1);
            snake.setState({
                body:[new IntCoordinate(0,0),new IntCoordinate(1,0)]
            });
            let notification = {
                type: 'PILL_COLLISION'
            }
            getEntityListStub.returns({
                snakes: [snake]
            })
            pill.onNotify(undefined, notification);
            assert.equal(calculateNewRandomPositionSpy.calledOnce, true);
            let returnValue = calculateNewRandomPositionSpy.returnValues[0];
            assert.deepEqual(pill.position, returnValue);

            calculateNewRandomPositionSpy.restore();
            getEntityListStub.restore();
        });
    });
    describe('function calculateNewRandomPosition', function () {
        it('should return an IntCoordinate object with nullPosition = true if the board is full a.k.a the length of snakes is equal to the size of the board', function () {
            pill.setState({
                limits: {
                    x:2,
                    y:2
                }
            });

            let snake1 = new Snake({},snakeConfig1);
            let snake2 = new Snake({},snakeConfig1);
            snake1.setState({
                body: [new IntCoordinate(0,0),new IntCoordinate(1,0)]
            })
            snake2.setState({
                body: [new IntCoordinate(0,1),new IntCoordinate(1,1)]
            });
            let getEntityListStub = sinon.stub(pill.callbacks, "getEntityList");
            getEntityListStub.returns({
                snakes: [snake1,snake2]
            });
            let calculatedCoord = pill.calculateNewRandomPosition();
            assert.equal(calculatedCoord.nullPosition, true);
            getEntityListStub.restore();
        });
        it("should call calculateFreePositions with appended bodies of Snakes and return an element from it's result if total size of snakes is less than the size of Board", function () {
            let calculateFreePositionsStub = sinon.stub(pill, 'calculateFreePositions');
            let getEntityListStub = sinon.stub(mockCallbacks, 'getEntityList');
            let snakes = [new Snake(undefined,snakeConfig1), new Snake(undefined,snakeConfig2)]
            let limits = pill.state.limits;
            
            getEntityListStub.returns({
                snakes: snakes
            })
            calculateFreePositionsStub.returns([
                new IntCoordinate(0, 1),
                new IntCoordinate(1, 0),
            ]);
            let appendedSnakeBodies = [];
            for (let snake of snakes) {
                appendedSnakeBodies.push(...snake.body);
            }
            let newPillPosition = pill.calculateNewRandomPosition();
            let freeSpaces = calculateFreePositionsStub.returnValues[0];
            assert.equal(appendedSnakeBodies.length < limits.x * limits.y, true);
            assert.equal(calculateFreePositionsStub.calledWith(appendedSnakeBodies), true);
            let contains = false;
            for(let space of freeSpaces){
                contains = contains || (space.coordinates.x == newPillPosition.coordinates.x && space.coordinates.y == newPillPosition.coordinates.y && space.nullPosition == newPillPosition.nullPosition);
            }
            assert.equal(contains, true);

            calculateFreePositionsStub.restore();
            getEntityListStub.restore()
        })

    });
    describe('function calculateFreePositions', function () {
        it('should return a list of objects with x and y coordinates which correspong to spaces on board which are not occupied by Snakes', function () {
            //setting up edge case
            let snakeBodies = [new IntCoordinate(0, 0), new IntCoordinate(1, 1)];
            pill.setState({
                limits: {
                    x: 2,
                    y: 2
                },
            });

            let freeSpaces = pill.calculateFreePositions(snakeBodies);
            assert.equal(Array.isArray(freeSpaces), true);
            for (let space of freeSpaces) {
                for (let node of snakeBodies) {
                    assert.notDeepEqual(node, space);
                }
            }
        });

        it('should return an IntCoordinate with x and y values within the limits', function () {
            let snakeBody = [new IntCoordinate(0, 0)];
            let getEntityListStub = sinon.stub(mockCallbacks, 'getEntityList');
            let snakes = [new Snake(undefined,snakeConfig1), new Snake(undefined,snakeConfig2)]            
            getEntityListStub.returns({
                snakes: snakes
            })
            let newPosition = pill.calculateNewRandomPosition(snakeBody);

            assert.equal(newPosition.coordinates.x < pill.state.limits.x, true);
            assert.equal(newPosition.coordinates.y < pill.state.limits.y, true);
            assert.equal(newPosition.coordinates.x >= 0, true);
            assert.equal(newPosition.coordinates.x >= 0, true);

            getEntityListStub.restore();
        });
    });
})