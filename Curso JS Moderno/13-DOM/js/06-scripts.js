// const encabezado = document.querySelector('.contenido-hero h1');
const encabezado = document.querySelector('.contenido-hero h1').textContent;//Uitilizando encadenamiento
console.log(encabezado);

// console.log(encabezado.innerText);//Si el css del texto tiene el texto oculto no lo podra mostrar
// console.log(encabezado.textContent);//si encuentra el documento que este oculto en el HTML
// console.log(encabezado.innerHTML);//Se trae el HTML
const nuevoHeadig = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeadig;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';
console.log(imagen);



