//8-. función q retorne string q diga hola koders
let string = (str) => str
console.log('Hola Koders')
string();



//9-. generar una función que me retorne el resultado de una operación matemática, el nombre de la operación y los valores con los que se ejecutara la operación serán los parámetros de dicha funcion
let operacionMatematica = (operacion, num1, num2)=>{
    if(operacion == 'suma'){
       let suma = num1+num2;
       return suma;
    }else if(operacion == 'mult'){
        let mult = num1*num2;
        return mult;
    }else if(operacion == 'div'){
        let div = num1/num2
        return div;
    }
};

console.log(operacionMatematica('div', 10, 50));


//función que retorne un objeto literal con las siguientes propiedades(nombre, edad, genero, dirección), la propiedad nombre debe ser un objeto que tenga las siguientes propiedades(nombre, apellidoPaterno y apellidoMaterno)
const generarObjetoLiteral = () => {
    let persona = {
        nombre:{
            nombre:'cintia',
            apellidoPatern: 'ruiz',
            apellidoMatern: 'verdugo'
        },
        edad: 25,
        genero: 'fem',
        dirección: 'gdl'
    }
    return persona
}

console.log(generarObjetoLiteral());


//11-. generar una función que me retorne un arreglo que contenga los nombres de los koders de la generación 21 
let gene21 = () => {
    let array = [];
    array.push('cin')
    array.push('deni')
    array.push('fanny')
    array.push('annie')
    return array;
    
}
console.log(gene21())




//12-.generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'
let girls = ['cin', 'deni', 'fanny', 'annie']
let koders = (lista, nombre) => {
    if(lista.includes(nombre)){
        return nombre;
    } else{
        return `Este alumno no pertenece a la generación`
    }
}

console.log(koders(girls, 'annie'));


//13-. generar una función que genere un arreglo a partir de una cadena de texto

let separate = (str) => {
    let arreglo = str.split('')
    return arreglo
};
console.log(separate('hola'))


//14-. generar una función que sume todos los números que están dentro de una lista de números, por ejemplo
const lista = [1,2,3,4,5,6];
let suma = lista.reduce((acumulador, itemActual)=>{
   acumulador += itemActual;  //el callback nos actualiza el valor del acumulador. Nos dice como queramos q lo reduzca
    return acumulador;
},0);

console.log(suma);


//15-. generar una función que quite todos los números que sean mayores al numero 10 de una lista de números
const listaDeNums = [1,2,3,4,5,6,10,13,8,34];
let cleanArray = (lista) => {
    let newArray = [];
    for(let i = 0 ; i<listaDeNums.length ; i++){
        elementoActual = lista[i];
        if(lista[i]<10){
            newArray.push(elementoActual);
        }
    } return newArray;
}

console.log(cleanArray(listaDeNums));


//16-.generar una función que imprima el numero de día de la semana según el día que reciba, por ejemplo 

let weekDay = (day) => {
    if(day == 'lunes'){
        console.log(0);
    }else if(day == 'martes'){
        console.log(1);
    }else if(day == 'miércoles'){
        console.log(2);
    }else if(day == 'jueves'){
        console.log(3);
    }else if(day == 'viernes'){
        console.log(4);
    }else if(day == 'sábado'){
        console.log(5);
    }else if(day == 'domingo'){
        console.log(6);
    }
}

weekDay('domingo');


let weekdays = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
let hola = (day) => {
    let result = '';
    for(let i =0; i<weekdays.length ; i++){
        if(day = weekdays[i]){
            let result = weekdays[i]
        }
    }return result;
}
console.log(hola('lunes'))


//17-. generar una función para quitar un koder de la lista de koders
let listaKoders = ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; 
let quitarKoder = (lista, koder) => {
    let newList=[];
    for(let i = 0; i<lista.length ; i++){
        if(lista[i] !== koder){
            newList.push(lista[i]);
        }
    }return newList
}
console.log(quitarKoder(listaKoders,'Cintia'));