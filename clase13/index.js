function generarListaDesordenada(){
    const body = document.querySelector('body')
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');

    li1.appendChild(document.createElement('span'))
    li2.appendChild(document.createElement('span'))
    li3.appendChild(document.createElement('span'))

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

body.appendChild(ul);


}

generarListaDesordenada();

generarListaDesordenada();



//función q te ayude a generar una tarjeta de crédito 
const body = document.querySelector('body')

function generarTarjetaDeCredito(id, texto, bg, c){
    const p = document.createElement('p'); //números de tarjeta
    //agregando texto a los elementos 
    p.innerText = texto; //innertext reemplaza todo lo que tienes adentro y agrega lo q le pongas
    p.id = id; //añandiendo un id a la etq p 
    p.className = 'parrafo-cool';

    if(bg !== undefined){
        p.style.backgroundColor = bg;
    }
    if(c !== undefined){
        p.style.color = c;
    }

    body.appendChild(p);

}



const bg = 'blue';
const c = 'pink';
generarTarjetaDeCredito('id1', 'cintiaaaaaaaaaaa', bg, c);
generarTarjetaDeCredito('id2', 'cintia');
generarTarjetaDeCredito('id3', 'ferchi');


//función q se encargue de generar 10 elementos título to do list y en cada list item poner to dos 

