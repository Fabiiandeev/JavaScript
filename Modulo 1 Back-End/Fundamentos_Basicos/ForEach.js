const array = [1, 2, 3, 4, 5, 6, 7, 8];

// aero function foreach((x) =>{})


array.forEach((x, i, a) => {
    console.log(`
    O Elemento ${x} está no  índice ${i} do array ${a}.
    `);
});
