//Generar una función que retorne la calificación promedio de la lista de alumnos
let students = [
    {
      name: 'Alvaro',
      score: 10,
    },
    {
      name: 'Daniel',
      score: 16,
    },
    {
      name: 'Alexys',
      score: 12,
    },
    {
      name: 'Rafa',
      score: 17,
    },
    {
      name: 'Alejandro',
      score: 8,
    },
    {
      name: 'Sofia',
      score: 9,
    }
  ];


/* const promedio = students.reduce((acumulador, itemActual)=>{
    acumulador += Number(itemActual.score); //esta haciendo cohersión de datos
    console.log(acumulador);
    return acumulador;
});

console.log(promedio);
 */
  

const average = students.reduce((acumulador, itemActual)=>{
    acumulador += itemActual.score/students.length; 
    return acumulador;
},0);

console.log(average);

                         