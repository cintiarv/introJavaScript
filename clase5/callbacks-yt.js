//función que pasa como parámetro de otra función
function mensaje(callback){
 callback();
}
function callback(){
setTimeout( () => this.reqMaq( obj['fkmaqid'] ), 2000 )}
mensaje(callback); //mandando llamar la función con el parámetro callback

//
function fun1(){
    setTimeout( () => console.log('msj1'), 1000 )};
function fun2(){
    console.log('msj2');
};
fun1();
fun2();
//

function cuadradoCallback(value, callback){
    setTimeout(() => {
        callback(value,value*value)
    }, 3000);
}

cuadradoCallback(0,(value, result)=>{
    console.log('inicia callback');
    console.log(`callback:${value}, ${result}`);
});


function miFuncion (callback){
    function callback(){
        console.log('hola')

    };                  //se ejecuta la función dentro de otra función
}

function saludar(){
    console.log('hola')
}
miFuncion(saludar);

//método síncrono en for each
const nums =[1,2,3,4,5];

function recorrer (numero){
    console.log(numero)
}

nums.forEach(recorrer); //si mandas a lamar un callback como argumento no poner paréntesis

//
const nums =[1,2,3,4,5];
function hacerDoble(numero){
    return numero*2
}
const doble = nums.map(hacerDoble) //cuando se retorna se guarda aqui 

console.log(doble)


//ejemplo asíncrono, establece un temporizador setTimeout setInterval

function saludar(){
    console.log('queonda1');
}
setTimeout(saludar, 3000)

//forma anónima 
setTimeout(() => {
    console.log('queonda2');
}, 1000);



const URL = 'cin.com'

function descargar(url, callback){
    console.log(`descargando...  ${url}`)
    setTimeout(() => {
        console.log(`descargado...  ${url}`)
        callback(url);
    }, 3000);
    }

function procesar(archivo){
    setTimeout(() => {
    console.log(`procesando... ${archivo}`)
}, 1000);
}
descargar(URL, procesar);



const URL = 'cin.com'
function descargar(url, callback){
    console.log(`descargando...  ${url}`)
    setTimeout(() => {
        console.log(`descargado...  ${url}`)
        callback(url);
    }, 3000);
    }

descargar(URL, function(archivo){
    console.log(`procesando... ${archivo}`)
})
