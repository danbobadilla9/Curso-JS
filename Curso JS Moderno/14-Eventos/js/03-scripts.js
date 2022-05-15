const busqueda = document.querySelector('.busqueda');
//Cuando presionas una tecla
// busqueda.addEventListener('keydown', () => {
//     console.log('escriiendo');
// });
// //Cuando dejas de presionar una tecla
// busqueda.addEventListener('keyup', () => {
//     console.log('escriiendo');
// });
//Cuando das click en el input y luego sales de el
// busqueda.addEventListener('blur', () => {
//     console.log('saliendo del input');
// });

// busqueda.addEventListener('copy', () => {
//     console.log('copeando');
// });
// busqueda.addEventListener('paste', () => {
//     console.log('pegando');
// });
// busqueda.addEventListener('cut', () => {
//     console.log('cortando');
// });
//El mas usado de todos es el siguiente, cubre la mayoria de los eventos
busqueda.addEventListener('input', (e) => {
    // console.log(e.type);//Sobre que tag estamos escribiendo
    // console.log(e.target);//El input especifico en el que estamos escribiendo
    console.log(e.target.value);//Lo que el usuario esta escribiendo
    console.log(e.target.value);
});










