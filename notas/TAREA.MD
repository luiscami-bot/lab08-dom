# Tarea: Mi componente interactivo

## Componente elegido

Elegí crear una lista de tareas para organizar mis
actividades pendientes usando JavaScript.

## Version 1: solo DOM

Agregué una lista donde se muestra una tarea.
Utilicé JavaScript para crear el elemento desde el DOM.

```js
const lista = document.querySelector("#listaTareas");
const tarea = document.createElement("li");
tarea.textContent = "Estudiar JavaScript";
lista.appendChild(tarea);
```

¿Por qué? Para aprender a crear elementos con JavaScript.

Resultado: apareció una tarea en la página.

## Version 2: con eventos

Agregué un formulario y botones para agregar
y eliminar tareas sin recargar la página.

```js
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    if (nombreTarea.value.trim() === "") {
        mensaje.textContent = "Debes escribir una tarea";
        return;
    }

    const li = document.createElement("li");
    li.textContent = nombreTarea.value;

    const boton = document.createElement("button");
    boton.textContent = "Eliminar";

    boton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(boton);
    lista.appendChild(li);
    formulario.reset();
});
```

¿Por qué? Para permitir que el usuario agregue y elimine tareas.

Resultado: la página empezó a responder a las acciones
del usuario.

## Version 3: con clases y objetos

Creé la clase Tarea con los atributos nombre y completada.
Agregué un buscador y botones para completar o eliminar.

```js
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
        }
        return this.nombre + " (Pendiente)";
    }
}

const nuevaTarea = new Tarea("Estudiar", false);
tareas.push(nuevaTarea);
mostrarTareas();
```

¿Por qué? Para organizar mejor los datos de las tareas.

Resultado: ahora puedo agregar, buscar, completar
y eliminar tareas.

## Donde uso DOM, eventos y objetos

| Parte | Codigo | Para que sirve |
|---|---|---|
| DOM | document.createElement("li") | Crea elementos |
| Evento | addEventListener("submit") | Agrega tareas |
| Evento | addEventListener("click") | Completa o elimina |
| Evento | addEventListener("input") | Busca tareas |
| Objeto | new Tarea(nombre, false) | Crea una tarea |

## Pruebas realizadas

| Accion | Resultado esperado | Resultado obtenido | Cumple |
|---|---|---|---|
| Agregar una tarea | Aparece en la lista | Aparece en la lista | Si |
| Agregar vacio | Muestra error | Muestra mensaje | Si |
| Completar tarea | Cambia su estado | Aparece Completada | Si |
| Buscar tarea | Filtra resultados | Muestra coincidencias | Si |
| Eliminar tarea | Desaparece | Se elimina de la lista | Si |

## Por que disene asi mi clase

Diseñé la clase Tarea con los atributos nombre y
completada porque necesitaba guardar el nombre de
cada tarea y saber si ya se terminó. Los métodos
completar y descripcion permiten cambiar el estado
y mostrar la información de una manera sencilla.
