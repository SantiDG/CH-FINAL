const URL_PRODUCTOS = 'db/productos.json'

$("#prod1").click( () => {

    $.getJSON(URL_PRODUCTOS, (response, status) => {

        if (status !== "success") {
            throw new Error("error")
        }

        

        else (response) 

            let Producto = (response.find(producto => producto.id === 1))

            console.log(Producto)

            $("#lista-compras").prepend(`
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${Producto.nombre}</h5>
                        <small> $ ${Producto.precio}</small>
                    </div>
                    <p class="mb-1">${Producto.desc}</p>
                </a>
                
            `)
        }
    )
})


$("#prod2").click( () => {

    $.getJSON(URL_PRODUCTOS, (response, status) => {

        if (status !== "success") {
            throw new Error("error")
        }

        

        else (response) 

            let Producto = (response.find(producto => producto.id === 2))

            console.log(Producto)

            $("#lista-compras").prepend(`
                <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                    <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1">${Producto.nombre}</h5>
                        <small> $ ${Producto.precio}</small>
                    </div>
                    <small class="mb-1">${Producto.desc}</small>
                </a>
                
            `)
        }
    )
})
/*
<a href="#" class="list-group-item list-group-item-action" aria-current="true">
<div class="d-flex w-100 justify-content-between">
    <h5 class="mb-1">List group item heading</h5>
    <small>3 days ago</small>
</div>
<p class="mb-1">Some placeholder content in a paragraph.</p>
<small>And some small print.</small>
</a>

*/