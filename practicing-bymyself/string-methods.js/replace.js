const re = /apples/gi;
const str = 'Apples are round, and apples are juicy.';
const newstr = str.replace(re, 'oranges');
console.log(newstr);  


const str = 'Apples are round, and apples are juicy.';
const newstr = str.replace(/ /gi, ''); //se usa gi como un replaceAll
console.log(newstr)


const str = 'Apples are round, and apples are juicy.';
const newstr = str.replaceAll(/ /g, ''); 
console.log(newstr)
