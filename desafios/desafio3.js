"use strict";
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldo = 0;
if (campoSaldo != null) { //garante que o objeto não é nulo
    campoSaldo.innerHTML = String(0);
    saldo = Number(campoSaldo.innerHTML);
}
function somarAoSaldo(soma) {
    return saldo += soma;
}
function limparSaldo() {
    if (campoSaldo != null) {
        campoSaldo.innerHTML = '';
    }
}
if (botaoAtualizar != null) {
    botaoAtualizar.addEventListener('click', function () {
        if (soma != null) {
            somarAoSaldo(Number(soma.value));
        }
    });
}
if (botaoLimpar != null) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
