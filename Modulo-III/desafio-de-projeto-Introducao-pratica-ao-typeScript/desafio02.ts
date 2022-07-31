enum profissao {
    atriz,
    Padeiro,
    padeiro,
}

interface iPessoa {
    nome: string,
    idade: number,
    profissao: profissao
}


let pessoa1 : iPessoa ={
    nome: "maria",
    idade: 29,
    profissao: profissao.atriz
}

let pessoa2 : iPessoa ={
    nome: "roberto",
    idade: 19,
    profissao: profissao.padeiro
}

let pessoa3: iPessoa= {
    nome: "laura",
    idade: 32,
    profissao: profissao.atriz
}

let pessoa4: iPessoa= {
    nome: "carlos",
    idade: 19,
    profissao: profissao.padeiro
}