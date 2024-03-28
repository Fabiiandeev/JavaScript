const array = [
    1, 3, 23, 2, 4, 6, 5, 9
];

const ordem = array.sort((a, b) => a < b ? -1 : 1);
console.log(ordem);