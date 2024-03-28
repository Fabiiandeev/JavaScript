
const comanda = {
    nome: 'Phelipe',
    idade: 29,
    produtos: [
        {
            nome: 'Agua',
            preco: 1.50,
            qtd: 1,
        },
        {
            nome: 'Suco',
            preco: 2.50,
            qtd: 1,
        },
        {
            nome: 'Cerveja',
            preco: 5.50,
            qtd: 1,
        }
    ]
};

console.log(`
    ${comanda.nome}
    ${comanda.idade}
`);
comanda.idade = 20;

let totalApagar = 0;
for (let item of comanda.produtos) {
    totalApagar = totalApagar + (item.preco * item.qtd);

}

console.log(`
    ========== Comanda Consumidor ==========
    Nome :${comanda.nome}
    Idade:${comanda.idade}
    ======================

    Produto 1 = ${comanda.produtos[0].nome}
    Preço Unitario :${comanda.produtos[0].preco.toFixed(2).replace('.', ',')}
    =========================================
    Produto 2 = ${comanda.produtos[1].nome}
    Preço Unitario :${comanda.produtos[1].preco.toFixed(2).replace('.', ',')}
    =========================================
    produto 3 =${comanda.produtos[2].nome}
    Preço Unitario : ${comanda.produtos[2].preco.toFixed(2).replace('.', ',')}
    =========================================
    Total Comanda = R$ ${totalApagar.toFixed(2).replace('.', ',')}
      
`);


