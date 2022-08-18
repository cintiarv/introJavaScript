//FORMA MÁS RECIENTE DE GENERAR OBJETOS. 
// utilizando class

//template para generar un objeto 

class personaJuega{ //cuando generaos una clase generamos la estructura bpasica (template) de un objeto
    constructor() {  //constructor=método. crearemos el template de atributos en constructor
        this.consola = true; 
        this.gordo = true;  //atributos = características q tiene
        this.lentes = true;
    }

    saludar() {
        console.log('no le gusta hablar con la demás gente', this.gordo) //this hace referencia a todo lo que este dentro de esa clase 
        this.jugar();
    }

    jugar() {
        console.log('siempre juega')                        //método
    }
}

const gordofriki = new personaJuega(); //función constructora 
gordofriki.saludar(); //contexto de ejecución=friki en este contexto, this hace referencia al template de friki

//contexto de ejecución=contexto que va a ejecuta r auna función, QUIEN NOS ESTA MANDANDO A EJECTURA (FRIKI)
//this es quien esta utilizando el template
//this -> hacemos referencia al contexto de ejecución o declaración
// función normal = contexto de ejecución
//arrow func = contexto declaración

const flacofriki = new personaJuega(); //nuevo objeto en otra dirección de memoria
flacofriki.gordo = false; //ahora el this se refiere a este otro nuevo objeto
flacofriki.saludar();

//las clases son un template que se puede reutilizar

class personaJuega{ 
    constructor(entusiasmo, gordo, lentes) {  
        this.entusiasmo = entusiasmo; 
        this.gordo = gordo;  //atributos = características q tiene
        this.lentes = lentes;
    }

    saludar() {
        console.log('no le gusta hablar con la demás gente', this.gordo) //this hace referencia a todo lo que este dentro de esa clase 
        this.jugar();
    }

    jugar() {
        console.log('siempre juega')                        
    }
}

const gordofriki = new personaJuega(true, true, true);
gordofriki.saludar(); 


//FIN DE OBJETOS 
