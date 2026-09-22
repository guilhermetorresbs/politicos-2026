class Mandato {
    #descricao;

    constructor(descricao) {
        this.#descricao = descricao;
    }

    executar() {
        return this.#descricao;
    }
}

module.exports = Mandato;