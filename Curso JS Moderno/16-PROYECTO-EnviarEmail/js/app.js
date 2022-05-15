//Variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');
//Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners(){
    //Cuando la app arranca
    document.addEventListener('DOMContentLoaded',iniciarApp);
    //Campos del formulario

    email.addEventListener('blur',validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur',validarFormulario);
    //Reinicia el formulario
    btnReset.addEventListener('click',resetearFormulario);
    //Enviar Email
    formulario.addEventListener('submit',enviarEmail);
}

//Funciones

function iniciarApp() {
    btnEnviar.disable = true;
    btnEnviar.classList.add('cursor-not-allowed','opacity-50');
}

//Valida el formulario

function validarFormulario(e){
    if(e.target.value.length > 0){
        //Elimina los errores...

        const error = document.querySelector('p.error');
        if(error !== null){
            error.remove();
        }
        // console.log(e.target.value);
        e.target.classList.remove('border','border-red-500');
        e.target.classList.add('border','border-green-500');
    }else{
        // e.target.style.borderBottomColor = 'red';
        e.target.classList.remove('border','border-green-500');
        e.target.classList.add('border','border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(e.target.type === 'email'){
        //Uso de expresiones regulares
        if(!er.test( e.target.value )){
            e.target.classList.remove('border','border-green-500');
            e.target.classList.add('border','border-red-500');
            mostrarError('El email no es valido');
        }else{
            const error = document.querySelector('p.error');
            if(error !== null){
                error.remove();
            }
            e.target.classList.remove('border','border-red-500');
            e.target.classList.add('border','border-green-500');
        }
    }
    if(er.test( email.value ) && asunto.value !== '' && mensaje.value !== ''){
        btnEnviar.disable = false;
        btnEnviar.classList.remove('cursor-not-allowed','opacity-50');
    }
}


function mostrarError(mensaje){
    const mensajeError = document.createElement('P');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border','border-red-500','backgroud-red-100','text-red-500','p-3','mt-5','text-center','error');
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
    }
}

//Enviar Email
function enviarEmail(e ){
    e.preventDefault();
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';
    //Despues de 3 segundos ocultar el spinner
    //Solo se ejecuta una vez
    setTimeout( () => {
        spinner.style.display = 'none';
        const parrafo = document.createElement('P');
        parrafo.textContent = 'El mensaje se envio Correctamente';
        parrafo.classList.add('text-center','my-10','p-2','bg-green-500','text-white','uppercase','font-bold');
        formulario.insertBefore(parrafo,spinner);
        setTimeout( () => {
            parrafo.remove();
            resetearFormulario();
        },1000);
    },3000);
    //Cada 3 segundos se va ejecutando
    // setInterval( () => {

    // });
}

//Funcion que resetea el formulario
function resetearFormulario(){
    formulario.reset();
    iniciarApp();
}

