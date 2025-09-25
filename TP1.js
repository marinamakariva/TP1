'use strict';

class Producto {

    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    mostrarInformacion() {
        return `ID: ${this.id}, ${this.nombre}, Precio: ${this.precio}, Stock: ${this.stock}`;
    }
}

class CarritoDeCompras {

    constructor(items = []) {
        this.items = items;
    }

    agregarProducto(producto, cantidad) {
        this.items.push({ producto, cantidad });
    }
    
    removerProducto(producto) {
        ///TODO
    }

    calcularTotal() {
        ///TODO
    }

    mostrarCarrito() {
        console.log('Contenido actual del carrito:');
        for (const item of this.items) {
            console.log(`${item.producto.mostrarInformacion()}, Cantidad: ${item.cantidad}`);
        }
    }
}

class Cliente {

    constructor(nombre, direccionEnvio, carrito) {
        this.nombre = nombre;
        this.direccionEnvio = direccionEnvio;
        this.carrito = carrito;
    }
    
    realizarCompra() {
        ///TODO
    }
}