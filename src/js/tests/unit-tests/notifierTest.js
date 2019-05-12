import assert from 'assert';
import cloneDeep from 'lodash/cloneDeep';

import Notifier from '../../notifier';
import ObserverEntity from '../../AbstractClasses/ObserverEntity';
import Entity from '../../AbstractClasses/Entity';
import Subject from '../../AbstractClasses/Subject';
import Command from '../../AbstractClasses/Command';
import IntCoordinate from '../../intCoordinate';

describe('Unit testing Notifier class', function(){    
    class MockObserverEntityClass extends ObserverEntity{
        constructor(){
            super();
        }
        onNotify (){}
        update() {}
        reset() {}
    }
    class MockEntityClass extends Entity {
        constructor(){
            super();
        }
        update(){}
        reset(){}
    }
    class MockSubjectClass extends Subject {
        constructor(){
            super();
        }
        subscribe(){}
        unsubscribe(){}
    }
    class MockCommandClass extends Command {
        constructor(){
            super();
        }
        execute(){}
    }
    let mockCallBacks = {
        test: function(){}
    }
    let notifier;


    beforeEach(function setUp(){
        notifier = new Notifier();
    });

    describe('contructor', function(){
        it('should have the following inner state after being instantiated with callbacks -> callbacks: callbacks, observers: Set, nextStepBuffer: []. Observers and nextStepBuffer should be empty.', function(){
            let newNotifier = new Notifier(mockCallBacks);
            assert.equal(newNotifier.observers instanceof Set, true);
            assert.equal(newNotifier.observers.size, 0);
            assert.deepEqual(newNotifier.nextStepBuffer, []);
            assert.deepEqual(newNotifier.callbacks, mockCallBacks);
        });
        it('should not depend on callbacks', function(){
            assert.doesNotThrow(() => new Notifier(undefined), Error);
        })
    })
    describe('function subscribe', function(){
        it("should add given ObserverEntity to it's observers", function(){
            let mockObserverEntity = new MockObserverEntityClass();
            notifier.subscribe(mockObserverEntity);
            assert.equal(notifier.observers.has(mockObserverEntity), true);
        });
        it("should only accept ObserverEntity instances", function(){
            let mockObserverEntity = new MockObserverEntityClass();
            let mockEntity = new MockEntityClass();
            let mockCommand = new MockCommandClass();
            let mockSubject = new MockSubjectClass();

            notifier.subscribe(mockObserverEntity);
            notifier.subscribe(mockEntity);
            notifier.subscribe(mockCommand);
            notifier.subscribe(mockSubject);

            let observers = notifier.observers;

            assert.equal(observers.has(mockObserverEntity), true);
            assert.equal(observers.has(mockEntity), false);
            assert.equal(observers.has(mockSubject), false);
            assert.equal(observers.has(mockCommand), false);
        });
        it('should return true if it was called with an ObserverEntity', function(){
            let mockObserverEntity = new MockObserverEntityClass();
            let returnValue = notifier.subscribe(mockObserverEntity);
            assert.equal(returnValue, true);
        })
        it('should return false if not called with an ObserverEnttiy', function(){
            let mockEntity = new MockEntityClass();
            let mockCommand = new MockCommandClass();
            let mockSubject = new MockSubjectClass();
            let returnValue = false;

            returnValue = returnValue || notifier.subscribe(mockEntity);
            returnValue = returnValue || notifier.subscribe(mockCommand);
            returnValue = returnValue || notifier.subscribe(mockSubject);

            assert.equal(returnValue, false);
        });
    });
    describe('function unsubscribe', function(){
        it("should remove given object from it's observers", function(){
            let mockObserverEntity = new MockObserverEntityClass();
            notifier.subscribe(mockObserverEntity);
            notifier.unsubscribe(mockObserverEntity);
            assert.equal(notifier.observers.has(mockObserverEntity), false);

        });
    });
    describe('function addNextStepToBuffer', function(){
        it('should append ID: nextStep to nextStepBUffer and return true if ID is not undefined and nextStep is instance of IntCoordinate', function(){
            let nextStep = new IntCoordinate(1,1);
            let ID = "asd123";

            let returnValue = notifier.addNextStepToBuffer(ID,nextStep);
            assert.equal(notifier.nextStepBuffer[ID], nextStep);
            assert.equal(returnValue, true);
        });
        it('should return false and do no changes to nextStepBuffer, if ID is undefined or nextStep is not instance of IntCoordinate',function(){
            let nextStep;
            let ID;
            let returnValue;
            let originalBuffer = cloneDeep(notifier.nextStepBuffer);

            //ID is undefined
            nextStep = new IntCoordinate(1,1);
            ID = undefined
            returnValue = notifier.addNextStepToBuffer(ID,nextStep);
            assert.deepEqual(notifier.nextStepBuffer, originalBuffer);
            assert.equal(returnValue, false);

            //nextStep is not instance of IntCoordinate
            nextStep = {};
            ID = "123"
            returnValue = notifier.addNextStepToBuffer(ID,nextStep);
            assert.deepEqual(notifier.nextStepBuffer, originalBuffer);
            assert.equal(returnValue, false);

        })
    })
})