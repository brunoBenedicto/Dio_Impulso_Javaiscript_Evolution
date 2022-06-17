function trocaParPorZero(array){
    if(!array.length) return -1;
    for(let i = 0; i < array.length; i++){
        if(array[i]%2=== 0) array[i]=0;
    }
    return array;
}

var a =[];
var b = [0,1,2,3,4,5,6];

console.log(trocaParPorZero(a));//-1
console.log(trocaParPorZero(b));//0,1,0,3,0,5,0
