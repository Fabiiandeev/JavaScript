console.log('=========================');
console.log('Concatenando Strings');

let nome = 'Phelipe';
let sobrenome = 'Fabian';
let nomeSobrenome = nome + ' ' + sobrenome;
console.log(nomeSobrenome);
console.log('=========================');

console.log('Operadores Aritméticos');
console.log('=========================');

let x = 2 , y = 5;
resultado = x + y; // Adição
console.log(`A soma de ${x} + ${y}  = ${resultado}`);
console.log('=========================');

resultado = x - y; // Subtração
console.log(`A Subtração de ${x} - ${y} = ${resultado}`);
console.log('=========================');

resultado = x * y ; //Multiplicação
console.log(`A Multiplicação de ${x} * ${y} = ${resultado}`);
console.log('=========================');

resultado = x / y;  // Divisão
console.log(`A Divisão de ${x} / ${y} = ${resultado}`);
console.log('=========================');

resultado = x % y; // Resto da Divisão
console.log(`O Resto da Divisão de ${x} % ${y} = ${resultado}`);

let i = 0, a = 0;

let result =  i / a; // NaN
console.log(result);


//x ++ ; // increment
//console.log(x);

x -- ; // decrement
console.log(x);


let raiz = Math.sqrt(8); // sqrt Raiz quadrada
console.log(raiz);

let potencia = Math.pow(3 ,2); // pow Potencia
console.log(potencia);