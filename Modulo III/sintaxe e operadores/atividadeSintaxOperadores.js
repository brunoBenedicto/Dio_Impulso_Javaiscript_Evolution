function compara(num1, num2){
    let retorno = "os numeros "+ num1 + " e " + num2 ;
    let soma = num1+num2;
    num1===num2 ? retorno = retorno.concat(" são iguais. "): retorno = retorno.concat(" não são iguais. ");
    retorno = retorno.concat("Sua soma é ", soma);
    soma >10 ? retorno = retorno.concat(" que é maior que 10 e ") : retorno = retorno.concat( " que é menor que 10 e");
    soma >20 ? retorno = retorno.concat(" e maior que 20") : retorno = retorno.concat(" menor que 20");

    console.log(retorno);
}

compara(2, 2);
compara(5,7);
compara (10, 12);