//función que reciba un nombre y devuelva(return) un saludo con el nombre -> Hola {nombre}, bienvenido a kodemia 

//declaración de la función
function saludar(nombre){
    return `Hola ${nombre}, bienvenida a Kodemia`  //si quiero que la función me duevuelva el string tengo que ponerle return 
}

//ejecutando la función, con nombre de función y ()
const saludo = saludar('cin');      //crear una variable que este fuera de la función para poder almacenar lo q la función que arroje
                                    //a las funciones si no les mandamos un return regresa undefined
console.log(saludo);

//crear una variable que este fuera de la función para poder almacenar lo q la función que arroje
//a las funciones si no les mandamos un return regresa undefined.



//Funciones anónimas
const sum = function (num1,num2){ //haciendo la declaración de una función y se asigna en una variable 
    return num1 + num2
}
console.log(sum(10,15)); 


//arrow functions      (param1, param3, ...paramN) => {}
const resta = (num1, num2) => {
    return num1 - num2
}
console.log(resta(5,2));


const formatear = word => {
return word.toLowerCase()
}
console.log(formatear('CINTIAAAAAAAAAA'))

//en arrow functions existe el return implícito, si lo que esta ejecutando mi función se puede reducir a una sola línea
const formatear = word => word.toLowerCase()
console.log(formatear('CINTIAAAAAAAAAA'))

