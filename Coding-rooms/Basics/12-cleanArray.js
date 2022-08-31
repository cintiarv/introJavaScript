//Generar una funcion que limpie los elementos de un arreglo repetidos usando filter
//const numeros = [1,2,3,4,5,3,3,1,2];

//limpiarRepetidos(); // return [1,2,3,4,5]

const numeros = [10,2,3,4,5,3,10,1,2];
let auxiliar = null;
function callback(num){
   if(auxiliar == null || auxiliar !== num){
        auxiliar = num;
        return true;
   }
   if(auxiliar === num){
        return false;
   } 
}

function unique(array){
    array = array.sort();
    console.log(array);
    let arregloResultante = array.filter(callback);
    return arregloResultante;
}


console.log(unique(numeros));


