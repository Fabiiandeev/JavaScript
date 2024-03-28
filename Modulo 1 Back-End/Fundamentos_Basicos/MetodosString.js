const nome = "Phelipe";
console.log(nome.length);


console.log('============ Include. ================= ');
console.log(`
    frase = "Eu Ja Vou Para casa ";
console.log(frase.includes('casa'));
`);
const frase = "Eu Ja Vou Para casa ";
console.log(frase.includes('casa'));

console.log('============ indexOf. ================= ');

const frase1 = 'Estou Aprendendo JavaScript';

console.log(frase1.indexOf('J'));


console.log(' ====LastIndexOf ==============');

const frase2 = 'Estou Aprendendo JavaScript';
console.log(frase2.lastIndexOf('p'));

console.log('============ slice ==========');

const frase3 = 'Estou Aprendendo JavaScript';

console.log(frase3.slice(0, 5));


const cidade = 'Nova Serrana-MG'

const endIndex = cidade.indexOf('-');
const localizacao = cidade.slice(0, endIndex);
console.log(localizacao); 