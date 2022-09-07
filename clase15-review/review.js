let fruta = {
    color: 'roja',
    sabor:'agridulce',
    precio: 56,
    hermana: {
        color: 'rosa',
        sabor:'salada',
        precio: 566,
        hermana: {
            color: 'azul',
            sabor:'amarga',
            precio: 536,
            hermana: {
                color: 'verde',
                sabor:'dulce',
                precio: 516,
                hermana: {
                    color: 'azul',
                    sabor:'nose',
                    precio: 23
                }
            }
        }
    }, 
    meses:[]
}

//forma estática
console.log(fruta.hermana.hermana.hermana.hermana.precio);

//recursión-> función que se manda a llamar dentro de esa misma 

