const Politico = require('./Politico');

class DeputadoFederal extends Politico {
    #bancada;

    constructor(
        nome,
        partido,
        remuneracao,
        projetos,
        mandato,
        bancada
    ) {
        super(
            nome,
            partido,
            'federal',
            'legislativo',
            'Câmara dos Deputados',
            'Palácio do Congresso Nacional - Brasília/DF',
            remuneracao,
            projetos,
            mandato
        );

        this.#bancada = bancada;
    }

    votarPEC() {
        return 'Votar PECs da Constituição Federal.';
    }

    criarCPI() {
        return 'Criar CPI nacional.';
    }

    votarPPA() {
        return 'Votar o PPA nacional.';
    }

    votarLDO() {
        return 'Votar a LDO nacional.';
    }

    votarLOA() {
        return 'Votar a LOA nacional.';
    }

    proporLeiComplementar() {
        return 'Propor leis complementares.';
    }

    executarMandato() {
        return (
            'Legislar sobre assuntos de competência federal e fiscalizar ' +
            'o Presidente da República.'
        );
    }
}

module.exports = DeputadoFederal;