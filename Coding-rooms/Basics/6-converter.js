//Generar una función que me ayude a convertir de grados centigrados a farenheit ctof(0) return 32

let converter = (centigrados) => {
    let fahrenheit = 1.8*centigrados+32;
    let result = `${fahrenheit}° Fahrenheit`
    return result;
}

console.log(converter(0));