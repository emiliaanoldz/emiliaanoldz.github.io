var nombre = document.querySelector('#name');
var nombrefeedback = document.querySelector('#nameFeedback');
var email = document.querySelector('#email');
var emailfeedback = document.querySelector('#emailFeedback');
var mensaje = document.querySelector('#mensaje');
var mensajefeedback = document.querySelector('#mensajeFeedback');
var formulario = document.querySelector('#theForm');
var formularioFeedback = document.querySelector('#formularioFeedback');

nombre.onblur = function () {
  if (this.value.trim() == '') {
    this.classList.add('is-invalid');
    nombrefeedback.style.display = "inherit";
  }
  else {
    this.classList.remove('is-invalid');
    nombrefeedback.style.display = "none";
  }
}

email.onblur = function () {
  if (this.value.trim() == '') {
    this.classList.add('is-invalid');
    emailfeedback.style.display = "inherit";
  }
  else {
    this.classList.remove('is-invalid');
    emailfeedback.style.display = "none";
    emailBadfeedback.style.display = "none";
  }
}

mensaje.onblur = function () {
  if (this.value.trim() == '') {
    this.classList.add('is-invalid');
    mensajefeedback.style.display = "inherit";
  }
  else {
    this.classList.remove('is-invalid');
    mensajefeedback.style.display = "none";
  }
}

formulario.onsubmit = function (event) {
  if (nombre.value.trim() == "" || email.value.trim() == "" || mensaje.value.trim() == "") {
    alert("Rellena el formulario para poder enviarlo.");
    event.preventDefault();
  }
}
