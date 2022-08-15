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