const prompt = require('prompt-sync')();

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//     Isósceles, escaleno ou eqüilátero.
//     Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

let ladoA = parseFloat(prompt('Digite o 1 lado : '));
let ladoB =  parseFloat(prompt('Digite o 2 lado: '));
let ladoC =  parseFloat(prompt('Digite o 2 lado: '));

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    console.log('Os dados fornecidos forma um Triangulo')
    if(ladoA === ladoB && ladoB===ladoC){
        console.log('Os dados fornecidos nao formam um Triangulo Eqüilátero')
    }else if(ladoA === ladoB || ladoA===ladoC || ladoB === ladoC){
        console.log('Os dados fornecidos nao formam um Triangulo Isósceles')
    }else{
        console.log('Os dados fornecidos nao formam um Triangulo Escaleno')
    }
}else{
    console.log('Os dados fornecidos nao formam um Triangulo')
}