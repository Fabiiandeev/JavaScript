//Definindo as posições

const alturaCm = 203;

if (alturaCm < 180) {  //Reprovado
    console.log(`
    Sua Altura Não Atende os requisitos. 
    (Reprovado)`
    );
} else if (alturaCm >= 180 && alturaCm < 185) { // Líbero
    console.log(`
    Sua Altura Atende os requisitos. 
    (Líbero)`
    );
} else if (alturaCm >= 186 && alturaCm < 195) { //Ponteiro
    console.log(`
    Sua Altura Atende os requisitos. 
    (Ponteiro)`
    );
} else if (alturaCm >= 196 && alturaCm < 205) { // Oposto
    console.log(`
    Sua Altura Atende os requisitos. 
    (Oposto)`);
} else { //Central
    console.log(`
    Sua Altura Atende os requisitos. 
    (Central)
    `)
}

