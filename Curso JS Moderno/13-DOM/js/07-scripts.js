//Modificando el CSS
const encabezado = document.querySelector('h1');
console.log(encabezado.style);
//Esto proboca que el codigo sea mas grande , por lo que es mejor quitar y agregar clases
encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase','segunda-clase');
card.classList.remove('card');
console.log(card.classList);










