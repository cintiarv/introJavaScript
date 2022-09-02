//Obtener todos los elementos de tipo span que se encuentren dentro 
//de un elemento parrafo, usar querySelector y modificar su contenido sin eliminar lo que hay actualmente

const parrafos = document.querySelectorAll('p > span')

for(let i=0;i<parrafos.length;i++){
    parrafos[i].innerText += ` texto ${i+1}`;
}


