const aplicarDescuento = new Promise( (resolve,reject) => {
    const descuento = true;
    if(descuento){
        resolve('Descuento aplicado');
    }else{
        reject('No se pudo aplicar el descuento');
    }
});

// console.log(aplicarDescuento); Indica si fue aceptado
//Hay 3 valors fullfilled - El promise se cumplio
//rejected - El promise no se cumplio
//pending - El promise no sabe si se cumplio o fue rechazado 
aplicarDescuento
    .then( resultado => descuento(resultado))
    .catch( error => console.log(error));

function descuento(resultado){
    console.log(resultado);
}