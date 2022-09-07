 //a partir de un arreglo dado. Parametros: 
//1.- Arreglo a agrupar//Escribir una funcion que genere grupos
//2.- Numero de elementos por grupo 


completeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function breakArray(array, n){
    let parentArray = [];
    let childArray = [];
    let cont = 0;
    for(let i=0; i<array.length; i++){
        cont ++;
        childArray.push(array[i]);
        if(cont == n){
            cont = 0;
            parentArray.push(childArray);
            childArray = [];
        }
    }
    if(childArray.length > 0){
        parentArray.push(childArray);
    } else{}
    return parentArray;
}

console.log(breakArray(completeArray, 2));