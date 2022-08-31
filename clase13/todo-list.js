


function toDoList(n, texto){
    const body = document.querySelector('body')
    const ul = document.createElement('ul');
    const li = document.createElement(texto);

    for(let i=0;i=n;i++){
        ul.appendChild(li);
        return li;
    }
    body.appendChild(ul);
}


toDoList(7,'hola')