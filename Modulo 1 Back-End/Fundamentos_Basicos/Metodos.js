function apresentarPessoa() {

};


let phelipe = {
    name: 'Phelipe',
    idade: 29,
    altura: 1.73,
    estudante: true,
    profissao: 'Desenvolvedor',

    confereEstudade: function () {
        if (this.estudante === true) {
            return 'Sou Estudade';
        } else {
            return 'Não Sou Estudade';
        }

    },

    confereIdade: function () {
        if (this.idade <= 16) {
            return 'Jovem';
        } else if (this.idade < 64) {
            return 'Adulto';
        } else {
            return 'Idoso';
        }



    },
    apresentarPessoa: function () {
        const est = this.confereEstudade(); 
        const id = this.confereIdade();
        console.log(`
        Meu Nome e ${this.name} Sou ${id} De ${this.idade}
        tenho ${this.altura} MT e ${est} e Sou ${this.profissao}
        `);


    },


};

phelipe.apresentarPessoa();