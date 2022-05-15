//Eventos de formularios

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', validarFormulario);//Aunque no le pasemos un argumento este se pasa de manera automatica

function validarFormulario(e){//Recibe el e
    e.preventDefault();//Hace que al precionar el boton no se redireccione luego luego,ignora el action y el metodo post
    console.log(e);
    console.log(e.target.method);
    console.log(e.target.action);
}







