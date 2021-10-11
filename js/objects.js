
const product1 = new Object ({

    nombre:'MultiA',
    valor: 5000,
    date: 0,
    unidad: 000,

})

const product2 = new Object ({

    nombre:'MultiS',
    valor: 6000,
    date: 0,
    unidad: 000,
    


})


console.log(product1);

console.log(product2);


const serial1 = (unidad) => {

    product1.date = Date() 

    product1.unidad = unidad

}

const serial2 = (unidad) => {

    product2.date = Date()

    product2.unidad = unidad

}

serial1(54);

serial2(67);



console.log(product1);

console.log(product2);





