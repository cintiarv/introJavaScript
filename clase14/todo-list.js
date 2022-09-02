const body = document.querySelector('body');


function toDoList(text, n){
  const body = document.querySelector('body');
  let listas = '';
  for (let i = 1; i <= n; i++) {
    listas += createLi(text, i);
  }
  const template = 
  `<h1>To-do List</h1>
  <ul>${listas}</ul>`
  body.innerHTML += template;

}

function createLi(text, i) {
  return `<li>${text} ${i}</li>`
}

toDoList('1task', 10);




function toDoList2(n, text){
  let template = `<h1>To-do List2</h1>
  <ul>`
  const ul = document.querySelector('ul');
  for(i=1;i<=n;i++){
    createLi(text+' '+i,ul)
  }
  template += `</ul>`
  body.innerHTML += template;

}

function createLi(text, ul) {
  const elementoLista = `<li>${text}</li>`
  ul.innerHTML += elementoLista;
  return elementoLista;
}

toDoList2(5,'2task');

//
function toDoList3(n , text){
  let template = `<h1>To-do List3</h1> <ul>`;
  for(i=1;i<=n;i++){
    template += `<li>${text} ${i}</li>`
  }
  template += `</ul>`
  body.innerHTML += template;
}

toDoList3(10,'3task');





function toDoList4(n , text){
  let listas = '';
  let template = `<h1>To-do List4</h1><ul>replaceme</ul>`;
  for(i=1;i<=n;i++){
    listas += `<li>${text} ${i}</li>`
  }
  template = template.replace('replaceme', listas)
  body.innerHTML += template;
}

toDoList4(8,'4task');

