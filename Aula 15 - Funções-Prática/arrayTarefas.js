/*const prompt = require("prompt-sync")();

let listaDeTarefas = [];
let item = [];
function adicionarTarefa(listaDeTarefas){
    for(i = 0; i < 5; i++)
item = prompt("Digite sua tarefa: ")
listaDeTarefas += item[i].push()

}
console.log(listaDeTarefas) - o que eu fiz*/

const prompt = require("prompt-sync")();

let listaDeTarefas = [];

function adicionarTarefa(listaDeTarefas){
    for (let i = 0; i < 5; i++) {
        let item = prompt("Digite sua tarefa: ");
        listaDeTarefas.push(item); // adiciona a tarefa no array
    }
}

adicionarTarefa(listaDeTarefas); // chama a função
console.log(listaDeTarefas); // mostra as tarefas

// Escolher qual remover
let indice = parseInt(prompt("\nDigite o número da tarefa que deseja remover (0, 1, 2...): "));

// Remover com splice
if (indice >= 0 && indice < listaDeTarefas.length) {
    listaDeTarefas.splice(indice, 1); // remove 1 item na posição escolhida
    console.log("Tarefa removida com sucesso!");
} else {
    console.log(" Índice inválido.");
}

console.log("\n📋 Lista atualizada:", listaDeTarefas);

/*let listaDeTarefas = []
function adicionarItem(item){
listaDeTarefas.push(item)}
adicionarItem("varrer a casa")
adicionarItem("entrega tarefa x")
console.log(listaDeTarefas)*/
