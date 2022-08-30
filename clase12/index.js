const parrafos = document.getElementsByClassName('parrafo'); //este método recibe un parámetro, sería el nombre de la clase entre comillas
console.log(parrafos);

const div = document.getElementById('div1');
div.style.color = 'red';
console.log(div);

const segundoParrafo = document.querySelector('div > p.p2');
console.log(segundoParrafo);