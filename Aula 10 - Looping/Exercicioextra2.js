const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número inteiro positivo: "));

// Validação simples para garantir que o número é válido
if (numero < 0) {
    console.log("Por favor, digite um número inteiro positivo válido.");
} else {
    for (let i = numero; i >= 0; i--) {
        console.log(i);//
    }
}

//Escreva um programa que peça um número inteiro positivo e, usando um loop, imprima na tela a contagem regressiva até 0.
/*outra forma, que o programa valida o número inteiro positivo:
const prompt = require("prompt-sync")();

let numero = parseInt(prompt("Digite um número inteiro positivo: "));

// Validação com loop até o usuário digitar um número válido
while (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro positivo válido.");
    numero = parseInt(prompt("Digite um número inteiro positivo: "));
}

// Agora que está válido, faz a contagem regressiva
for (let i = numero; i >= 0; i--) {
    console.log(i);
}*/