const array = [1, 2, 3, 10, 7, 5,];


const somar = array.reduce((acc, item) => {
    if (item > acc) {
        acc = item;
    }
    return acc;
})

console.log(somar);

// let maior = array[0];

// for (let i = 1; i < array.length; i++) {
//     let item = array[i];

//     if (item > maior) {
//         maior = item;
//     }
// }

