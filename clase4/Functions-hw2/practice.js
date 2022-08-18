//EJERCICIO1- función que recibe un arreglo y lo devuelve en orden invertido

let arreglo = [1, 2, 3, 4, 5, 6];
 function arregloInverito(arreglo){ //parámetro=array (lo que le meterás a la func)
    for( i=arreglo.length-1 ; i >= 0; --i){   //for i= inicia de la última posición(arreglo.length-1) el for sera hasta que i sea mayor o igual a 0 y en cada vuelta al i se le restara 1 unidad
        console.log(arreglo[i]); //se imprimira en cada 'ronda' la posición de i en este caso se imprime 6, 5, 4 ...
    }
 }
 arregloInverito(arreglo)//se manda llamar la función con el parámetro seleccionado 


//EJERCICIO2 función que recibe un arreglo de números y devuelve el valor más grande que se encuentre en el arreglo
/** pseudocódigo
 * 1 declarar variables arreglo(cualquier arreglo) y auxiliar (referencia para comparar el no. máx posicionarlo en la primera posición arreglo[0])
 * 2 realizar una iteración de i= 1 hasta arreglo.length-1, se inicia de i=1 ya que en la primera posición (0) ya esta ocupada por nuestra var auxiliar
 * 3 si posición actual(arreglo[i]) es mayor a primera posición(auxiliar) 
 *  3.1 entonces auxiliar = arreglo[i]
 * 4 imprimir auxiliar
 * En caso de que si sea mayor ahora el valor a comparar será el de la posición actual[i], por lo tanto al final tendremos el número más alto en la variable auxiliar
*/

let arreglo = [1, 2, 13, 4, 5, 6];
let auxiliar = arreglo[0];
function mayor(arreglo){
for(i = 1 ; i<=arreglo.length-1 ; i++){ //declarando for i iniciara de 1 ya que auxiliar iniciará de la 1era posición haciendo una comparación en cada vuelta contra posición actual(arreglo[i])
    if(arreglo[i]>auxiliar){ //si la posición actual es mayor que la primera posición
        auxiliar = arreglo[i]; //se queda el valor de auxiliar en arreglo[i] para continuar con la iteración 
    }
}
return auxiliar //el return va fuera del for para permitir que realice todas sus iteraciones si se deja adentro solo realiza 1 iteración y devuelve ese resultado solamente 
}
let result = mayor(arreglo);
console.log(result);


//EJERCICIO3 función que pueda contar cuantos elementos de un arreglo son mayores a X valor dado en los parámetros. Algoritmo de burbuja
/**pseudocógido
 1 declara variables arreglo(arreglo cualquiera) 
 2 realizar una iteración que vaya desde i=0 a i=arreglo.lenght-1
 3 en cada iteración comparar posición actual (arreglo[0]) > X(parámetro de referencia)
 4 si es mayor entonces agregar a contador ++ sino continuar iterando
 5 imprimir contador
 */

 let arreglo = [1, 2, 13, 14, 35, 6];
 function mayores(referencia){
    let cont = 0 ; //se declara variable contador y se inicializa en 0 cada ronda se le sumara 1 si posición actual arreglo[i] es mayor a X
    for( i=0 ; i<= arreglo.length-1 ; i++){ //en la iteración i iniciará desde 0 para recorrer toda la cadena, se evaluará mientras la posición(i) sea menor o igual a ultima posición (arreglo.lenght-1)
        if(arreglo[i]>referencia){
            cont ++
        }
    }
    return cont;
 }
let result = mayores(10);
console.log(result); 



//EJERCICIO4 función que reciba un arreglo de número y regrese la lista de números pares que se encuentren en el arreglo
/**pseudocódigo
1 declarar variable arreglo con cualquier arreglo y variable newarreglo donde se guardaran los valores par del 1er arreglo
2 realizar iteración de i=0 a i=arreglo.lenght-1 (recorre toda la cadena)
3 si el módulo de la división de (arreglo[i])/2 ==0 
 3.1 entonces imprimir número en newArreglo, sino continuar iterando 
   */

let arreglo = [1, 2, 13, 14, 35, 6];
function pares(arreglo){ //se puede poner o no este parámetro en esta ocasión
    let nuevoArregloPar = []; //variable donde se guardaran los elementos que SI cumplan con la condición
    for(i=0 ; i <= arreglo.length-1 ; i++){ //recorriendo toda la cadena 
        if(arreglo[i]%2 == 0){ //si el módulo de la división posición actual(arreglo[i])/2 == 0. Poner siemore strict.equal 
            nuevoArregloPar.push(arreglo[i]); // entonces, agregar ese elemento al nuevoArreglo, sino continuar iterando
        }
    }
    return nuevoArregloPar;
}

let result = pares(arreglo); //guardando el resultado que arroja return 
console.log(result);



//EJERCICIO5 función que pueda contar cuantas veces aparece un elemento dado en los parámetros en un arreglo también dado en sus parámetros
/**pseudocódigo
1 declarar variable arreglo con cualquier arreglo y variable contador = 0 se sumará a menos que la condición se cumpla 
2 realizar iteración de i=0 a i=arreglo.lenght-1 (recorre toda la cadena)
3 si posición actual(arreglo[i]) == X(parámetro de referencia) sino continuar iterando
    3.1 entonces cont++ 
4 imprimir contador 
 */

