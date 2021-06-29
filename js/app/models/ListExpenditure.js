class ListExpenditure {

    _listExpenditure;

    constructor() {
        this._listExpenditure = [];

    }

    add(expenditure, calculateExpenditure) {
        this._listExpenditure.push({expenditure, calculateExpenditure});

    }

    get listExpenditure() {
        return [].concat(this._listExpenditure);

    }

    clearList() {
        this._listExpenditure = [];

    }

}