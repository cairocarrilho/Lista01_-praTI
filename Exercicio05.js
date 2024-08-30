const prompt = require('prompt-sync')();

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let altura = parseFloat(prompt('Digite sua altura: '));
let peso =  parseFloat(prompt('Digite sua peso: '));
let imc = peso/(altura*altura).toFixed(2)

if( imc < 16.9 ){
    console.log(`Seu IMC é ${imc.toFixed(2)}, voce esta MUITO ABAIXO DO PESO`)
}else if ( imc > 16.9 && imc < 18.4){
    console.log(`Seu IMC é ${imc.toFixed(2)}, voce esta ABAIXO DO PESO`)
}else if ( imc > 18.4 && imc < 24.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}, voce esta PESO NORMAL`)
}else if ( imc > 24.9 && imc < 29.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}, voce esta ACIMA DO PESO`)
}else if ( imc > 29.9 && imc < 34.9){
    console.log(`Seu IMC é ${imc.toFixed(2)}, voce esta OBESIDADE GRAU I`)
}else if ( imc > 34.9 && imc < 40){
    console.log(`Seu IMC é ${imc.toFixed(2)}, voce esta OBESIDADE GRAU II`)
}else {
    console.log(`Seu IMC é ${imc.toFixed(2)}, voce esta OBESIDADE GRAU III`)
}