//crear una funcion que retorne la palabra(parametro1) repetida el numero de veces que se indique(parametro2) repeatString('hey', 3) // returns 'heyheyhey'



function repeatString(word, times){
    return word.repeat(times);
}

let result = repeatString('hey', 3);
console.log(result);


function repeatString(word, times){
    let result = '';
    for(i=0;i<times;i++){
         result =result + word;
    }
    return result
}

let result = repeatString('hey', 3);
console.log(result);

