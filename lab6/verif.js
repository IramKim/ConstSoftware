function CambiarFuente() {
document.body.style.fontFamily = "Lucida Console";
}

function ValidarPassword() {
    let validar_password = document.getElementById('password').value;
    let validar_confirmar = document.getElementById('confirmar').value;
    if (validar_password == validar_confirmar) {
        alert("Gracias por registrarte");
    } else {
        alert("Las contraseñas no coinciden");
    }
}

function MostrarPassword(passwordId,iconId){
    var passwordInput = document.getElementById(passwordId);
    var icon = document.getElementById(iconId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = 'visibility_off';
    } else {
        passwordInput.type = 'password';
        icon.textContent = 'remove_red_eye';

    }
}

