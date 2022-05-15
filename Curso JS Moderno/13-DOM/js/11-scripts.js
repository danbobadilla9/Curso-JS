const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter(){
    //Verificar si un elemento tiene una clase "Version larga"
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo'); //Hace referencia a lo que manda a llamar la funcion
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    //Version Corta
    // footer.classList.toggle('activo');
    // btnFlotante.classList.toggle('activo');
}



