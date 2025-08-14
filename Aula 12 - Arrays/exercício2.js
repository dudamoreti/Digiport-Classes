

let numbers = [1,2,3,4,5]
let sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
console.log("The numbers are: " + numbers);
/*outro jeito 
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}*/
//soma
console.log("The sum is: " + sum);
// another way to do the same
let sum2 = 0;   
for (let i = 0; i < numbers.length; i++){
    sum2 += numbers[i]; // sum2 = sum2 + numbers[i]
} console.log("A soma usando um for é: " + sum2);

//media
let media = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4]) / numbers.length;
console.log ("A média é: " + media);
//outro jeito
let media2 = 0; 
for (let i = 0; i < numbers.length; i++){
    media = numbers[i] / numbers.length;
    media2 += media; // media2 = media2 + media
} console.log("A média usando um for é: " + media2);

//maior e menor
let maior = Math.max(...numbers);
let menor = Math.min(...numbers);
console.log("O maior número é: " + maior);
console.log("O menor número é: " + menor);
//outro jeito
let maior2 = numbers[0];
let menor2 = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maior2) {
        maior2 = numbers[i];
    }}
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < menor2) {
        menor2 = numbers[i];
    }}
console.log("O maior número usando for é: " + maior2);
console.log("O menor número usando for é: " + menor2);

//array de 5 numeros sem declarar diretamente a variavel usando for
const prompt = require("prompt-sync")();
let numbers2 = [];
for (let i = 0; i < 5; i++){
    let number = parseInt(prompt("Digite um número: "));
    numbers2.push(number); // Adiciona o número ao array
} console.log("Os números inseridos são: " + numbers2);