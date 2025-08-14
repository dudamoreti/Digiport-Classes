//você tem uma caixa com 10 frutas. Cada fruta pode ser vermelha ou verde. Pergunte a cor de cada fruta e imprima se ela é vermelha ou verde.

const prompt = require("prompt-sync")();
let vermelhas = 0;
let verdes = 0;
for (let i = 0; i < 10; i++) {
    let cor = prompt("Digite a cor da fruta (vermelha ou verde): ").toLowerCase();
    if (cor === "vermelha") {
        vermelhas++;
    }
    else if (cor === "verde") {
        verdes++;
    }
    else {
        console.log("Cor inválida. Por favor, digite 'vermelha' ou 'verde'.");
        i--; // Decrementa i para repetir a iteração para uma entrada válida
    }
}
console.log("Quantidade de frutas vermelhas: " + vermelhas);
console.log("Quantidade de frutas verdes: " + verdes);