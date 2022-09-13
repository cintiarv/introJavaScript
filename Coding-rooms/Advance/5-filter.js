//Escribe un metodo que retorne un nuevo objeto sin las propiedades pasadas como argumentos 
//cleanObject({b: 2 }, 'b'); // return { a: 1 }



const objeto = {
    a:1,
    b:2
}

const filterByKey = (entries,filterKey) => {
    console.log(entries)
    return entries[0] !== filterKey
}
function cleanObject(object, filterKey){
    const entries = Object.entries(object);
    const a = entries.filter(())
    console.log(Object.fromEntries(a))
}

cleanObject(objeto, 'a');






