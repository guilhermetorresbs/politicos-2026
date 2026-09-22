const Politico = require('./Politico');

class Governador extends Politico {
    #estado;
    #secretarios;

    constructor(
        nome,
        partido,
        localTrabalho,
        enderecoTrabalho,
        remuneracao,
        projetos,
        mandato,
        estado,
        secretarios
    ) {
        super(
            nome,
            partido,
            'estadual',
            'executivo',
            localTrabalho,
            enderecoTrabalho,
            remuneracao,
            projetos,
            mandato
        );

        this.#estado = estado;
        this.#secretarios = secretarios;
    }

    gerirPoliciaMilitar() {
        return 'Gerir a Polícia Militar do estado.';
    }

    administrarRodovias() {
        return 'Administrar as rodovias estaduais.';
    }

    coordenarEducacao() {
        return 'Coordenar a educação estadual.';
    }

    coordenarSaude() {
        return 'Coordenar a saúde estadual.';
    }

    elaborarPPA() {
        return 'Elaborar e enviar o PPA estadual.';
    }

    elaborarLDO() {
        return 'Elaborar e enviar a LDO estadual.';
    }

    elaborarLOA() {
        return 'Elaborar e enviar a LOA estadual.';
    }

    executarMandato() {
        return super.executarMandato();
    }
}

module.exports = Governador;