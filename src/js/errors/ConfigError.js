export default class configError extends Error{
    constructor(message) {
        super(message);
        this.name = 'configError';
      }
}