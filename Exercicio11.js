const prompt = require('prompt-sync')();

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.


let soma = 0;

for (let i = 1; i <= 5; i++) {
    let somaNumber = Number(prompt('Digite 5 numero e veja a soma deles: '));
    soma += somaNumber;
}
console.log( '------------------------------');
console.log(`A soma total dos números é: ${soma}`);