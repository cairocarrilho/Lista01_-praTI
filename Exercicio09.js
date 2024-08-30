const prompt = require('prompt-sync')();

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

let numberDecremento  = Number(prompt('Digite um numero para ver o decremento '));

for (let i = numberDecremento; i > 0; i--) {
    console.log(i)

}

// Foi Implementado para que o usuario digite um numero aleatorio para que possa ver o decremento dos numero ate o numero 1