console.log('====== Calcular juros compostos ======')
let capitalEmprestado = 1000;
let jurosComposto = 12.5 / 100; // para calcular juros se divide por100
let mesEmpretimo = 5;

// Calcular Juros Composto //

let calcularJuros = capitalEmprestado * Math.pow((1 + jurosComposto), (mesEmpretimo)) ;
console.log(Math.ceil(calcularJuros));