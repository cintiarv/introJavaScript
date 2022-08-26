/**
Crear función find()

Crear una función find que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

devuelva el elemento pasado como argumento del primer callback que devuelva true

si ningún callback devuelve true, devuelva undefined 

const numeros = [8, 2, 3, 40, 33, 50, 40]
const multiploDe10 = x => x % 10 === 0
=[40]
 */

const numbers = [8, 2, 3, 40, 33, 50, 40];

function find(array, callback){
    for(i=0; i < array.length ; i++) {
        const elementoRecurrente = array[i];
        const isFound = callback(elementoRecurrente);
        if(isFound){
            return elementoRecurrente;
        }
    }
    return undefined;
}

const cb = (number) =>{
    if(number%10===0){
        return true;
    }
    return false;
}

const multiploDe10 = find(numbers, cb);

console.log(multiploDe10);




const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element%10);

console.log(found);
// expected output: 12
