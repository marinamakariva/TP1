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
        console.log("Resumen de la compra:");
        this.carrito.mostrarCarrito();
        console.log(`¡Felicitaciones, ${this.nombre}! Tu compra está confirmada. El precio total es ${this.carrito.calcularTotal()}. El pedido será entregado en la dirección: ${this.direccionEnvio}. ¡Gracias por tu confianza!`);
        this.carrito.items = [];
    }
}

// const producto1 = new Producto(1, "Collar Tiffany & Co.", 450000, 100);
// const producto2 = new Producto(2, "Anillo Swarovski", 199000, 5);
// const carrito = new CarritoDeCompras();
// carrito.agregarProducto(producto1, 2);
// carrito.agregarProducto(producto2, 1);
// console.log("Contenido del carrito:");
// carrito.mostrarCarrito();
// console.log("Total de la compra: $" + carrito.calcularTotal());
// const cliente1 = new Cliente("Mark Martínez", "870 Av. Callao", carrito);
// console.log("Cliente: " + cliente1.nombre);
// console.log("Dirección de envío: " + cliente1.direccionEnvio);
// cliente1.realizarCompra();
// carrito.mostrarCarrito();