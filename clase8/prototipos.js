//para poder hacer uso de la herencia de chef ya que cin quiere que le hereden la caracteristica de saber cocinar.

const cheff = {
    tipo: 'cocina básica',
    cocinar: function(platillo){
        console.log(`cocinando el ${platillo}`)
    }
};


const cin = {
    nombre: 'cin',
    profesion: 'developer',
    edad: 25
    programar: function(){
        console.log('programando')
    }

};

cin.__proto__ = cheff; //al objeto cin quiero que en su prototipo le agreges las características cheff

cin.cocinar('filete');
console.log(cin.tipo)
console.log(cin.nombre)

//otra forma de heredar 
Object.setPrototypeOf(cin, cheff) //objeto a heredadr, objeto heredador
cin.cocinar('filete');

//forma correcta sería crearlas a partir de otra función -> Object.create 
const cheff = {
    tipo: 'cocina básica',
    cocinar: function(platillo){
        console.log(`cocinando el ${platillo}`)
    }
};


const cin = {
    nombre: 'cin',
    profesion: 'developer',
    edad: 25
}; 

const cin = Object.create(cheff)
console.log(cin)