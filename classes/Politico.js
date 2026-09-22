class Politico {
    #nome;
    #partido;
    #esfera;
    #poder;
    #localTrabalho;
    #enderecoTrabalho;
    #remuneracao;
    #projetos;
    #mandato;

    constructor(
        nome,
        partido,
        esfera,
        poder,
        localTrabalho,
        enderecoTrabalho,
        remuneracao,
        projetos,
        mandato
    ) {
        this.#nome = nome;
        this.#partido = partido;
        this.#esfera = esfera;
        this.#poder = poder;
        this.#localTrabalho = localTrabalho;
        this.#enderecoTrabalho = enderecoTrabalho;
        this.#remuneracao = remuneracao;
        this.#projetos = projetos;
        this.#mandato = mandato;
    }

    get nome() {
        return this.#nome;
    }

    get partido() {
        return this.#partido;
    }

    get esfera() {
        return this.#esfera;
    }

    get poder() {
        return this.#poder;
    }

    get localTrabalho() {
        return this.#localTrabalho;
    }

    get enderecoTrabalho() {
        return this.#enderecoTrabalho;
    }

    get remuneracao() {
        return this.#remuneracao;
    }

    get projetos() {
        return this.#projetos;
    }

    executarMandato() {
        return this.#mandato.executar();
    }

    apresentar() {
        return (
            'Nome: ' + this.#nome +
            '\nPartido: ' + this.#partido +
            '\nEsfera: ' + this.#esfera +
            '\nPoder: ' + this.#poder +
            '\nLocal de trabalho: ' + this.#localTrabalho +
            '\nEndereço: ' + this.#enderecoTrabalho +
            '\nRemuneração: ' + this.#remuneracao
        );
    }
}

module.exports = Politico;