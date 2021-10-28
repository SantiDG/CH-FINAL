


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
const getAllProducts = () => {
    return productos;
}

//Metodo para agregar un producto a la lista
const createProducts = (producto) => {
    productos.push(producto)

}

//Crear un nuevo producto con instancia de la clase Producto
const producto1 = new Producto('multiS', 6000, 56)
const producto2 = new Producto('multiA', 5500, 36)



//Agegar un producto a la lista
createProducts(producto1)
createProducts(producto2)

const findOneProd = (nombre) => {

    nombre = nombre.toLowerCase()

    const producto = productos.find(producto => producto.nombre == nombre);

    if (!producto) {
        throw new Error(`No existe ${nombre}`);
    }

    return producto
}


class Descuento {

    constructor(codigo, valor) {

        this.codigo = codigo.toUpperCase()
        this.valor = valor

    }
}

const descuentos = []


//Metodo que retorna la lista de descuentos
const getAllDesc = () => {
    return descuentos;
}

//Metodo para agregar un perro a la lista
const createDesc = (descuento) => {
    descuentos.push(descuento)

}

//Metodo para hallar un perro por nombre
const findOneDesc = (codigo) => {

    codigo = codigo.toUpperCase()

    const descuento = descuentos.find(descuento => descuento.codigo == codigo);

    if (!descuento) {
        throw new Error(`No existe ${codigo}`);
    }

    return descuento
}

//Metodo para eliminar un perro
const remove = (codigo) => {

codigo = codigo.toUpperCase()

const descuento = findOne(codigo)

const index = descuentos.indexOf(descuento)

descuentos.splice (index, 1)

}

//Metodo para modificar perritos

const update = (codigo, valor) =>{

    const descuento = findOne(codigo)
    descuento.valor = valor
    
}


//Paso 1
//Crear un nuevo perro con instancia de la clase Perro
const descuento1 = new Descuento('DIADELAMIGO', 0.8)
const descuento2 = new Descuento('NOMBREINFLUENCER', 0.95)
const descuento3 = new Descuento('FAMILIARDM', 0.50)
const descuento4 = new Descuento('CLIENTEFRECUENTE', 0.85)


//Paso 2
//Agegar un perro a la lista
createDesc(descuento1)
createDesc(descuento2)
createDesc(descuento3)
createDesc(descuento4)

console.log(getAllDesc());
console.log(getAllProducts());


//findOneDesc('DIADELAMIGO');
//findOneProd('multis');

const AplicarDesc = (nombre, codigo) => {

    const producto = findOneProd(nombre)

    let precio = producto.precio

    const descuento = findOneDesc(codigo)

    let valor = descuento.valor

    return (`El precio con descuento seria de ${precio*valor}`)

}

console.log(AplicarDesc('multiA','DIADELAmIGO'));

