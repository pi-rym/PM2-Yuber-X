class CarritoCompra {
    constructor(){
        this.Carrito = [];
    }

    agregarProducto(producto){
        if (typeof producto != "string" || typeof producto != "number" || typeof producto != 'object') return null;
        this.Carrito.push(producto);
    }

    calcularTotal(){
        let total = 0;
        this.Carrito.forEach(producto => {
            total += producto.precio;
        });
        return total;
    }

    aplicarDescuento(porcentaje){
        const total = this.calcularTotal();
        const descuento = (total * porcentaje) / 100;
        return total - descuento;
    }

};


module.exports = CarritoCompra;