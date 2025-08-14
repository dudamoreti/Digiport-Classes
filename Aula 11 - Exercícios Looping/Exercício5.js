//usuário insere números até que insira um número negativo, e o programa informa a soma dos números inseridos
const prompt = require("prompt-sync")();
let soma = 0;
let numero =0;

while (numero >= 0) {
    soma += numero; // soma = soma + numero
    numero = parseInt(prompt("Digite um número (negativo para sair): "));
    if (numero < 0) {
        break; // sai do loop se o número for negativo
    }
} 
console.log("A soma dos números inseridos é: " + soma);