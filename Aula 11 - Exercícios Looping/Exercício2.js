//João está colhendo maças.Ele colheu maças durante 7 dias. Cada dia ele conta quantas colheu. Imprima a quantidade de maças colhidas em cada dia e a quantidade total de maças colhidas ao final da semana.

const prompt = require("prompt-sync")(); //descomente se for usar o prompt
let totalMacas = 0;
for (let dia = 1; dia <= 7; dia++) {
    let macasDia = parseInt(prompt("Digite a quantidade de maças colhidas no dia " + dia + ": "));
    totalMacas += macasDia;}
console.log("Total de maças colhidas na semana: " + totalMacas);




