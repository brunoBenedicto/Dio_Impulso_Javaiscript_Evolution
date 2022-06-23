"use strict";
var profissao;
(function (profissao) {
    profissao[profissao["atriz"] = 0] = "atriz";
    profissao[profissao["Padeiro"] = 1] = "Padeiro";
    profissao[profissao["padeiro"] = 2] = "padeiro";
})(profissao || (profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: profissao.atriz
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: profissao.padeiro
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: profissao.atriz
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: profissao.padeiro
};
