const prompt = require('prompt-sync')();

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else.

let idade = Number(prompt('Digite sua idade '));

if(idade <= 10){
    console.log(`Voce tem ${idade}, entao voce é uma CRIANCA`)
}else if(idade > 10 && idade <= 20){
    console.log(`Voce tem ${idade}, entao voce é um ADOLESCENTE/JOVEM `)
}else if(idade > 20 && idade <= 50 ){
    console.log(`Voce tem ${idade}, entao voce é uma ADULTO`)
}else{
    console.log(`Voce tem ${idade}, entao voce é uma IDOSO`)
}