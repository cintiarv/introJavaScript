const numbers = [8, 4, 6, 5, 33, 101, 40];

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

const cb = (number) => {
    for(j=2 ; j < number ; j++){ //for para saber si el número es primo. el ciclo va desde 2 hasta el número que entre del array. Si entra el número 5 se divide /2, 3 y 4 como el % sería dif de cero se va hasta el return de true
        if(number%j == 0){
            return false;
        }
    }
    return true; 
}

const esPrimo = find(numbers, cb);

console.log(esPrimo);


//que arroje todos los primos 
const numbers = [8, 17, 6, 5, 33, 101, 40];

function find(array, callback){
    let newArray = [];
    for(i=0; i < array.length ; i++) {
        const elementoRecurrente = array[i];
        const isPrimo = callback(elementoRecurrente);
        if(isPrimo){
            newArray.push(elementoRecurrente);
        }
    }
    return newArray;
}

const cb = (number) => {
    for(j=2 ; j < number ; j++){
        if(number%j == 0){
            return false;
        }
    }
    return true; 
}

const esPrimo = find(numbers, cb);

console.log(esPrimo);


//que encuentre el mayor
const numbers = [8, 4, 6, 5, 33, 101, 40];

function find(array, callback){
    let auxiliar = array[0];
    for(i=1; i < array.length ;i++) {
        const elementoRecurrente = array[i];
        const isMayor = callback(auxiliar, elementoRecurrente);
        if(isMayor){
            auxiliar = elementoRecurrente;
        }
    }
    return auxiliar;
}

const cb = (numRef,number) => {
    console.log(numRef+'--'+number);
    if(number>numRef){
        return true;
    }
    return false;
}

const esPrimo = find(numbers, cb);

console.log(esPrimo);


