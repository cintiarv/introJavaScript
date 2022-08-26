//inmemdiatly invoked function expression
//normal
const sayHi = () =>{
console.log('cin')
}
sayHi();

//utilizando iife, encuelta con paréntesis en vez de nombrarla
(() => {
    console.log('hola')
})();

(function () {
    console.log('hola')
})();

