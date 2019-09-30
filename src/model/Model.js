import CollisionDetector from './CollisionDetector';
import Pill from './Pill';
import Snake from './Snake';
import { throws } from 'assert';

export default class Model{

    constructor(){
        this.strategies = {};
        this.effects = {};
        this.snakes = {};
        this.pills = {};
        this.boardState = {
            dimX: 10,
            dimY: 10,
            walls: []
        }
        this.collisionDetector = new CollisionDetector();
    }

    update(){
        for(snakeId in this.snakes){
            this.snakes[snakeId].processStep();
        }

        //TODO: populate
        let gameState;

        this.collisionDetector.checkCollision(gameState);

        for(snakeId in this.snakes){
            this.snakes[snakeId].processNotifications();
        }
        for(pillId in this.pill){
            this.pill[pillId].processNotifications();
        }

        //TODO: rebuild graph

    }

    addWall(posX, posY){
        let wall = {
            posX,
            posY
        };

        this.boardState.walls.push(wall);
    }

    addSnake(config, strategyId){
        let strategy = strategy[strategyId];
        let snake = new Snake(config, strategyId);

        this.snakes[snake.id] = snake;
    }

    addPill(config, effectId){
        let effect = this.effects[effectId];
        let pill = new Pill(config, effect);

        this.pills.push(pill);
    }

    removeWall(posX, posY){
        this.boardState.walls = this.boardState.walls.filter(wall => wall.posX !== posX && wall.posY != posY);
    }

    removeSnake(id){
        this.snakes[id] = undefined;
    }

    removePill(id){
        this.pills[id] = undefined;
    }

    changeBoardDimensions(dimX, dimY){
        this.boardState.dimX = dimX;
        this.boardState.dimY = dimY;
    }

    get gameState(){
        return {
            snakes: Object.entries(this.snakes).map(entry => entry[1]),
            pills: Object.entries(this.pill).map(entry => entry[1]),
        };
    }

    get strategies(){
        return this.strategies;
    }

    get boardState(){
        return this.boardState;
    }
}