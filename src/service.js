import Model from './model/Model';

let model = new Model();

export default {

    addSnake: function (config, strategyId) {
        model.addSnake(config, strategyId);
    },

    addPill: function (config, effectId) {
        model.addPill(config, effectId);
    },

    addWall: function (posX, posY) {
        model.addWall(posX, posY);
    },

    changeBoardDimensions: function (dimX, dimY) {
        model.changeBoardDimensions(dimX, dimY);
    },

    getBoardState: function () {
        return model.getBoardState();
    },

    getGameState: function () {
        return model.getGameState();
    },

    updateGame: function () {
        model.update();
        return model.getGameState();
    },

    getStrategies: function () {
        return model.getStrategies();
    },

    getEffects: function () {
        return model.getEffects();
    },
}