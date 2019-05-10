export default class Subject {
    constructor() {
        if (new.target === Subject) {
            throw new Error("Abstract class. Cannot be instantiated!");
        }
        if (this.subscribe === void 0 || typeof this.subscribe !== "function") {
            throw new Error("Abstract method 'addObserver' must be overriden!");
        }

        if (this.unsubscribe === void 0 || typeof this.unsubscribe !== "function") {
            throw new Error("Abstract method 'unsubscribe' must be overriden!");
        }
    }
};