//média artimética de um array de numeros e retorne o resultado. Utilize essa função para calcular a média de diferentes conjuntos de numeros
let array = [5,10,15,20,25];
function mediaAritmetica (array){
    let soma = 0;
    for(let i = 0; i < array.length; i++){
        soma += array[i];
    }

    return soma / array.length;
    

}
console.log(mediaAritmetica(array));