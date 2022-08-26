
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];

const newArray = array1.concat(array2); //Genera un nuevo arreglo con los dos arreglos previos.

console.log(newArray);

//realizar la función manual 
Array.prototype.concat = function(array) {
    console.log('este es el chilo');
    //this = array1; contexto de ejecución
    return [...this, ...array]; //... -> spread operator= va s oltar todos los elementos obtenidos en el arreglo this(array1) y los cacha el nuevo arreglo (array). 
}

const otherArray = array1.concat(array2);

console.log(otherArray)

//frutas es un arreglo con 3 elementos de tipo string 
const frutas = ['banana', 'manzana', 'fresa']
function callback(itemActual){
   return itemActual === 'fresa'
}

let arregloResultante = frutas.filter(callback);

console.log(arregloResultante)


//ej de filter con objeto 
const users = [{username: 'aldo', password:'cruiz'}, {username:'cin', password:'pass*2023'}]
let usuarios2023 = users.filter((user) => {
    return user.password.split('*')[1] == '2023';
});

console.log(usuarios2023);


//utilizando includes 
const users = [{username: 'aldo', password:'cruiz'}, {username:'cin', password:'pass*2023'}]
let usuarios2023 = users.filter((user) => {
    return user.password.includes('2023');
});

console.log(usuarios2023);


//find 
const frutas = ['banana', 'manzana', 'fresa podrida', 'fresa'];
const primerFrutaPodrida = frutas.find(function(fruta){
    if(fruta.includes('podrida')== true){
        return fruta;
    }
})

console.log(primerFrutaPodrida);


//utilizando reverse para que nos de el último en vez del primero
const frutas = ['banana', 'manzana', 'fresa podrida', 'manzana podrida'];
const frutasAlReves = frutas.reverse();
const primerFrutaPodrida = frutasAlReves.find(function(fruta){
    if(fruta.includes('podrida')== true){
        return fruta;
    }
})

console.log(primerFrutaPodrida);


//map -> transforma 
const array1 = [1, 4, 9, 16];

//pasar a function to map 
let duplicar = function(x){
    return x*2;
}
const map1 = array1.map(duplicar);

//nos retornará el valor transformado 
console.log(map1)


//sintestizando
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x=>x*2);
console.log(map1)


//evolucionar mis pokemones
const pokemones = ['pikachu', 'squirtle', 'volvasaur'];
const evolucionarPokemones = pokemon =>{
    const evoluciones = { //objeto 
        pikachu:'raychu',
        squirtle: 'warturtle',
        volvasaur: 'ibasaur'

    }
    return evoluciones[pokemon];
}

const pokemonesEvolucionados = pokemones.map(evolucionarPokemones);
console.log(pokemonesEvolucionados);

//simplifincando
const pokemones = ['pikachu', 'squirtle', 'volvasaur'];
const evolucionarPokemones= pokemon => {
if(pokemon === 'pikachu'){
    return 'raychu'
} else if (pokemon === 'squirtle'){
    return 'warturtle'
} else {
    return 'ibasaur'
}

};

console.log(evolucionarPokemones('squirtle'))

