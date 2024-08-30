const prompt = require('prompt-sync')();
// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if

let nota = Number(prompt('Digite sua nota: '));

if(nota >= 6){
    console.log(`Sua nota foi ${nota}, voce esta APROVADO`);
}else if(nota < 6 && nota >= 5){
    console.log(`Sua nota foi ${nota}, voce esta de RECUPERACAO, mais atencao `);
}else{
    console.log(`Sua nota foi ${nota}, voce esta REPROVADO.`);
}