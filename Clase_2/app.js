/* =====================================
=   Estructura de control condicional   =
===================================== */

if (condicion) {
  // Bloque de código que se ejecuta si la condición es
  //verdadera es decir TRUE
} else {
  // Bloque de código que se ejecuta si la condición es
  //falsa es decir FALSE
}

/* =====================================
=               Ejemplo 1               =
===================================== */

let numero = 10;

if (numero > 0) {
  console.log("El número es positivo.");
}

/* =====================================
=            Ejemplo 1.1                =
===================================== */

let nombre = prompt("Ingresa tu nombre:");

if (nombre) {
  alert(`Hola, ${nombre}!`);
}

/* =====================================
=               ejemplo 2                =
===================================== */
/* Que devuelven los botones del prompt?

- aceptar devuelve una cadena vacía = "" 
- cancelar devuelve null
- En el caso de no realizar el parseo en el pedido puedo hacerlo despues generando una nueva variable.


Al utilizar el isNaN negado lo que hacemos es comprobar si el valor es un numero

!isNaN(nombre): Comprueba si el valor ingresado es un número
 La función isNaN() devuelve true si el valor no es un número
  por lo tanto, al usar !isNaN(nombre), estamos verificando
   si nombre ES un número. */

let nombre1 = prompt("Por favor ingresa tu nombre");

if (nombre1 === "" || nombre1 === null || !isNaN(nombre1)) {
  alert("Ingresa un dato valido");
} else {
  alert(`tu nombre es ${nombre1}`);
}

/* =====================================
=   Trabajando con numeros sin parseInt =
===================================== */

let edad = prompt("Por favor ingresa tu edad");
console.log(typeof edad);

if (edad === null || edad === "" || isNaN(edad)) {
  alert("Debes ingresar un dato valido");
} else if (edad < 18) {
  alert("Eres menor de edad, vuelve luego");
} else {
  alert(`tu edad es ${edad} Bienvenido al sistema!!!`);
}

//Parseo para convertir lo ingresado en un numero como tal
edadParseada = parseInt(edad);
console.log(typeof edadParseada);

/* ===========================================
=     Trabajando con numeros con ParseInt     =
============================================ */

/* Con solo colocar el isNaN dentro del if es suficiente 
ya que al usar el parseInt en el primer caso (boton aceptar)
se intenta parsear un string vacio lo cual retorna isNaN
y al querer parsear un null (boton cancelar) retorna isNaN */

let edad2 = parseInt(prompt("Por favor ingresa tu edad"));
//let edadJubilacion = 65;

if (isNaN(edad2)) {
  alert("Por favor ingresa un dato valido");
} else if (edad2 < 18) {
  alert("Eres menor de edad vuelve luego");
} else {
  alert(`Tienes ${edad2} años, Bienvenido al Sistema!!!!`);
  //alert(`te quedan ${edadJubilacion - edad} para jubilarte`);
}

/* =====================================
=          Else if anidados            =
===================================== */

let nombre2 = prompt("Por favor ingresa tu Nombre");

// Validar el nombre ingresado

if (nombre2 === "") {
  console.log("Debes ingresar un nombre válido.");
} else if (!isNaN(nombre2)) {
  console.log("El nombre no puede ser un número.");
} else if (nombre2.length < 3) {
  console.log("El nombre debe tener al menos 3 caracteres.");
} else {
  console.log("Tu nombre es " + nombre2 + ".");
}

/* =============================================
=    Ejemplo de else if con las estaciones del año =
=============================================== */

let mes = prompt("indica el numero de mes en el que te encuentras");

let estacion;

if (mes === 12 || mes === 1 || mes === 2) {
  estacion = "verano";
} else if (mes >= 3 && mes <= 5) {
  estacion = "otoño";
} else if (mes >= 6 && mes <= 8) {
  estacion = "invierno";
} else {
  estacion = "primavera";
}

console.log("La estación correspondiente al mes", mes, "es", estacion);

/* ========================================
=   Estructura "for" tabla de multiplicar   =
=========================================== */

