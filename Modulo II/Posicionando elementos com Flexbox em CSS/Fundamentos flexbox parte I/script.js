const painel = document.getElementById("painel")
const itens = document.getElementsByClassName("item");



function FlexDirection(fd){
    painel.classList.remove("fd-row");
    painel.classList.remove("fd-row-reverse");
    painel.classList.remove("fd-column");
    painel.classList.remove("fd-column-reverse");
    painel.classList.add(fd.value);
}

function FlexWrap(fw){
    painel.classList.remove("fw-nowrap");
    painel.classList.remove("fw-wrap");
    painel.classList.remove("fw-wrap-reverse");
    painel.classList.add(fw.value);
}

function justifyContent(jc){
    painel.classList.remove("jc-flex-start");
    painel.classList.remove("jc-flex-end");
    painel.classList.remove("jc-center");
    painel.classList.remove("jc-space-between");
    painel.classList.remove("jc-space-around");
    painel.classList.add(jc.value);
}

function alignContent(ac){
    painel.classList.remove("ac-strech");
    painel.classList.remove("ac-center");
    painel.classList.remove("ac-flex-start");
    painel.classList.remove("ac-flex-end");
    painel.classList.remove("ac-space-around");
    painel.classList.remove("ac-space-between");
    painel.classList.add(ac.value);
}

function alignItens (ai){
    painel.classList.remove("ai-center");
    painel.classList.remove("ai-strech");
    painel.classList.remove("ai-flex-start");
    painel.classList.remove("ai-flex-end");
    painel.classList.remove("ai-baseline");
    painel.classList.add(ai.value);
}
