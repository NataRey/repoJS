// Variables
let edad = 25;
// console.log(edad);
edad = 26;
console.log(edad);
const pais = "Colombia";
console.log(pais);

// tipos de datos primitivos
//String(texto)
let nombre = "Ana";
let mensaje = 'Hola grupo de desarrollo';

console.log(nombre);
console.log(mensaje);

let bienvenida = "Bienvenida "+nombre+" ,tienes " +edad+ " años";
console.log(bienvenida);

console.log(`Bienvenida ${nombre}, tienes ${edad} años`);

/// number (numero)
let precio = 19.99;
let cantidad = 3;

//Boolean (Verdadero o falso)
let esMayorDeEdad = true;
let tieneDescuento = false;

// variables indefinidad o nulas
let variableSinDefinir;
let varibleNula= null;

// OPERADORES ARITMETICOS Y ASIGNACION

let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

let c = "10";
let d = 8;
console.log(c + d);
console.log(c - d);

// asignacion compuesta

let contador = 1;
contador += 5;
//1+5
console.log(contador);


// OPERADORES DE COMPARACION
console.log(5 === "5");//diferente tipo
console.log(5 == "5");// evitemos usar ==
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 9);
console.log(10 <= 9);


// operadores logicos y condicionales

let edadCliente = 17;
let tieneEntrada = true;
let esAcompanado = true;

//  sintaxis
/* if( condicion){
 realice esta accion 
 } else {
    realice esta accion
}*/

if (edadCliente >=18 || tieneEntrada ){
    console.log("Acceso concedido");
}else if(edadCliente < 18 && esAcompanado && tieneEntrada ){
    console.log("Acceso con supervision ");
}else{
    console.log("Acceso denegado");
}




