import assert from 'assert';

import {
    generateErrorMessage,
    drawScene
} from '../../mainFunctions.js';
import Model from '../../model.js';
import Snake from '../../snake.js';

describe('Unit tests of main.js', function () {

    let pillConfig1 = {
        pillValue: "1",
        startPosX: "1",
        startPosY: "1",
        color: 'grey'
    }
    let pillConfig2 = {
        pillValue: "2",
        startPosX: "2",
        startPosY: "2",
        color: 'blue'
    }
    let snakeConfig1 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "mockStrategy1",
        color: "purple"
    }
    let snakeConfig2 = {
        baseLength: "1",
        startX: "0",
        startY: "0",
        startDirection: 'RIGHT',
        startVelocity: "1",
        strategy: "mockStrategy2",
        color: "red"
    }

    let mockModell = {
        getEntityList: function () {
            return {
                snakes: [snake1, snake2],
                pills: [pill1, pill2]
            }
        }
    }

    let HTMLCanvasMock = {
        getContext: function () {
            let state = {
                fillStyle: undefined,
                fillRect: function (posx, posy, width, height) {},
                beginPath: function () {},
                arc: function (posx, posy, radius, startAngle, endAngle) {},
                closePath: function () {},
                fill: function () {},
                clearRect: function (posx, posy, width, height) {}
            }
            return state;
        }
    }
})