//Funciones dentro de un objeto
const reproductor= {
    reproducir: function(id){
        console.log(`Reproduciendo cancion... id ${id}`);
    },
    pausar: function(){
        console.log('pausando...');
    }
}

reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar = function(){
    console.log('Borrando cancion...');
}
reproductor.borrar();







