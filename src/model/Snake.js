import {UP, DOWN, LEFT, RIGHT} from './directions.js';
import {
    WALL_COLLISION,
    MUTUAL_COLLISION,
    TAIL_COLLISION,
    PILL_COLLISION
} from './notificationTypes';

export default class Snake{
    constructor(config, strategy){
        this._state = {
            ...config,
            body: [],
            prevBody: null,
            alive: true,
            notificationBuffer: [],
            strategy: strategy,
            config : config
        };

        for(let i = 0; i < this._state.length; i++){
            this._state.body.push({
                posX: this.config.startPosX,
                posY: this.config.startPosY
            });
        }
    }

    _handleInput(command){
        command.execute(this);
    }

    _move(body, direction, velocity){
        //cloning body
        let newBody = body.map((node) => {return {...node}});
        let head = newBody[0];
        let tail = newBody.pop();
        switch(direction){
            case LEFT:
                tail.posX = head.posX - velocity;
                tail.posY = head.posY;
                newBody.unshift(tail);
                break;
            case RIGHT:
                tail.posX = head.posX + velocity;
                tail.posY = head.posY;
                newBody.unshift(tail);
                break;
            case UP:
                tail.posX = head.posX;
                tail.posY = head.posY - velocity;
                newBody.unshift(tail);
                break;
            case DOWN:
                tail.posX = head.posX;
                tail.posY = head.posY + velocity;
                newBody.unshift(tail);
                break;
            default:
                return newBody;
        }

        return newBody;
    }

    processStep(){
        let input = this._strategy.getInput();
        if(input !== null && typeof input.execute === 'function'){
            this._handleInput(input);
        }
        let newBody = this._move(this._state.body, this._state.direction, this._state.velocity);
        this._state.prevBody = this._state.body;
        this._state.body = newBody;

    }

    processNotifications(){
        while(this._state.notificationBuffer.length !== 0){
            let notification = this._state.notificationBuffer.shift();
            switch(notification.type){
                case WALL_COLLISION:
                    this._handleWallCollision();
                    break;
                case TAIL_COLLISION:
                    this._handleTailCollision();
                    break;
                case MUTUAL_COLLISION:
                    this._handleMutualCollision();
                    break;
                case PILL_COLLISION:
                    this._handlePillCollision(notification.payload);
                    break;
            }
        }
    }

    _handleWallCollision(){
        let nextState = {
            alive: false,
            body: this._state.prevBody
        };

        this._setState(nextState);
    }

    _handleTailCollision(){
        let nextState = {
            alive: false,
            body: this._state.prevBody
        };

        this._setState(nextState);
    }

    _handleMutualCollision(){
        let nextState = {
            alive: false,
        };

        this._setState(nextState);
    }

    _handlePillCollision(payload){
        payload.pill.effect.execute(this);
    }

    isAlive(){
        return this._state.alive;
    }

    _setState(nextState){
        Object.assign(this._state, nextState);
    }

    get body(){
        return this._state.body;
    }

    get head(){
        return this._state.body[0];
    }

    get tail(){
        return this._state.body.slice(1);
    }

    set direction(direction){
        this._state.direction = direction;
    }


}