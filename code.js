let misProductos = [];

let productos = document.getElementById('result')

class Producto {
    constructor(producto, precio, precioV){
        this.producto = producto;
        this.precio = precio;
        this.precioV = precioV;
    }
}

function guardar(nProducto, pcompra, pventa){
    const nomProduct = document.getElementById(nProducto).value
    const pCompra = document.getElementById(pcompra).value
    const pVenta = document.getElementById(pventa).value

    let productoC = new Producto(nomProduct, pCompra, pVenta);

    misProductos.push(productoC)

    mostrar()

    limpiar()
}


function mostrar(){
    productos.innerHTML = ''

    for (let i = 0; i < misProductos.length; i++) {
        const producto = misProductos[i];
        
        productos.innerHTML = productos.innerHTML + `
            <tr>
                <td>${producto.producto}</td>
                <td>${producto.precio}</td>
                <td>${producto.precioV}</td>
            </tr>
        
        `
    }
}

function limpiar () {
    document.getElementById('formulario').reset()

}