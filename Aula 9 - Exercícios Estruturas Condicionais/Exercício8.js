let tipoCliente = "bronze";
switch(tipoCliente){
    case ("bronze"):
        console.log("Você ganhou 5% de desconto")
        break;
    case ("prata"):
        console.log("Você ganhou 10% de desconto")
        break;
    case ("ouro"):
        console.log("Você ganhou 15% de desconto")
        break;
    case ("platina"):
        console.log("Você ganhou 20% de desconto")
        break;
    default:
        console.log("Tipo de cliente inválido")
}
