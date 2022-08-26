//Callbacks
/**
 Funciones pasadas como argumentos de otras funciones
 Podemos trabajar con funciones como si guerasn cualquier otro tipo de valoer
 */

 function calculadora(num1, num2, callback){ //declarando 3 parámetros, no necesariamente tiene q llamarse callback
    return callback(num1, num2);   //le pasaré una función como argumento, retornamos la ejecución de la funcion que nos estan pasando con los valores q nos estan pasando
 }                                     //mandar a ejecutar esa func (Callback) en algun momento

let suma = (num1, num2) => num1+num2; //arrow function 

suma()

console.log(calculadora(10, 10, suma)); //ejecución de la función calc agregandole una función(callback)
// la referencia suma ya sabe que hacer con que valores


//forma array func
let calculadora = (num1, num2, callback) => callback(num1,num2);

let suma = (num1, num2) => num1+num2;
console.log(calculadora(10, 10, suma)); 

//crear una función q reciba 4 funciones dif (como parámetros) y las ejecute en orden
//1 función padre con 3 hijas

let padre = (hijo1, hijo2, hijo3) => {  //declarando como arrow function, hijo1, 2 y 3 solo van a existir en este scope 
    hijo1();
    hijo2();                  //funcionas para ejecutar
    hijo3();
};

let funcion1 = () =>{
    console.log('función hijo1') //variable q tiene de referencia una funcion, instrucciones envueltas en una función 
}
let funcion2 = () =>{
    console.log('función hijo2') //estos 3 hijos son callbacks de la función padre 
}
let funcion3 = () =>{
    console.log('función hijo3')
}
padre(funcion1, funcion2, funcion3)//mandando a ejecutar padre



//HACER UNA ENSALADA 
let hacerEnsalada = (contenedor, verduras, cuchillo, lavarVerduras, cortarVerduras, mezclarVerduras) => {
    /**
     1contenedor
     2verduras
     3cuchillo
     lavar verduras
     cortartlas
     mezclarlas
     */
    //QUÉ DEBO HACER
    let verdurasLimpias = lavarVerduras(verduras);  //nos permite agrupar el código los callback 
    let verdurasCortadas = cortarVerduras(cuchillo, verdurasLimpias);
    let ensalada = mezclarVerduras(contenedor, verduras);

    return ensalada;
}

//ahora, ¿cómo lo hago? -> definiendo las acciones
//CÓMO DEBO DE HACERLO
 let verduras = ['lechuga', 'col', 'tomate'];

 let lavar = (algo) => {
    console.log(`Lavando...${algo}`) //cómo se lavan las verduras
    return 'verduras limpias'
 }
 let cortarVerduras = (cuchillo, algo) => {
    console.log(`cortando con el ${cuchillo}...${algo}`) //cómo se cortan las verduras
    return 'verduras cortadas'
 }
 let mezclarVerduras = (contenedor, algo) => {
    console.log(`Mezclando dentro del ${contenedor}...${algo}`) //cómo se memzclan las verduras
 }

 hacerEnsalada('tupperware', verduras, 'marcacuchillo', lavar, cortarVerduras, mezclarVerduras)//ejcutando función, pasando la referencia de como se tienen que hacer dichas acciones
 

 
 }
//cuadno pedimos info sera una accion asincrona 
let personas = [{
    nombre:'cin', //transformar cada uno de los objetos y persear. recorriendo arreglo con for in for each, yendo persona x persona diciendole q dato quiero obteenr y que quiero hacer con el 
    edad: 13
},{
    nombre:'fer',
    edad: 20
}];

//término parsear, te piden datos específicose
function parsearPersonas(personas){
    let personasParseadas = []//parseadas = transormadas
    let count = 0; //en cada iteración necesito que en las
    for (let persona of personas){
        personasParseadas[count] = {nombre: persona.nombre, sexo: 'masculino'} //traera un nuevo arreglo con el objeto que yo le pedi 
        count++;
    }
    return personasParseadas;
}
console.log(parsearPersonas(personas));


function solicitarDatos(hacerAlgoRespuesta){ //cuando respondan nosotros haremos una acción (función) con la respuesta
    //mandar msj a tu ex 
    let respuesta = 'Yo también te extraño';
    hacerAlgoRespuesta(respuesta); //si no hay respuesta que pasa? 
}

function hacerAlgoRespuesta(){
    console.log('bloqueada'); 
}


function mandarMsjALaEx(hacerAlgoRespuesta){ //cuando respondan nosotros haremos una acción (función) con la respuesta
    //mandar msj a tu ex 
    let respuesta = 'Yo también te extraño';
    if(respuesta !== undefined){ //si si te responde 
    hacerAlgoRespuesta(respuesta); // hacer algo 
    } 
}

function hacerAlgoRespuesta(){
    console.log('bloqueada');  //bloquearla 
}
mandarMsjALaEx(hacerAlgoRespuesta);




//aplicando un callback
function mandarMsjALaEx(hacerAlgoRespuesta){ //cuando respondan nosotros haremos una acción (función) con la respuesta
    //mandar msj a tu ex 
let callback = () => {
    let respuesta = 'Yo también te extraño'; 
    if(respuesta !== undefined){ //si si te responde 
    hacerAlgoRespuesta(respuesta); // hacer algo 
    }; }
    setTimeout(callback, 5000) //no. de milisegundos que esperaremos para ejecutar el callbak, LA FUNCIÓN SE EJECUTARA EN 10 SEGUNDOS!!
}

function hacerAlgoRespuesta(respuestaDeMiEx){
    console.log(`bloqueada ${respuestaDeMiEx}`);  //bloquearla 
}
mandarMsjALaEx(hacerAlgoRespuesta);

//hay dos callbacks en la función uno es hacerAlgo respuesta q q    le pertenece ala función y el otro es ''calback' que le pertenece a settimeout

