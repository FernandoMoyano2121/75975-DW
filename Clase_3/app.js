/* =====================================
=     Operacion de coalicion nula (??)    =
===================================== */
/* 1. **`false`**
2. `0` (el número cero)
3. `-0` (el número negativo cero)
4. `0n`(el BigInt cero)
5. `""` (una cadena vacía)
6. `null`
7. `undefined`
8. `NaN` (Not a Number) */

// Solicitamos al usuario que ingrese su nombre
let nombreUsuario = prompt("Ingresa tu nombre de usuario:");

// Usamos el nullish coalescing para darle un nombre por defecto si el usuario no ingresa nada
let nombreFinalUsuario = nombreUsuario ?? "Usuario Anónimo";

console.log(`Bienvenido, ${nombreFinalUsuario}!`);

/* =====================================
=      Operador Lógico OR              =
===================================== */

let nombre = ""; // Un string vacío, que es falsy
let nombrePredeterminado = "Usuario Anónimo";

let nombreFinal = nombre || nombrePredeterminado;

console.log(nombreFinal); // Salida: "Usuario Anónimo"

/* =====================================
=               Funciones                =
===================================== */

const saludo = "Hola como estás?";
console.log(saludo);

function saludar() {
  console.log("¡Hola estudiantes!");
}

/* =====================================
=          Ejemplo suma básica          =
===================================== */

let num1 = 9;
let num2 = 8;
const resultado = num1 + num2;
console.log(resultado);

/* =====================================
=           Mejor con funcion         =
===================================== */

function sumarNumeros() {
  num1 = 7;
  num2 = 9;
  resultado = num1 + num2;
  console.log(resultado);
}
//El resultado es impreso por consola pero nunca es devuelto.

sumarNumeros();

/* =====================================
=        Funcion con parametros        =
===================================== */

//Con parametros es decir Dinámico
function sumarNumeros(num1, num2) {
  const resultadoDeLaSuma = num1 + num2;
  console.log(resultadoDeLaSuma);
}

sumarNumeros(9, 8);

//El metodo se ejecuta solo cuando se llama

/* =====================================
=          Ejemplo calculadora         =
===================================== */

function calculadora(primerNumero, segundoNumero, operacion) {
  switch (operacion) {
    case "+":
      return primerNumero + segundoNumero;
    case "-":
      return primerNumero - segundoNumero;
    case "*":
      return primerNumero * segundoNumero;
    case "/":
      return primerNumero / segundoNumero;
    default:
      return 0;
  }
}

console.log(calculadora(10, 5, "*"));

/* =====================================
=            Scope global/local            =
===================================== */

let miNombre = "John Doe"; // variable global

function saludar() {
  let miNombre = "Juan Coder"; // variable local
  console.log(miNombre);
}

//Accede a nombre global
console.log(miNombre); // → “John Doe”
//Accede a nombre local
saludar(); // → “Juan Coder”**

/* =====================================
=   🎗️Simulador de aplicacion de tareas  =
===================================== */
/*Bienvenida al Usuario
  Menú de Opciones:
  Funcionalidades del Menú:
- Opción 1 – Ingresar una Nueva Tarea:
    - Solicitar al usuario que ingrese una tarea mediante **`prompt()`**.    
    - Asignar un **número secuencial** a cada nueva tarea.
    - Almacenar la tarea en una **lista acumulativa** que se actualizará con cada entrada.    
- Opción 2 – Ver Mis Tareas:
    - Mostrar un **listado numerado** con todas las tareas ingresadas hasta el momento.
    - Si no hay tareas registradas, debe mostrar el mensaje: "No tienes tareas pendientes".
- Opción 3 – Salir:
	- Finalizar el programa y mostrar un **mensaje de despedida**.
	
 Validación de Entrada:
- Si el usuario ingresa una opción inválida, debe mostrarse el mensaje: */

/* =====================================
=  📌Solucion con estructuras de control  =
===================================== */

/* alert("Bienvenido a la app de tareas!!!");

let opcion = prompt(
  "Ingresa una opcion para continuar\n 1. Inrgesar una nueva tarea\n 2. Ver mis tareas\n 3. Salir\n"
);

let tareas = "";
let numeroTarea = 0;

while (opcion !== "3") {
  if (opcion === "1") {
    let nuevaTarea = prompt("Ingresa una nueva tarea");
    numeroTarea += 1;
    tareas += `${numeroTarea}. ${nuevaTarea}\n`;
  } else if (opcion === "2") {
    if (tareas === "") {
      alert("No tienes tareas pendientes");
    } else {
      alert(`tus tareas son ${numeroTarea}\n${tareas}`);
    }
  } else {
    alert("Ingresa un dato valido");
  }
  opcion = prompt(
    "Ingresa una opcion para continuar\n 1. Inrgesar una nueva tarea\n 2. Ver mis tareas\n 3. Salir\n"
  );
}

alert("Nos vemos luego!!!"); */

/* =====================================
=   📌Éjemplo mejorado con funciones     =
===================================== */

let tareas = "";
let numeroTarea = 0;

function mostrarOpciones() {
  return prompt(
    "Ingresa una opción para continuar:\n 1. Ingresar una nueva tarea\n 2. Ver mis tareas\n 3. Salir\n"
  );
}

function agregarTarea() {
  let nuevaTarea = prompt("Ingresa una nueva tarea");
  if (nuevaTarea) {
    numeroTarea++;
    tareas += `${numeroTarea}. ${nuevaTarea}\n`;
  } else {
    alert("No ingresaste una tarea");
  }
}

function mostrarTareas() {
  if (numeroTarea === 0) {
    alert("No tienes tareas pendientes");
  } else {
    alert(`Listado de tareas\n ${tareas}`);
  }
}

let opcion = mostrarOpciones();

while (opcion !== "3") {
  switch (opcion) {
    case "1":
      agregarTarea();
      break;
    case "2":
      mostrarTareas();
      break;
    default:
      alert("Por favor, ingresa una opcion valida");
      break;
  }

  opcion = mostrarOpciones();
}

alert("Nos vemos luego");
