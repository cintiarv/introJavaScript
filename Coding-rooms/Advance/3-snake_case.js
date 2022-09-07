let string = 'Hello, World33!';
function snake(str){
for(i=1 ; i < str.length ; i++){
    elementoActual = str[i];
    console.log(isLetter(elementoActual));
    if(isLetter(elementoActual) == false){
        continue;
    }
    if(elementoActual == elementoActual.toUpperCase()){
        str = str.split(elementoActual).join('_'+elementoActual.toLowerCase());
    }
}
return str.toLowerCase();
}

console.log(snake(string.replaceAll(',','').replaceAll(' ','')));

function isLetter(char) {
    return (/[a-zA-Z]/).test(char)
  }