let miNumero = parseInt(prompt("Por favor ingresa un numero"));

for (let i = 1; i <= 10; i++) {
  let tabla = miNumero * i;

  alert(`El numero ${miNumero} multiplicado por ${i} es ${tabla}`);
}

/* =====================================
=          Sentencia Break             =
===================================== */

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    break;
  }

  alert(i);
}

/* =====================================
=          Sentencia Continue          =
===================================== */
/* Cuando se encuentra la palabra clave continue
 dentro de un ciclo for, el programa salta al siguiente
valor de la variable de control y comienza una nueva
iteración sin ejecutar las instrucciones que le siguen. */

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  }

  alert(i);
}
//Si la variable i es 5, no se interpreta la repetición

/* =====================================
=               While                =
===================================== */

while (condición) {
  //bloque de código a repetir
  //actualización de la condición
}

let repetir = true;

while (repetir) {
  console.log("Al infinito y...¡Más allá!");
}

/* =====================================
=     Ejemplo Ludico While resolción    =
===================================== */

// Generamos un número secreto aleatorio entre 1 y 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentosRestantes = 3; // El jugador tiene 3 intentos

// Iniciamos el bucle para los intentos
while (intentosRestantes > 0) {
  // Pedimos al usuario que ingrese un número
  let intentoUsuario = prompt("Adivina el número secreto (entre 1 y 10):");

  // Convertimos la entrada a un número
  intentoUsuario = parseInt(intentoUsuario);

  // Verificamos si la entrada es válida
  if (isNaN(intentoUsuario)) {
    alert("Por favor, ingresa un número válido.");
    continue; // Si la entrada no es un número, seguimos pidiendo el número
  }

  // Comprobamos si el número ingresado es correcto
  if (intentoUsuario === numeroSecreto) {
    alert("¡Felicidades! Adivinaste el número secreto.");
    break; // Termina el juego si el usuario adivina el número
  } else {
    intentosRestantes--; // Restamos un intento
    alert(`No acertaste. Te quedan ${intentosRestantes} intentos.`);
  }

  // Si ya no quedan intentos
  if (intentosRestantes === 0) {
    alert(`Se acabaron tus intentos. El número secreto era: ${numeroSecreto}`);
  }
}

/* =====================================
=  Ejercicio Ludico con Switch case     =
===================================== */
let opcion = 0; // Inicializamos la opción en 0

// El bucle se ejecuta mientras la opción sea distinta de 5
while (opcion !== 5) {
  // Mostrar el menú de opciones
  opcion = parseInt(
    prompt(`
    Menú de Operaciones:
    1. Sumar
    2. Restar
    3. Multiplicar
    4. Dividir
    5. Salir
    Ingresa el número de la operación que deseas realizar:
  `)
  );

  // Validar que se ingresa un número válido
  if (isNaN(opcion)) {
    alert("Por favor, ingresa un número válido.");
    continue; // Vuelve al inicio del bucle si no es válido
  }

  if (opcion >= 1 && opcion <= 4) {
    // Pedir dos números al usuario
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
      alert("Por favor, ingresa solo números válidos.");
      continue;
    }

    let resultado;

    // Evaluar la opción seleccionada
    switch (opcion) {
      case 1:
        resultado = num1 + num2;
        alert(`El resultado de la suma es: ${resultado}`);
        break;
      case 2:
        resultado = num1 - num2;
        alert(`El resultado de la resta es: ${resultado}`);
        break;
      case 3:
        resultado = num1 * num2;
        alert(`El resultado de la multiplicación es: ${resultado}`);
        break;
      case 4:
        if (num2 === 0) {
          alert("No se puede dividir entre cero.");
        } else {
          resultado = num1 / num2;
          alert(`El resultado de la división es: ${resultado}`);
        }
        break;
    }
  } else if (opcion === 5) {
    alert("Gracias por utilizar la calculadora.");
  } else {
    alert("Opción no válida. Intenta nuevamente.");
  }
}
