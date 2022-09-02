
export default function saludar (){  //solo puedes poner un export default en c/script default = por defecto
    console.log('hola mundo')
}


export const PI = Math.PI; //palabra reservada export le decimos q vamos  exportar 'algo' -> se puede nombrar de la forma que quieras
export const BETA = Math.PI*2;



export function sumar(num1, num2){
    return num1+num2;
}

export class Cuadrado {
    constructor(longLado){
        this.longLado = longLado
    }

    calcularArea(){
        return this.longLado * thins.longLado
    }
}


