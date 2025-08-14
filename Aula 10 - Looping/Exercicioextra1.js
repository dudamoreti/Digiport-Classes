//menu simples com switch e while
const prompt = require("prompt-sync")();
let opcao = parseInt(prompt("Escolha uma opção: 1 - Olá; 2 - Data; 3 - Sair: "));

while(true) { // Continua até que a opção 3 seja escolhida
    switch(opcao) {
        case 1:
            console.log("Olá, seja bem-vindo ao nosso sistema!");
            break;
        case 2:
            console.log("Hoje é dia: " + new Date().toLocaleDateString());
            break;
        case 3:
            console.log("Saindo do sistema. Até logo!");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
    if (opcao === 3) {
        break; // para o loop de vez
    }
    opcao = parseInt(prompt("Escolha uma opção: 1 - Olá; 2 - Data; 3 - Sair: "));
}
