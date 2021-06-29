class PersonController {
    _inputName;
    _inputSalary;
    _person;

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputSalary = $('#salary');
        this._listExpenditure = new ListExpenditure();
        
        this._personView = new PersonView($('#personView'));
    }

    generateReport(event){
        event.preventDefault();
        this._listExpenditure.clearList();
        this._person = this._createPerson();
        this._createExpenditure();
        this._addListExpenditure();
        this._personView.update(this._listExpenditure.listExpenditure, this._person);
        this._clearForm();
    }

    updateReport(event) {
        event.preventDefault();
        const $ = document.querySelector.bind(document);
        this._inputPorcentHabitation = $("#porcent_habitation");
        this._inputPorcentHealth = $("#porcent_health");
        this._inputPorcentTransport = $("#porcent_transport");
        this._inputPorcentLeisure = $("#porcent_leisure");
        this._inputPorcentInvestment = $("#porcent_investment");

        const checkPercent = CalculateHelper.checkPercentage(this._inputPorcentHabitation.value, this._inputPorcentHealth.value, this._inputPorcentTransport.value,
             this._inputPorcentLeisure.value, this._inputPorcentInvestment.value);
             console.log(checkPercent)

        if(checkPercent) {
            this._updatePercentage();
            this._listExpenditure.clearList();
            this._addListExpenditure();
            this._personView.update(this._listExpenditure.listExpenditure, this._person);

        }
    }   


    _updatePercentage() {

        this.habitation.percentage = this._inputPorcentHabitation.value;
        this.habitation.percentage = this._inputPorcentHabitation.value;
        this.health.percentage = this._inputPorcentHealth.value;
        this.transport.percentage = this._inputPorcentTransport.value;
        this.leisure.percentage = this._inputPorcentLeisure.value;
        this.investment.percentage = this._inputPorcentInvestment.value;

    }

    _createPerson() {
        return new Person(
            this._inputName.value,
            this._inputSalary.value,
        )
    }

    _createExpenditure() {
        this.habitation = new Expenditure("Moradia", 30);
        this.health = new Expenditure("Saúde", 20);
        this.transport = new Expenditure("Transporte", 10);
        this.leisure = new Expenditure("Lazer", 25);
        this.investment = new Expenditure("Investimento", 15);
    }

    
    _addListExpenditure() {

        this._listExpenditure.add(this.habitation, this._calculateExpenditure(this.habitation.percentage));
        this._listExpenditure.add(this.health, this._calculateExpenditure(this.health.percentage));
        this._listExpenditure.add(this.transport, this._calculateExpenditure(this.transport.percentage));
        this._listExpenditure.add(this.leisure, this._calculateExpenditure(this.leisure.percentage));
        this._listExpenditure.add(this.investment, this._calculateExpenditure(this.investment.percentage));

    }

    _calculateExpenditure(percentage) {

        return CalculateHelper.calculatePercentage(this._person.salary, percentage);

    }

    _clearForm() {

        this._inputName.value = '';
        this._inputSalary.value = '';
        this._inputName.focus();
    }

}