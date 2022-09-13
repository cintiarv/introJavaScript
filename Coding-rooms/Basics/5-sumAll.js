//Generar una funcion que nos ayude a retornar la suma de todos los numeros que hay dentro de los parametros sumAll(1, 4) // 1 + 2 + 3 + 4 = 10
function sum(input){
             
    if (toString.call(input) !== "[object Array]")
       return false;
         
               let total =  0;
               for(let i=0;i<input.length;i++)
                 {                  
                   if(isNaN(input[i])){
                   continue;
                    }
                     total += Number(input[i]);
                  }
                return total;
               }
   console.log(sum([1,9,2]));