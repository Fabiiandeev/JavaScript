// Montanha Russa Muito Assustadora

const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || idade > 65 || possuiPatologia || altura < 150) {
    console.log('Entrada Nao Permitida ');
} else if (idade < 18 || ehEstudante) {
    console.log('Tem Direiro a meia Entrada Valor e 10 Reais');

}else{
    console.log('Valor da Entrada e 20 reais');
}