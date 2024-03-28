const nome = 'Phlip';

let encontrado = false;

for(let letra of nome){
    if (letra === 'e'){
        encontrado = true;
        console.log('Tem A Letra (e)');
        break;
    }
}

if(!encontrado){
    console.log('Não Tem A Letra (e)');
}

