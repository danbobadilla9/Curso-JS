//Traversing the DOM: Navegar por diferentes elementos
//PADREA HACIA LOS HIJOS
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes);//Los espacios en blanco son considerados elementos
// console.log(navegacion.children);//Los espacios en blanco son considerados elementos

// // console.log(navegacion.children[1].nodeName);
// // console.log(navegacion.children[1].nodeType);

const card= document.querySelector('.card');
// console.log(card.children);
// console.log(card.children[1]);
// console.log(card.children[1].children);
// console.log(card.children[1].children[1].textContent);
// card.children[1].children[1].textContent = 'Nuevo Heading desde Traversing the DOM';

// card.children[0].src = 'img/hacer2.jpg';

//HIJO HACIA EL PADRE
// console.log(card.parentNode);//Toma en cuanta los elementos en blanco
// console.log(card.parentElement);//Mas seguro
// console.log(card.parentElement.parentElement);
// console.log(card.parentElement.parentElement.parentElement);

//Obtener el hermano de un nodo
// console.log(card);
// console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard);
console.log(ultimoCard.previousElementSibling);

