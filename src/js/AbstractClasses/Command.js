export default class Command {
    constructor() {
        if (new.target === Command) {
            throw new Error("Abstract class. Cannot be instantiated!");
        }

        if (this.execute === void 0 || typeof this.execute !== 'function') {
            throw new Error("Abstract method 'execute' must be overriden!");
        }
    }
};