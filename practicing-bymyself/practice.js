let arreglo = [3, 8, 10, 11, 9, 18, 2];

function pares(arreglo){
    let arregloPar = [];
    for(i=0 ;i <= arreglo.length-1 ; i++){
    if(arreglo[i]%2==0){
            arregloPar.push(arreglo[i]);
        }
    }
    return arregloPar
}

let result = pares(arreglo);
console.log(result);


let str = 'john McClane'
str = str.split(' ');
let str1 = '';
function nameShuffler(){
  for(i=str.length-1 ;i>=0;i--){
    str1 = str1 +' '+ str[i]
}
  return str1
}

nameShuffler();
