import {
    WALL_COLLISION,
    MUTUAL_COLLISION,
    TAIL_COLLISION,
    PILL_COLLISION
} from './notificationTypes';

export default class CollisionDetector {
    constructor() {
        this._state = {
            observers: new Set()
        };
    }

    checkCollision(gameState) {
        let {
            snakes,
            pills,
            walls
        } = gameState;
        let notifications = [];
        for (let subjectSnake of snakes) {
            if (this._checkMutualCollision(subjectSnake, snakes)) {
                let payload = {
                    collider: subjectSnake
                }
                notifications.push(this._createnotification(MUTUAL_COLLISION, payload));
            }
            if(this._checkTailCollision(subjectSnake, snakes)){
                let payload = {
                    collider: subjectSnake
                }
                notifications.push(this._createnotification(TAIL_COLLISION, payload));
            }
            if(this._checkWallCollision(subjectSnake, walls)){
                let payload = {
                    collider: subjectSnake
                };
                notifications.push(this._createnotification(WALL_COLLISION, payload));
            }

            let pill = this._checkPillCollision(subjectSnake, pills);
            if(pill){
                let payload = {
                    collider: subjectSnake,
                    pill: pill
                }
                notifications.push(this._createnotification(PILL_COLLISION, payload));
            }
        }
        for(let observer of this._state.observers){
            for(let notification of notifications){
                observer.notify(notification);
            }
        }
    }

    _checkMutualCollision(subjectSnake, snakes) {
        snakes = snakes.filter((snake) => snake.id !== subjectSnake.id);
        let subjectHead = subjectSnake.head;

        for (let snake of snakes) {
            let head = snake.head;
            if (subjectHead.posX === head.posX && subjectHead.posY === head.posY) {
                return true;
            }
        }
        return false;
    }

    _checkTailCollision(subjectSnake, snakes) {
        let subjectHead = subjectSnake.head;
        for (let snake of snakes) {
            let tail = snake.tail;
            for (let node of tail) {
                if (subjectHead.posX === node.posX && subjectHead.posY === node.posY) {
                    return true;
                }
            }
        }
        return false;
    }

    _checkWallCollision(subjectSnake, walls) {
        let subjectHead = subjectSnake.head;
        for (let wall of walls) {
            if (subjectHead.posX === wall.posX && subjectHead.posY === wall.posY) {
                return true;
            }
        }
        return false;
    }

    _checkPillCollision(subjectSnake, pills) {
        let subjectHead = subjectSnake.head;

        for (let pill of pills) {
            if (subjectHead.posX === pill.position.posX && subjectHead.posY === pill.position.posY) {
                return pill;
            }
        }
        return null;
    }

    _createNotification(type, payload) {
        return {
            type,
            payload
        }
    }

    subscribe(observer) {
        if (observer !== null && typeof observer.notify === 'function') {
            this._state.observers.add(observer);
            return true;
        }
        return false;
    }

    unsubscribe(observer){
        this._state.observers.delete(observer);
    }

    set boardState(boardState) {
        this._state.boardState = boardState;
    }

    set gameState(gameState) {
        this._state.gameState = gameState;
    }
}