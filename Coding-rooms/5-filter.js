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
  

  let studentsAprobbed = students.filter((student) => {
      return student.score > 10;
  });
  
  console.log(studentsAprobbed); //con filter hacer un callback es obligatorio 
  
    