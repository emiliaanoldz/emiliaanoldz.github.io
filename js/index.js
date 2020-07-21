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

$('#theForm').submit(function (e) { 
  e.preventDefault();
  $('#submitLoader').removeClass('d-none');
  //Capturar datos form
  var data = {
    "name":this.name.value,
    "email":this.email.value,
    "mensaje":this.mensaje.value
  };

  if (nombre.value.trim() == "" || email.value.trim() == "" || mensaje.value.trim() == "") {
    event.preventDefault();
    $('#submitLoader').addClass('d-none');
    Swal.fire({
      icon: 'error',
      title: 'Ups...',
      text: 'Parece que no terminaste de completar el formulario.',
    })
  }
  else{
    fetch('https://submit-form.com/4HedqresISZ6Bfgguq-Xt', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        $('#submitLoader').addClass('d-none');
        Swal.fire(
            '¡Mensaje Recibido!',
            'Gracias 🤩',
            'success'
        );
        $('#contact').fadeOut('slow');
        $('#gracias').removeClass('d-none');
    })
    .catch((error) => {
        $('#submitLoader').addClass('d-none');
        Swal.fire(
            'Ups!',
            `Parece que algo salió mal. Intentalo otra vez. [${error}]`,
            'error'
        );
    });
  }

});

