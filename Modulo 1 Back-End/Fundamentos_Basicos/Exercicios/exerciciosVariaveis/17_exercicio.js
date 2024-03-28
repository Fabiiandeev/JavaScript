// Pedra, papel ou tesoura

const jogada1 = ' Pedra ';
const jogada2 = 'Tesoura';

if (jogada1 === jogada2) {
    console.log(`EMPATE !!`);
} else {
    if (jogada1 === 'Pedra') {
        if (jogada2 === 'Tesoura') {
            console.log('Pedra Ganhou !!');
        }
    }else{
        console.log('Papel Ganhou');
    }
} 
