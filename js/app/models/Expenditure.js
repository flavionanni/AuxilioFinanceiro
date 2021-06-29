class Expenditure {

    _name;
    _percentage;


    constructor(name, percentage) {
        this._name = name;
        this._percentage = percentage;

    }

    get percentage() {
        return this._percentage;
    }

    set percentage(value) {
        this._percentage = value;
    }
    

    get name() {
        return this._name;

    }

}