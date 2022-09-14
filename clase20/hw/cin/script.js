//cuando tenemos un boton en un formulario se hace un submit por default  

const button = document.querySelector('button'); //el 1er botón q encuentre
const buttonX = document.querySelector('#btn');
const list = document.querySelector('#list');
const login = document.querySelector('#login');
const buttonAddTask = document.querySelector('#btn__task');
const lista = document.querySelector('#lista');
const title = document.querySelector('#todolist');




button.addEventListener('click', (event) => {
    event.preventDefault(); //para detener q otros eventos se ejecuten
    event.stopPropagation(); //se esucha solo una vez y se deja de escuchar
    const email = document.querySelector('[type="email"]').value; //obteniendo datos de los inputs
    const pass = document.querySelector('[type="password"]').value;
    //simulación de una petición
    if(email === 'cintia@gmail.com' && pass ==='cin'){
        list.className = 'd-block';
        login.className = 'd-none';
        buttonX.className += 'buttonX';
        buttonAddTask.className += 'd-block';
        title.className = 'title';
    } else{
        window.alert('Sus credenciales no son válidas')   
    }

    buttonX.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        login.className = 'd-block';
        list.className = 'd-none';
        buttonX.className = 'd-none';
        buttonAddTask.className = 'd-none';
        title.className = 'd-none';

    });
});

    buttonAddTask.addEventListener('click', (event) =>{
        event.preventDefault();
        event.stopPropagation();
        createLi('Tarea ')
    })

    let cont = 0;
    function createLi(text) {
        cont++ //cada q se ejecute la funciòn se sumarà 1 unidad
        let elementoLista;
        elementoLista = `<li class="mt-4">${text} ${cont}  <input class="d-flex"></input></li>`
        console.log(elementoLista)
        lista.innerHTML += elementoLista;
        return elementoLista;
      }



//tarea poner botón que cuando le des click se quite la lista y vuelva a poner el login 
//adentro de la lista poner un botón de agregar tarea se agregue un elemento, cuantas veces yo quiera 
//validar q el usuario agregue una tarea nueva 
//cómo registras con email de google  