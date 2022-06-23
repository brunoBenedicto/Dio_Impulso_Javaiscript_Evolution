// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

//campoSaldo.innerHTML = 0

function somarAoSaldo(soma:string) {
    if(soma.length < 1){
        console.log("campo soma vazio")
        if(campoSaldo.innerHTML ===''){
            console.log("saldo tabem vazio")
            campoSaldo.innerHTML = '0'
        }
    }
    else{
        if(campoSaldo.innerHTML ===''){
            console.log("saldo estava vazio")
            campoSaldo.innerHTML = parseInt(soma).toString()
        } 
        else{
            console.log("somando")
            campoSaldo.innerHTML = (parseInt(campoSaldo.innerHTML) +  parseInt(soma)).toString();
        }
    }
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});
