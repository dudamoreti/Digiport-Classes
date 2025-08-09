// Ana testa um robo que tem bateria acima de 20%, ela precisa monitorar o robo ate que a bateria fique fraca. Como ela não sabe quantas vezes o robo vai andar, Ana decide usar um loop while.

let bateria = 100;
while (bateria > 20){
    console.log ("Robo andando... bateria em " + bateria + "%");
    bateria -= 15; //diminui 15% a cada passo //BATERIA = BATERIA - 15
}
console.log ("Bateria fraca. Ana desligou o robô")

