//EJERCICIO1- función que recibe un arreglo y lo devuelve en orden invertido
let arregloStr = ['a', 'b', 'c', 'd', 'e'];
let indice = arregloStr.length;

function imprimirArreglo(arregloStr){
    for(let i=arregloStr.length-1; i >= 0; i--){ 
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
            auxiliar = arreglo[i];
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
    inicio = Math.floor(inicio); 
    for(i= inicio;i <= arreglo.length-1 ; i++){
        segundaMitad.push(arreglo[i]); 
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

//EJERCICIO 9 función que pueda crear n elementos de la serie de fibonacci donde n esta dado por el argumento de la función 

 let serieFib = 0;

 function serieFibonacci(n){
     let tot = 1;
     let ant = ;
     let aux = 0;
     for(i=0; i<=n ; i++){
         aux = tot
       tot = ant + tot;
       ant = aux;
       console.log(tot)
     }
 return tot
 }
 
 let result = serieFibonacci(10);
 console.log(result);
 
 n=5
 
 //EJERCICIO 10 función que recibe un string y regresa false si el string contiene al menos una letra mayúscula 
 function mayus(str){
     for(i=0;i<=str.length-1;i++){
         if(str[i] == str[i].toUpperCase()){  
             return true;
         }
     } 
     return false;  
 }
 
 let result = mayus('lUis');
 console.log(result);
 
 //EJERCICIO 11 función que recibe un string y retorna true si la palabra dada es un palíndromo y false si no lo es 
 
 let str = 'sals'
 let nuevoStr1 = '';
 let nuevoStr2 = '';
 
 function palindromo(str){
     for(i=0 ; i<=str.length-1 ; i++){
         nuevoStr1 = nuevoStr1+str[i]
         console.log(nuevoStr1)
     } 
     for(i=str.length-1 ; i>=0 ; i--){ 
         nuevoStr2 = nuevoStr2+str[i]
         console.log(nuevoStr2)
     }
     if(nuevoStr1==nuevoStr2){
         return true;
     }
     return false;
 } 
 let result = palindromo('sals');
 console.log(result);
 
 
 //optimizando
 let nuevoStr = '';
 
 function palindromo(str){
     str = str.replace(/ /g, ''); 
     for(i=str.length-1 ; i>=0 ; i--){ 
         nuevoStr = nuevoStr+str[i]
         console.log(nuevoStr)
     }
     if(str==nuevoStr){
         return true;
     }   
     return false;
 } 
 let result = palindromo('anita lava la tina');
 console.log(result);
 
 
 //EJERCICIO 12 función que recibe un string con varias palabras y cambia a mayus la primera letra de c/palabra
 
 let arreglo = ['hola', 'moon', 'life', 'love', 'nature'];
 
 function mayus(arreglo){
     for(i=0; i<=arreglo.length-1 ; i++){
         arreglo[i] = arreglo[i][0].toUpperCase() + arreglo[i].substr(1); // 
     }
     return arreglo
 }
 
 let result = mayus(arreglo);
 console.log(result);
 
 
 
 //EJERCICIO 13 función q recibe un string con múltiples palabras y regresa únicamente la palabra más larga de la oración
 
 let str = 'hola comoo estassssss que onda';
 str = str.split(' '); 
 let auxiliar = str[0];
 
 function mayor(str){
     for(let i = 1; i<=str.length-1 ; i++ ){
         if(str[i].length>auxiliar.length){
             auxiliar = str[i];
             console.log(auxiliar)
         }  
     }
 return auxiliar;
 }
 let result = mayor(str);
 console.log(result);
 
 //EJERCICIO 14 
 let arreglo = 'hola comoo estassssss que onda';
 let cont = 0;
 
 function elementoRecurrente(arreglo, referencia){
     for ( i=0 ; i <= arreglo.length-1 ; i++){
         if(arreglo[i] == referencia){ 
             cont++
         }
     }
     return cont
 }
 
 let result = elementoRecurrente(arreglo, 's');
 console.log(result);