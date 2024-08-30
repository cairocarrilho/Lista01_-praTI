const prompt = require('prompt-sync')();

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, eR$0,25se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const qdteMacas = Number(prompt('Digite a quantidades de macas que deseja levar: '))


if (qdteMacas < 12) {
    let preco = qdteMacas * 0.30
    console.log(`Voce esta levando ${qdteMacas} macãs e esta  pagando R$${preco.toFixed(2)}`)
}else{
    let preco2 = qdteMacas * 0.25
    console.log(`Voce esta levando ${qdteMacas} macãs e esta  pagando R$${preco2.toFixed(2)}`)
}