var formulario = document.getElementsByClassName('form-control');
var elementos = formulario.elements;
var boton = document.getElementsByClassName('btn');

var validarNombre = function(e){
  if (formulario.name.value === ""){
    alert("nombre as vacio");
    e.preventDefault();
  }
}

var validar = function(e){
  validarNombre(e);
}

formulario.addEventListener("submit", validar);

console.log(boton);
