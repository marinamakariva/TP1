'use strict';
class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }

  mostrarInformacion() {
    return `ID: ${this.id}, ${this.nombre}, Precio: $${this.precio}, Stock: ${this.stock}`;
  }
}
