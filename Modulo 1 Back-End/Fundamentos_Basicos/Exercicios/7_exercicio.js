function confereEstudade(ehEstudante) {
    if (ehEstudante === true) {
        return 'Sou Estudante';
    } else {
        return 'Não Sou Estudante';
    }

};
function confereIdade(idade) {
    if (idade <= 16) {
        return 'Jovem';
    } else if (idade < 64) {
        return 'Adulto';

    } else {
        return 'Idoso';
    }
};


function aprecentarName(pessoa) {
    const confereIdade1 = confereIdade(pessoa.idade);
    const objConfereEstudade = confereEstudade(pessoa.ehEstudante);


    console.log(`
    Olá Meu Nome e ${pessoa.nome}, Sou Um ${confereIdade1} 
    de ${pessoa.idade} Anos Tenho Altura de ${pessoa.altura} MT
    e ${objConfereEstudade} .
    
    `);

}


let phelipe = {
    nome: 'Phelipe',
    altura: 1.80,
    ehEstudante: true,
    idade: 25,
};

aprecentarName(phelipe);