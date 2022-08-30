const myString = 'Every green bus drives fast.';

const lengthWay = myString.charAt(myString.length-2);
console.log(lengthWay);


const atWay = myString.at(-5);
console.log(atWay)


//devoliendo el último caracter de la cadena.  si se usa un número negativo, el carácter devuelto se encontrará contando hacia atrás desde el final de la cadena.
function returnLast(arr) {
    return arr.at(-1);
}


//Retorna un UTF-16 code de cada letra. UTF-16 (16- bit Unicode Transformation Format) is a standard method of encoding Unicode character data
let text = "HELLO WORLD";
let char = text.charCodeAt(0);

console.log(char)


const icons = '☃★♲';

console.log(icons.codePointAt(3));
// expected output: "9733"
