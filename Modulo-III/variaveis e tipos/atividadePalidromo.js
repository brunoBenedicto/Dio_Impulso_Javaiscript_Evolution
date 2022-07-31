function verificaPalidromo(string){
    if(!string) return "String inexistente";
    let semEspaco = string.replace(" ","");
    
    return semEspaco.split("").reverse().join("") === semEspaco;
}

console.log(verificaPalidromo("ema"));//false
console.log(verificaPalidromo("ama"));//true
console.log(verificaPalidromo("ama ama"));//true
console.log(verificaPalidromo("subi no onibus"));//true


