/* =====================================
=      Declaracion de Variables         =
===================================== */

let miNombre;
let miApellido;
let miEdad;

/* =====================================
=   Inicializacion de Variables        =
===================================== */

//(Se declara y se le asigna un valor en el mismo proceso)

let miNombre2 = "Fernando"; //el signo "=" indica asignación
let miApellido2 = "Moyano";
let miEdad2 = 15;

/* =====================================
=      Palabras reservadas             =
===================================== */

/*

break / case / catch / continue

default / let / delete / do / while / else / finally / if /

in / instanceof / new / return /switch / this / throw / try

typeof / var / void / while / with /

*/

/* =====================================
=         Tipos de datos                =
===================================== */

//Primitivos__

// string  ==> Compuesto por uno o mas caracteres definido entre comillas

let miCadena = "Fernando";
console.log(typeof miCadena);

// number    ==> Valor numerico entero o decimal

let miNumber = 32;
console.log(typeof miNumber);

// boolean   ==> true / false

let miBoolean = true;
console.log(typeof miBoolean);

/* null   ==> Valor especial que se utiliza para
 indicar la ausencia
intencional de un objeto o valor. */

let myNull = null;
console.log(typeof myNull);

/* undefined ==>  Representa una  variable no ha sido asignada o que no tiene un valor definido. */

let myUndefined;
console.log(typeof myUndefined);

/*symbol    ==>  Representa un identificador único e inmutable 
que se puede utilizar como clave para propiedades de objetos. */

/*NaN   ==>  Se utiliza para indicar que un valor no es un número 
válido según las reglas de aritmética de JavaScript. */

console.log(typeof myNAN);

/* Aquí está el punto clave: aunque NaN significa Not-a-Number,
NaN es considerado un valor especial dentro del tipo de dato
number en JavaScript. es por eso que devuelve number */

//COMPUESTOS

/* object   ==> Representa una colección de propiedades y 
valores ,tienen propiedades y metodos */

let myObject = {};
console.log(typeof myObject);

/* array   ==> []  Se utiliza para almacenar y manipular una colección
ordenada de elementos. Un array puede contener cualquier
tipo de dato,los elementos se separan por comas. */

let myArray = [];
console.log(typeof myArray);

/* El operador typeof en JavaScript está diseñado para devolver
 el tipo primitivo de un valor. */

/* En JavaScript, los arrays son un tipo especial de objeto. De hecho,
cualquier array es una instancia de la clase Array, pero sigue siendo
considerado un objeto en su naturaleza fundamental. */

console.log(Array.isArray(myArray)); // true

/* Function ==> (){} Las funciones en JavaScript son objetos de
 primera clase, lo que significa que se pueden asignar a
variables, pasar como argumentos a otras funciones,
devolver como valores de otras funciones y almacenar en estructuras de datos. */

const myFunction = () => {};
console.log(typeof myFunction);

// Arroja function - un tipo especial de object

/* bigin ==>     Permite trabajar con números enteros de
 cualquier tamaño sin pérdida de precisión. */

let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber);

/* =====================================
=        Operadores Aritméticos        =
===================================== */

// Suma: +

// Resta: -

// Multiplicación: *

// División: /

// Módulo (resto de la división): %

// Incremento: ++

// Decremento: --

/* =====================================
=       Operadores de Asignación        =
===================================== */

//Adición asignación +=

//Resta asignacion -=

//multiplicacion asignacion *=

//Divisón asignación /=

let x = 10; // Asignación básica (=)
x += 5; // Equivalente a: x = x + 5;
x -= 2; // Equivalente a: x = x - 2;
x *= 3; // Equivalente a: x = x * 3;
x /= 2; // Equivalente a: x = x / 2;

console.log(x); // Muestra el resultado final

/* =====================================
=         Operadores Lógicos            =
===================================== */

//AND lógico: &&

//OR lógico: ||

//NOT lógico: !

console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

/* =====================================
=         operadores Relacionales       =
===================================== */

//Igual a: ==

//No igual a: !=

//Estrictamente igual a: ===

//Estrictamente no igual a: !==

//Mayor que: >

//Menor que: <

//Mayor o igual que: >=

//Menor o igual que: <=

console.log(10 > 5); // true
console.log(3 < 1); // false
console.log(8 >= 8); // true
console.log(6 <= 4); // false
console.log(7 == 7); // true
console.log(5 != 5); // false

/* =====================================
=        Operaciones Aritméticas       =
===================================== */

let numeroA = 10;
let numeroB = 20;
let numeroC = 60;

let resultadoDeLaSuma = numeroA + numeroB;
console.log(resultadoDeLaSuma);

let resultadoDeLaResta = numeroC - numeroA;
console.log(resultadoDeLaResta);

let resultadoDeMultiplicacion = numeroC * numeroB;
console.log(resultadoDeMultiplicacion);

/* =====================================
=      Operaciones con cadenas         =
===================================== */

let palabra1 = "Yo soy";
let palabra2 = "Alumno de Coder";
let frase1 = "";

frase1 = palabra1 + palabra2;

//Con el operador + puedo concatenar palabras(strings)

/*
### PROMPT()

 La función prompt() en JavaScript es una función integrada
(built-in-function) que se utiliza para mostrar un cuadro de diálogo al
usuario y solicitarle que ingrese un valor. Es una función que se utiliza
principalmente en aplicaciones web para obtener la entrada del usuario
de manera interactiva. 

 El cuadro de diálogo que se muestra mediante prompt() contiene un
campo de entrada de texto donde el usuario puede escribir su respuesta
y dos botones, "Aceptar" y "Cancelar". El usuario puede escribir un valor
en el campo de entrada y luego hacer clic en "Aceptar" para confirmar o en
"Cancelar" para cancelar la operación. 

*/

let nombre = prompt("Por favor ingresa tu nombre");
alert(nombre);

let nombre6 = prompt("Por favor ingresa tu nombre");
console.log(typeof nombre6);

let edad = prompt("Por favor ingresa tu edad");
console.log(edad);

/**
 * Prompt() ==> siempre devuelve una cadena de texto (string), lo podemos
comprobar a través del operador typeof().

Para usar numeros necesitamos parsearlos es decir convertir la cadena a
numeros enteros o decimales respectivamente.
 * 
 */

/* =====================================
=           Sin parseInt()             =
===================================== */

let numeroF = prompt("Ingresa el primer numero ");
let numeroG = prompt("Ingresa el segundo numero ");

const operacion = numeroF + numeroG;
console.log(operacion);

/* =====================================
=           Con parseInt()              =
===================================== */

let numeroH = prompt("Ingresa el primer numero ");
let numeroI = prompt("Ingresa el segundo numero ");

const resultadoOperacion = parseInt(numeroH) + parseInt(numeroI);
console.log(operacion);
