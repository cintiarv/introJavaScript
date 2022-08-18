//forma de definir funciones anónimas expresadas

let saludo = function(){ //función anónima 
    console.log('hola');
}

saludo();


let saludo = () => console.log('hola');              //cuando tu función tenga una sola línea de instrucción se pueden quitar las llaves
    saludo();


//recibiendo parámetros en arrow function
let saludo = nombre => console.log(`hola ${nombre}`);      //si tiene un solo parámetro en este caso nombre, se pueden omitir los paréntesis       
    saludo('cin');

//demostrando return implícito
let sumar = function(a,b){ //función común expresiva, 
    return a+b; 
}
 console.log(sumar(8,9));

 //arrow function demostración de return implícito, no es necesario poner return 
  let sumar = (a,b) => a+b;
  console.log(sumar(8,9))


let funcionVariasLineas = () =>{
    console.log('1');
    console.log('2');
    console.log('3');
}
funcionVariasLineas();


let numeros = [1,2,3,4,5];

numeros.forEach(function(el, index)){
    
}