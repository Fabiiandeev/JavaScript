const valorOriginal = 97.50;
const valorModificado = valorOriginal.toFixed(2).replace('.', ',');
console.log(valorModificado);

console.log('==========================================');
const valor = '1,350,000,000,000,000';
let modificadoValor = valor;
let resultadoModificado = '';

while (resultadoModificado !== modificadoValor) {
    resultadoModificado = modificadoValor;
    modificadoValor = modificadoValor.replace('.', '.');
}

console.log(modificadoValor);

console.log('============toLocaleUpperCase====================');

const nome = 'phelipe fabian da silva';

let nomeMaiuscula = nome.toLocaleUpperCase();

console.log(nomeMaiuscula);


console.log('============ TRIM() ====================');

const email = ' lipiph21@gmail.com'

const formatandoEmail = email.trim();
console.log(email);
console.log(formatandoEmail);
