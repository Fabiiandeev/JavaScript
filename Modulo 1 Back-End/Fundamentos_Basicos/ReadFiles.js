const fs = require('fs');
console.log('Vou começar a ler arquivo  agora ....');
fs.readFile('./texto.txt',(err, data) =>{ 
    if(!err){
        console.log(data.toString());
    }

});

console.log('Opa !');