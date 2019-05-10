import CanvasWrapper from '../../canvasWrapper.js'
import sinon from 'sinon'
import assert from 'assert';
import {
    isNumber
} from 'util';
import IntCoordinate from '../../intCoordinate.js';

export default describe('Unit testing canvasWrapper.js', function () {
    let canvasWrapper;
    let width = 10;
    let height = 10;
    let HTMLCanvasMock = {
        getContext: function () {
            return {
                fillStyle: undefined,
                fillRect: function (posx, posy, width, height) {},
                beginPath: function () {},
                arc: function (posx, posy, radius, startAngle, endAngle) {},
                closePath: function () {},
                fill: function () {},
                clearRect: function(posx,posy,width,height){}
            }
        }

    }

    beforeEach(function () {
        canvasWrapper = new CanvasWrapper(width, height, HTMLCanvasMock);
    });
    describe('function createRect', function () {
        it('should return an object with fields: type = "rect", width: Number, height: Number, position: {x: Number, y: Number}}, color: String, zindex: Number', function () {
            let width = 1;
            let height = 1;
            let posX = 1;
            let posY = 1;
            let zindex = 2;
            let color = 'red';
            let rect = canvasWrapper.createRect(posX, posY, width, height, color, zindex);
            assert.equal(rect.type, 'rect')
            assert.equal(isNumber(rect.width), true);
            assert.equal(rect.width, width);
            assert.equal(isNumber(rect.height), true);
            assert.equal(rect.height, height);
            assert.equal(isNumber(rect.position.x), true);
            assert.equal(isNumber(rect.position.y), true);
            assert.equal(rect.position.x, posX);
            assert.equal(rect.position.y, posY);
            assert.equal(typeof rect.color == 'string', true);
            assert.equal(rect.color, color);
            assert.equal(isNumber(rect.zindex), true);
            assert.equal(rect.zindex, zindex);
        });
        it('should set position to (0,0), width = 10, height to 10, color to black and zindex to 0 by default', function () {

            let rect = canvasWrapper.createRect();
            assert.notEqual(rect.position, undefined);
            assert.deepEqual(rect.position, {
                x: 0,
                y: 0
            });
            assert.notEqual(rect.width, undefined);
            assert.equal(rect.width, 10);
            assert.notEqual(rect.height, undefined);
            assert.equal(rect.height, 10);
            assert.notEqual(rect.color, undefined);
            assert.equal(rect.color, 'black');
            assert.notEqual(rect.zindex, undefined);
            assert.equal(rect.zindex, 0);
        });
        it('should add the created rect to the scene', function () {
            let rect = canvasWrapper.createRect();
            let scene = canvasWrapper._scene;
            assert.deepEqual(rect, scene[0]);
        })
    });
    describe('function createCircle', function () {
        it('should return an object with fields: type = "circle", radius: Number, startAngle = 0,  endAngle 2 * pi, position: {x:Number, y:Number}, color: String, zindex: Number', function () {
            let radius = 2;
            let posX = 2;
            let posY = 2;
            let color = 'red';
            let zindex = 1;
            let circle = canvasWrapper.createCircle(posX, posY, radius, color, zindex);
            assert.equal(circle.type, 'circle');
            assert.equal(isNumber(circle.position.x), true);
            assert.equal(isNumber(circle.position.y), true);
            assert.equal(circle.position.x, posX);
            assert.equal(circle.position.y, posY);
            assert.equal(isNumber(circle.radius), true);
            assert.equal(isNumber(circle.startAngle), true);
            assert.equal(circle.startAngle, 0);
            assert.equal(isNumber(circle.endAngle), true);
            assert.equal(circle.endAngle, Math.PI * 2);
            assert.equal(typeof circle.color == 'string', true);
            assert.equal(circle.color, color);
            assert.equal(isNumber(circle.zindex), true);
            assert.equal(circle.zindex, zindex);
        });
        it('should have default values radius = 5, position = (0,0), color = "balck", zindex = 0', function () {
            let circle = canvasWrapper.createCircle();
            assert.deepEqual(circle.position, {
                x: 0,
                y: 0
            });
            assert.equal(circle.radius, 5);
            assert.equal(circle.color, 'black');
            assert.equal(circle.zindex, 0);

        });
        it('should add the created circle to the scene', function () {
            let circle = canvasWrapper.createCircle();
            let scene = canvasWrapper._scene;
            assert.deepEqual(circle, scene[0]);
        })
    });
    describe('function drawRect', function () {
        it('should set ctx.fillStyle to givent rects color and then call ctx.fillRect with position and dimensions of rect if type field of given object is "rect" and return true', function () {
            let ctx = canvasWrapper._ctx;
            let fillRectSpy = sinon.spy(canvasWrapper._ctx, 'fillRect');
            let rect = canvasWrapper.createRect();
            let drawSpy = sinon.spy(canvasWrapper, 'drawRect');
            let returnValue = canvasWrapper.drawRect(rect);
            let fillCallArgs = fillRectSpy.args[0];
            let drawCallArgs = drawSpy.args[0];

            assert.equal(drawCallArgs[0].type, 'rect');
            assert.equal(returnValue, true);
            assert.equal(ctx.fillStyle, rect.color);
            assert.equal(fillRectSpy.called, true);
            assert.equal(fillCallArgs[0], rect.position.x);
            assert.equal(fillCallArgs[1], rect.position.y);
            assert.equal(fillCallArgs[2], rect.width);
            assert.equal(fillCallArgs[3], rect.height);
        });
        it('should not call ctx.fillRect if type field of given object is not "rect" and return false', function () {
            let circle = canvasWrapper.createCircle();
            let fillRectSpy = sinon.spy(canvasWrapper._ctx, 'fillRect');
            let drawSpy = sinon.spy(canvasWrapper, 'drawRect');
            let returnValue = canvasWrapper.drawRect(circle);
            let drawCallArgs = drawSpy.args[0]
            assert.notEqual(drawCallArgs[0].type, 'rect');
            assert.equal(returnValue,false);
            assert.equal(fillRectSpy.called, false);
        });
    });
    describe('function drawCircle', function () {
        it('should set ctx.fillStyle, call ctx.beginPath, call ctx.arc with position, radius startAngle and endAngle of given circle, call ctx.closePath and call ctx.fill in this order if type field of given object is "circle" and return true', function () {
            let ctx = canvasWrapper._ctx;
            let beginPathSpy = sinon.spy(ctx, 'beginPath');
            let arcSpy = sinon.spy(ctx, 'arc');
            let closePathSpy = sinon.spy(ctx, 'closePath');
            let fillSpy = sinon.spy(ctx, 'fill');
            let drawSpy = sinon.spy(canvasWrapper, 'drawCircle')
            let circle = canvasWrapper.createCircle();
            let returnValue = canvasWrapper.drawCircle(circle);
            let arcCallArgs = arcSpy.args[0];
            let drawCallArgs = drawSpy.args[0];

            assert.equal(drawCallArgs[0].type, 'circle');
            assert.equal(returnValue,true);
            assert.equal(ctx.fillStyle, circle.color);
            assert.equal(beginPathSpy.called, true);
            assert.equal(arcSpy.calledImmediatelyAfter(beginPathSpy), true);
            assert.equal(closePathSpy.calledImmediatelyAfter(arcSpy), true);
            assert.equal(fillSpy.calledImmediatelyAfter(closePathSpy), true);
            assert.equal(arcCallArgs[0], circle.position.x);
            assert.equal(arcCallArgs[1], circle.position.y);
            assert.equal(arcCallArgs[2], circle.radius);
            assert.equal(arcCallArgs[3], circle.startAngle);
            assert.equal(arcCallArgs[4], circle.endAngle);
        })
        it('should not call ctx.beginPath,  ctx.arc, ctx.closePath and ctx.fill if type field of given object is not "circle" and return false', function () {
            let drawSpy = sinon.spy(canvasWrapper, 'drawCircle')
            let ctx = canvasWrapper._ctx;
            let beginPathSpy = sinon.spy(ctx, 'beginPath');
            let arcSpy = sinon.spy(ctx, 'arc');
            let closePathSpy = sinon.spy(ctx, 'closePath');
            let fillSpy = sinon.spy(ctx, 'fill');
            let rect = canvasWrapper.createRect();
            let returnValue = canvasWrapper.drawCircle(rect);
            let drawCallArgs = drawSpy.args[0];

            assert.notEqual(drawCallArgs.type, 'circle');
            assert.equal(returnValue, false);
            assert.equal(beginPathSpy.called, false);
            assert.equal(arcSpy.called, false);
            assert.equal(closePathSpy.called, false);
            assert.equal(fillSpy.called, false);
        })
    })
    describe('function sortSceneByZIndex', function () {
        it('should sort a list of scene object int ascending order by their zindex fields', function () {
            let circle1 = canvasWrapper.createCircle(1, 1, 1, 'blue', 0);
            let circle2 = canvasWrapper.createCircle(1, 1, 1, 'blue', 1);
            let circle3 = canvasWrapper.createCircle(1, 1, 1, 'blue', 2);
            let rect1 = canvasWrapper.createRect(1, 1, 1, 1, 'blue', 3);
            let rect2 = canvasWrapper.createRect(1, 1, 1, 1, 'blue', 4);
            let scene = [circle1, circle2, circle3, rect1, rect2];

            let zBufferedScene = canvasWrapper.sortSceneByZIndex(scene);
            assert.deepEqual(zBufferedScene[0], circle1);
            assert.deepEqual(zBufferedScene[1], circle2);
            assert.deepEqual(zBufferedScene[2], circle3);
            assert.deepEqual(zBufferedScene[3], rect1);
            assert.deepEqual(zBufferedScene[4], rect2);
        });
    });
    describe('function clearScene', function () {
        it('should empty _scene field', function () {
            let circle1 = canvasWrapper.createCircle(1, 1, 1, 'blue', 0);
            let circle2 = canvasWrapper.createCircle(1, 1, 1, 'blue', 1);
            let circle3 = canvasWrapper.createCircle(1, 1, 1, 'blue', 2);
            let rect1 = canvasWrapper.createRect(1, 1, 1, 1, 'blue', 3);
            let rect2 = canvasWrapper.createRect(1, 1, 1, 1, 'blue', 4);
            assert.notEqual(canvasWrapper._scene, 0);
            canvasWrapper.clearScene();
            assert.equal(canvasWrapper._scene, 0);
        });
    });
    describe('function renderScene', function(){
        it('should first call ctx.clearRect with the dimensions of the wrapper at position (0,0), then call sortSceneByZIndex and then call the apropriate draw functions with elements of the scene', function(){
            let clearRectSpy = sinon.spy(canvasWrapper._ctx, 'clearRect');
            let sortSceneByZIndexSpy = sinon.spy(canvasWrapper, 'sortSceneByZIndex');
            let drawRectSpy = sinon.spy(canvasWrapper, 'drawRect');
            let drawCircleSpy = sinon.spy(canvasWrapper, 'drawCircle');
            let circle = canvasWrapper.createCircle();
            let rect = canvasWrapper.createRect();
            canvasWrapper.renderScene();
            let clearRectArgs = clearRectSpy.args[0];
            let drawRectReturnValue = drawRectSpy.returnValues[0];
            let drawCircleReturnValue = drawCircleSpy.returnValues[0];
            assert.equal(clearRectSpy.called,true);
            assert.equal(clearRectArgs[0],0);
            assert.equal(clearRectArgs[1],0);
            assert.equal(clearRectArgs[2],canvasWrapper.width);
            assert.equal(clearRectArgs[3],canvasWrapper.height);
            assert.equal(sortSceneByZIndexSpy.calledImmediatelyAfter(clearRectSpy), true);
            assert.equal(drawRectReturnValue, true);
            assert.equal(drawCircleReturnValue, true);
        })
    })
})