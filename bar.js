export default class bar{
    constructor( name = 'tom'){
        console.log('constructor');
        this.name = name;
    }
    sayHi(){
        console.log(`Say ${this.name}`)
    }
}