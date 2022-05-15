//For IN itera sobre objetos 


const automovil = {
    modelo: 'cmaro',
    year: 1969,
    motor: '6.0'
}

for (let propi in automovil){
    console.log(`${automovil[propi]}`);
}

//El iterador mas nuevo es el siguiente

for(let [llave,valor] of Object.entries(automovil)){
    console.log(valor,llave);
}
