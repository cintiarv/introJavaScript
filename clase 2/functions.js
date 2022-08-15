//declarativa (texto1 y 2 -> parámetros )
function generarNombreCompleto(texto1, texto2){ //declarando la función
    console.log(`${texto1} ${texto2}`); //concatenar
}//fin de declaración de mi función

//cuando declaramos funciones con parámetros nosotros tenemos que decirle a la funcion que parámetros utilizaremos 

let nombre = 'cin';
let apellido = 'ruiz';

generarNombreCompleto(nombre, apellido);
//reasignando valor a variables ya declradas para reutilizar el codigo
nombre = 'luis';
apellido = 'fernando';
generarNombreCompleto(nombre, apellido);
nombre = 'fer';
apellido = 'nunez';
generarNombreCompleto(nombre, apellido); //variables se declaran antes de mandar a llamar la función





//expresión, la función se le asigna como valor a una variable
let generarNombreCompleto= function(texto1,texto2){
    console.log(`${texto1} ${texto2}`);  
}
let nombre = 'cin';
let apellido = 'ruiz';

generarNombreCompleto(nombre, apellido);
nombre = 'luis';
apellido = 'fernando';
generarNombreCompleto(nombre, apellido);
nombre = 'fer';
apellido = 'nunez';
generarNombreCompleto(nombre, apellido); 


let total=0;
function agregarACarrito(){
    total++;
}

function imprimirTotal(){
    console.log(total);
}

function agregarCantidadCarrito(cantidad){
    total = total + cantidad;
}


function elimina(){
    total--;
}

function eliminarCantidad(cantidad){
    let res = total - cantidad;
    if(res<0){
        total = 0;
    }else{
        total = res;
    }
}
agregarACarrito();
imprimirTotal();
agregarCantidadCarrito(15);
imprimirTotal();




function multiplicar(num1, num2){
    console.log(num1*num2)
}
multiplicar(4,5); //mandando llamar a la función con sus respectivos parámetros 





function multiplicar(num1, num2){
    let resultado = num1*num2; 
        console.log(`El resultado de la mult es: ${resultado}`);
        return resultado
}
let multiplicacion = multiplicar(10, 5) 




function esMayorQue(numero) {
    return numero > 5;
}
if(esMayorQue(5) === true){
    console.log('es mayor que 5');
}
    else {
        console.log('no es mayor que 5')
    }


    //expresión
    let expresion = function(){
        return true;
    }




    //ejemplo return 
    function suma(a,b){
        return a+b;
    }
    let resultado = suma(5,10); //mandando a llamar la función y guardando return 
    console.log(resultado);


    function discoteca(edad) {
        if (edad < 18){
            return; 
        } else {
            console.log('Que baile');
        }
    }
    
    discoteca(18);
    discoteca(15);