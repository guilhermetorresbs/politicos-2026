const Politico = require('./Politico');

class Presidente extends Politico {
    #ministros;

    constructor(
        nome,
        partido,
        localTrabalho,
        enderecoTrabalho,
        remuneracao,
        projetos,
        mandato,
        ministros
    ) {
        super(
            nome,
            partido,
            'federal',
            'executivo',
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos,
            mandato
        );

        this.#ministros = ministros;
    }

    nomearMinistro() {
        return 'Nomear Ministros de Estado.';
    }

    exonerarMinistro() {
        return 'Exonerar Ministros de Estado.';
    }

    comandarForcasArmadas() {
        return 'Comandar as Forças Armadas.';
    }

    representarPais() {
        return 'Representar o país em eventos internacionais.';
    }

    elaborarPPA() {
        return 'Elaborar e enviar ao Congresso o Plano Plurianual nacional (PPA).';
    }

    elaborarLDO() {
        return 'Elaborar e enviar ao Congresso a Lei de Diretrizes Orçamentárias nacional (LDO).';
    }

    elaborarLOA() {
        return 'Elaborar e enviar ao Congresso a proposta de Lei Orçamentária Anual nacional (LOA).';
    }

    executarMandato() {
        return super.executarMandato();
    }
}

module.exports = Presidente;