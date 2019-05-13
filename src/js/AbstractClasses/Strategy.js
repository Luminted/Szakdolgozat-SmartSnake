export default class Strategy{
    constructor(){
        if (new.target === Strategy){
            throw new Error("Abstract class. Cannot be instantiated!");
        }

        if(this.pathfinder === void 0 || typeof this.pathfinder !== 'function'){
            throw new Error("Abstract method 'pathfinder' must be overriden!");
        }

        if(this.calculateTarget === void 0 || typeof this.calculateTarget !== 'function'){
            throw new Error("Abstract method 'calculateTarget' must be overriden!");
        }
    }
};