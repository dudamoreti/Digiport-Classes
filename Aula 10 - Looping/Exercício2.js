//Rafaela está recheando 10 donuts. Os donuts de número: - multiplo de 3 recebem recheio de c

for (let i =1; i <= 10; i++) {
    if(i % 3 === 0){
        console.log("Donut" + i + ":recheado de chocolate");
    } else {
        console.log("Donut" + i + ":é recheado de baunilha");
    }
}