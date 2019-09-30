import assert from 'assert';

import CollisionDetector from '../model/CollisionDetector.js';

describe("Unit testing CollisionDetector.js", function () {
    let collisionDetector;

    beforeEach("setup", function () {
        collisionDetector = new CollisionDetector();
    });

    describe("* function subscribe", function () {
        it("should add given observer to _state.observers and return with true", function () {
            let mockObserver = {
                notify: function () {}
            }

            let result = collisionDetector.subscribe(mockObserver);

            assert.equal(result, true);
            assert.equal(collisionDetector._state.observers.has(mockObserver), true);
        });
        it("should not add given observer if it is null or has no notify function and return false", function () {
            let mockObserver = {};
            let result;

            //with null
            result = collisionDetector.subscribe(null);
            assert.equal(result, false);
            assert.equal(collisionDetector._state.observers.size, 0);

            //with invalid observer
            result = collisionDetector.subscribe(mockObserver);
            assert.equal(result, false);
            assert.equal(collisionDetector._state.observers.size, 0);
        });
    })

    describe("* function _checkWallCollision", function () {
        it("it should return true if head of given snake overlaps with any given walls", function () {
            let walls = [{
                    posX: 0,
                    posY: 0
                },
                {
                    posX: 1,
                    posY: 0
                },
                {
                    posX: 2,
                    posY: 0
                },
                {
                    posX: 3,
                    posY: 0
                }
            ]
            let mockSnake = {
                head: {
                    posX: 0,
                    posY: 0
                }
            }

            let result = collisionDetector._checkWallCollision(mockSnake, walls);

            assert.equal(result, true);

        })
        it("should return false if no wall is overlaping with given snakes head", function () {
            let walls = [{
                    posX: 0,
                    posY: 0
                },
                {
                    posX: 1,
                    posY: 0
                },
                {
                    posX: 2,
                    posY: 0
                },
                {
                    posX: 3,
                    posY: 0
                }
            ]
            let mockSnake = {
                head: {
                    posX: 1,
                    posY: 1
                }
            }

            let result = collisionDetector._checkWallCollision(mockSnake, walls);

            assert.equal(result, false);
        })
    })
    describe("* function unsubscribe", function(){
        ("it should remove give object form _stat.observers", function(){
            let mockObserver = {
                onNotify: function(){}
            }

            collisionDetector.subscribe(mockObserver);

            collisionDetector.unsubscribe(mockObserver);

            assert.equal(collisionDetector._state.observers.size, 0);
        });
    })
    describe("* function checkMutualCollision", function () {
        it("should return true if head of given snake overlaps with head of any other given snake", function () {
            let subjectMockSnake = {
                id: 'snake-1',
                head: {
                    posX: 1,
                    posY: 1
                }
            };
            let mockSnakes = [{
                    id: 'snake-2',
                    head: {
                        posX: 0,
                        posY: 1
                    }
                },
                {
                    id: 'snake-3',
                    head: {
                        posX: 1,
                        posY: 1
                    }
                }
            ];

            let result = collisionDetector._checkMutualCollision(subjectMockSnake, mockSnakes);

            assert.equal(result, true);
        });
        it("should return false if no other snakes head is overlapping with given snakes head", function () {
            let subjectMockSnake = {
                head: {
                    posX: 1,
                    posY: 2
                }
            };
            let mockSnakes = [{
                    head: {
                        posX: 0,
                        posY: 1
                    }
                },
                {
                    head: {
                        posX: 1,
                        posY: 1
                    }
                }
            ];

            let result = collisionDetector._checkMutualCollision(subjectMockSnake, mockSnakes);

            assert.equal(result, false);
        });
        it("it should not detect overlap with subject snakes head as collision", function () {
            let subjectMockSnake = {
                head: {
                    posX: 1,
                    posY: 2
                }
            };
            let mockSnakes = [subjectMockSnake];

            let result = collisionDetector._checkMutualCollision(subjectMockSnake, mockSnakes);

            assert.equal(result, false);
        });
    });
    describe("* function _checkTailCollision", function () {
        it("should return true if given snakes head overlaps with tail of any other snake", function () {
            let mockSnake = {
                head: {
                    posX: 1,
                    posY: 1
                }
            }
            let mockSnakes = [{
                tail: [{
                        posX: 0,
                        posY: 1
                    },
                    {
                        posX: 1,
                        posY: 1
                    }
                ]
            }];

            let result = collisionDetector._checkTailCollision(mockSnake, mockSnakes);

            assert.equal(result, true);
        });
        it("should return false if no snakes tail is overlapping with given snakes head", function () {
            let mockSnake = {
                head: {
                    posX: 1,
                    posY: 2
                }
            }
            let mockSnakes = [{
                tail: [{
                        posX: 0,
                        posY: 1
                    },
                    {
                        posX: 1,
                        posY: 1
                    }
                ]
            }];

            let result = collisionDetector._checkTailCollision(mockSnake, mockSnakes);

            assert.equal(result, false);
        })
    });
    describe("* function _checkPillCollision", function () {
        it("should return the pill the given snakes head is overlaping with", function () {
            let mockSnake = {
                head: {
                    posX: 1,
                    posY: 1
                }
            };
            let mockPill = {
                position: {
                    posX: 1,
                    posY: 1
                }
            }
            let mockPills = [mockPill]

            let result = collisionDetector._checkPillCollision(mockSnake, mockPills);

            assert.deepEqual(result, mockPill);
        });
        it("should return null if no pill is overlapping with head of given snake", function () {
            let mockSnake = {
                head: {
                    posX: 1,
                    posY: 1
                }
            };
            let mockPills = [{
                position: {
                    posX: 2,
                    posY: 1
                }
            }]

            let result = collisionDetector._checkPillCollision(mockSnake, mockPills);

            assert.equal(result, null);
        })
    })

    describe("* function _createNotification", function () {
        it("should return object with fields 'type' and payload containing given payload", function () {
            let payload = {
                foo: 'bar'
            };
            let type = 'test';

            let notification = collisionDetector._createNotification(type, payload);

            assert.equal(notification.type, type);
            assert.equal(notification.payload, payload);
        })
    })
});