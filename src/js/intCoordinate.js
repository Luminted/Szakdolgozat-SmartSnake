import IntCoordinateError from './errors/IntCoordinateError.js';

export default class IntCoordinate {
    constructor(x, y, nullPosition = false) {
        if (Number.isInteger(x) && Number.isInteger(y) || nullPosition == true) {
            this.x = Number(x);
            this.y = Number(y);
            this.nullPosition = nullPosition;

        } else {
            throw new IntCoordinateError('Coordinates have to be integer values!');
        }
    }

    get coordinates() {
        return {
            x: this.x,
            y: this.y
        }
    }
}