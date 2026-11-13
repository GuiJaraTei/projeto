let usuario = "amor"
let senha = "soraya"
let usu = document.getElementById("usu")
let sen = document.getElementById("senha")
let text = document.getElementById("text")

    if (usu === usuario && sen === senha){
        text.textContent = "entrou"
        
    }else if(usu != usuario || sen != senha){
        text.textContent = "ola"

    }