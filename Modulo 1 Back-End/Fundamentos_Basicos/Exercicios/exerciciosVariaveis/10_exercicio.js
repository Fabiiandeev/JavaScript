console.log("======== Soma dos ângulos internos de um polígono ========");
const lado = 6; // lado
const angulo = 180; // angulo

const calculo = (lado - 2) * angulo; // soma Para acha Angulo total
console.log(`A soma dos ângulos internos é ${calculo} °`);

const anguloInt = calculo / lado; // soma para acha Angulo de cada lado
console.log(
  `O soma dos ângulos internos do Polígono é ${calculo}°, cada ângulo dele é igual a: ${anguloInt} º`
);
