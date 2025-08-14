prompt = require("prompt-sync")();
let correctPassword = "1234";
let inputPassword = prompt("Digite a senha: ");

while (inputPassword !== correctPassword) {
    console.log("Senha incorreta. Tente novamente.");
    inputPassword = prompt("Digite a senha: ");
}
console.log("Senha correta! Acesso concedido.");

