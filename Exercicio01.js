const prompt = require('prompt-sync')();
// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if

let number = Number(prompt('Digite um numero '));

if(number %2 ===0 ){
    console.log(`O numero ${number} é Par`)
}else{
    console.log(`O numero ${number} é Impar`)
}