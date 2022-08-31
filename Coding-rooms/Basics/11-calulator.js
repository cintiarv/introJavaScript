//Generar un programa que sea una calculadora, suma, resta, mult, poten, div

const suma = (num1,num2) => num1+num2;

const resta = (num1,num2) => num1-num2;

const mult = (num1,num2) => num1*num2;

const poten = (num1,num2) => num1**num2;

const div = (num1,num2) => num1/num2;


function calculadora(calcular, num1, num2){
    switch(calcular){
        case 'sumar': console.log(`El resultado de tu suma es: ${suma(num1,num2)}`);
        break;
    
        case 'restar': console.log(`El resultado de tu resta es: ${resta(num1,num2)}`);
        break;
    
        case 'multiplicar': console.log(`El resultado de tu multiplicación es: ${mult(num1,num2)}`);
        break;
    
        case 'potencia': console.log(`El resultado de tu número 1 elevado a la potencia del número 2 es: ${poten(num1,num2)}`);
        break;
    
        case 'dividir': console.log(`El resultado de tu división es: ${div(num1,num2)}`);
        break;
    }
    
}

calculadora('sumar', 10, 5);


