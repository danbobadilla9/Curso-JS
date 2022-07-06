const paises = [];

const nuevoPais = pais  => new Promise( resolve => {
    setTimeout( () => {
        paises.push(pais);
        resolve(`Agregado ${pais}`);
    },3000);
})  

nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Mexico');
    })
    .then( resultado => {
        console.log(resultado);
        console.log(paises);
    })

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
