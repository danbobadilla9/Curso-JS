//Destructuring con arreglos

const numeros = [10,20,30,40,50];

const [num1,num2,,,num5] = numeros;
const [x,...resto] = numeros;
console.log(num1);
console.log(num2);
console.log(num5);
console.log(resto);


