//concatenar schedules
/**
1-. Función q se encargue de parsear elementos
2-. Función q concatene los elementos(arreglos)
3-. Q mande llamar las dos funciones anteriores
4-. El resultado debe ser algo parecido a lo siguiente  
 */

const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};



//let array = ['Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Aldo sale a las 09:00', 'Judith sale a las 12:00'] */



//término parsear, te piden datos específicose
function parsearVuelo(flight){
    return flight.passengers
}
const vuelo = console.log(parsearVuelo(flight));
vuelo = vuelo.join();
console.log(vuelo)


let schedules = ['09:00', '10:00', '11:00', '12:00'];


const array = vuelo.concat(schedules);
console.log(array);



//resolución Aldo
const flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    passengers: [{
        name: 'aldo',
        edad: 30
    }, {
        name: 'Juan',
        edad: 30
    },
    {
        name: 'Alberto',
        edad: 30
    },
    {
        name: 'Judith',
        edad: 30
    }]
};

let schedules = ['09:00', '10:00', '11:00', '12:00'];

//1-. Función q se encargue de parsear el objeto
function parseFlight(objetoFlight){ //regresando un arreglo con solo los strings de los nombres
    let newArray = []; //en cada iteración push va aqui
    for (const passenger of objetoFlight.passengers) { //en cada iteración obtendré un objeto, obtener llave del objeto(passengers)
        newArray.push(passenger.name);
    }
    return newArray;
}

let passengers = (parseFlight(flight)); 



//2-. Función q concatene los elementos(arreglos)
function concatenarArreglos(array1, array2){
    return array1.concat(array2);
}

console.log(concatenarArreglos(passengers, schedules));

//3-. función q mande llamar las dos funciones anteriores
function imprimirListaDeVuelos(){
    let passengers = parseFlight(flight); //función 1
    let uniqueArray = concatenarArreglos(passengers, schedules); //función 2
    let result = [];
    for(let i=0; i< uniqueArray.length/2; i++){
        
        let string = `${uniqueArray[i]} sale a las ${uniqueArray[i+4]}`
        result.push(string);

    }
    return result;
}

console.log(imprimirListaDeVuelos());

