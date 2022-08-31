//Generar una funcion que retorne la palabra(parametro) al reves reverseString('hola') // returns 'aloh'

function reverseString (word) {
    let newStr = '';
for(let i=word.length-1 ; i>=0 ; i--){
        elementoActual = word[i];
        newStr += elementoActual;
    }
    return newStr;
}

let result = reverseString('hola');
console.log(result);