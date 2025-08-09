const nomes = ["Joana", "Maria", "Adriana", "Julia", "Paula"];
const sabores = ["creme", "chocolate", "morango", "pistache", "baunilha"];

for (let i = 0; i < nomes.length; i++) { //o i é o índice do array, que começa em 0
    console.log("Nome: " + nomes[i] + "| Sabor favorito: " + sabores[i]);

}


const alunas = [
    {nome: "Ana", sorvete: "chocolate"},
    {nome: "Ana", sorvete: "chocolate"},
    {nome: "Ana", sorvete: "chocolate"},
];

//outro jeito de fazer
/*const dados = "Ana, chocolate; Bruna, morango; Eva, pistache";
const pares = dados.split(";");
for (let i = 0; i < pares.length; i++){
const partes = pares [i]. split (",");
console.log (Nome: $partes[0] | Sabor favorito $(partes[1]))
}*/