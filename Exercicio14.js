const prompt = require('prompt-sync')();

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let numero = Number(prompt('Digite o um numero inteiro: '));
let fatorial = 1;

if(numero < 0){
    console.log('O fatorial nao esta definido para numeros negativos')
}else{
    for(let i = 1; i < numero; i++){
        fatorial *= i
    }

    console.log(`O fatorial de ${numero} é ${fatorial}.`);}

