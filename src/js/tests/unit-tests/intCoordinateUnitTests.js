import assert from 'assert';
import IntCoordinate from '../../intCoordinate.js';

describe('Unit testing IntCoordinate class', function(){
    describe('constructor', function(){
        it('should throw a CoordinateError if nullPosition is false and x or y coordinates are not integers', function(){
            let x = 0.5;
            let y = 1;

            assert.throws(() => new IntCoordinate(x,y,false), Error);
            try{
                new IntCoordinate(x,y,false);
            }catch(e){
                assert.equal(e.name, 'IntCoordinateError');
            }

            x = 1;
            y = 0.5;
            
            assert.throws(() => new IntCoordinate(x,y,false), Error);
            try{
                new IntCoordinate(x,y,false);
            }catch(e){
                assert.equal(e.name, 'IntCoordinateError');
            }

            x = 0.5;
            y = 0.5;

            assert.throws(() => new IntCoordinate(x,y,false), Error);
            try{
                new IntCoordinate(x,y,false);
            }catch(e){
                assert.equal(e.name, 'IntCoordinateError');
            }
        });

        it('should take any value for x and y if nullPosition is set to true', function(){
            let float = 0.5;
            let str = 'a';
            assert.doesNotThrow(() => new IntCoordinate(float,float,true), Error);
            assert.doesNotThrow(() => new IntCoordinate(str,str,true), Error);
            assert.doesNotThrow(() => new IntCoordinate(undefined,undefined,true), Error);
        })

        it('this.nullPosition should be false by default', function(){
            let coordinate = new IntCoordinate(1,1);
            assert.equal(coordinate.nullPosition, false);
        })
    });
    describe('getter coordinates', function(){
        it('should return an object with fields x: this.x, y: this.y', function(){
            let x = 1;
            let y = 1;
            let coordinate = new IntCoordinate(x,y);
            assert.equal(coordinate.nullPosition, false);
            assert.notEqual(coordinate.coordinates, undefined);
            assert.equal(coordinate.coordinates.x, x);
            assert.equal(coordinate.coordinates.y, y);
        });
    });
})