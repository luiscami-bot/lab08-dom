class Tarea {
    constructor(nombre, completada) {
        this.nombre = nombre;
        this.completada = completada;
    }

    completar() {
        this.completada = !this.completada;
    }

    descripcion() {
        if (this.completada) {
            return this.nombre + " (Completada)";
        } else {
            return this.nombre + " (Pendiente)";
        }
    }
}

const formulario = document.querySelector("#formulario");
const nombreTarea = document.querySelector("#nombreTarea");
const lista = document.querySelector("#listaTareas");
const mensaje = document.querySelector("#mensaje");
const buscador = document.querySelector("#buscador");

let tareas = [];

function mostrarTareas() {
    lista.innerHTML = "";

    const texto = buscador.value.toLowerCase();

    tareas.forEach(function(tarea, indice) {
        if (tarea.nombre.toLowerCase().includes(texto)) {
            const li = document.createElement("li");
            li.textContent = tarea.descripcion() + " ";

            const btnCompletar = document.createElement("button");
            btnCompletar.textContent = "Completar";

            btnCompletar.addEventListener("click", function() {
                tarea.completar();
                mostrarTareas();
            });

            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar";

            btnEliminar.addEventListener("click", function() {
                tareas.splice(indice, 1);
                mostrarTareas();
            });

            li.appendChild(btnCompletar);
            li.appendChild(btnEliminar);
            lista.appendChild(li);
        }
    });
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (nombreTarea.value.trim() === "") {
        mensaje.textContent = "Debes escribir una tarea";
        mensaje.style.color = "red";
        return;
    }

    const nuevaTarea = new Tarea(nombreTarea.value.trim(), false);
    tareas.push(nuevaTarea);

    mensaje.textContent = "Tarea agregada correctamente";
    mensaje.style.color = "green";

    formulario.reset();
    mostrarTareas();
});

buscador.addEventListener("input", function() {
    mostrarTareas();
});
