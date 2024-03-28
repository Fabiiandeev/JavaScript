// busque nome joao em um a lista 
// imprima indice que ele se encontra na lista 

// metofo usando findIndex
//const nomelista = ['Phelipe', 'Fabian', 'Joao', 'Monica'];
//const posicao = nomelista.findIndex(nome => nome === 'Fabian');
//console.log(posicao);


// metodo usando For C

const nome = ['Phelipe', 'Fabian', 'Bruna', 'Ana'];

let encontrado = false;

for(let i =0; i< nome.length; i++){
    const itens = nome[i];
    if( itens === 'Ana'){
        console.log(`Ana se encontra na posição ${i}`);
        encontrado = true;
        break;
    }

}
if(!encontrado){
    console.log('Não Encontrado Nome No Index ');
}

