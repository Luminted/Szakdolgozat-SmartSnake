import {PILL_COLLISION} from './notificationTypes.js';

export default class Pill {
    constructor(config, effect){
        this._state = {
            ...config,
            effect,
            notificationBuffer: [],
        };
    }

    _generatePosition(boardState, gameState){
        let {snakes, pills} = gameState;
        let {dimX, dimY, walls} = boardState;

        return {
            posX: 2,
            posY: 2
        }

    }

    _setState(nextState){
        Object.assign(this._state, nextState);
    }

    set boardState(boardState){
        this._boardState = boardState;
    }

    set gameState(gameState){
        this._gameState = gameState;
    }

    get effect(){
        return this._state.effect;
    }

    get position(){
        return {
            posX: this._state.posX,
            posY: this._state.posY
        }
    }

    processNotifications(){
        while(this._state.notificationBuffer.length > 0){
            let notification = this._state.notificationBuffer.shift();
            switch(notification.type){
                case PILL_COLLISION:
                    let nextPosition = this._generatePosition(this._boardState, this._gameState);

                    this._setState({...nextPosition});
            }
        }
    }


}