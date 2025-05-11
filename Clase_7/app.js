/* acceso al documento */
console.log(document);

/* acceso al body */
console.log(document.body);

/* Acceso al nodo texto */
console.log(document.body.textContent);

/* Enlace por medio del selector class */

const divClass = document.getElementsByClassName("div");
console.log(divClass);

/* Enlace por medio del etiqueta */
const divTag = document.getElementsByTagName("div");
console.log(divTag);

/* Enlace por medio del id */
const divId = document.getElementById("div");
console.log(divId);

/* Accediendo al nodo texto */
console.log(divId.textContent);

/* Agregando clase css dinamica */
divId.classList.add("color-fondo", "espaciado");

console.log(divId.parentNode);

/* =====================================
=     Demo 1  Seleccion y modificaion       =
===================================== */
const parrafo = document.querySelector("demo:nth-child(2), p");

document
  .getElementById("modificarTexto")
  .addEventListener("click", function () {
    parrafo.textContent = "texto modificado con Javascript";
  });

document
  .getElementById("agregarFormato")
  .addEventListener("click", function () {
    parrafo.innerHTML = "Texto con <strong>formato</strong>";
  });

document.getElementById("cambiarEstilo").addEventListener("click", function () {
  parrafo.style.color = parrafo.style.color === "blue" ? "black" : "blue";
  parrafo.style.fontWeight =
    parrafo.style.fontWeight === "bold" ? "normal" : "bold";
});

const body = document.getElementById("body");

document.getElementById("toggleClase").addEventListener("click", function () {
  body.classList.toggle("highlight");
});

/* =====================================
=   Demo 2  Crear y eliminar elementos      =
===================================== */

const contenedor = document.getElementById("contenedor");

document.getElementById("crearElemento").addEventListener("click", () => {
  const nuevoParrafo = document.createElement("p");
  nuevoParrafo.textContent = "Nuevo Parrafo " + contenedor.children.length;
  nuevoParrafo.style.color = "green";

  contenedor.appendChild(nuevoParrafo);
});

document.getElementById("eliminarElemento").addEventListener("click", () => {
  if (contenedor.children.length > 1) {
    contenedor.removeChild(contenedor.lastChild);
  } else {
    alert("No hay elementos para eliminar");
  }
});

/* =====================================
=     Demo 3 Eventos Básicos            =
===================================== */
const colorBox = document.getElementById("colorDemo");

document.getElementById("cambiarColor").addEventListener("click", function () {
  colorBox.style.backgroundColor = generarColorAleatorio();
});

function generarColorAleatorio() {
  const letras = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letras[Math.floor(Math.random() * 16)];
  }
  return color;
}

let seguimientoActivo = false;

document
  .getElementById("mostrarCoordenadas")
  .addEventListener("click", function () {
    seguimientoActivo = !seguimientoActivo;
    this.textContent = seguimientoActivo
      ? "Desactivar Seguimiento"
      : "Activar Seguimiento del Mouse";
  });

document.addEventListener("mousemove", function (e) {
  if (seguimientoActivo) {
    document.getElementById(
      "coordenadas"
    ).textContent = `Posición del mouse: X=${e.clientX}, Y=${e.clientY}`;
  }
});
