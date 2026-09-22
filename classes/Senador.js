const Politico = require('./Politico');

class Senador extends Politico {
    #estado;
    #anoEleicao;

    constructor(
        nome,
        partido,
        remuneracao,
        projetos,
        mandato,
        estado,
        anoEleicao
    ) {
        super(
            nome,
            partido,
            'federal',
            'legislativo',
            'Senado Federal',
            'Palácio do Congresso Nacional - Brasília/DF',
            remuneracao,
            projetos,
            mandato
        );

        this.#estado = estado;
        this.#anoEleicao = anoEleicao;
    }

    aprovarAutoridades() {
        return 'Aprovar autoridades de alto escalão.';
    }

    julgarCrimesResponsabilidade() {
        return 'Julgar crimes de responsabilidade.';
    }

    representarEstado() {
        return 'Representar os interesses do Estado de ' + this.#estado + '.';
    }

    executarMandato() {
        return (
            'Legislar sobre leis federais, sabatinar e aprovar autoridades, ' +
            'autorizar operações financeiras externas e representar o Estado de ' +
            this.#estado + '.'
        );
    }
}

module.exports = Senador;