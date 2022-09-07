//for in 
/* for (const i in objeto) {
    result += `${objName}.${i}=${objeto[i]}<br>`;
} */

const libro = {
    titulo: 'Harry potter y el misterio de JS', //llave : valor
    autor: 'Victor',
    paginas: 300
};

//maneras de mandar a llamar una propiedad -> libro.titulo ó libro['titulo']

for(let nombrePropiedad in libro){ //la var de adentro de los paréntesis sirve para ir de propiedad en propiedad (entre las llaves) in -> sobre que objeto
    console.log(nombrePropiedad); //imprime las llaves
}


//para tener los valores de todas las propiedades 
for(let nombrePropiedad in libro){ 
    console.log(libro['titulo']); //se trae e lnombre y valor de la propiedad
    libro['autor'];
    libro['paginas'];
    console.log(nombrePropiedad); 
}


const book = {
    titulo: 'Harry potter y el misterio de JS',
    autor: 'Victor',
    paginas: 300
};
for(let nombrePropiedad in book){ 
    console.log(nombrePropiedad, book[nombrePropiedad]); 
};



//for of
let frutas = ['fresa', 'mango', 'melon']; //se puede recorrer con for of porque es un objeto iterable 
for(let fruta of frutas) { //variable que me va ayudar a obtener el elemento de cada arreglo 
    console.log(fruta);
};


for(let fruta in frutas) { //variable que me va ayudar a obtener el elemento de cada arreglo 
    console.log(fruta); //si aplicas for in imprime el índice no el valor 
};
for(let indice in frutas) { //asi si jala 
    console.log(frutas[indice]);
}



//para obtener el valor de un arreglo 
let frutas = ['fresa', 'mango', 'melon'];
console.log(frutas[0],frutas[1],frutas[2]); //



// ej de for in dentro de un for of 
let obj = {
    frutas: ['fresa', 'mango', 'melon'],
    personajes: ['harry', 'sina', 'benja']
}

for(let propiedad in obj) {

    for(let elemento of obj[propiedad]){
        console.log(elemento);
    }
};




for(let fruta of obj['frutas']) {
    console.log(fruta)
};

for(let fruta of obj['personajes']) {
    console.log(fruta)
}

