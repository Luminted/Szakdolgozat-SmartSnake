//'use strict'

import IntCoordinate from './intCoordinate.js';

/**
 * Osztály a canvas elem API-jának absztrahálására.
 */
export default class CanvasWrapper {
    constructor(width, height, canvasDOMElement) {
        this.width = width;
        this.height = height;
        this._canvas = canvasDOMElement;

        this._canvas.width = this.width;
        this._canvas.height = this.height;

        this._ctx = this._canvas.getContext('2d');
        this._scene = [];

        this.createRect.bind(this);
        this.drawRect.bind(this);
        this.renderScene.bind(this);
    }

    /**
     * Téglalap reprezentáció létrehozása.
     * @param {*} posX 
     * @param {*} posY 
     * @param {*} width 
     * @param {*} height 
     * @param {*} color 
     */
    createRect(posX = 0, posY = 0, width = 10, height = 10, color = 'black', zindex = 0) {
        const rect = {
            type: 'rect',
            width,
            height,
            position: {
                x: posX,
                y: posY
            },
            color,
            zindex
        };
        this._scene.push(rect);
        return rect;
    }

    createCircle(posX = 0, posY = 0, radius = 5, color = 'black', zindex = 0) {
        const circle = {
            type: 'circle',
            radius,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            position: {
                x: posX,
                y: posY
            },
            color,
            zindex
        };
        this._scene.push(circle);
        return circle;
    }

    /**
     * Téglalap kirajzolása
     * @param {*téglalap reprezentáció} rect 
     */
    drawRect(rect) {
        if (typeof rect === 'object' && rect !== null) {
            if (rect.type == 'rect') {
                this._ctx.fillStyle = rect.color;
                this._ctx.fillRect(rect.position.x, rect.position.y, rect.width, rect.height);
                return true;
            }
            return false;
        }
        return false;
    }

    drawCircle(circle) {

        if (typeof circle === 'object' && circle !== null) {
            if (circle.type === 'circle') {

                this._ctx.fillStyle = circle.color;
                this._ctx.beginPath();
                this._ctx.arc(circle.position.x, circle.position.y, circle.radius, circle.startAngle, circle.endAngle);
                this._ctx.closePath();
                this._ctx.fill();
                return true;
            }
            return false;
        }
        return false;
    }

    /**
     * Színtér kirajzolása
     */
    renderScene() {

        this._ctx.clearRect(0, 0, this.width, this.height);
        let zBufferedScene = this.sortSceneByZIndex(this._scene);
        for (let object of zBufferedScene) {
            switch (object.type) {
                case 'rect':
                    this.drawRect(object);
                    break;
                case 'circle':
                    this.drawCircle(object);
                    break;
            }
        }
    }

    clearScene() {
        this._scene = [];
    }

    sortSceneByZIndex(scene) {
        let zBufferedScene = scene.sort((z1, z2) => {
            return z1 > z2
        });
        return zBufferedScene;
    }
}