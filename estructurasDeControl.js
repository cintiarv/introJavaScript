if (true){
    console.log('El valor es V')
}

let loggeado = true;
let tarjetadecredito = false;

if(loggeado && tarjetadecredito){
    console.log('Puede revisar su detalle de la tarjeta');
} else if(loggeado === false && tarjetadecredito){
    console.log('El usuario no esta loggeado o no tiene tarjeta de credito')
}

let paso = 1;
switch (paso){
case 1:
    console.log('Datos personales');
    break;
case 2:
    console.log('Datos academicos');
    break;
default: //else
    console.log('Aún no hay datos que llenar');
}


let resultado = numero1>numero2;
switch(resultado){
    case true:
        console.log('El numero 1 es mayor')
        
}