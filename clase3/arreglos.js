//Generando un arreglo con n cantidad de frutas
let frutas = []; //iniciar el arreglo con un arreglo vacío
let indice = 0;

function comprarFrutas(nombreFruta) {
    frutas[indice] = 'nombreFruta'; //en la posición 0 del arreglo frutas voy a posicionar esta variable
    indice++; //valor incremental para que en indice se vaya incrementando 1
}

comprarFrutas('manzana'); //mandando a llamar la función
comprarFrutas('fresa');
comprarFrutas('uva');
comprarFrutas('');

console.log(frutas);








let frutas = []; //iniciar el arreglo con un arreglo vacío
let indice = 0;

frutas[0] = 'fruta1';
frutas[1] = ['frutaPodrida1', 'frutaPodrida1'] //simulando un matriz numérica 
frutas[2] = 'fruta2';
frutas[3] = 'fruta2';
frutas[4] = false;
frutas[5] = 'ult posición';

console.log(frutas);

function comprarFrutas(nombreFruta) {
    frutas[indice] = 'nombreFruta'; //en la posición 0 del arreglo frutas voy a posicionar esta variable
    indice++; //valor incremental para que en indice se vaya incrementando 1
}

comprarFrutas('manzana'); //mandando a llamar la función
comprarFrutas('fresa');
comprarFrutas('uva');
comprarFrutas('piña');
console.log(frutas.length)
console.log(frutas[frutas.length - 1 ]) //arroja el valor de frutas en la ultima posición de la cadena (lenght-1)




let nombre = 'cin'
console.log(nombre.length) //para saber longitud de cadena 

//pregunta entrevista técninca
let frutas [1, 2, 3]
console.log (frutas[frutas.length])
 //UNDEFINED

 const arreglo = [1,2,3];
 arreglo[0]='String';



const verduras = new Array(2) //Para generar arreglos 
console.log(verduras);