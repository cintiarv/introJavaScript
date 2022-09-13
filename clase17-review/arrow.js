let sumar = (num1,num2) => num1 + num2; //return implícito no usar llaves
let suma = sumar(10, 10);
console.log(suma);


let text = (str1, str2) => str1 + str2;
console.log(text('hola ', 'cin'));



let string = (str) => str
console.log('Hola Koders')
string()


//calcu
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
}

console.log(operacionMatematica('div', 10, 50))



//función que retorne un objeto literal 
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

//generar una función que imprima el nombre de un koder en particular si es que existe en la lista si no existe imprimir el mensaje 'Ese alumno no pertenece a esta generación'
girls = ['cin', 'deni', 'fanny', 'annie']
let koders = (lista, nombre) => {
    if(lista.includes(nombre)){
        return nombre;
    } else{
        return `Este alumno no pertenece a la generación`
    }
}

console.log(koders(girls, 'annie'));



//OBJETOS
let carro = {
    puertas: 4,
    color: 'gris',
    marca: 'seat',
    llantas: 4
};

for(let caracteristica in carro){ //para recorrer objetos
    console.log(caracteristica)
}

//asignar una propiedad a un objeto 
carro.duenio = 'cin'
carro['duenio'] = 'cin'


if(carro.duenio !== undefined) {
    console.log('La propiedad si existe')
} else{
    console.log('La propiedad no existe')
}