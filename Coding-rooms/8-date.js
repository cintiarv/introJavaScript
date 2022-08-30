//Generar un programa que nos muestre la fecha del dia de hoy con el siguiente formato: "YYYY MM DD"


function diaDeHoy (){
    const date = new Date();
    return date;
}
let result = diaDeHoy();
console.log(result);



//resolución Aldo
const diaDeHoy = () => {
    const hoy = new Date(); //generando un objeto de tipo date
    const dia = hoy.getDate(); //obteniendo el día del mes a partir del objeto q genere
    const mes = hoy.getMonth(); //obteniendo el no. de mes
    const anio = hoy.getFullYear(); //obteniendo el año 
    const fecha = `${anio} / ${mes} / ${dia}`;
    console.log(fecha);
};

diaDeHoy();