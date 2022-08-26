const myString = 'Every green bus drives fast.';

const lengthWay = myString.charAt(myString.length-2);
console.log(lengthWay);


const atWay = myString.at(-5);
console.log(atWay)


//devoliendo el último caracter de la cadena.  si se usa un número negativo, el carácter devuelto se encontrará contando hacia atrás desde el final de la cadena.
function returnLast(arr) {
    return arr.at(-1);
}