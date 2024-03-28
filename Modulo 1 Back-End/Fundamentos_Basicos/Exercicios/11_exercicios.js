const array = [
    20,
    30,
    40,
    18.'0,
];
const ehValido = array.every((x) => {
    const ehPositido = x >= 0;
    const ehInterio = x % 1 === 0;

    if (ehPositido && ehInterio) {
        return true;
    } else {
        return false;
    }
})

console.log(ehValido);