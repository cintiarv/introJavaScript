const string = 'hola';
console.log(string.charAt(0));

//propio método que recorra un arreglo

console.log(String.prototype);

string.prototype.toUpperCase = function(){
    let conversiones = {
        a: 'A',
        b: 'B',
        c: 'C', 
        d: 'D',
    };
};
let stringNuevo='';

for(let i=0;i<this.length;i++){
    let letraMayuscula = conversiones [`${this.charAt(i)}`]
    stringNuevo+=letraMayuscula
}
return arreglo;

let palabra = 'abcd';
let arregloDeCaracteres = palabra.split(' '); //entre parentesis se pone el caracter con el que va a separar los strings
console.log(arregloDeCaracteres); 


let palabra = 'dev.aldo.aldaco@gmail.com';
let dominioCorreo = palabra.split('@')[1]; //separara del arroba para la izq y arroba para la der y se selecciona posición1
let nombreEmpresa = dominioCorreo.split('.')[0];
console.log(dominioCorreo);
console.log(nombreEmpresa);



function Bmw(){
    this.nombre = 'bmw';
}
const miBmw = new Bmw();
console.log(miBmw.nombre);

let persona= {
    nombre:'cin',
}
persona.toString = function(){
    console.log(this.nombre)
}
toString();
console.log(nombre.toString)


[1,0,1,0].reduce((acumulador, actual)=> {

}, [])