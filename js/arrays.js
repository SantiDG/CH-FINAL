

class Producto {

    constructor(nombre, precio, unidad) {

        this.nombre = nombre.toLowerCase()
        this.precio = precio
        this.unidad = unidad

 //       const date = date()

    }
}

const productos = []

//Metodo que retorna la lista de productos
const getAll = () => {
    return productos;
}

//Metodo para agregar un producto a la lista
const create = (producto) => {
    productos.push(producto)

}

//Crear un nuevo producto con instancia de la clase Producto
const producto1 = new Producto('multiS', 6000, 56)
const producto2 = new Producto('multiA', 5500, 36)



//Agegar un producto a la lista
create(producto1)
create(producto2)

console.log(productos)



/*
//Metodo para hallar un producto por nombre
const findOne = (codigo) => {

    codigo = codigo.toLowerCase()

    const descuento = descuentos.find(decuento => descuento.codigo == codigo);

    if (!descuento) {
        throw new Error(`No existe ${codigo}`);
    }

    return descuento
}
*/