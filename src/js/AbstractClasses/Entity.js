export default class Entity{
    constructor(){
        if (new.target === Entity){
            throw new Error("Abstract class. Cannot be instantiated!");
        }

        if(this.update === void 0 || typeof this.update !== 'function'){
            throw new Error("Abstract method 'update' must be overriden!");
        }

        if(this.reset === void 0 || typeof this.reset !== 'function'){
            throw new Error("Abstract method 'reset' must be overriden!");
        }
    }
};