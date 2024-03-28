const nomes = ['Phelipe', 'Maria', 'Bruna', 'Pedro'];
let encontrado = false;

// For C Mais utilizado .
for (let i = 0; i < nomes.length; i++) {
    const itens = nomes[i];

    if (itens === 'Bruna') {
        console.log(`Bruna Se encontra na posição ${i}`);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log('Não Encontrado Nome No Index ');
}