const prompt = require('prompt-sync')();

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let numberOne = prompt('Digite o primeiro numero: ');
let numberTwo = prompt('Digite o segundo numero: ');

if(numberOne > numberTwo){
    console.log( `Ordem crescente  ${numberTwo}, ${numberOne}` )
}else if(numberOne < numberTwo){
    console.log( `Ordem crescente ${numberOne}, ${numberTwo}` )
}else{
    console.log(`Os numero sao iguais`)
}



