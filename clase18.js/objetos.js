let lapiz = {
    tamanio: 'small',
    forma:'hexagonal',
    color:'amarillo',
    escribir: (texto) => {
        return 'use mi lápiz para escribir el texto' + texto
    }
}

console.log(lapiz.color)
console.log(lapiz.forma)
console.log(lapiz.tamanio)
console.log(lapiz.escribir(' hola'))

//para hacer una función constructora, se utiliza función convencional

function Lapiz(tamanio,forma,color){   //utilizar mayús al realizar una función constructora(nombre), no añadir la función escribir ya que es constante(siempre se escribe de la misma forma )
    this.tamanio = tamanio;
    this.forma = forma;//la forma del lápiz que voy a crear será igual a la forma que el usuario ponga en el argumento 
    this.color = color; //el color de este lápiz = el color que el usuario pondrá en el parámetro
    this.escribir = (texto) => {
        return 'Use mi lápiz para escribir el texto' + texto
    }
} 

let lapizRojo = new Lapiz('pequeño','redondo','rosa') //la ejecución se tiene que hacer dentro de una variable con la palabra reservada new
console.log(lapizRojo);
let textoRojo = lapizRojo.escribir(' hola como estirs')
console.log(textoRojo);

//función cosntructora sirve para no estar copiando y pegando el objeto

let lapizVerde = new Lapiz('grande' ,'rectangular', 'verde');
console.log(lapizVerde);



//dinosaurios
function Dinosuario(alimentacion, habitat, tamanio){
    this.alimentacion = alimentacion;
    this. habitat = habitat;
    this.tamanio = tamanio;
    this.sonido = (sound) =>{
        return 'soy un t-rex y hago' + sound
    }
}

let trex = new Dinosuario('carnivoro', 'terrestre', 'grande')
let trexSound = trex.sonido('roaaaar')
console.log(trex, trexSound);


//de string a objeto
let String = 'hola'
let otherText = new String('hola')
console.log(otherText);

//prototipo -> molde de donde sacamos el objeto. planos con lo que creo algo 