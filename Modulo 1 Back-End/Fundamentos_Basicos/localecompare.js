const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu", "Bruna","bianca"] ;

const arrayOrdem = items.sort((a, b) => a.localeCompare(b));
console.log(arrayOrdem);


const pessoas = [
    {
        nome: 'Phelipe',
        idade : 29,
    },
    {
        nome: 'Monica',
        idade : 35,
    },
    {
        nome: 'Bianca',
        idade : 30,
    },

    {
        nome: 'Maria',
        idade : 25,
    },
    

]

const pessoasOrdenadas = pessoas.sort((a, b) => a.idade - b.idade);
console.log(pessoasOrdenadas);