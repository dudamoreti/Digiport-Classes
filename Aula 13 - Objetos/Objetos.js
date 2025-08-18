//estruturas que agrupam dados e comportamentos, armazenados em pares chave-valor
//dados: propriedades-atributos; comportamentos: métodos (funções dentro do objeto)
let person = {
    name: 'Natalia',
    age: 31,
}; 
console.log ("Hello, I am " + person.name + " and I am " + person["age"] + " years old")


//OBJETOS PODEM TER OUTROS OBJETOS DENTRO
let cat = {
    age: 3,
    body: {fur: "short", colors: ["black", "white"]},
}
console.log ("A idade do gato é " + cat.age + "  suas cores são " + cat.body.colors.join(", ") + " seu tamanho é " + cat.body.fur)