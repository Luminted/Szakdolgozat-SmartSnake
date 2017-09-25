export default class Subject {
    constructor() {
        if (new.target === Subject) {
            throw new Error("Abstract class. Cannot be instantiated!");
        }
        if (this.addObserver === void 0 || typeof this.addObserver !== "function") {
            throw new Error("Abstract method 'addObserver' must be overriden!");
        }

        if (this.removeObserver === void 0 || typeof this.removeObserver !== "function") {
            throw new Error("Abstract method 'removeObserver' must be overriden!");
        }
    }
};