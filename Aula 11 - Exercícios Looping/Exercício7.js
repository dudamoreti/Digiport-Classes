prompt = require("prompt-sync")();
saldo = 1600; // saldo inicial

while (true){
    let opcao = parseInt(prompt("Escolha uma opção: 1 - Verificar Saldo; 2 - Depositar; 3 - Sacar; 4- Sair do Sistema: "));
    switch(opcao){
        case 1:
            console.log("Seu saldo é :" + saldo);
            break;
        case 2:
            let deposito = parseFloat(prompt("Digite o valor a ser depositado: "));
            console.log("Você depositou: " + deposito);
            saldo += deposito; // Atualiza o saldo
            console.log("Seu novo saldo é: " + saldo);
            break;
        case 3: 
        let saque = parseFloat(prompt("Digite o valor a ser sacado: "));
        if (saque > saldo){
            console.log("Saldo insuficiente para saque.");
        }
        else {
            console.log("Você sacou: " + saque);
            saldo -= saque; // Atualiza o saldo
        }
        break;
        case 4: 
            console.log("Saindo do sistema. Obrigado!");
            return;
        default:
            console.log("Opção inválida. Tente novamente.");
            continue; // Volta para o início do loop se a opção for inválida    
    }
    if (opcao === 4){
        break; // Encerra o loop se a opção 4 for escolhida
    }

    }