function birthday(anoAtual,anoNascimento){
    return anoAtual - anoNascimento
}
console.log("Joana tem " + birthday(2025,2001))

const prompt = require("prompt-sync")();
let nasce = parseInt(prompt("Digite seu ano de nascimento: "))
const date = new Date()
let anoHoje = date.getFullYear();

function idade(anoHoje,nasce){
    return anoHoje - nasce
}
console.log(idade(anoHoje,nasce))