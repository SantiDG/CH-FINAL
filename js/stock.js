
const disp1 = document.getElementById("disp-1")

const disp2 = document.getElementById("disp-2")

let stock1 = 0

let stock2 = 5

const disponibilidad1 = (stock1) => {

    if (stock1 > 0) {

        let dispMsj = document.createElement('p')
    
        dispMsj.innerHTML = `<span style="color:green;">DISPONIBLE<span>`
    
        disp1.appendChild(dispMsj)

    } else {
        let dispMsj = document.createElement('p')
    
        dispMsj.innerHTML = `<span style="color:red;">SIN STOCK<span>`
    
        disp1.appendChild(dispMsj);
    }
}

const disponibilidad2 = (stock2) => {

    if (stock2 > 0) {

        let dispMsj = document.createElement('p')
    
        dispMsj.innerHTML = `<span style="color:green;">DISPONIBLE<span>`
    
        disp2.appendChild(dispMsj)

    } else {
        let dispMsj = document.createElement('p')
    
        dispMsj.innerHTML = `<span style="color:red;">SIN STOCK<span>`
    
        disp2.appendChild(dispMsj);
    }
}



disponibilidad1(stock1);
disponibilidad2(stock2);


/*
console.log(perro)

let itemPerro = document.createElement('p')

itemPerro.textContent = `El nombre del perro es ${perro.nombre}`

listaPerritos.appendChild(itemPerro)
*/