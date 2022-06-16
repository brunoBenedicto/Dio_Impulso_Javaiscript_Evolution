var contador =0;
var imagens = document.querySelectorAll(".instagram-phone img")
var qtdImagens = imagens.length;

function trocaImagem(){
    setInterval(()=>{
        imagens[contador].classList.remove("selecionada");
        contador++;
        if(contador >= qtdImagens) 
            contador = 0;
        imagens[contador].classList.add("selecionada");
    }, 3000)
}

window.addEventListener("load",trocaImagem )