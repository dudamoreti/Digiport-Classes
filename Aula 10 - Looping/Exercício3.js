/*Julia montou uma lanchonete virutal. Os clientes podem escolher entre: 1 - ver o cardápio; 2- fazer um pedido; 3 - falar com atendente; 4- sair. Simule esse menu em JS, usando o while e encerre o menu quando a opção sair for escolhida. Dentro do while, use um switch para tratar as opçoes".*/

/*const prompt = require("prompt-sync")();
opcao = parseInt(prompt("Escolha uma opção: "));

while (opcao !== 4) { //continue until option 5 is chosen
    switch (opcao) {
        case 1:
            console.log("Cardápio: 1 - Hambúrguer; 2 - Pizza; 3 - Salada");
            break;
        case 2:
            console.log("Faça seu pedido: 1 - Hambúrguer; 2 - Pizza; 3 - Salada");
            break;
        case 3:
            console.log("Fale com o atendente: Digite sua mensagem");
            break;
        case 4:
            console.log("Saindo do menu. Obrigado!");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
 // Ask again at the end
    opcao = parseInt(prompt("Escolha uma opção: "));
}*/

//melhor opção: 
const prompt = require("prompt-sync")();
let opcao;

while (true) {
    opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            console.log("Cardápio: 1 - Hambúrguer; 2 - Pizza; 3 - Salada");
            break;
        case 2:
            console.log("Faça seu pedido: 1 - Hambúrguer; 2 - Pizza; 3 - Salada");
            break;
        case 3:
            console.log("Fale com o atendente: Digite sua mensagem");
            break;
        case 4:
            console.log("Saindo do menu. Obrigado!");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }

    if (opcao === 4) {
        break; // para o loop de vez
    }
}