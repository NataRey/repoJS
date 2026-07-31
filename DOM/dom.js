//DOM
/**Document (nodo raiz)
 * |-- html (elemento)
 *      |-- head (elemento)
 *      |    |-- title (elemento)
 *      |--body (elemento)
 *           |--h1 (texto)
 */

let etiquetaTitulo = document.getElementById("titulo");
const elementoParrafo = document.getElementById("descripcion");

etiquetaTitulo.textContent = "Bienvenidos a DOM";
etiquetaTitulo.style.color = 'blue';
elementoParrafo.textContent = "Aprende a usar Dom"
const inputNombre = document.getElementById("campoNombre");
const titulo = document.getElementById("titulo");
const valorIngresado = inputNombre.value;

titulo.textContent = "usuario " + valorIngresado.toUpperCase();










