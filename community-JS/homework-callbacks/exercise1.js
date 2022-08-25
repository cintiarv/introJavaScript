/**Crear una función map que acepte un array y un callback y que:

-por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

-obtenga el resultado

-lo agregue a un nuevo array

-devuelva el array final con el resultado de cada una de las llamadas al callback. 


const numeros = [1, 2, 3]
salida =  [2, 4, 6]
*/


const numeros = [1,2,3];

function numerosDuplicados (array, callback){
    let newArray = [];
    for(i=0;i<array.length;i++){
        const elementCurrent = array[i];
        const newElement = callback(elementCurrent)
        newArray.push(newElement)
    }
    return newArray;
}

const cb = numero => numero*2;
const duplicar = numerosDuplicados(numeros, cb);


console.log(duplicar);
