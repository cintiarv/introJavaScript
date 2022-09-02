const frutas = [{name:'pera', color:'verde'}, {name:'fresa', color:'rojo'}, {name:'limon', color:'verde'}];

const cb = (acumulador, itemActual) =>{ //recibe 4 parámetros pero solo 2 son obligatorios. Decirle al acuulador como se tiene que estar actualizando
    acumulador += itemActual.name 
    return acumulador;
}; //el cb le dice a reduce el cómo hacer el reduce

let jugoDeFrutas= frutas.reduce(cb, 'vaso de jugo con un poco de agua y ');
console.log(jugoDeFrutas);



const koders = [{name:'cin', calif: 8}, {name:'fer', calif:9}, {name:'luis', calif:6}];

const promedio = koders.reduce((acumulador, itemActual)=>{
    acumulador += Number(itemActual.calif); //esta haciendo cohersión de datos
    console.log(acumulador)
    return acumulador;
});

console.log(promedio);


function apply (x,y){
    return x+y
}

const a = koders.reduce(0,2)


//ejemplo
const numeros = [1,2,3,4,5,6];
let suma = numeros.reduce((acumulador, itemActual)=>{
   acumulador += itemActual;  //el callback nos actualiza el valor del acumulador. Nos dice como queramos q lo reduzca
    return acumulador;
}, 0);

console.log(suma);