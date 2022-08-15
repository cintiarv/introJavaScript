//EJERCICIO1- función que recibe un arreglo y lo devuelve en orden invertido
let arregloStr = ['a', 'b', 'c', 'd', 'e'];
let indice = arregloStr.length;

function imprimirArreglo(arregloStr){
    for(let i=arregloStr.length-1; i >= 0; i--){ //inicia en 0 se detiene hasta que indice= la impresión de el producto en su ultima posiciómn
        console.log(arregloStr[i]);
    }  
}

imprimirArreglo(arregloStr)


//EJERCICIO2 función que recibe un arrgelo de números y devuelve el valor más grande que se encuentre en el arreglo

let arregloEnt = [3, 8, 10, 11, 9, 18, 2];
let auxiliar = arregloEnt[0];

function mayor(arregloEnt){
    for(let i = 1; i<=arregloEnt.length-1 ; i++ ){
        if(arregloEnt[i]>auxiliar){
            auxiliar = arregloEnt[i];
        }  
}
return auxiliar;
}

let result = mayor(arregloEnt);
console.log(result);


//EJERCICIO3 función que pueda contar cuantos elementos de un arreglo son mayores a X valor dado en los parámetros

let arreglo = [3, 8, 10, 11, 9, 18, 2];
function contarMayores(arreglo, X){
    let cont = 0;

    for(let i = 0; i <= arreglo.length-1; i++){
        if(arreglo[i]>X){
            cont++
        }
    }
    return cont;
}

let result = contarMayores(arreglo, 4);
console.log(result);

//EJERCICIO4 función que reciba un arreglo de número y regrese la lista de números pares que se encuentren en el arreglo

let arreglo = [3, 8, 10, 11, 9, 18, 2];

function pares(arreglo){
    let arregloPar = [];
    for(i=0 ;i <= arreglo.length-1 ; i++){
    if(arreglo[i]%2==0){
            arregloPar.push(arreglo[i]);
        }
    }
    return arregloPar
}

let result = pares(arreglo);
console.log(result);
 

//EJERCICIO5 función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros

let arreglo = [3, 8, 8, 8, 9, 8, 2];
function elementoRecurrente(arreglo, X){
    let cont = 0;

    for(let i = 0; i <= arreglo.length-1; i++){
        if(arreglo[i]==X){
            cont++
        }
    }
    return cont;
}

let result = elementoRecurrente(arreglo, 8);
console.log(result);


//EJERCICIO6 función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra

let arreglo = ['cin', 'hola', 'sonora', 'nico', 'cactus'];
function stringdeInteres(arreglo, X){
    let cont = 0;

    for(let i = 0; i <= arreglo.length-1; i++){
        if(arreglo[i]==X){
           return true;
        } 
    }
        return false
}
let result = stringdeInteres(arreglo, 'sonora');
console.log(result);


//EJERCICIO7 función que parta un arreglo por la mitad y retorne la segunda mitad del arreglo 

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mitad(arreglo){
    let segundaMitad = [];
    let inicio = arreglo.length/2;
    inicio = Math.floor(inicio); //Math.floor -> Función de js para redondear hacia abajo 
    for(i= inicio;i <= arreglo.length-1 ; i++){
        segundaMitad.push(arreglo[i]); // .push -> Función de js añade uno o más elementos a la nueva array
    }
    return segundaMitad
}

let result = mitad(arreglo);
console.log(result);

//EJERCICIO8 función que recibe 3 arreglos, los concatena y regresa un solo arreglo

let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
let arreglo3 = [7, 8, 9];


function arreglos(){
    let nuevoArreglo=[]
    nuevoArreglo.push(arreglo1+ ',' +arreglo2 +','+arreglo3)
    return nuevoArreglo
}


let result = arreglos()
console.log(result)

 //correcto

let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
let arreglo3 = [7, 8, 9];

function arreglos(){
    let nuevoArreglo=[];
    for(i=0; i <= arreglo1.length-1 ;i++){
        nuevoArreglo.push(arreglo1[i]);
    }
    for(i=0; i <= arreglo2.length-1 ;i++){
        nuevoArreglo.push(arreglo2[i]);
    }
    for(i=0; i <= arreglo3.length-1 ;i++){
        nuevoArreglo.push(arreglo3[i]);
    }
    return nuevoArreglo
}

let result = arreglos();
console.log(result);








