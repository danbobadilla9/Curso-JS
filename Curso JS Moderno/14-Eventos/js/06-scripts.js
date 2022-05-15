//Event Bubbling: Es la propagacion de un evento dando resultados que no son esperados 
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloDiv = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation(); //Detiene el event bubling
    console.log('click en card');
});
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en info');
});
tituloDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click en titulo');
});







