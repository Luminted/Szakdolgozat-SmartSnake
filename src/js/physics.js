"use strinct";

function calculateStepCollisionType(snake, board){
    const snakeDirection = snake.getDirection();
    const velocity = snake.getVelocity();
    const stepsTo = snake.calculateNextHead(velocity.X, velocity.Y);

    //TODO maybe board returns wall objects if position is out of bounds?
    if(stepsTo.posX < 0 || stepsTo.posY > board.getDimensions().dimX || stepsTo.posY < 0 ||stepsTo.X > board.getDimensions().dimY){
        console.log(snake, board);
        return 'WALL_COLLISION';
    }

    if(board.getTileByPosition(stepsTo.posX, stepsTo.posY).status === 'PILL'){
        return 'PILL_COLLISION';
    }

    for(let node of snake.getBody()){
        if(stepsTo.posX === node.posX && stepsTo.posY === node.posY){
            return 'BODY_COLLISION';
        }
    }

    return 'NO_COLLISION';
}

export {
    calculateStepCollisionType
}