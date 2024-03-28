const pessoa = [
    {
        nome: 'Phelipe',
        idade: 30,
        altura: 180,

    },

    {
        nome: 'Monica',
        idade: 15,
        altura: 165,
    }
];

const resultado = pessoa.map(x => {
    return {
        nome: x.nome,
        idade: `${x.idade} Anos`,
        altura: ` ${x.altura / 100} MT`,
        maiorIdade: (x.idade >= 18 ? 'E Maior de Idade': 'E Menor de Idade'),
    };


});

console.log(resultado);