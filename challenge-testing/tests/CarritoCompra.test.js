const CarritoCompra = require("../index")

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it('debe inicializarse con un carrito vacío', () => {
    expect(carrito.carrito).toEqual([]);
  });

  it('debe agregar productos al carrito', () => {
    const producto = { nombre: 'Camisa', precio: 20 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito.length).toBe(1);
    expect(carrito.carrito[0]).toEqual(producto);
  });

  it('debe calcular el total correctamente', () => {
    const producto1 = { nombre: 'Camisa', precio: 20 };
    const producto2 = { nombre: 'Pantalón', precio: 30 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toBe(50);
  });

  it('debe aplicar un descuento correctamente', () => {
    const producto1 = { nombre: 'Camisa', precio: 20 };
    const producto2 = { nombre: 'Pantalón', precio: 30 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    const totalConDescuento = carrito.aplicarDescuento(10); // 10% de descuento
    expect(totalConDescuento).toBe(45);
  });

});
