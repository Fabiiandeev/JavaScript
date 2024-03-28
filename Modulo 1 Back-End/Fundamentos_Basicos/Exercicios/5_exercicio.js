// exercicio de objetos

const pessoa = {
    nome: 'Phelipe',
    idade: 29,
    altura: 1.80,
    apelido: [
        'Lipe', 
        'Mulão', 
        'Filipinho',
    ],
    temCnh: true,
};

let textoCnh = '';
    

if (pessoa.temCnh) {
    textoCnh = 'Possui Cnh'
    
}else{
    textoCnh = 'Não Possui Cnh'
}

console.log(`
    ${pessoa.nome} Tem ${pessoa.idade},
    ${pessoa.altura} de Altura  ${textoCnh}
    Tem Os Seguintes apelidos : 
`);
for(let itensapelido of pessoa.apelido){
    console.log(`- ${itensapelido}`);
}
