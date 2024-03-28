// exercicio
const palavra = 'amarelinha ';

let quantidade = 0;

for (let letra of palavra) {
    if (letra === 'a') {
        quantidade++;
    }

} if (quantidade === 0) {
    console.log(`A Palavra ${palavra}, Não Tem Letras (a).`);
} else if (quantidade === 1) {
    console.log(`A Palavra ${palavra}, Tem 1 Letra (a).`);
}


console.log(`A Palavra ${palavra}, Tem ${quantidade} Letras (a).`);