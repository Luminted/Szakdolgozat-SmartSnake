// "use strinct";

import Subject from './AbstractClasses/Subject'
import IntCoordinate from './intCoordinate';
import ObserverEntity from './AbstractClasses/ObserverEntity';

export default class Notifier extends Subject {

    constructor(callbacks) {
        super();

        this.observers = new Set();
        this.callbacks = callbacks;
        this.lastNodeBuffer = {};

        this.subscribe = this.subscribe.bind(this);
    }

    calculateStepCollisionType(nextStep, callerID) {
        const snakes = this.callbacks.getEntityList().snakes;
        const board = this.callbacks.getEntityList().board;
        const pills = this.callbacks.getEntityList().pills;
        let callerSnake = this.callbacks.getEntityByID(callerID);

        this.storeLastNode(callerID, callerSnake.endOfBody);

        if (board) {
            if (nextStep.nullPosition == true) {
                // console.log('<---------------WALL_COLLISION_ACITON--------------->');
                this.observers.forEach((observer) => {
                    let caller = this.callbacks.getEntityByID(callerID);
                    observer.onNotify(caller, {
                        type: "WALL_COLLISION"
                    });
                })
            } else {
                let obstacles = board.obstacles;
                for (let obstacle of obstacles) {
                    if (obstacle.coordinates.x == nextStep.coordinates.x && obstacle.coordinates.y == nextStep.coordinates.y) {
                        // console.log('<---------------WALL_COLLISION_ACITON--------------->');
                        this.observers.forEach((observer) => {
                            let caller = this.callbacks.getEntityByID(callerID);
                            observer.onNotify(caller, {
                                type: "WALL_COLLISION"
                            });
                        })
                    }
                }
            }
        }

        for (let pill of pills) {
            if (pill.position.coordinates != undefined) {
                if (pill.position.coordinates.x === nextStep.coordinates.x && pill.position.coordinates.y === nextStep.coordinates.y) {
                    // console.log('<---------------PILL_COLLISION_ACITON--------------->');
                    this.observers.forEach((observer) => {
                        let caller = this.callbacks.getEntityByID(callerID);
                        observer.onNotify(caller, {
                            type: 'PILL_COLLISION',
                            pill: pill
                        });
                    });
                }
            }
        }

        if (callerSnake.target && callerSnake.target.coordinates != undefined) {
            if (callerSnake.target && (callerSnake.target.coordinates.x === nextStep.coordinates.x && callerSnake.target.coordinates.y === nextStep.coordinates.y)) {
                // console.log('<---------------TARGET_REACHED--------------->');
                this.observers.forEach((observer) => {
                    observer.onNotify(callerSnake, {
                        type: 'TARGET_REACHED',
                    })
                })
            }

        }

        let lastNodes = {}
        for (let snake of snakes) {
            lastNodes[snake.ID] = snake.endOfBody;
        }
        Object.assign(lastNodes, this.lastNodeBuffer);
        let includes = false;
        for (let key of Object.keys(lastNodes)) {
            includes = includes || (lastNodes[key].coordinates.x == nextStep.coordinates.x && lastNodes[key].coordinates.y == nextStep.coordinates.y);
        }
        if (!includes) {
            for (let snake of snakes) {
                for (let node of snake.body) {
                    if (nextStep.coordinates.x === node.coordinates.x && nextStep.coordinates.y === node.coordinates.y) {
                        // console.log('<---------------BODY_COLLISION_ACITON--------------->');
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

        if (snakes.length == Object.keys(this.lastNodeBuffer).length) {
            this.lastNodeBuffer = {};
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

    storeLastNode(ID, lastNode) {
        if (ID && lastNode instanceof IntCoordinate) {
            this.lastNodeBuffer[ID] = lastNode;
            return true;
        }
        return false;
    }
}