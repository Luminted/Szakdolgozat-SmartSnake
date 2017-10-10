"use strict"

/**
 * Osztály a canvas elem API-jának absztrahálására.
 */
export default class CanvasWrapper {
    constructor(width, height, canvasId, ctxDimension) {
        this.width = width;
        this.height = height;
        this._canvas = document.querySelector(`#${canvasId}`);

        this._canvas.width = this.width;
        this._canvas.height = this.height;

        this._ctx = this._canvas.getContext(ctxDimension);
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
    createRect(posX = 0, posY = 0, width = 0, height = 0, color = 'black') {
        const rect = {
            canvasObjectType: 'rect',
            width,
            height,
            posX,
            posY,
            color
        };
        this._scene.push(rect);
        return rect;
    }

    createCircle(posX = 0, posY = 0, radius = 0, color = 'black') {
        const circle = {
            canvasObjectType: 'circle',
            radius,
            starAngle: 0,
            endAndge: 2 * Math.PI,
            posX,
            posY,
            color
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
            if (rect.canvasObjectType === 'rect') {
                this._ctx.fillStyle = rect.color;
                this._ctx.fillRect(rect.posX, rect.posY, rect.width, rect.height);
            } else {
                console.error('Object given is not a rect: ', rect);
            }
        } else {
            console.error('Given rect is not an objet or was null: ', rect);
        }
    }

    drawCircle(circle){
        if (typeof circle === 'object' && circle !== null) {
            if (circle.canvasObjectType === 'circle') {
                this._ctx.fillStyle = circle.color;
                this._ctx.beginPath();
                this._ctx.arc(circle.posX, circle.posY, circle.radius, circle.starAngle, circle.endAndge, false);
                this._ctx.closePath();
                this._ctx.fill();
            } else {
                console.error('Object given is not a circle: ', circle);
            }
        } else {
            console.error('Given circle is not an objet or was null: ', circle);
        }
    }

    /**
     * Színtér kirajzolása
     */
    renderScene() {
        this._ctx.clearRect(0, 0, this.width, this.height);
        for (let object of this._scene) {
            if (this.isCanvasObject(object)) {
                //Hívandó függvény eldöntése
                    switch(object.canvasObjectType){
                      case 'rect':
                        this.drawRect(object);
                        break;
                      case 'circle':
                        this.drawCircle(object);
                        break;
                }
            } else {
                console.warn('Was not a canvasObject: ', object)
                continue;
            }
        }
    }

    isCanvasObject(object) {
        return (object.canvasObjectType !== void 0);
    }

    clearScene(){
        this._scene = [];
    }
}