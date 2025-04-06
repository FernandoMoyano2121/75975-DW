/* const miArray = ["Fernando", 89, true, false]; */
/* =====================================
=          Acceso a elementos          =
===================================== */

console.log(miArray);
console.log(miArray[0]);
console.log(miArray[1]);
console.log(miArray[2]);
console.log(miArray[3]);

/* =====================================
=         Recorrido de array            =
===================================== */

for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}

/* =====================================
=    Recorrido de array for of        =
===================================== */

for (const elemento of miArray) {
  console.log(elemento);
}

/* =====================================
=               metodo push()            =
===================================== */

miArray.push("Juan");
console.log(miArray);

/* =====================================
=               metodo pop()             =
===================================== */
miArray.pop();
console.log(miArray);

/* =====================================
=               Unshift()                =
===================================== */

miArray.unshift("Pedro");
console.log(miArray);

/* =====================================
=               Shift()                =
===================================== */

miArray.shift();
console.log(miArray);

/* =====================================
=               splice()                =
===================================== */

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

const nombres = ["fernando", "Juan", "Pedro", "MAtias", "Gonzalo"];

const porcionDeNombres = nombres.slice(0, 3);
console.log(porcionDeNombres);

nombres.splice(1, 3);
console.log(nombres);

/* =====================================
=               join()                =
===================================== */
const miArray = ["Fernando", 89, true, false];

const nuevoArray = miArray.join("-");
console.log(nuevoArray);

/* =====================================
=               inludes()                =
===================================== */

const existe = miArray.includes("Fernando");
console.log(existe);

/* =====================================
=               indexOf                =
===================================== */

const indice = miArray.indexOf(90);
console.log(indice);

/* =====================================
=               Objetos                =
===================================== */

let nombre = "Juan";
let edad = 35;
let direccion = "Santa Rosa";

const Usuario = {
  nombre: "Juan",
  edad: 35,
  direccion: "Santa Rosa",

  datospersonales: {
    telefono: 31231,
    email: "fernando@email",
  },
};

console.log(Usuario.direccion);
console.log(Persona["nombre"]);

console.log(Usuario.datospersonales.telefono);
console.log(Usuario["datospersonales"]["telefono"]);

/* =====================================
=         funcion constructora         =
===================================== */

class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  presentarse() {
    return `Hola soy ${this.nombre}`;
  }
}

const persona1 = new Persona("Pedro", 32, "Santa Julia");
const persona2 = new Persona("Fernando", 46, "Arturo ");
console.log(persona1.presentarse);
console.log(persona2);
