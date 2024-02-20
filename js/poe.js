let contador_corazones = 0;

const añadir_corazon = (event) => { // Añade 'event' como argumento
    if (contador_corazones < 20) {
        const span_corazon = event.target.nextElementSibling.querySelector('span');
        span_corazon.innerHTML += ' ❤️';
        contador_corazones++;
    } else {
        alert('LLegaste al limite maximo de corazones!');
    }
}

const botones_corazon = document.querySelectorAll(".boton_corazon");
botones_corazon.forEach(boton => {
    boton.addEventListener("click", añadir_corazon);
});