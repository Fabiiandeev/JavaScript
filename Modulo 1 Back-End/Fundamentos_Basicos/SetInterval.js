let contagem = 10;

function imprimirContagem() {
    if (contagem === 0) {
        console.log('KABUUUUUUUUUUUMMMMMMMM');
        clearInterval(setIntervalId);
    } else {
        console.log(`
        A bomba ira Explodir em ${contagem} segundo${contagem === 1 ? '' : 's'}
        `);
        contagem --;
    }
};
imprimirContagem();
const setIntervalId = setInterval(imprimirContagem, 1000);