//reemplaza todos los espacios de un string por puntos
let palabra = 'hola soy cin y soy koder';
let arregloDeCaracteres = palabra.replace(/ /gi, '.'); 
console.log(arregloDeCaracteres); 


//función que convierta un string en 2 al partir por la mitad el string original, usando los métodos de String
let palabra = 'que ondas';
let arregloDeCaracteres = palabra.split(' ');
console.log(arregloDeCaracteres); 


//agrega al prototipo de string un método que imprima ese string en consola
const string = 'hola';

String.prototype.toString = () => {
    return this.toString().toUpperCase();
  }

console.log(string.toString());








