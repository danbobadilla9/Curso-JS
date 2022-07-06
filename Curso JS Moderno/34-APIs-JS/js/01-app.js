const notificarBtn = document.querySelector('#notificar');
notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()//Mostrara un aviso si quiere usar una API
        .then( resultado => {
            console.log('El resutlado es: ',resultado);
        });
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener( 'click', () => {
    if(Notification.permission === 'granted'){
        const notificacion = new Notification('Esta es la notificacion',{
            icon: 'img/ccj.png',
            body:'Aprendiendo JS '
        })
        notificacion.onclick = function(){
            window.open('https://www.youtube.com/');
        }
    }
});