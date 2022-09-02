import * as calculadora from './calcu.js';

const resultadoSuma = calculadora.suma(10,10);
const resultadoResta = calculadora.resta(50,10);
const resultadoMult = calculadora.mult(10,6);
const resultadoPot =calculadora.poten(2,5);
const resultadoDiv = calculadora.div(100,10);



function calcu(resultado1,resultado2,resultado3,resultado4,resultado5,){
    const body = document.querySelector('body');
    const template = 
    `<div class = "d-flex"> 
    <div class = "row mx-auto my-5 justify-content-center"> CALCULADORA
    <div class = "btn btn-outline-primary mt-4 my-3">El resultado de tu suma es: ${resultado1}</div>
    <div class = "btn btn-outline-secondary">El resultado de tu resta es: ${resultado2}</div>
    <div class = "btn btn-outline-success justify-content-center my-3">El resultado de tu multiplicación es: ${resultado3}</div>
    <div class= "btn btn-outline-danger column" >El resultado de tu potencia es: ${resultado4}</div>
    <div class = "btn btn-outline-info column my-3">El resultado de tu división es: ${resultado5}</div>
    </div></div>`
    body.innerHTML += template;

}

calcu(resultadoSuma,resultadoResta,resultadoMult,resultadoPot,resultadoDiv)