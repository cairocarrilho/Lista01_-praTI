const prompt = require('prompt-sync')();

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let numberOne= 0
let numberTwo= 1
let arrayFibo=[]
for(let i = 0; i< 10; i++) {

    let fibo= numberOne + numberTwo;
    numberOne = numberTwo
    numberTwo = fibo;
    arrayFibo.push(fibo)
}
console.log(arrayFibo)





