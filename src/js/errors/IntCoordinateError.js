export default class CoordinateError extends Error{
    constructor(message){
        super(message);
        this.name = 'IntCoordinateError';
    }
}