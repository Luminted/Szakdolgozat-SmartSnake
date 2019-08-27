let counter = 0;
export function idGenerator(){
        let id = 'id-' + counter++;
        return  id;
    }

export function EuclideanDistance(from, to) {
    return Math.sqrt(Math.pow(from.coordinates.x - to.coordinates.x, 2) + Math.pow(from.coordinates.y - to.coordinates.y, 2));
}

export function squaredEuclideanDistance(from, to){
    let distance = EuclideanDistance(from, to);
    return Math.pow(distance,2);
}

export function ManhattanDistanceHeurism(from, to) {
    let dx = Math.abs(from.coordinates.x, to.coordinates.x );
    let dy = Math.abs(from.coordinates.x, to.coordinates.x );

    return (dx + dy) * 4;
}