// Criando Lista Nomes Utilizando Arrays [list]
const nome = ['Phelipe', 'Fabian', 'Monica', 'Julia', 'Maria', 'Joao'];
console.log(nome);

 console.log('===== Modificando Arrays ====='); 
nome[1] = 'Gabriel'; // Arrays Modificado 
console.log(nome);



console.log('======== Metodo Arrays push seria empurrar (adicionar ) =========');
nome.push('Ana'); 
console.log(nome);



console.log('metodo Pop retira utimo index da lista Arrays');  
nome.pop();// 
console.log(nome);



console.log('metodo shift retira primeiro index da lista Arrays');
nome.shift();
console.log(nome);

console.log('metodo unshift adciona primeiro index da lista Arrays');
nome.unshift('Bruno');
console.log(nome);


console.log('Descobrindo Tamanho do arrays.length');
console.log(nome.length);
