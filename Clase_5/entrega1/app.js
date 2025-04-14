const tareas = [
  {
    id: 1,
    nombre: "Estudiar",
    prioridad: "alta",
  },
  {
    id: 1,
    nombre: "Programar",
    prioridad: "Media",
  },
];

function cargarTareas() {
  const tareasGuardadas = localStorage.getItem("tareas");
  if (tareasGuardadas) {
    return JSON.parse(tareasGuardadas);
  }
  return [];
}

function guardarTareas(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function mostrarTareas(tareas) {
  if (tareas.length === 0) {
    alert("No hay tareas registradas");
    return;
  }
  let mensaje = "Listado de tareas:\n";

  for (let i = 0; i < tareas.length; i++) {
    mensaje += `Tarea: ${tareas[i].nombre} Proiridad: ${tareas[i].prioridad}\n`;
  }
  alert(mensaje);
}

function agregarTarea(tareas) {
  const nombre = prompt("por favor ingresa el nombre de la tarea");
  const id = prompt("Ingresa un id para la tarea");
  const prioridad = prompt("Ingresa una prioridad (alta, media, baja)");

  const nuevaTarea = {
    id: id,
    nombre: nombre,
    prioridad: prioridad,
  };
  tareas.push(nuevaTarea);
  guardarTareas(tareas);
  alert("Tarea agregada con exito");

  if (!localStorage.getItem("tareas")) {
    guardarTareas(tareas);
  }
}

const tareasCargadas = cargarTareas();
mostrarTareas(tareasCargadas);
agregarTarea(tareasCargadas);
