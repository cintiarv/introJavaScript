let variableGlobal = 15; //scope global

function saludar(){
    let variableLocal = 10; //scope local 
    console.log(variableGlobal, variableLocal);
}

saludar()


//programación dinámica
let objeto = {
    saludar:function(){
        console.log('hi');
    }
}

objeto ['saludar']() //obteniendo el valor de la función saludar