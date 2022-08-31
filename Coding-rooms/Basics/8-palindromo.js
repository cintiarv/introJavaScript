//generar una funcion que me ayude a indentificar si una palabra es un palindromo palindromes('tacos') // false

function palindrome (phrase) {
    let join = phrase.replace(/ /gi,'')
    let newStr = ''; 
    for( let i=join.length-1 ; i >=0 ; i-- ){
        let elementoActual = join[i];
        newStr += elementoActual;
    }
    console.log(join);
    console.log(newStr);
    if(newStr == join){
        return true;
    }else{
        return false;
    }
}


console.log(palindrome('anita lava la tina'));


