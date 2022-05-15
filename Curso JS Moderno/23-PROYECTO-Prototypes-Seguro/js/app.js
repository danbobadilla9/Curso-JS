//Constructores

function Seguro(marca,year,tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
//Realiza la cotización con los datos
Seguro.prototype.cotizarSeguro = function() { //Se utiliza una funcion anonima porque si tenemos que acceder a los datos del objeto
    /*
        1 = Americano 1.15
        2 = Asiatico 1.05
        3 = Europeo 1.35
    */ 
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad = base*1.15;
            break;
        case '2':
            cantidad = base*1.05;
            break;
        case '3':
            cantidad = base*1.35;
            break;
        default:
            break;
    }
    //Leer el año
    //Cada año la diferencia es mayor,el costo va a reducirse un 3%
    const diferencia = (new Date().getFullYear() - 2) - parseInt(this.year);
    cantidad -= ((diferencia*3)*cantidad) / 100;
    /*
    Si el seguro es basico se multiplica por un 30% mas
    Si el seguro es completo se multiplica por un 50% mas
    */
    if(this.tipo === 'basico'){
        cantidad *= 1.30;
    }else{
        cantidad *= 1.50;
    }
    return cantidad;
}
function UI() {}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => { // Como no haremos uso de this podemos usar un arrow function
    const max = new Date().getFullYear() - 2;
    const min = max-20;
    const selectYear = document.querySelector('#year');
    for(let i = max; i>= min; i--){
        let option = document.createElement('OPTION');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//Muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje,tipo) => {
    const div = document.createElement('DIV');
    if(tipo === 'error'){
        div.classList.add('error');
    }else{
        div.classList.add('correcto');
    }
    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;
    //Insertar en el html
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div,document.querySelector('#resultado'));

    setTimeout( () => {
        div.remove();
    },1000);
}
//Mostrar el total
UI.prototype.mostrarResultado = (seguro,total) => {
    //Crear el resultado
    const {marca,year,tipo} = seguro;
    let textoMarca;
    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    const div = document.createElement('DIV');
    div.classList.add('mt-10');
    div.innerHTML = `
    <p class="header">Tu Resumen</p>
    <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca}</span></p>
    <p class="font-bold">Año: <span class="font-normal"> ${year}</span></p>
    <p class="font-bold">Tipo: <span class="font-normal"> ${tipo}</span></p>
    <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;
    const resultadoDiv = document.querySelector('#resultado');
    
    //Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';
    setTimeout( () => {
        spinner.style.display = 'none'; //Se borra el spinner
        resultadoDiv.appendChild(div);//Se muestra el resultado
    },1000);
}

// Instanciando UI
const ui = new UI();
// console.log(ui);

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); //Llena el select con los años
    
});


eventListeners();
function eventListeners() {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit',cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();
    
    //Leer la marca seleccionada

    const marca = document.querySelector('#marca').value;
    
    //Leer el año seleccionado
    
    const year = document.querySelector('#year').value;
    
    //Leer el tipo de cobertura

    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('Todos los campos son Obligatorios','error');
        return;
    }
    ui.mostrarMensaje('Cotizando...','exito');
    //Ocultar las cotizaciones previas
    const resultados = document.querySelector('#resultado div');
    if(resultados != null){
        resultados.remove();
    }
    //Instanciar el seguro
    const seguro = new Seguro(marca,year,tipo);
    // console.log(seguro);
    //Utilizar el prototype que va a cotizar
    const total = seguro.cotizarSeguro();

    ui.mostrarResultado(seguro,total);
}








