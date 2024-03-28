// Exercicio Arrays

// criar 5 Nomes Paises Diferentes
console.log('crie 5 Nomes Paises Diferentes');
const pais = ['Brasil', 'Portugal', 'China', 'Japao', 'India'];
console.log(pais);
console.log('====================');

console.log('adicione Pais ao Fim Da Fila. Metodo push ');
// adicione Pais ao Fim Da Fila.
// push
pais.push('Irlanda');
console.log(pais);
console.log('====================')

// Remova Um Pais Do Final da Lista.
// pop
console.log('Remover Pais ao final da Fila. Metodo pop ');
pais.pop();
console.log(pais);

console.log('====================');

//A dicionar Um Pais Inicio da Lista
console.log('Adicionar Um Pais Inicio da Lista. Metodo unshift');
pais.unshift('Estado Unidos');
console.log(pais);

console.log('====================');

//Remover Um Pais Inicio da Lista.
console.log('Remover Um Pais Inicio da Lista. Metodo shift');
pais.shift();
console.log(pais);

//Imprima o Utimo Pais da Lista Na Tela .
console.log('Imprima o Utimo Pais da Lista Na Tela');

console.log(pais.length);

console.log('Imprima o Utimo Pais da Lista Na Tela');
// QUARDA O ULTIMO PAIS
const ultimoPais = pais[pais.length - 1];
console.log(ultimoPais);


console.log('====================');




