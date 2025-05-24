/* Input de ingreso de tareas */
const inputTarea = document.getElementById("inputTarea");
const botonAgregar = document.getElementById("botonAgregar");

/* botones de filtrado */
const filtroTodas = document.getElementById("filtroTodas");
const filtroActivas = document.getElementById("filtroActivas");
const filtroCompletadas = document.getElementById("filtroCompletadas");

/* listado de tareas */
const listaTareas = document.getElementById("listaTareas");
const mensajeVacio = document.getElementById("mensajeVacio");
const contadorTareas = document.getElementById("contadorTareas");

/* conjunto de botones */
const botonesFiltro = document.querySelectorAll(".botonFiltro");

//FUNCTION QUE OBTIENE LAS TAREAS DEL STORAGE////////////////////////
function obtenerTareasDelStorage() {
  let tareasEnStorage = localStorage.getItem("tareas");
  if (tareasEnStorage) return JSON.parse(tareasEnStorage);
  else return [];
}

//FUNCION QUE GUARDA LOS ELEMENTOS EN EL STORAGE///////////////////
function guardarTareasEnElStorage(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

/* Array para alamacenar el listado de tareas */
let tareas = obtenerTareasDelStorage();
let filtroActual = "todas";
/* filtro todas marcado como filtro por defecto */
filtroTodas.style.fontWeight = "bold";

//FUNCION QUE AGREGA TAREAS AL LOCAL STORAGE////////////////////
function agregarTarea() {
  /* obtencion del texto ingreesao por el usuario */
  const textoTarea = inputTarea.value.trim();

  if (textoTarea === "") return;

  /* Creacion del objeto tarea */
  const tarea = {
    id: Date.now(),
    texto: textoTarea,
    completada: false,
  };

  /*  añádir tarea en el listado */
  tareas.push(tarea);
  guardarTareasEnElStorage(tareas);

  // Limpiar input
  inputTarea.value = "";
  mostrarTareas();
}

//FUNCTION QUE RENDERIZA EL LISTADO DE TAREAS//////////////////////
function mostrarTareas() {
  /* filtrar tareas */
  let tareasFiltradas = filtrarTareas(tareas, filtroActual);

  // Limpiar lista
  listaTareas.innerHTML = "";
  comprobarCantidadTareas(tareasFiltradas, mensajeVacio);

  tareasFiltradas.forEach((tarea) => {
    const itemTarea = crearListItemTarea(tarea);
    listaTareas.appendChild(itemTarea);
  });
  actulizarContadorTareas(tareas);
}

//FUNCION QUE ACTUALIZA EL CONTADOR/////////////////////////
function actulizarContadorTareas(tareas) {
  const tareasActivas = tareas.filter((tarea) => !tarea.completada).length;
  contadorTareas.textContent = tareasActivas;
}

//FUNCION QUE CREA EL BOTON ELIMINAR////////////////////////////
function crearBotonEliminar() {
  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "Eliminar";

  return botonEliminar;
}

//FUNCION QUE CREAR EL ELEMENTO TEXT////////////////////////////
function crearTextoTarea(tarea) {
  const span = document.createElement("span");
  span.textContent = tarea.texto;
  if (tarea.completada) {
    span.style.textDecoration = "line-through";
  }

  return span;
}

//FUNCION QUE CREAR EL ELEMENTO CHECKBOX/////////////////////
function crearCheckbox(tarea) {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarea.completada;

  return checkbox;
}

//FUNCION QUE CREA EL ITEM DE LA TAREA/////////////////////
function crearListItemTarea(tarea) {
  /* item tarea */
  const itemTarea = document.createElement("li");
  itemTarea.dataset.id = tarea.id;

  const checkbox = crearCheckbox(tarea);
  const texto = crearTextoTarea(tarea);
  const botonEliminar = crearBotonEliminar();

  checkbox.addEventListener("change", () => {
    cambiarEstadoTarea(tarea.id);
  });

  botonEliminar.addEventListener("click", () => {
    eliminarTarea(tarea.id);
  });

  itemTarea.appendChild(checkbox);
  itemTarea.appendChild(texto);
  itemTarea.appendChild(botonEliminar);

  return itemTarea;
}

//FUNCION PARA CAMBIAR EL ESTADO DE LA TAREA///////////////////
function cambiarEstadoTarea(id) {
  const idNum = Number(id);
  tareas = tareas.map((tarea) => {
    if (tarea.id === idNum) {
      return { ...tarea, completada: !tarea.completada };
    }
    return tarea;
  });
  guardarTareasEnElStorage(tareas);
  mostrarTareas();
}

//FUNCION QUE ELIMINAR UNA TAREA///////////////////////////
function eliminarTarea(id) {
  const idNum = Number(id);
  tareas = tareas.filter((tarea) => tarea.id !== idNum);
  guardarTareasEnElStorage(tareas);
  mostrarTareas();
}

//FUNCION QUE FILTRA LAS TAREAS///////////////////////////
function filtrarTareas(tareas, tipoDeFiltro) {
  if (tipoDeFiltro === "activas") {
    return tareas.filter((tarea) => !tarea.completada);
  } else if (tipoDeFiltro === "completadas") {
    return tareas.filter((tarea) => tarea.completada);
  }

  return tareas;
}

//FUNCION PARA COMPROBAR LA CANTIDAD DE TAREAS///////////////////
function comprobarCantidadTareas(tareasFiltradas, mensaje) {
  if (tareasFiltradas.length === 0) {
    mensaje.style.display = "block";
    if (tareas.length === 0) {
      mensaje.innerHTML = "<p>No hay teareas pendientes. !Añade una nueva!</p>";
    } else {
      mensaje.innerHTML =
        "<p>No hay tareas que coicidan con el filtro seleccionado</p>";
    }
  } else {
    mensaje.style.display = "none";
  }
}

//BOTON QUE MUESTRA TODAS LAS TAREAS/////////
filtroTodas.addEventListener("click", () => {
  filtroActual = "todas";
  mostrarTareas();
});

//BOTON QUE MUESTRA LAS TAREAS ACTIVAS/////////
filtroActivas.addEventListener("click", () => {
  filtroActual = "activas";
  mostrarTareas();
});

//BOTON QUE MUESTRA LAS TAREAS COMPLETADAS/////////
filtroCompletadas.addEventListener("click", () => {
  filtroActual = "completadas";
  mostrarTareas();
});

botonAgregar.addEventListener("click", agregarTarea);
mostrarTareas();
