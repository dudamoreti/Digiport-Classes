//funcções são blocos de código que realizam uma tarefa particular. Organização e reutilização de código
function somar (a,b){//a e b parametros
    return a + b;
}
console.log(somar(2,3));//aqui são os argumentos

/*function nomedaFuncao(parametros){
    return retornoDaFuncao;
}*/

/*sem retorno - void
function parabenizar(nome){
console.log (`Parabens, ${nome}!´)}

parabenizar ("Laura"); */

/* com retorno
function criarMensagemParabens(nome){
return `Parabéns, }

let mensagem = criarMensagemParabens("Laura")
console.log(mensagem)*/

//Arrow Function
const numeros = [1,2,3,4,5]
const quadrados = numeros.map((x) => x * x );//faz 1x1, 2x2...
console.log(quadrados)
