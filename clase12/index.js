const parrafos = document.getElementsByClassName('parrafo'); //este método recibe un parámetro, sería el nombre de la clase entre comillas
console.log(parrafos);

const div = document.getElementById('div1');
div.style.color = 'red';
console.log(div);

const segundoParrafo = document.querySelector('div > p.p2');
console.log(segundoParrafo);




const body = document.querySelector('body')

//construyendo elementos
const element = document.createElement('h1');
element.style.backgroundColor = 'red';
element.style.color = 'white';
element.classList.add('title');
element.classList.add('title-black');
element.classList.add('title-xl');
console.log(body.children);

body.appendChild(element); //método para agregar nodos al final(después del script) de la lista de hijos del nodo especificado 

//como agregar el h1 dentro de un div 
div.appendChild(element); //element es h1, se corta de la posición de arriba y se pega donde lo pusieron, no se duplica 

const ul = document.createElement('ul');
const lil = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.appendChild(document.createElement('span'))
li2.appendChild(document.createElement('span'))
li3.appendChild(document.createElement('span'))
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

body.appendChild(ul); 


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