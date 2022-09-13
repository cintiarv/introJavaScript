function snake(str){
for(i=1 ; i < str.length ; i++){
    elementoActual = str[i];
    if(isLetter(elementoActual) == false){
        continue;
    }
    if(elementoActual == elementoActual.toUpperCase()){
        str = str.split(elementoActual).join('_'+elementoActual.toLowerCase());
    }
}
return str.toLowerCase();
};

function isLetter(char) {
    return (/[a-zA-Z]/).test(char)
  }

console.log(snake('Hello, World!'.replaceAll(',','').replaceAll(' ','')));

console.log(snake('snakeCase'));
