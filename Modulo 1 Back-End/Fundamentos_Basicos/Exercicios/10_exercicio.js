const numeros=[
    1, 3, 9, 15, 25, 
];

const numerosEhPar = numeros.some(x => x % 2 === 0);

console.log(numerosEhPar);
console.log('==================================');



const verificarRaizQuadrada = numeros.some(x => Math.sqrt(x) % 1);
console.log('=====================================');

console.log(verificarRaizQuadrada);
