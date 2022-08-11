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