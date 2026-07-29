// // /**Array: Es una lista ordenada de elementos, cada elemento tiene una posicion (indice), y inicia desde 0  se define con []*/
// // //             0  1   2   3 
// // let numeros = [18,25, 30, 42];
// // //                0         1       2
// // let frutas = ["manzana", "pera","banano"];

// // /**Objeto: Es una colecion de datos organizados por pares clave y valor (propiedades). No depende de un orden numero sino de nombres descriptivos y este se define con {} */

// // let usuario = {
// //  // clave    valor  
// //     nombre: "Pepito", 
// //     edad: 28, 
// //     ciudad: "Bogota"
// // };

// // let producto = {
// //     precio : 1000,
// //     nombre : "taza", 
// //     peso : "150gr",
// //     disponible : true
// // };

// // let listaMascotas = [];

// // listaMascotas[0] = prompt ("Ingresa el nombre de la primera mascota");
// // listaMascotas[1] = prompt ("Ingresa el nombre de la segunda mascota");
// // listaMascotas[2] = prompt ("Ingresa el nombre de la tercera mascota");
// // listaMascotas[3] = prompt ("Ingresa el nombre de la cuarta mascota");
// // listaMascotas[4] = prompt ("Ingresa el nombre de la quinta mascota");

// // console.log(listaMascotas);

// /// metodos arrays

// // /*push() agregar uno o mas elementos al final de una array*/

// // let juguetes =["avion", "pelota", "raqueta"];
// // console.log(juguetes);
// // juguetes.push("carro","patines");
// // console.log(juguetes);

// // /*pop() elimina el ultimo elemento del array*/

// // let quitarUltimo = juguetes.pop();
// // console.log(juguetes);

// // /**unshift() agregar uno o mas elementos al inicio de una array  */
// // juguetes.unshift("bate","muneca");
// // console.log(juguetes);

// // /**shift() elimina el primer elemento del array*/
// // juguetes.shift();
// // console.log(juguetes);

// /**splice() me permite cambiar el contenido agregando, quitando,o actualizando */

// //! 1 quitar
// // 1.1 desde donde quiero empezar a quitar (indice)
// //                   0         1     2       3         4
// let miCanasta = ["maNZana", "pera","Uvas", "banAna", "kiwi"];
// const miCanastaMinuscula = miCanasta.map(fruta => fruta.toLowerCase());
// console.log("mi canasta en minuscula es:  "+miCanastaMinuscula)

// console.log(miCanasta);
// // let frutasQuitadas = miCanasta.splice(2);
// console.log(miCanasta);
// //1.2 cuantos quiero quitar desde esa posicion
// // frutasQuitadas = miCanasta.splice(1,3);
// // console.log(miCanasta);

// //! 2 agregar 
// //1.1 desde donde quiero empezar a agregar
// //1.2 CERO (0)para no quitar nada
// //1.3 los datos que quiero agregar 

// // miCanasta.splice(2,0,"fresa", "mango");
// // console.log(miCanasta);

// //! actualizar 
// //1.1 desde donde empiezo 
// //1.2 cuantas quiero quitar 
// //1.3 las que voy a agregar 

// // let frutasReemplazadas = miCanasta.splice(1,2,"lulo","pina","fresa");
// // console.log(miCanasta);

// /**sort() organiza los elementos de manera alfabetica */
// miCanasta.sort();
// console.log(miCanasta);

// let listaNumeros = [10,2,25,5,1];
// listaNumeros.sort();
// console.log(listaNumeros);
// //1 10 2 25 5

// listaNumeros.sort(function(a,b){
//     return a-b;
//     //1 - 10 = -9
//     //1      10
//     //10 -2 = 8
//     //2   10
//     //10 -25 = -15
//     //10      25
//     //25 - 5 = 20
//     //5
//     //5 -10 =-5
     
// });

// console.log(listaNumeros);
// listaNumeros.sort(function(a,b){
//     return b-a
// });
// console.log(listaNumeros);

// let texto = "pRuEBA NUMERO uno";

// let textoMinuscula = texto.toLowerCase();
// console.log(textoMinuscula);

// let textoMayuscula = texto.toUpperCase();
// console.log(textoMayuscula);

// // reverse  inviertye los datos de un array
// let numeros = [ 100,99,98];
// numeros.reverse();
// console.log(numeros);

// //filter() crea un array que pasa por todos los elementos que pasan el filtro

// let rangosEstudiantes = [
//     {nombre:"ADRIANA SÁNCHEZ CANGREJO", rango:"intermedio",edad:25},
//     {nombre:"ANDRÉS FELIPE CORTÉS FAJARDO", rango:"principiante",edad:20},
//     {nombre:"BRAYAN MAURICIO TRIANA SOLARTE", rango:"avanzados",edad:19},
//     {nombre:"DIEGO HERNAN GALVIS SANTOS", rango:"intermedio",edad:30},
//     {nombre:"ERIK SANTIAGO CANTOR NIÑO", rango:"avanzados",edad:15}
    
// ];

// let intermedios = rangosEstudiantes.filter(function(estado){
//     return estado.edad === 20;
// });
// console.log("Los que son intermedios " , intermedios);

// /**map()crea otro array von el resultado de la funcion que yo indique 
//  */

// let puntuacionesExamen = [80,45,90,60,70];

// console.log(puntuacionesExamen);

// let mensaje = puntuacionesExamen.map(function(puntuacion){
//     if(puntuacion >= 60){
//         return " Aprobo con " +puntuacion;
//     }else {
//         return " Reprobado con " +puntuacion;
//     }
// });

// console.log(mensaje);

// /**find() encontrar el primer elemento que cumpla con el parametro  */

// let primerRangoEncotrado = rangosEstudiantes.find(function(estado){
//     return estado.rango === "avanzados";
// });

// console.log("el primer estudiante con el rango avanzado es ", primerRangoEncotrado);


// //! FUNCIONES

function saludar(){
    alert("Hola bienvenidos a la clase");
}

saludar();

// pedir a un usuario que ingrese un precio y que nos devuelva ese precio total con iva incluido

function calcularIva (precio){
    const iva = precio * 0.19;
    return precio + iva;
}

const precioNumero = parseInt(prompt("Ingrese el precio del producto sin iva "));

const total = calcularIva(precioNumero);
alert(`El precio total con iva es $ ${total}`);
console.log("Precio ingresado "+ precioNumero + " y el total calculado es: "+total);













