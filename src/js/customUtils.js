let counter = 0;
export function idGenerator(){
        let id = 'id-' + counter++;
        return  id;
    }

export function EuclideanDistance(from, to) {
    return Math.sqrt(Math.pow(from.coordinates.x - to.coordinates.x, 2) + Math.pow(from.coordinates.y - to.coordinates.y, 2));
}