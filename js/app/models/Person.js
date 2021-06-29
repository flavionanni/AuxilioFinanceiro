class Person {

    _name;
    _salary;

    constructor(name, salary) {
        this._name = name;
        this._salary = salary;
        
        Object.freeze(this);
        
    }

    get name() {
        return this._name;
    }

    get salary() {
        return this._salary;
    }


}