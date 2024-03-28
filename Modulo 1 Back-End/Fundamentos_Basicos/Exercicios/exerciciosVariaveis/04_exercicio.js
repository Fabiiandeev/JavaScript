console.log ('====== Calculadora de IMC ========') ;
let altura = 1.80;
let peso = 110;
console.log(`Altura ${altura} Mt`);
console.log(`Peso ${peso} Kg`);
let imcCalculo = peso / Math.pow(altura, 2);

console.log(`Seu IMC e : ${imcCalculo}`);

console.log('===================================');



console.log('======== Covert Fahrenheit x Celsius ======== ')
let fahrenheit = 73 ;
let celsius = (fahrenheit - 32 ) / 1.8;
console.log(Math.ceil(celsius));



console.log('========= Desconto do tênis ==========');

let meuDinheiro = 80.00;
let precoTenis = 129.99;
console.log(`Preço do tênis = R$ ${precoTenis}`);
console.log(`Dinheiro Cliente R$ ${meuDinheiro},00`);
let porcentoDesconto = precoTenis - meuDinheiro;
let cupom  = 100 * porcentoDesconto / precoTenis;
console.log(`Seu Desconto e de ${cupom.toFixed(2)} %`);


