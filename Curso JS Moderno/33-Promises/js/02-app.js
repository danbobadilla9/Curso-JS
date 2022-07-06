const paises = [];

function nuevoPais(pais,callback){
    paises.push(pais);
    console.log(`Agreado: ${pais}`);
    callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarCallbackHell(){
    setTimeout( () => {
        nuevoPais('Alemania',mostrarPaises);
        setTimeout( () => {
            nuevoPais('Francia',mostrarPaises);
            setTimeout( () => {
                nuevoPais('Mexico',mostrarPaises);
            },3000);
        },3000);
    },3000);
}

iniciarCallbackHell();