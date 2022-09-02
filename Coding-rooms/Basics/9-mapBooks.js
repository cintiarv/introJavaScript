//Escribir una funcion que me retorne los titulos de los libros en un arreglo
//const books = [   {     title: 'Book',     author: 'Name'   },   {     title: 'Book2',     author: 'Name2'   } ];

//getTheTitles(books) // ['Book','Book2']


const books = [   {     title: 'Book',     author: 'Name'   },   {     title: 'Book2',     author: 'Name2'   }, {     title: 'Book3',     author: 'Name3'   }  ];

let nuevoArreglo = books.map(book => {
    return {
        title: book.title,
    }
});

console.log(nuevoArreglo);
