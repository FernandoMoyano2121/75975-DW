/* function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

console.log(multiplicar(5, 20));

function operar(a, b, fn) {
  return fn(a, b);
}

console.log(operar(5, 20, multiplicar));
console.log(operar(3, 10, sumar)); */

/* =====================================
=               ejemplo2                =
===================================== */

/* function puedeVotar(edad) {
  return edad >= 18;
}

function puedeBeber(edad) {
  return edad >= 21;
}

function validar(edad, fn) {
  return fn(edad);
}

console.log(validar(20, puedeBeber)); */

/* =====================================
=     Funciones de orden superior       =
===================================== */

/* const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element)); */

/* OPCION 1 */
export function miForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}
/* aplicacion */
/* miForEach(array1, function (letra, indice) {
  console.log(`${indice} - ${letra}`);
});
 */
/* OPCION 2 */

/* function miForEach(array, callback) {
  let indice = 0;
  for (const elemento of array) {
    callback(elemento, indice, array);
    indice++;
  }
} */

/* =====================================
=               filter()                =
===================================== */

/* const array = [10, 20, 30, 40];

const nuevosElementos = array.filter((elemento) => {
  return elemento > 10;
});

console.log(nuevosElementos); */

/* function myFilter(array, callback) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      resultado.push(array[i]);
    }
  }
  return resultado;
}

const numeros = [1, 2, 3, 4, 5, 6, 7];

const pares = myFilter(numeros, function (num) {
  return num % 2 === 0;
});
console.log(pares); */

/* =====================================
=               filter() original        =
===================================== */

/* const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result = words.filter((word) => word.length > 6);
console.log(result); */

/* =====================================
=               Ecommerce               =
===================================== */

const productos = [
  { id: 1, nombre: "Laptop", precio: 1200, stock: 5 },
  { id: 2, nombre: "Mouse", precio: 25, stock: 20 },
  { id: 3, nombre: "Teclado", precio: 45, stock: 15 },
  { id: 4, nombre: "Monitor", precio: 300, stock: 7 },
  { id: 5, nombre: "Auriculares", precio: 80, stock: 10 },
];

/* =====================================
=       Mostrar los productos          =
===================================== */

/* function MostrarProductos() {} */
productos.forEach((producto) => {
  console.log(
    `-Nombre: ${producto.nombre} $${producto.precio} stock: ${producto.stock}`
  );
});

/* =====================================
=      filtrado de productos baratos    =
===================================== */

const productosBaratos = productos.filter((producto) => producto.precio < 100);

console.log(`📢📢📢Productos Baratos\n`);
productosBaratos.forEach((producto) => {
  console.log(`Nombre :${producto.nombre} precio: ${producto.precio}`);
});

/* =====================================
=      Mostrar nombres de productos     =
===================================== */

/* function mostrarNombre(){}*/

const nombreProductos = productos.map((producto) => producto.nombre);
console.log("📦Nombres de los productos");
console.log(nombreProductos);

/* =====================================
=               reduce()                =
===================================== */

/* const valorTotalInventario = productos.reduce((acumulador, producto) => {
  return acumulador + producto.precio * producto.stock;
});

console.log(`Valor total del inventario: ${valorTotalInventario}`);
 */

function eliminarProductoPorId(productos, idProducto) {
  return productos.filter((producto) => producto.id !== idProducto);
}

const productosActualizados = eliminarProductoPorId(productos, 3);

console.log(`📃📃📃Listado de productos nuevo`);

productosActualizados.forEach((producto) => {
  console.log(`${producto.nombre} ${producto.precio} ${producto.stock}`);
});

/* =====================================
=               DOM                =
===================================== */

const card = document.getElementById("card");

card.addEventListener("click", () => {
  alert("Hiciste click");
});
