
//para enviarle datos en este caso título y descripción
//obteniendo los datos de mi interfaz


import {saveTask} from "./firebase";

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value; //obteniendo el contenido de la 1er caja de texto 
    const descripcion = document.querySelector('#description').value;
    console.log(title, descripcion);
    saveTask(title, descripcion)
});


