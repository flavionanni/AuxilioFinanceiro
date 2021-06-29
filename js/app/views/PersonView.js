class PersonView {

    _element;

    constructor(element) {
        this._element = element;
    }

    _template(model, person) {
        return `

        <p class="text"> Olá <strong>${person.name}</strong> ! Seja bem-vindo ao <strong>Auxilio Financeiro</strong>, programa que vai te
            auxiliar na sua organização financeira.</p>

        <h2 class="title-table">Instrução </h2>
        <li><strong>Moradia:</strong> Gastos com moradia devem ficar entre 25% e 30% do salário. Exemplo: Aluguel, condomínio, água, luz, gás..</li>
        <li><strong>Saúde/Alimentação:</strong> Gastos com saúde/alimentação devem ficar entre 15% e 20% do salário.</li>
        <li><strong>Transporte:</strong> Gastos com transporte devem ficar entre 5% e 10% do salário.</li>
        <li><strong>Lazer:</strong> Gastos com Lazer devem ficar entre 30% e 35% do salário. Exemplo: Academia, doações, festas, serviços de streaming...</li>
        <li><strong>Investimento:</strong> Gastos com investimentos devem ficar entre 10% e 20% do salário. Sempre bom guardar um dinheiro para poder realizar algum sonho, ou até mesmo poder planejar sua aposentadoria.</li>
        
        <p class="text">Todas as informações foram retiradas de uma matéria do Estadão, para acessar a matéria completa 
            <a class="link_color" href="https://infograficos.estadao.com.br/focas/por-minha-conta/materia/conheca-metodos-para-organizar-seu-dinheiro-e-nao-faltar-nada" target="_blank">clique aqui</a>.</p>

        <p class="text">Caso queira, você pode alterar a porcentagem das despesas da tabela, lembre-se que o total das porcentagens precisa ser 100%.</p>

        <section id="table-container">
            
            <table class="table-finance">
                <thead>
                    <tr>
                        <th>DESPESA</th>
                        <th>PORCENTAGEM</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>${model[0].expenditure.name}</td>
                        <td>
                            <input type="number" name="number" id="porcent_habitation" min= 25 max= 30 required value= ${model[0].expenditure.percentage}> %
                        </td>
                        <td>R$ ${model[0].calculateExpenditure}</td>
                    </tr>

                    <tr>
                        <td>${model[1].expenditure.name}</td>
                        <td>
                            <input type="number" name="number" id="porcent_health" min= 15 max= 20 required value= ${model[1].expenditure.percentage}> %
                        </td>
                        <td>R$ ${model[1].calculateExpenditure}</td>
                    </tr>

                    <tr>
                        <td>${model[2].expenditure.name}</td>
                        <td>
                            <input type="number" name="number" id="porcent_transport" min= 5 max= 10 required value= ${model[2].expenditure.percentage}> %
                        </td>
                        <td>R$ ${model[2].calculateExpenditure}</td>
                    </tr>

                    <tr>
                        <td>${model[3].expenditure.name}</td>
                        <td>
                            <input type="number" name="number" id="porcent_leisure" min= 30 max= 35 required value= ${model[3].expenditure.percentage}> %
                        </td>
                        <td>R$ ${model[3].calculateExpenditure}</td>
                    </tr>

                    <tr>
                        <td>${model[4].expenditure.name}</td>
                        <td>
                            <input type="number" name="number" id="porcent_investment" min= 10 max= 20 required value= ${model[4].expenditure.percentage}> %
                        </td>
                        <td>R$ ${model[4].calculateExpenditure}</td>
                    </tr>

                </tbody>
            </table>

            <button class="submit" onclick="personController.updateReport(event)">Atualizar</button>

        </section>

    
        `

    }

    update(model, person) {
        this._element.innerHTML = this._template(model, person);

    }

}