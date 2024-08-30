const prompt = require('prompt-sync')();

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

let numberTabuada = prompt('Digite um numero para ver sua tabuada: ');

for (let i = 1; i <= 10; ++i) {
    console.log(`Tabuada de ${numberTabuada} - ${numberTabuada} x ${i} = ${i * numberTabuada}`);
}