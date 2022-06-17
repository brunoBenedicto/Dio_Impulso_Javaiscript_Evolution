// comentario de uma linha
/* 
comentario de varias linhas
*/

//variavel
var a =2;

//contante
const A=2;

//estrutura de funções
function nomeDaFuncao(){
//ações da função
}

//para chamar uma função
nomeDaFuncao();


function returnEvenvalues (array){
    let envenNums=[];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 === 0) {
            envenNums.push(array[i]);
        }
    }
    console.log('numeros pares são: ', envenNums);
}

let array = [1,2,3,4,5,6,7,8,9,10];
returnEvenvalues(array);