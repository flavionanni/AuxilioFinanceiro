class CalculateHelper {

    constructor() {

        throw new Error('Esta classe não pode ser instanciada');

    }

    static calculatePercentage(salary, percentage) {
        return (salary * (percentage/100)).toFixed(2);
        
    }

    static checkPercentage(porcentHabitation, porcentHealth, porcentTransport, porcentLeisure, porcentInvestment) {
       let sumPercentage = parseInt(porcentHabitation) + parseInt(porcentHealth) + parseInt(porcentTransport) + parseInt(porcentLeisure) + parseInt(porcentInvestment);
        console.log(sumPercentage);

        if(sumPercentage != 100) {
            alert("A porcentagem precisa ter um total de 100")
            return false
        } else {
            return true;

        }
    }

}