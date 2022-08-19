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

//ejemplo cuando se debe y no utilizar la arrow function
//función normal
const instrumento = {
    nombre: 'guitarra',
    tocar: function(){
        console.log(`${this.nombre} está sonando`)
    }
}
instrumento.tocar();

//arrow funct, en este caso 'this' lo toma como undefined ya que la arrow function se basa en el contexto de declaración es decir, window 
const instrumento = {
    nombre: 'guitarra',
    tocar: () => {
        console.log(`${this.nombre} está sonando`)
    }
}
instrumento.tocar();




let numeros = [1,2,3,4,5,6,7,8,20];

let numerosCuadrados = numeros.map(function(numero) { //la funció map recibe como parámetro una funnción anónima 
    return numero*numero;
});
console.log(numerosCuadrados)

//optimizando con arrowfunct

let numeros = [1,2,3,4,5,6,7,8,20];
let numerosCuadrados = numeros.map(numero =>numero*numero); //map crea un nuevo arregla con las caraceristicas dadas 
console.log(numerosCuadrados)

