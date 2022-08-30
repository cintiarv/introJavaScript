//generar una funcion que me ayude a eliminar un elemento del arreglo, el arreglo y el elemento a eliminar seran los parametros de esta funcion
// Enjoy JavaScript with ES6 features :)
//removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
//removeFromArray(['aldo', 'annie'], 'aldo'); // should remove 'aldo' and return ['annie']

let numbersArray = [1, 2, 3, 4];

function cleanArray (array, number){
    let newArray = [];
    for(let i=0 ; i < array.length ; i++){
        let elementoActual = array[i];
        console.log(elementoActual);
        if(elementoActual !== number){
            newArray.push(elementoActual)
        }
    }
    return newArray;
}

const result = cleanArray(numbersArray, 1);
console.log(result);



let koders = ['aldo', 'annie', 'aldo'];

function cleanArray (array, name){
    let newArray = [];
    for(let i=0 ; i < array.length ; i++){
        let elementoActual = array[i];
        if(elementoActual !== name){
            newArray.push(elementoActual)
        }
    }
    return newArray;
}

const result = cleanArray(koders, 'aldo');
console.log(result);


