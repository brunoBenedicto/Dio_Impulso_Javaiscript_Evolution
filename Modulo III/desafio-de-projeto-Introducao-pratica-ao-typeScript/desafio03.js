"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
//campoSaldo.innerHTML = 0
function somarAoSaldo(soma) {
    if (soma.length < 1) {
        console.log("campo soma vazio");
        if (campoSaldo.innerHTML === '') {
            console.log("saldo tabem vazio");
            campoSaldo.innerHTML = '0';
        }
    }
    else {
        if (campoSaldo.innerHTML === '') {
            console.log("saldo estava vazio");
            campoSaldo.innerHTML = parseInt(soma).toString();
        }
        else {
            console.log("somando");
            campoSaldo.innerHTML = (parseInt(campoSaldo.innerHTML) + parseInt(soma)).toString();
        }
    }
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
botaoAtualizar === null || botaoAtualizar === void 0 ? void 0 : botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});
botaoLimpar === null || botaoLimpar === void 0 ? void 0 : botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
