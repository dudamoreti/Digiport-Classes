let a = 10;
let b = 3;
console.log(a+b);   //soma = 3
console.log(a % b); //mostra o resto da divisão, que é 1

let idade = 20;
console.log(idade == 20); //se é igual
console.log(idade > 18)
console.log (idade < 18)
console.log(idade != 25)

/*== 
Compares values

Allows type conversion

Example: 5 == '5' → true

=== 
Compares values and types

No type conversion

Example: 5 === '5' → false */ 

//Operações Lógicas
let estaChovendo = true;
let temGuardaChuva = false;

console.log(estaChovendo && temGuardaChuva) //os dois precisam ser verdadeiros
console.log(estaChovendo || temGuardaChuva)// um deles precisa ser verdadeiro
console.log(!temGuardaChuva) //not - do contra, inverte para false

/*QUIZ
5 > 3
10 == 5
NÃO (5<10)
6 % 2 == 0 e 6 >3*/

let d = 5;
let e = 3;
let f = 10;
let g = 6;


console.log(d > e)
console.log(f==d)
console.log(!(d<f))
console.log(g%2 == 0 && g>d)
