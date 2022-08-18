//nombrar const con funciones, arreglos y obj
//formas de crear un objeto
//1
const automovil = {
    puertas:4,
    electrico:false,
    acelerar = () => {
        console.log('acelerando'); //todas las propiedades van separadas con coma a excepcion de la última
    }

}
//2
const auto = new Object(); //función constructora. 
auto.puertas = 4;
auto.electrico = false;
auto.acelerar = () => {
    console.log('acelerando');
}

//3
function Carro(puertas){ //funcion construstora, me permite generar objetos
    this.puertas = 4;
    this.electrico = false;
    this.acelerar= () => {
        console.log('voy acelerando');
    }
}

const bmw = new Carro();
console.log(new Carro);
bmw.version = 'Lujo'


const casa = { //para hacer referencia a este objeto uso 'casa'
    pisos: 2,
    antiguedad: 20,
    fiesta: () =>{
        console.log('ea')
    }   
};

console.log(casa.pisos) //obten la propiedad pisos del obketo casa

//1
function koder() {
    this.entusiasmo = true;
    this.amaJS = true;
    this.consoleLog = true;
    this.programar = () => {
        console.log('me gusta programar');
    }
}

//2
const koder = new Koder();

//3
const koder = {

}

