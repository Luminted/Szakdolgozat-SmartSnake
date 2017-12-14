"use strict"

import GraphRepresentation from './GraphRepresentation';

export default class randomTargets {
    constructor(dimX = 30, dimY = 30) {
        this.dimX = dimX;
        this.dimY = dimY;
        this.graph = new GraphRepresentation();
    }

    calculateTarget(board, snake) {
        this.graph.buildRepresentation(board, snake);
        let randPosX = Math.trunc(Math.random() * this.dimX);
        let randPosY = Math.trunc(Math.random() * this.dimY);
        return {
            posX: randPosX,
            posY: randPosY
        }
    }
}