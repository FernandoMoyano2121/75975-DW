localStorage.setItem("colorFavorito", "Rojo");
localStorage.setItem("colorFavorito", "Azul");

localStorage.setItem("unidad1", "Ingles");
localStorage.setItem("valor1", 5);

console.log(localStorage.length);

const miColor = localStorage.getItem("colorFavorito");
console.log(miColor);

localStorage.removeItem("colorFavorito");

localStorage.clear();

/* =====================================
=            sesion Storage             =
===================================== */
sessionStorage.setItem("unidad1", "Ingles");
sessionStorage.setItem("valor1", 5);

/* =====================================
=               Json                =
===================================== */

const persona = {
  nombre: "Pedro",
  edad: 25,
};

const personaEnJson = JSON.stringify(persona);
console.log(personaEnJson);

const personas = '{"nombre": "Pedro", "edad": 25 }';
const personaComoObjeto = JSON.parse(personas);
console.log(personaComoObjeto);

const frutas = ["manzana", "banana", "kiwi"];
localStorage.setItem("MisFrutas", JSON.stringify(frutas));
