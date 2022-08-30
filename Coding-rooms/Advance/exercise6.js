//Generar funcion que convierta un objeto en un arreglo de arreglos 
//generarPares({ a: 1, b: 2 }); // return [['a', 1], ['b', 2]]

const objeto = {
    a:1,
    b:2
}

const str = Object.entries(objeto);
console.log(str)




const cb = key =>{ 
    let pair = []; //se declara array vacío donde se le hará push 
    pair.push(key); //llave a, b 
    pair.push(objeto[key]); //valor 1, 2. Se accede al valor de la llave mediante corchete
    return pair
}
const keys = Object.keys(objeto); //función que mandas objeto y me devuelve un array con las llaves del objeto 
const result = keys.map(cb) //llamar la función map del arreglo de llaves obtenida y le mandas un callback para generar el nuevo arreglo 
console.log(result);




const str = Object.entries(objeto);
console.log(str)












const s = Object.keys(objeto).map(key => [key,objeto[key]])
console.log(s)
