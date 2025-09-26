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
        this.items = this.items.filter(item => item.producto !== producto);
    }

    calcularTotal() {
        return this.items.reduce(
         (total, item) => total + (item.producto.precio * item.cantidad),
        0
        );
    }

    mostrarCarrito() {
       if (this.items.length === 0) {
            console.log("El carrito está vacío.");
            return;
        }
        
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
