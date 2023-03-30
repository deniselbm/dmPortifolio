

function validarDatos() {
    event.preventDefault();
    var error = document.querySelector('#error');
    error.style.color = 'black';

    var expresion = /\w+@\w+\.+[a-z]/;

    var mensajesError = [];

    let form = document.querySelector("form");


    if (form.nome.value == "") {
        mensajesError.push("Campo Nome é obrigatorio")
        form.nome.focus()

    } else if (form.email.value == "") {
        mensajesError.push("Campo e-mail é obrigatorio")
        form.email.focus()

    } else if (form.assunto.value == "") {
        mensajesError.push("Campo Assunto é obrigatorio")
        form.assunto.focus()

    } else if (form.mensagem.value == "" || form.mensagem.value.length < 30) {
        mensajesError.push("Campo Mensagem é obrigatorio e deve conter pelo menos 30 carateres")
        form.mensagem.focus()

    } else if (form.email.value.indexOf('@') == -1 ||
        form.email.value.indexOf('.') == -1) {
        mensajesError.push("e-mail inválido")
    }


    error.innerHTML = mensajesError.join(',')


}
document.querySelector("form")
document.addEventListener("submit", validarDatos);

