const calcula = (a,b,c) => {
if (c === "+"){
    return a + b;
}
if (c === "-"){
    return a - b;
}
else if (c === "*"){
    return a*b;
}
else if (c === "/"){
    return a/b;
}
else{
    return "Operação Inválida";
}
}
console.log(calcula(5,4,"+"))
console.log(calcula(5,4,"-"))
console.log(calcula(5,4,"*"))
console.log(calcula(5,4,"/"))