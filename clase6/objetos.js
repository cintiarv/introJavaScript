//un objeto tiene atributos y métodos

let carro = {
    puertas: 4,
    color: 'gris',   //estas 3 son propiedades, cuando reciben valores primitivos se llaman atributos
    electrico: false,
    acelerar: () => {                       //un método es una propiedad que almacena una función, una acción genera una función(acelerar)
        console.log('Estoy avanzando');
    },
}

/* carro.acelerar(); */

let fun = carro.acelerar; //la var fun tendrá la misma posición en memoria que carro.acelerar. se almacena en fun una dirección de memoria hexadecimal #
function recibirCallback(fun){ 
    fun();
}

recibirCallback(fun)


function retornaOtraFuncion(){
    let referencia = () => {; //retornará otra función 
    console.log('cin');

}; return referencia;
}
retornaOtraFuncion()(); //mandando llamar dos funciones al mismo tiempo, 



//función constructora -> funciones para generar objetos
function carro() {
    this.puertas = 0;
    this.color = 'gris';  //this agregar en ste contexto generame una propiedad
    this.electrico = false;
    this.acelerar = () => {
        console.log('Estoy avanzando')
    }
}

let miniCooper = new carro();
console.log(miniCooper);
