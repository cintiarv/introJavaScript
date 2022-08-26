/**
 * Crear función filter()

Crear una función filter que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

SI dicho callback devuelve true, agregar el elemento a un nuevo array

devuelva el array final con los elementos que pasaron el "filtro"

const numeros = [10, 2, 3, 40, 33, 50]
->
filter(numeros, pares) // [10,2 40, 50]
 */

const numbers = [10, 2, 3, 40, 33, 50];

function filter (array, callback){
    let newArray = [];
    for(i=0; i < array.length ; i++){
        const elementoRecurrente = array[i];
        const isValid = callback(elementoRecurrente);
        if(isValid){
            newArray.push(elementoRecurrente);
        }
    }
    return newArray;
}

const cb = number => {  
    if(number%2==0){
        return true;
    }
    return false;
}

const Peers = filter(numbers, cb);

console.log(Peers);


//otra forma 
const numbers = [10, 2, 3, 40, 33, 50];

function filter (array, callback){
    let newArray = [];
    for(i=0; i < array.length ; i++){
        const elementoRecurrente = array[i];
        const isValid = callback(elementoRecurrente);
        if(isValid){
            newArray.push(elementoRecurrente);
        }
    }
    return newArray;
}

const cb = number => {
    return number%2==0;
}

const Peers = filter(numbers, cb);

console.log(Peers);



//utilizando filter 
const numbers = [10, 2, 3, 40, 33, 50];
const result = numbers.filter(numbers => numbers%2==0)
console.log(result);
