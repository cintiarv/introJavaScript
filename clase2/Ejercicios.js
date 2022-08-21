// EJERCICIO1

function sumar(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}
let resultadoSuma = sumar(1, 4);
console.log(resultadoSuma);


//EJERCICIO2
function saludo(nombre = "amigo") { // cuando le pones un = a un parámetro lo aplicas como valor por default 
  return `Hola ${nombre}`; 
}
console.log(saludo("deni"));
console.log(saludo("cintia"));
console.log(saludo("benja"));
console.log(saludo(""));
console.log(saludo()); //aqui se aplicaría el valor por default 