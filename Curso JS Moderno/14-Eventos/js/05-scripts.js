//Eventos con el scroll en window osea la ventana globl
window.addEventListener('scroll', () => {
    // console.log('scrolling');
    const scrollPX = window.scrollY; //Retorna el valor pero en pixeles
    console.log(scrollPX);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect(); //Nos dice a que distancia este el elemento al hacer un scroll
    // console.log(ubicacion);
    if(ubicacion.top < 100){
        console.log('El evento ya esta visible');
    }else{
        console.log('da mas scroll');
    }
});











