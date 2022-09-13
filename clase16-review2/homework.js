// 1-. variables para cada tipo de datos

let number = 8;
let string = 'cin';
let bolean = true;
let nulo = null;
let indefinido = undefined;
let array = [1, 2, 3, 4];
let objeto = {
    sonora: {
        tortillas: 'harina',
        ubicacion: 'norte',
        clima: 50 + ' °C'
    }
}
console.log(objeto)


//2-. variable tipo objeto que represente un auto
let carro = {
    color: 'gris',
    llantas: 4,
    automatico: true,
    marca: ford,
    año: 2020
}

//3-. variable tipo arreglo 
let comidaFav = ['pizza', 'enchiladas', 'chimichangas', 'postres'];


//4-. script que imprima 10 veces el nombre de tu mascota
function ninfa(mascota, n){
    return `${mascota.repeat(n)}`
}

console.log(ninfa('nico ', 10))


//5-. programa que imprima el nombre de una persona siempre y cuando la persona sea mayor de edad sino imprimir 'no tengo permitido usar tus datos'
let person = function(nombre, edad){
    if(edad >= 18){
        console.log(nombre)
    }else{
        console.log('No tengo permitido usar tus datos personales') 
    }
} 

person('cin', 25);


//6-. programa que me ayude a imprimir cada una de las propiedades del sig objeto 

let usuario = {
    nombre: 'Juan',
    edad: 20,
    contraseña: 'password*2022'
}

for(let propiedades in usuario){
    console.log(usuario[propiedades]);
};


//7-. programa que me ayude a imprimir el contenido de un arreglo elemento por elemento 

let frutas = ['fresa', 'kiwi', 'mango', 'melón']

function fruits(array){
    for(let i=0 ; i<array.length ; i++){
        let elementoActual = array[i];
        console.log(elementoActual)
    }
}

fruits(frutas);


//8-.  