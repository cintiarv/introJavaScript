//connection to firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

//initiallizeapp sirve para entabalr la conversación con firebase


const firebaseConfig = {
    apiKey: "AIzaSyCzaAD1ipv6IVlBdOc9lVIwZbKTteVgWVM",
    authDomain: "to-do-crud-f68a5.firebaseapp.com",
    projectId: "to-do-crud-f68a5",
    storageBucket: "to-do-crud-f68a5.appspot.com",
    messagingSenderId: "592655065938",
    appId: "1:592655065938:web:f9e1ce1c6834455f01108b"
  };

const app = initializeApp (firebaseConfig); //ejecutar para entablar mi conversación con firebase

//connection to firestore, se requiere conectarse en los 2

const db = getFirestore(); //para obtener datos de la base de datos


export const saveTask = (titulo, descripcion) => {
    const objetoAGuardar = {
        title: titulo,
        description: descripcion
    };
    const canasta = collection(db,"tasks");
    addDoc(canasta, objetoAGuardar)
};