
let namesArray = ['Manu Cabrera Rojas', 'Cin Ruiz Verdugo', 'Fanny Perez Leyva']

const getFirstLetter = (name) => name[0]+'.';

function map (array, callback){                 
    let newArray = [];     
    for(i=0; i<array.length; i++){              
        const elementCurrent = array[i]; 
        const newElement = callback(elementCurrent);              
        newArray.push(newElement);
    }
    return newArray;                                         
}

const output = map(namesArray, (completeName) =>{
    const names = completeName.split(' ');
    const firstLetters = map (names,getFirstLetter);
    const j = firstLetters.join(' ');
    return j;
} );


console.log(output);







