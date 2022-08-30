const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' '); //separa entre espacios 
console.log(words[3]);
// expected output: "fox"

const chars = str.split(''); //separa  letra x letra
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]
