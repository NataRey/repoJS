// // let entrada = prompt("Ingresa el precio del producto");
// // let precio = parseFloat(entrada);
// // alert(precio)
// // alert(typeof precio);

// // let dato = prompt("aceptas el reto? (escribe true para si o false para no)");
// // let aceptoElReto = dato !== null && dato.toLowerCase() === "true";

// // alert("acepto");
// // alert(typeof aceptoElReto );

// /// BUCLES FOR WHILE DO WHILE

// // Bucle for lo usamos cuando nosotros sabemos cuantas veces queremos repetir una accion

// //pedri al usuario que ingrese un numero x y que me muestre la tabla de multiplicar hasta 10

// let numero = parseInt(prompt("Ingrese un numero para ver su tabla de multiplicar hasta el 10 "));

// /**sintaxis
//  * for(declaramos la varible incial; indico hasta donde quiero que llegue; como se vaya incrementando){
//  * realice la accion;
//  * }
//  */

// for(let i = 1; i <= 10; i++)
//     // i = 1; si; 1+1 = 2
//     // i = 2; si; 2+1 = 3
//     // i = 3; si; 3+1 = 4 ......
//     // i = 9; si; 9+1 = 10
//     // i = 10; si ; 10+1 = 11
//     // i = 11; no; no realizo nada y finalizo el bucle 
// {
//     let resultado = numero * i;
//     // 5 * 1 = 5;.....
//     // 5 * 10 = 50;
//     alert(`${numero} X ${i} = ${resultado}`);
//     console.log(`${numero} X ${i} = ${resultado}`);

// }

// while 
// lo usamos cuando no sabemos cunatas veces se va a repetir este depende de que la condicion se cumpla para que se finalice 

/**sintaxis 
 * while ( se cumpla la condicion){
 * realizar accion
 * }
*/

let contador = 1;

while (contador <= 5){
    console.log(`numero ${contador}`);
    contador++;
}

/**mientras 1 <= 5 entonces imprima numero 1 y luego tome 1+1 = 2
 * mientras 2 <= 5 entonces imprima numero 2 y luego tome 2+1 = 3
 * mientras 3 <= 5 entonces imprima numero 3 y luego tome 3+1 = 4
 * mientras 4 <= 5 entonces imprima numero 4 y luego tome 4+1 = 5
 * mientras 5 <= 5 entonces imprima numero 5 y luego tome 5+1 = 6
 * mientras 6 <= 5 ya no se cumple se finaliza el bucle
 */
