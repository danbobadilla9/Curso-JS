document.addEventListener( 'DOMContentLoaded', () =>{
    const observer = new IntersectionObserver( entries => {
        // console.log(entries[0]);
        if(entries[0].isIntersecting){
            console.log('Ya esta visible');
        }
    });//Scroll infinito o lazy loading a las imagenes 

    observer.observe(document.querySelector('.premium'));//Envia información como isVisible



});