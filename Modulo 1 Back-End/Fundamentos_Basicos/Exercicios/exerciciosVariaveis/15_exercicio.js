const dinheiro = 1000;
const numeroParcelas = 6;


if (numeroParcelas === 0) {
    let valorApagaremReais = (dinheiro * 0.10) ;
    let valorApagaremReaisDes = dinheiro - valorApagaremReais;
    console.log(
    `Para Pagamentos A vista, tem desconto  
    10% No Valor de R$ ${valorApagaremReais.toFixed(2).replace('.',',')} com 
    desconto seu valor fica R$ ${valorApagaremReaisDes.toFixed(2).replace('.', ',')}`
    );
} else {
    let pagamentoAprazo = dinheiro / numeroParcelas
    console.log(
        `Para Pagamentos a Prazo Dividimos em 6X SEM JUROS.
        Sua Parcela fica no valor de ${numeroParcelas} X R$ ${pagamentoAprazo.toFixed(2).replace ('.' , ','  ) }`
    );
}



