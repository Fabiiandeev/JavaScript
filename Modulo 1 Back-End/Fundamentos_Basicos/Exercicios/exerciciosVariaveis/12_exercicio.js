const temIngresso = true;
const censura = 16;
const comPais = true;
const idade = 15;
// operador || => ou verificar se umas das condições sao verdadeiras.
// somete caso Uma das condições seja  Verdadeira 

if (temIngresso){
    if (idade >= censura || comPais) { // VERIFICA ENTRADA SE ESTA COM OS PAIS .
        console.log('Entrada Permitida ');
    }else{
        console.log('Entrada Barrada pela idade');
    }
}
else {
    console.log('Barrado falta Ingresso!!');
}    
