export default class ObserverEntity {
    constructor() {
        if (new.target === ObserverEntity) {
            throw new Error("Abstract class. Cannot be instantiated!");
        }

        if (this.update === void 0 || typeof this.update !== "function") {
            throw new Error("Abstract method 'update' must be overriden!");
        }

        if (this.onNotify === void 0 || typeof this.onNotify !== "function") {
            throw new Error("Abstract method 'onNotify' must be overriden!");
        }
    }
};
