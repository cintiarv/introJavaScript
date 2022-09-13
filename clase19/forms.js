const input = document.querySelector('input');

console.log(input.value);


input.addEventListener('keypress', (event) => { //recibe 2 parametros el nombre del evento q quiero esuchcar y un callback 
    console.log(event); //elchange funcionará en input solamente 
    const key = event.key;
    event.detail= `alguien presiono la tecla ${key}`
}); 

