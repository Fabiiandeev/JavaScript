const dinherio = 100;
const opcaoPagamento = 12;

if(opcaoPagamento === 7){
    let calcularAcrecinmo = (dinherio * 0.01) * opcaoPagamento + dinherio;
    let calcularParcela = calcularAcrecinmo / opcaoPagamento;
    console.log(`
        Para Pagamento em até 7x Juros 1 % valor fica.
        R$ ${ dinherio.toFixed(2).replace('.', '.') } 
        7x  R$ ${ calcularParcela.toFixed(2).replace('.', '.') }
    `);
        
}else{
    let calcularAcrecinmo = (dinherio * 0.01) * opcaoPagamento +dinherio;
    let calcularParcela = calcularAcrecinmo / opcaoPagamento;
    console.log(`
        Para Pagamento em até 12x Juros 1 % valor fica.
        R$ ${ dinherio.toFixed(2).replace('.', '.')} 
        7x  R$ ${calcularParcela.toFixed(2).replace('.', '.')}
    
    `);
}