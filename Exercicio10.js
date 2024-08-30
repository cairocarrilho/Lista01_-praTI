const prompt = require('prompt-sync')();

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let numero = Number(prompt('Digite um numero: '));
let qtde = Number(prompt('Digite a quantidade que deseja repetir o  numero: '));
contador = 0
for (let i = 1; i <= qtde; i++) {
    contador++
    console.log( contador + ' - '+ ` numero ${numero}`)

}

// Implementado tambem a opcao de o usuario digitar qualquer valor e ver ele se repetido 10 vezes ou a quantidade que
// o usuario quer ver ele se repetindo