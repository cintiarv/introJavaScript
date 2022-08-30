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



//caso 1  [12, 45, 67, 24, 12] -> 12

const numbers = [12, 45, 67, 24, 12] 

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
    if(number%6===0){
        return true;
    }
    return false;
}

const multiploDe6 = find(numbers, cb);

console.log(multiploDe6);


//caso 2 ['Cin', 'Jonatan', 'Fanny', 'Manu'] -> Cin

const koders = ['Cin', 'Jonatan', 'Fanny', 'Manu'] 

function find(array, callback){
    for(i=0; i < array.length ; i++) {
        const elementoRecurrente = array[i];
        const isFound = callback(elementoRecurrente);
        if(isFound){
            return elementoRecurrente;
        }
    }
}

const cb = (koder) =>{
    if(koder == 'Cin'){
        return true;
    }
    return false;
}

const koderCin = find(koders, cb);

console.log(koderCin);


//caso 3
/* [
    {
     name: 'Algoritmos',
     mentor: 'Odoon y Auro'
    },
    {
     name: 'Maquetado',
     mentor: 'Fernanda'
    }, 
    {
     name: 'JavaScript',
     mentor: 'Aldo'
    },
    {
     name: 'React',
     mentor: 'Dani'
    }
  ] -> { name: 'JavaScript', mentor: 'Aldo'} 
*/
const mentors = [
    {
     name: 'Algoritmos',
     mentor: 'Odoon y Auro'
    },
    {
     name: 'Maquetado',
     mentor: 'Fernanda'
    }, 
    {
     name: 'JavaScript',
     mentor: 'Aldo'
    },
    {
     name: 'React',
     mentor: 'Dani'
    }
  ];

function find(object, callback){
    for(i=0; i < object.length ; i++) {
        const elementoRecurrente = object[i];
        const isFound = callback(elementoRecurrente);
        if(isFound){
            return elementoRecurrente;
        }
    }
}

const cb = (mentorObject) =>{
    if(mentorObject.name=='JavaScript' && mentorObject.mentor=='Aldo'){
        return true;
    }
} 

const kodemiaMentors = find(mentors, cb);

console.log(kodemiaMentors);

//sintetizando
const mentors = [
    {
     name: 'Algoritmos',
     mentor: 'Odoon y Auro'
    },
    {
     name: 'Maquetado',
     mentor: 'Fernanda'
    }, 
    {
     name: 'JavaScript',
     mentor: 'Aldo'
    },
    {
     name: 'React',
     mentor: 'Dani'
    }
  ];

function find(object, callback){
    for(i=0; i < object.length ; i++) {
        const elementoRecurrente = object[i];
        const isFound = callback(elementoRecurrente);
        if(isFound){
            return elementoRecurrente;
        }
    }
}

const kodemiaMentors = find(mentors, (m)=>m.name=='JavaScript' && m.mentor=='Aldo');

console.log(kodemiaMentors);

