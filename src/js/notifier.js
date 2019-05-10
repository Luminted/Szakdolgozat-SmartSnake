// "use strinct";

import Subject from './AbstractClasses/Subject'
import IntCoordinate from './intCoordinate';
import ObserverEntity from './AbstractClasses/ObserverEntity';

export default class Notifier extends Subject {

    constructor(callbacks) {
        super();

        this.observers = new Set();
        this.callbacks = callbacks;
        this.nextStepBuffer = {};

        this.subscribe = this.subscribe.bind(this);
    }

    calculateStepCollisionType(nextStep, callerID) {
        const snakes = this.callbacks.getEntityList().snakes;
        const board = this.callbacks.getEntityList().board;
        const pills = this.callbacks.getEntityList().pills;
        let callerSnake = this.callbacks.getEntityByID(callerID);

        this.addNextStepToBuffer(callerID, nextStep);

        if (nextStep.coordinates.x < 0 || nextStep.coordinates.y >= board.state.height || nextStep.coordinates.y < 0 || nextStep.coordinates.x >= board.state.width) {
            console.log('<---------------WALL_COLLISION_ACITON--------------->');
            this.observers.forEach((observer) => {
                let caller = this.callbacks.getEntityByID(callerID);
                observer.onNotify(caller, {
                    type: "WALL_COLLISION"
                });
            })
        }

        for (let pill of pills) {
            if (pill.position.coordinates != undefined) {
                if (pill.position.coordinates.x === nextStep.coordinates.x && pill.position.coordinates.y === nextStep.coordinates.y) {
                    console.log('<---------------PILL_COLLISION_ACITON--------------->');
                    this.observers.forEach((observer) => {
                        observer.onNotify(pill, {
                            type: 'PILL_COLLISION',
                            pillValue: pill.pillValue
                        });
                    });
                }
            }
        }

        if (callerSnake.target && callerSnake.target.coordinates != undefined) {
            if (callerSnake.target && (callerSnake.target.coordinates.x === nextStep.coordinates.x && callerSnake.target.coordinates.y === nextStep.coordinates.y)) {
                console.log('<---------------TARGET_REACHED--------------->');
                this.observers.forEach((observer) => {
                    observer.onNotify(callerSnake, {
                        type: 'TARGET_REACHED',
                    })
                })
            }

        }

        let lastNodes = []
        for (let snake of snakes) {
            lastNodes.push(snake.endOfBody);
        }
        if (!lastNodes.includes(nextStep)) {
            for (let snake of snakes) {
                for (let node of snake.body) {
                    if (nextStep.coordinates.x === node.coordinates.x && nextStep.coordinates.y === node.coordinates.y) {
                        console.log('<---------------BODY_COLLISION_ACITON--------------->');
                        this.observers.forEach((observer) => {
                            let caller = this.callbacks.getEntityByID(callerID);
                            observer.onNotify(caller, {
                                type: 'BODY_COLLISION'
                            });
                        })
                        break;
                    }
                }
            }
        }

        let nextStepBufferIDs = Object.keys(this.nextStepBuffer);
        let nextStepBufferLength = nextStepBufferIDs.length;
        console.log(snakes.length == nextStepBufferLength, snakes.length, nextStepBufferLength);
        if(snakes.length == nextStepBufferLength){
            for(let i = 0; i < nextStepBufferLength; i++){
                let currID = nextStepBufferIDs[i];
                let isMatching = false;
                let currIDList = nextStepBufferIDs.filter((id) => id != currID);
                while(!isMatching){
                    for(let element of currIDList){
                        isMatching = isMatching || this.nextStepBuffer[element] == this.nextStepBuffer[currID];
                    }
                }
                if(isMatching){
                    let snake = this.callbacks.getEntityByID(currID);
                    this.observers.forEach((observer) => {
                        observer.onNotify(snake, {
                            type: 'BODY_COLLISION'
                        });
                    })
                }
            }
            this.nextStepBuffer = {};
        }
    }

    subscribe(observer) {
        if (observer instanceof ObserverEntity) {
            this.observers.add(observer);
            return true;
        }
        return false;
    }

    unsubscribe(observer) {
        this.observers.delete(observer)
    }

    addNextStepToBuffer(ID, nextStep){
        if(ID && nextStep instanceof IntCoordinate){
            this.nextStepBuffer[ID] = nextStep;
            return true;
        }
        return false;
    }
}