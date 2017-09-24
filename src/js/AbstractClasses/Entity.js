import log from 'loglevel';

export default class Entity{
    constructor(){
        log.info(new.target === Entity);
        if (new.target === Entity){
            throw new Error("Abstract class. Cannot be instantiated!");
        }

        if(this.update === void 0){
            throw new Error("Abstract method must be overriden!");
        }
    }
};