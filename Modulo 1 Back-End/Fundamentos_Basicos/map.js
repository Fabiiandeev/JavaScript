const array = [1, 2, 3, 4, 5, 6];

const arrayModificado = array.map((x, index, array)=>{
    return x ** 2 ;

});

console.log(arrayModificado);


// Refatorando Map

const modificadoArray = array.map(x => x**2);

console.log(modificadoArray);