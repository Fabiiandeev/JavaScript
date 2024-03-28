function verificarMaioridade(nome, idade) {
    if(idade >= 18){
        return true;
    }else{
        return false;
    }

}

let nome2 = 'Jose';
let idade2 = 29;

let ehMaiorIdade = verificarMaioridade(nome2,idade2);
console.log(ehMaiorIdade);