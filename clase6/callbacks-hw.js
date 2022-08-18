//función que te salude cada dos segundos
setTimeout(() => {          //se ejecuta una sola vez a los 2segundos de correrla
    console.log('hola!')

},2000);


setInterval(() => { //pertenece al objeto global window(setinterval)
    console.log('hola!')    //se ejecuta infinitamente cada 2segundos
}, 2000);


//función que te salude y se ejecute después de 10seg de espera 

setTimeout(() => {          //Te saluda a los 10seg después de correrla
    saludar();
},10000);

console.log('Empezando saludo')

function saludar(){
    console.log('terminando saludo')
}




function llamarFunEnt(callback){
console.log('Empezando función')
setTimeout(() => {
    callback();          
},5000);
console.log('fin de función')
}

let ejecutada = function(){
    console.log('función ejecutada')
}
let cantar = function(){
    console.log('función cantando')
}

llamarFunEnt(cantar)



//resolución en clase 17ago22

window.setInterval(func,delay); //En node no existe window(solo en el navegador) por eso marca como error de referencia. Aquí es 'global'

function saludarCada2s(){
    let func = () => {
        console.log('Hola');
    };
    setInterval(func,2000);
}

saludarCada2s();



function saludar(){
    console.log('holahola');
}
setTimeout(saludar,10000);
