//Faça um script que pergunte em que turno você estuda. Receba um vallor para turno como M- matutino, V- vespertino ou N-Noturno. 
//Imprima a mensagem "b dia", "b tarde", "b noite" ou "valor inválido" se for o caso.

let day = "matutino"; //night, evening
switch(day) { 
    case "matutino":
        console.log("Bom dia");
        break;
    case "vespertino":
        console.log("Boa tarde");
        break;
    case "noturno":
        console.log("Boa noite");
        break;
    default:
        console.log("Valor inválido");
}

