
import saludame, {PI, BETA} from './modulo.js'; //en la importación se puede con el nombre que sea con que la ruta ./ este bien

console.log(PI,BETA);

saludame();  //ejecutarla 


//pasando como argumento 
function despedir(callback){
    callback();
}

despedir(saludame); //pasando función saludame como argumento 



//retornarla dentro de otra función

function pintar (){
    return saludame;
}
pintar()();

//asignarla como valor de una variable

let funcion = saludame;


const buttons = document.querySelector('button');
buttons.forEach(button => button.addEventListener('click', event =>console.log(event)))
/* button.addEventListener('click', () => {// va agrgear un escuchador de eventos, cualquier interacción del usuario
    console.log('me clickeaste'); //detecta lo q hace el usuario 
});

const div = document.querySelector('div'); //cualquier elemento del DOM puede ser clickeado 
div.addEventListener('click', () => {
    console.log('me clickeaste div'); 
}); */