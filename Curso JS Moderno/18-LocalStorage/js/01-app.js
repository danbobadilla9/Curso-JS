//Veremos como agregar elementos al localStorage
//  (Llave,valor)
//Solo almacena Strings
localStorage.setItem('nombre','dan');
localStorage.setItem('nombre',1);
//En google Chrome se encuentra F2 en application y en Local Storage es el mas persistente aunque apagues la pc
//Session Storage son datos de sesion que solo funcionan mientras navegas en internet y se borran cuando cierras el navegador
//Almacenamiento de session
sessionStorage.setItem('nombre','israel');

const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300
}

//Para almacenarlo en Local necesitamos pasarlo a json

const productoString = JSON.stringify( producto );
console.log(typeof productoString);

localStorage.setItem('producto',productoString);

const meses = ['enero','febrero','marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses',mesesString);


