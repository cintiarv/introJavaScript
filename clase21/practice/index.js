//importando la conexión a firebase
import { saveTask } from "./firebase";

//obtener los datos de mi interfaz
const button = document.querySelector('button'); //me traigo el botón del DOM para poder manipularlo 

button.addEventListener('click', (event) => {
    event.preventDefault();//para prevenir que ocurra el submit
    const title = document.querySelector('#title').value; //para traer el valor del input que ecribipa el usuario en title
    const descripcion = document.querySelector('#description').value;
    
    const task = new Task(title,descripcion);
    saveTask(task);
})


