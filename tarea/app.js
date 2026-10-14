const formulario = document.querySelector("#formulario");
const nombreTarea = document.querySelector("#nombreTarea");
const lista = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (nombreTarea.value.trim() === "") {
        mensaje.textContent = "Debes escribir una tarea";
        mensaje.style.color = "red";
        return;
    }

    const li = document.createElement("li");
    li.textContent = nombreTarea.value + " ";

    const boton = document.createElement("button");
    boton.textContent = "Eliminar";

    boton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(boton);
    lista.appendChild(li);

    mensaje.textContent = "Tarea agregada correctamente";
    mensaje.style.color = "green";

    formulario.reset();
});
