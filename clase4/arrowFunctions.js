const saludar = (prefijo, nombre) => { //Si tenemos 1 solo parámetro podemos omitir los (), const saludar = () => {
console.log(`Hola ${prefijo} ${nombre} `);
console.log(arguments);

};

saludar('srita', 'cin'); //mandando a llamar cin=argumento

function saludarDos (prefijo, nombre){
    console.log(`Hola ${prefijo} ${nombre}`);
    console.log(arguments);
};
saludarDos('cin', 'ruiz')


const arrowFunction = () => { //hacerlo cuando tu código requiera más lógica
    return 'HOLA'
};
console.log(arrowFunction())


const arrowFunction = () => 'HOLA'; //return implicito si tu resultado queda en una sola línea hacerlo de esta forma 
console.log(arrowFunction())