//FOR Dejara de repetirse hasta que la evualuación sea false

let frutas = ['manz', 'plat', 'fresa', 'sandía']; //lenght=3, ult posición= 4
let indice = 0;

function imprimirFrutas(frutas){
    for(let i=0; i <= frutas.length -1; i++){ //inicia en 0 se detiene hasta que indice= la impresión de el producto en su ultima posiciómn
        console.log(frutas[i]);
    }  
}

imprimirFrutas(frutas);


//FOR IN, recorre propiedades/llaves ennumerables de un objeto 
let person={ //asignando objeto
    nombre: 'aldo',
    edad: 32,
    sexo: 'fem',
};
for(const llave in person) {
    console.log(person[llave]);  //console.log(personal['nombre']), llave representa nombre de la propiedad llave es variable tipo string, forma de acceder aun objeto de tipo string es con []
}

//dos formas de acceder a un objeto
let obj = {
    name: 'cin',
}
obj.name  //opción 1
obj[name]  //opción 2



//FOR OF  en cada iteración tendremos acceso a los valores iterados 

let frutasCool = ['manz amarilla', 'plat', 'fresa roja', 'sandía']; //lenght=3, ult posición= 4
let indice = 0;

for(const fruta of frutasCool) {
    console.log(fruta); //no tengo que agregar una condición de paro, fruta=valor 
}