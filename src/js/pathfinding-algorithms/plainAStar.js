import IntCoordinate from '../intCoordinate';

export default {
    pathfinder: function plainAStarStrategy(snake, board) {
        let mockPath = [new IntCoordinate(0, 0), new IntCoordinate(1, 0)];
        return mockPath;
    },
    targetSetter: function basicPillOnly(snake, board) {
        snake.setTarget(new IntCoordinate(1,1));
    }
}