//Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


//Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    formulario.addEventListener('submit',agregarGasto);
}

//Clases

class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    nuevoGasto(gasto){
        this.gastos = [...this.gastos,gasto];
        // console.log(this.gastos);
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total,gastoObj) => total + gastoObj.cantidad,0);
        // console.log('gastado'+gastado);
        this.restante = this.presupuesto - gastado;
        console.log(this.restante);
    }
    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        // console.log(this.gastos);
        this.calcularRestante();
    }
}

class UI{
    insertarPresupuesto(objetoPresupuesto){
        //Extrayendo el valor
        const {presupuesto,restante} = objetoPresupuesto;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante
    }
    imprimirAlerta(mensaje,tipo){
        //Crear el div
        const divMensaje = document.createElement('DIV');
        divMensaje.classList.add('text-center','alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        }else{
            divMensaje.classList.add('alert-success')
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;
        //Insertar en el HTML
        document.querySelector('.primario').insertBefore(divMensaje,formulario);

        //Quitar del HTML

        setTimeout( () => {
            divMensaje.remove();
        },1000);
    }
    agregarGastoListado(gastos){
        //Iterar sobre los gastos
        this.limpiarHTML(); //Elimina el HTML previo
        gastos.forEach( gasto => {
            const {cantidad,nombre,id} = gasto;
            //Crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;
            //Agreagr el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;
            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn','btn-danger','borrar-gasto');
            btnBorrar.innerHTML = 'Borrar &times';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            };
            nuevoGasto.appendChild(btnBorrar);
            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }
    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }
    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }
    comprobarPresupuesto(presupuestoObj){
        const{presupuesto,restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        //Comprobar 25%
        if((presupuesto / 4) > restante){
            restanteDiv.classList.remove('alert-success','alert-warning');
            restanteDiv.classList.add('alert-danger');
        }else if((presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        }else{
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
        }
        //Si el total es 0 o menor
        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}
//Instanciar
const ui = new UI();

let presupuesto;

//Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){
        window.location.reload();
    }

    //Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);
    ui.insertarPresupuesto(presupuesto);
}
//Añade gastos
function agregarGasto(e){
    e.preventDefault();

    //Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    //Validar
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
        return;
    }else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida','error');
        return;
    }
    //Generar un objeto con el gasto
    const gasto = {nombre,cantidad,id: Date.now()}; //Creamos un objeto, esto es lo contrario al destruc
    // console.log(gasto);
    presupuesto.nuevoGasto(gasto);
    //Mensaje de todo bien
    ui.imprimirAlerta('Gasto agregado Correctamente');
    //Imprimir los gastos
    const {gastos,restante} = presupuesto;
    ui.agregarGastoListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
    //Reinicia el formulario
    formulario.reset();
    
}

function eliminarGasto(id){
    //Elimina del objeto
    presupuesto.eliminarGasto(id);
    //Elimina los gastos del HTML
    const {gastos,restante} = presupuesto;
    ui.agregarGastoListado(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);
}