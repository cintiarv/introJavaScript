//callbacks -> es la declaración de una función que pasa como parámetro a otra función para ser ejecutada posteriormente 

//declaración de la función 
function irAlSuper(callback){
    console.log('LLendo al super')
    console.log('Llegué al super')
    callback() //ejecutando función avisar
}

function avisar (){
    console.log('Mamá ya llegue!')
}

//ejecutando la función 
irAlSuper(avisar); //pasando la declaración de la función
irAlSuper(avisar()); //se muetsra 1ero ya que se ejecuta 1ero. No hacerlo de esta forma. Error!


//1° Avisar cuando llegue 
//2° Avisar cuando vaya de regreso
//3° Avisar cuando haya llegado a casa

function irAlSuper(callback){
    console.log('LLendo al super')
    console.log('Llegué al super')
    callback('Hola mom, ya llegue al super') 
    console.log('compre la despensa')
    console.log('ya pague')
    callback('mom, ya voy de regreso')
    console.log('Llegué a casa')
    callback('mom, ya estoy en casa')
}

/* function avisar (mensaje) {
    console.log('------')
    console.log(mensaje)
    console.log('------')
}

irAlSuper(avisar)  */


//
irAlSuper((mensaje) => {
    console.log('------')
    console.log(mensaje)
    console.log('------')
})


/**Crear una función map que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

obtenga el resultado

lo agregue a un nuevo array

devuelva el array final con el resultado de cada una de las llamadas al callback.

Ejemplo:
Crear una función map que acepte un array y un callback y que:

por cada elemento del array ejecute el callback pasándole dicho elemento como argumento

obtenga el resultado

lo agregue a un nuevo array

devuelva el array final con el resultado de cada una de las llamadas al callback.

Ejemplo:
const numeros = [1, 2, 3]
const duplicar = (x) => {
     return x * 2
}
map(numeros, duplicar) // [2, 4, 6]
 * 
 */
 
function map (array, callback){                 //Crear una función map que acepte un array y un callback y que:
    let newArray = []                                    
    for(i=0; i<array.length; i++){              //recorriendo el arreglo
        const elementCurrent = array[i];
        const newElement = callback(elementCurrent);               //por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
        newArray.push(newElement)                                  //lo agrega a un nuevo array
    }
    return newArray                                              //devuelva el array final con el resultado de cada una de las llamadas al callback.
}

const numbersArray = [2,5,8,8]

const numberDuplicated = (number) => number*2

const numbersDuplicated = map(numbersArray,numberDuplicated)
const numbersDuplicated2 = map(numbersArray,(number) => number*2)

console.log(numbersDuplicated)
console.log(numbersDuplicated2)


//{} todo lo que este en llaves es un bloque 

function map (array, callback){                 
    let newArray = []                                    
    for(i=0; i<array.length; i++){              
        const elementCurrent = array[i];
        const newElement = callback(elementCurrent);              
        newArray.push(newElement)                                  
    }
    return newArray                                             
}

const numbersArray = [2,5,8,8]

const numbersMinus1 = map(numbersArray,(number) => number-1)

console.log(numbersMinus1)



//['Jonatan', 'Manu', 'Annie', 'Cin'] -> ['J', 'M', 'A', 'C']
function map (array, callback){                 
    let newArray = []                                    
    for(i=0; i<array.length; i++){              
        const elementCurrent = array[i]; 
        const newElement = callback(elementCurrent);              
        newArray.push(newElement)                                  
    }
    return newArray                                             
}

const namesArray = ['Jona', 'Manu', 'Cin', 'Annie']

const nameInitial = map(namesArray,(name) => name[0])

console.log(nameInitial)


// ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva'] -> ['M. C. R.', 'C. R. V.', 'F. P. L.']

let namesArray = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva']
function map (namesArray, callback){                 
    let newArray = []  
    for(i=0; i<namesArray.length; i++){              
        const elementCurrent = namesArray[i].split(' ');
        for(j=0; j<elementCurrent.length;j++){ 
            const newElement = callback(elementCurrent[j]);              
            newArray.push(newElement[0])   
        }                               
    }
    return newArray                                             
}

const nameInitial = map(namesArray,(name) => name[0])

console.log(nameInitial)



let namesArray = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva']
function map (namesArray, callback){   
    let s = ''              
    let newArray = []  
    for(i=0; i<namesArray.length; i++){    
        s = ''          
        const elementCurrent = namesArray[i].split(' ');
        for(j=0; j<elementCurrent.length;j++){ 
            const newElement = callback(elementCurrent[j]); 
            s+= newElement[0]+'. ';              
        } 
        newArray.push(s.trim())                               
    }
    return newArray                                             
}

const nameInitial = map(namesArray,(name) => name[0])

console.log(nameInitial)



//resultado Fer

//combinar 

function map (array, callback){                 
    let newArray = []                                    
    for(i=0; i<array.length; i++){              
        const elementCurrent = array[i]; 
        const newElement = callback(elementCurrent);              
        newArray.push(newElement)                                  
    }
    return newArray                                             
}
const nameInitial = map(namesArray,(name) => name[0])


const koders = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva']

const initials = map(koders, (koder)) => {
    const nameSplitted = koder.split(' ')
    const initials = map(nameSplitted, nameInitial)
    const stringInitials = initials.join(' '); //de un arreglo lo regresa a un string 
    return stringInitials
}

console.log(initials)