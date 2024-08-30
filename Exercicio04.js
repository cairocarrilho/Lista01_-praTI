const prompt = require('prompt-sync')();

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//     Utilize switch-case para implementar a lógica de cada opção selecionada.


let  opcao =  Number(prompt('Escolha uma opcao: ' +
    '1 - Macarrao' +
    '2 - Arroz com Feijao' +
    '3 - Sushi: ' ));


switch(opcao){
    case 1:
        console.log(`A opcao escolhida foi Macarrao, seu pedido esta sendo preparado`)
    break

    case  2:
        console.log(`A opcao escolhida foi Arroz com Feijao, seu pedido esta sendo preparado`)
    break
    case 3:
        console.log(`A opcao escolhida foi Sushi, seu pedido esta sendo preparado`)
    break

    default:
            console.log(`A opcao escolhida nao foi encontrada`)
    break
}
