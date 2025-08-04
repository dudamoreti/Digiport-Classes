//faça um script que leia 3 nums inteiro, em seguida mostre o maior e o menor deles


// Jeito 1: Lê os 3 números como strings e converte para inteiros
/*const prompt = require('prompt-sync')();
let num1 = (prompt("Digite o primeiro número: "));
let num2 = (prompt("Digite o segundo número: "));
let num3 = (prompt("Digite o terceiro número: "));

// Encontra o maior e o menor
let maior = Math.max(num1, num2, num3);
let menor = Math.min(num1, num2, num3);

// Exibe os resultados
console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);*/

/*Jeito 2 : let num1 = 10;
let num2 = 25;
let num3 = 7;

let maior = num1;
let menor = num1;

//verifica maior
if (num2 > maior){
    maior = num2;
}
if (num3 > maior) {
    maior = num3;
}
//verifica menor
if (num2 < menor){
    menor = num2;
}
if(num3 < menor) {
    menor = num3;
}

console.log("Maior número:", maior)
console.log("Menor número:", menor)*/

let num1 = 22;
let num2 = 3;
let num3 = 10;
 
if (num1 > num2 || num1 > num3){
  console.log("o numero maior é", maior = num1)
} else if (num2 > num1 && num2 > num3){
   console.log("o numero maior é", maior = num2)
 } else{
   console.log("o numero maior é", maior = num3)
}