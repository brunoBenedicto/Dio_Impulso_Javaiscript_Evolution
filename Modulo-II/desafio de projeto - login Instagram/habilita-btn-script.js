function toggleBtn(){
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    if(usuario && senha){
        document.getElementById("btn-login").disabled = false;
        return;
    }
    document.getElementById("btn-login").disabled = true;
}