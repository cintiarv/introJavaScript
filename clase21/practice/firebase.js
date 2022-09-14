//conexión hacia firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js"; //me traigo específicamente la función initializeApp de todo firebase ara entablar una conresacion con firebase
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js"; //utilizar las mismas versiones en los dos links

const firebaseConfig = {
    apiKey: "AIzaSyCRjAa-UkaWCtmNGtRjnbyfmdIuTMuRJkA",
    authDomain: "to-do-crud-2.firebaseapp.com",
    projectId: "to-do-crud-2",
    storageBucket: "to-do-crud-2.appspot.com",
    messagingSenderId: "488199766663",
    appId: "1:488199766663:web:8231311cb5fd31b4576e22"
  };


const app = initializeApp(firebaseConfig); //ejecutando la función para iniciar la conversación cn firebase 

//nos falta conectarnos a firestore, requerimos otro input 

const db = getFirestore(); //nos va devolver la conexión a la base de datos para que los datos de nuestra pag web lleguen a la base de datos
//firestore es nuestra base de datos


//addDoc nos permite aagregar un documento(objeto) a la base de datos, nos dice donde queremos guardar los objetos en firestore


//función q me ayude a guardar una tarea en la canasat (colección)
export const saveTask = (titulo,descripcion) => {
    const objetoAGuardar = {
        title: titulo,  //le decimos que objeto queremos guardar que viene del addEventList del botón
        description: descripcion
    };
    const canasta = collection(db,"tasks"); //db tiene la conexión. queremos que te conectes a lal base de datos y almacenes este objeto en la colección("tasks"). Para llegar a esa canasta conectate en el db
    addDoc(canasta, objetoAGuardar) //donde lo voy a almacenar y que voy a almacenar
};