let arreglo = [1, 2, 3, 3, 5, 6, 3];
let cont = 0;

function elementoRecurrente(referencia){
    for ( i=0 ; i <= arreglo.length-1 ; i++){
        if(arreglo[i] === referencia){ 
            cont++
        }
    }
    return cont
}

let result = elementoRecurrente(3);
console.log(result);

//EJERCICIO6 función que recibe un arreglo de strings y un string, la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra
/**pseducódigo
1 declarar variable arreglo de strings con cualquier strings
2 realizar iteración de i=0 a i=arreglo.lenght-1 (recorre toda la cadena)
3 si posición actual arreglo[i] == X(parámetro, string de referencia)
    3.1 entonces return true 
    3.2 sino return false
4 imprimir resultado que arroje return 
 */

let arreglo = ['hola', 'moon', 'life', 'love', 'nature'];

function stringCool(referencia){
    for (i=0 ; i <= arreglo.length-1 ; i++){
        if( arreglo[i] == referencia ){
            return true;
        }
    }
    return false; // el return false se pone aqui ya que se tiene que hacer todas las iteraciones para ver si no esta el string buscado, si es que no esta sale del ciclo y arroja false
}
let result = stringCool('hola');
console.log(result);

//EJERCICIO7 función que parta un arreglo por la mitad y retorne la segunda mitad del arreglo 
/** pseudocódigo
1 declarar variable arreglo de strings con cualquier strings y var nuevoArreglo=[] donde se añadirán los nuevos elementos
2 realizar iteración de i=arreglo/2 a i=arreglo.lenght-1 (se recorrerá solamente la mitad de al cadena ya que es la de interés)
3 añadir elementos obtenidos en iteración a nuevoArreglo
 */

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nuevoArreglo = [];
let inicio = (arreglo.length-1)/2;
inicio = Math.floor(inicio); //Math.floor -> Función de js para redondear hacia abajo 

function mitad(){
    for ( i= inicio; i <= arreglo.length-1 ; i++ ){
        nuevoArreglo.push(arreglo[i]);
    }
    return nuevoArreglo
}

let result = mitad();
console.log(result);



//EJERCICIO8 función que recibe 3 arreglos, los concatena y regresa un solo arreglo
/**pseudocódigo
1 Declarar 3 variables de arreglo con 3 arreglos cualquiera y una variable que contenga el nuevo arreglo
2 realizar 3 iteraciones de i=0 a i=arreglo.lenght-1 (recorre toda la cadena)
3 agregar los elementos obtenidos(de los 3 arreglos) aa la variable nuevoArreglo
4 imprimir nuevoArreglo
 */

let arreglo1 = [1, 2, 3];
let arreglo2 = [4, 5, 6];
let arreglo3 = [7, 8, 9];
let nuevoArreglo =[];

function arreglos(){
    for( i=0; i<=arreglo1.length-1; i++ ){
        nuevoArreglo.push(arreglo1[i])
    }
    for( i=0; i<=arreglo2.length-1; i++ ){
        nuevoArreglo.push(arreglo2[i])
    }
    for( i=0; i<=arreglo3.length-1; i++ ){
        nuevoArreglo.push(arreglo3[i])
    }
    return nuevoArreglo;
}

let result = arreglos();
console.log(result);


//EJERCICIO 9 función que pueda crear n elementos de la serie de fibonacci donde n esta dado por el argumento de la función 
/** psedocódigo
1 declarar variable serieFib = 0 y declarar variable auxiliar 
2 realizar una iteración donde 

 */ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

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
        if(str[i] == str[i].toUpperCase()){  //si el caracter de la posición actual stri[i] == al caracter de la posición actual en mayúscula
            return true;
        }
    } 
    return false; //return fuera del ciclo for para que no interrumpa su ejecución 
}

let result = mayus('lUis');
console.log(result);

//EJERCICIO 11 función que recibe un string y retorna true si la palabra dada es un palíndromo y false si no lo es 
/**pseudocódigo 
1 definir variable 
2realizar 2 iteraciones una de adelante prim posición a ultima y otra de ultima a primera
3 si el resultado de las dos iteraciones son iguales 
    3.1 imprimir true
    3.2 sino false
 */

let str = 'sals'
let nuevoStr1 = '';
let nuevoStr2 = '';

function palindromo(str){
    for(i=0 ; i<=str.length-1 ; i++){
        nuevoStr1 = nuevoStr1+str[i]
        console.log(nuevoStr1)
    } 
    for(i=str.length-1 ; i>=0 ; i--){ //declaración de cuando va de la últ a la 1era posición 
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
    str = str.replace(/ /g, ''); //quita los espacios del string 
    for(i=str.length-1 ; i>=0 ; i--){ //declaración de cuando va de la últ a la 1era posición 
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
str = str.split(' '); //función de js que separa por palabras la oración junta 
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




