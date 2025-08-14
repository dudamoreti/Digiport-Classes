//10 numeros para analisar, conte quais são positivos, negativos e zeros
const prompt = require("prompt-sync")();
let positivos = 0;
let negativos = 0;
let zeros = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número: "));
    if (numero > 0){
        positivos++ // positivos = positivos + 1;
    }
    else if (numero < 0){
        negativos += 1;
    }
    else {
        zeros += 1;
    }
}
console.log("Quantidade de números positivos: " + positivos);
console.log("Quantidade de números negativos: " + negativos);
console.log("Quantidade de zeros: " + zeros);