const users = [{name: 'aldo', age: 18}, {name: 'magaly', age: 30},{name: 'alfonso', age: 20}, {name: 'jesus', age: 50}, {name: 'alberto', age: 10}];


function compare_age( a, b )
  {
  if (a.age < b.age){
    return -1;
  }
  if (a.age> b.age){
    return 1;
  }
  return 0;
}

users.sort(compare_age);
console.log(users);





const users = [{name: 'aldo', age: 18}, {name: 'magaly', age: 30},{name: 'alfonso', age: 20}, {name: 'jesus', age: 50}, {name: 'alberto', age: 10}];

users.sort((a, b) => {
    return a.age - b.age;
});
console.log(users);











/**  const result = {
    0: 'aldo',
    1: 'magaly',
    2: 'alfonso',
    3: 'jesus',
    4: 'alberto'
};
*/

