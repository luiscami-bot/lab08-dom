# Bitacora de JavaScript interactivo 
Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos. 
Navegador usado: (escribe aqui cual usaste) 
## Ejercicio 2: Seleccionar y modificar el DOM 
| Instruccion | Que cambio en la pantalla | Se mantiene al recargar (Si/No) |
|---|---|---|
| textContent desde la consola | Cambio el titulo a Hola desde la consola | No |
| textContent desde app.js | Cambio el titulo a Hola TECSUP | Si |
| style.color | El titulo cambio a color azul | Si |
| classList.add | El parrafo obtuvo un fondo amarillo | Si |
| createElement + appendChild | Se agrego JavaScript a la lista | Si |
## Ejercicio 3: Evento click 
| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|---|---|---|
| click | Hacer un clic en el boton | 1 |
| dblclick | Hacer doble clic en el boton | 1 |
| mouseover | Pasar el mouse sobre el boton | 1 |
## Ejercicio 4: Eventos input y submit 
| Prueba | Que paso en la pantalla | Se recargo la pagina (Si/No) |
|---|---|---|
| Escribir en el campo nombre | El saludo cambio mientras escribia mi nombre | No |
| Enviar sin preventDefault | Aparecio Enviado por un momento y desaparecio | Si |
| Enviar con preventDefault, correo sin @ | Aparecio un mensaje de error en rojo | No |
| Enviar con preventDefault, correo con @ | Aparecio Enviado junto con el correo ingresado | No |
## Ejercicio 5: Clases y objetos 
| Objeto | nombre | precio | descripcion() | conDescuento(0.25) |
|---|---|---|---|---|
| laptop | Laptop | 2500 | Laptop - S/ 2500.00 | 1875.00 |
| mouse | Mouse | 45 | Mouse - S/ 45.00 | 33.75 |
| teclado | Teclado | 120 | Teclado - S/ 120.00 | 90.00 |
## Ejercicio 6: DOM, eventos y objetos juntos
| Prueba | Total que muestra la pagina | Correcto (Si/No) |
|---|---|---|
| Cuaderno 12.50 | S/ 12.50 | Si |
| + Lapicero 3.20 | S/ 15.70 | Si |
| + Mochila 89.90 | S/ 105.60 | Si |
| Sin Number() | No muestra un total valido, aparece un error en consola | No |

| Pieza | Linea de tu codigo donde aparece | Para que sirve |
|---|---|---|
| DOM | document.querySelector("#total") | Selecciona el elemento donde se muestra el total |
| Evento | formProducto.addEventListener("submit", (evento) => { | Detecta cuando se envia el formulario |
| Objeto | const producto = new Producto(prodNombre.value, Number(prodPrecio.value)); | Crea un producto con su nombre y precio |
