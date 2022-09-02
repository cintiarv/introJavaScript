
const body = document.querySelector('body');


function generarTarjetaDeCredito(id, numeroTarjeta, titulo){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');
    h1.innerText = titulo;
    img.src='chip.jpg'
    img.alt='chip';
    p.innerText=numeroTarjeta;
    div.id = id;

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);
    body.appendChild(div);
   
}

generarTarjetaDeCredito('bbva', '4525 6632 5478 5214', 'Mastercard');
generarTarjetaDeCredito('bbva', '4525 6632 5478 5214', 'Mastercard');
generarTarjetaDeCredito('bbva', '4525 6632 5478 5214', 'Mastercard');
generarTarjetaDeCredito('bbva', '4525 6632 5478 5214', 'Mastercard');

console.log(body.innerHTML);


//en lugar de append child innerHtml -> 

function generarTarjetaDeCredito(id, numeroTarjeta, titulo){
    
    const template = `<div id="${id}">
    <h1>${titulo}</h1>
    <img src="chip.jpg" alt="chip">
    <p>${numeroTarjeta}</p>
    </div>`
    body.innerHTML += template;
}

generarTarjetaDeCredito('bbva', '4525 6632 5478 5214', 'Mastercard');