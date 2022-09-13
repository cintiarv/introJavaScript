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
    meses:['enero', 'febrero']
}

//forma estática
console.log(fruta.hermana.hermana.hermana.hermana.precio);
console.log(fruta.meses[1]); //febrero
//recursión-> función que se manda a sfllamar dentro de esa misma 




//cuando tenemos + de un valor q queremos validar 

let jona = 30;

switch(true){
    case (jona>=30):
        console.log('adulto mayor')
        break;
    case (jona>=18):
        console.log(' si pasa')
        break;
    default:
        console.log('no pasa')
}



//ciclos

let nico = 20;
while (nico>=20 && nico<=40){
    console.log('nico es adulto')
    nico += 1
}