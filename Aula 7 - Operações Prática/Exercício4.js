//Um cliente comprou 22 itens, o caixa precisa saber se o número é par, printar no console se o número é par

let itens = 22;
if (itens % 2 === 0) {
console.log("O número: " + itens + " é par")
}
else{
    console.log("O número é ímpar")
}
//outra forma de fazer
/*function ehPar(num){
    return num % 2 == 0
}
let x = 2
let y = 5
console.log(ehPar(x))
console.log(ehPar(y))*/

//outra
function paridade(num){
   if (num % 2 === 0){
    console.log("é par")
   }
   else{
    console.log("é impar")
   }
}
paridade(25)