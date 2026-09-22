const Politico = require('./Politico');

class DeputadoEstadual extends Politico {
    #estado;
    #comissoes;

    constructor(
        nome,
        partido,
        remuneracao,
        projetos,
        mandato,
        estado,
        comissoes,
        enderecoAssembleia
    ) {
        super(
            nome,
            partido,
            'estadual',
            'legislativo',
            'Assembleia Legislativa',
            enderecoAssembleia,
            remuneracao,
            projetos,
            mandato
        );

        if (comissoes.length < 1) {
            throw new Error(
                'O deputado estadual deve participar de pelo menos uma comissão.'
            );
        }

        this.#estado = estado;
        this.#comissoes = comissoes;
    }

    votarPPA() {
        return 'Votar o PPA do Estado de ' + this.#estado + '.';
    }

    votarLDO() {
        return 'Votar a LDO do Estado de ' + this.#estado + '.';
    }

    votarLOA() {
        return 'Votar a LOA do Estado de ' + this.#estado + '.';
    }

    proporEmendaConstitucional() {
        return 'Propor emendas à Constituição Estadual de ' + this.#estado + '.';
    }

    criarCPI() {
        return 'Criar CPI estadual.';
    }

    executarMandato() {
        return (
            'Legislar sobre assuntos de interesse do Estado de ' +
            this.#estado +
            ' e fiscalizar o governador.'
        );
    }
}

module.exports = DeputadoEstadual;