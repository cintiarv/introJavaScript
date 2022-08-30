const e = Math.E;
console.log(e);

const sumaConPi = (numero) => {
  return Math.PI + numero;
};

let result = sumaConPi(19);
console.log(result);



//area de un círculo q reciba como parámetro el radio
const areaCirculo = (radio) => {
  let area = `El área del círculo es ${Math.PI * Math.pow(radio, 2)}`;
  return area;
};

console.log(areaCirculo(2));

