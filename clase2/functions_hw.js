let nombre = 'Cintia';

function setNombre(param){
nombre = param
}
console.log(nombre);
setNombre('Fer');
console.log(nombre);
setNombre('Nico');
console.log(nombre);
nomyapellido('Ruiz')
console.log(nombre);


function nomyapellido(apellido){
    nombre=nombre +' '+ apellido
}


function esPar(num){
    if(num%2 == 0){
        return true;
    } else{
        return false;
    }    
}

function esPar2(num){
    return num%2 == 0;
}
 
let result = esPar(3);
console.log (result)

let result2 = esPar2(24);
console.log(result2)