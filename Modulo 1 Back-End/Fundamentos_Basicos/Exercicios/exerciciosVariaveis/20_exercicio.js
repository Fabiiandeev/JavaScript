// Isenção de impostos 
const aposentada = false;
const portadoraDeDoenca = false;
const totalRendimentos = 3000000;

if (aposentada || portadoraDeDoenca ) {
    console.log(`Isenta !!`);
} else if (totalRendimentos < 3000000) {
    console.log(`Rendimento Baixo, Vaza Leão!!`);

} else {
    console.log(`Rendimento Alto Pega Leão!!`);
}
