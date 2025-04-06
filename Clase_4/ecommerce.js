class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarDetalle() {}

  verificarStock() {}
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregarProductos(producto) {
    this.productos.push(producto);
  }

  generarTotal() {
    let total = 0;

    for (let i = 0; i < this.productos.length; i++) {
      total = total + this.productos[i].precio;
    }
    return total;
  }

  mostrarListado() {
    for (let index = 0; index < this.productos.length; index++) {
      const producto = this.productos[index];
      console.log(`- ${producto.nombre} - $${producto.precio}`);
    }
  }
}

const pan = new Producto("Pan", 1000);
const leche = new Producto("Leche", 2000);

const carrito = new Carrito();

carrito.agregarProductos(pan);
carrito.agregarProductos(leche);

carrito.mostrarListado();

const ListadoDeProductos = [
  {
    nombre: "Pan",
    precio: 1000,
  },
  {
    nombre: "Leche",
    precio: 1000,
  },
  {
    nombre: "Tomate",
    precio: 1000,
  },
];
