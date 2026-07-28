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
// crea un sistema que verifique si una persona tiene la edad  mayor o igual a 18 y tiene entrada le muestre un mensaje que diga acceso concedido, si es menor de 18 y tiene entrada vadilar que tenga un acompañante adulto si cumple esto darle entrada con acompañante, si no cumple alguno de los requisitos no se le puede permitir el acceso
let edadCliente = 18;
let tieneEntrada = true;
let esAcompanadoAdulto = true;

//  sintaxis
/* if( condicion){
 realice esta accion 
 } else {
    realice esta accion
}*/

if (edadCliente >=18 && tieneEntrada ){
    console.log("Acceso concedido");
}else if(edadCliente < 18 && tieneEntrada && esAcompanadoAdulto){
    console.log("Acceso con supervision ");
}else{
    console.log("Acceso denegado");
}

/// sintaxis

/* switch (expresion){
    case valor1:
        accion si se cumple
        break;
    case valor2:
        accion si se cumple
        break;
        default: 
        accion si no se cumplio ningun caso   
}
*/

let x = "5";

switch (x){
    case "5":
        console.log("Coincide");
        break;
        default:
            console.log("No coincide");
}
// crea un programa que me muestre las alertas como un semaforo
// si es verde que puede avanzar
// si es amarillo que se prepare para detenerse
// si es rojo que se detenga 
// si no tiene ningun color que salga un mensaje que diga  el semaforo esta descompuesto 

let colorSemaforo = "";

switch(colorSemaforo){
    case "verde":
        console.log("puede avanzar");
        break;

        case "amarillo":
            console.log("preparese para detenerse");
            break;

            case "rojo":
                console.log("detenerse");
                break;

                default:
                    console.log("el semaforo esta descompuesto ");
}

// prompt()
//25 "25"
// texto "texto"




