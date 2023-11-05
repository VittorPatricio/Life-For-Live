const main = document.querySelector(".main");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", () => {
  main.classList.add("active");
});

loginLink.addEventListener("click", () => {
  main.classList.remove("active");
});

'use strict'
let troca = document.querySelector(".register-link");
troca.addEventListener("click", function () {
  let test_a_troca = document.getElementById("title").innerHTML;
  if (test_a_troca == "Entrar") {
    document.getElementById("title").innerHTML = "Registro";
  }
  else {
    document.getElementById("title").innerHTML = "Entrar";
  }
});

'use strict'
let troca1 = document.querySelector(".login-link");
troca1.addEventListener("click", function () {
  let test_a_troca1 = document.getElementById("title").innerHTML;
  if (test_a_troca1 == "Registro") {
    document.getElementById("title").innerHTML = "Entrar";
  }
  else {
    document.getElementById("title").innerHTML = "Registro";
  }
});

/* Mostrar Senha */


function mostrarSenha(){

  var senha = document.getElementById('senha')
  var olhoAberto = document.getElementById('olhoAberto')


  if(senha.type === 'password'){
     senha.setAttribute('type','text')
     olhoAberto.setAttribute('name','eye-off-outline') 
  } else {
    senha.setAttribute('type','password')
    olhoAberto.setAttribute('name','eye-outline') 
  }
  
}


function mostrarSenhaRegistro(){

  var senha = document.getElementById('senhaRegistro')
  var olhoAberto = document.getElementById('olhoAbertoRegistro')


  if(senha.type === 'password'){
     senha.setAttribute('type','text')
     olhoAberto.setAttribute('name','eye-off-outline') 
  } else {
    senha.setAttribute('type','password')
    olhoAberto.setAttribute('name','eye-outline') 
  }
  
}