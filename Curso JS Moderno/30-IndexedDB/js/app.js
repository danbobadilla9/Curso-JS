let DB;
document.addEventListener('DOMContentLoaded',() => {
    crmDB();
    setTimeout(() => {
        crearCliente();
    },5000);
})
//Obtener todos los metodos vamos al navegador y pones en la consola window.indexedDB
function crmDB(){
    //Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm',1);
    //Si hay un error
    crmDB.onerror = function(){
        console.log('Hubo un error la crear la base de datos ');
    }
    //Si se creo bien 
    crmDB.onsuccess = () => {
        console.log('Base de datos creada ');
        DB = crmDB.result;
    }
    //Configuracion de la base de datos 

    crmDB.onupgradeneeded = function(e){//Se ejecuta al crear la base de datos 
        // console.log('Solo se ejecuta una vez ');
        // console.log(e.target.result);
        const db = e.target.result;
        //Definimos el object store
        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true
        });
        //Definir las columnas 
        objectStore.createIndex('name','nombre',{unique:false});
        objectStore.createIndex('email','correo',{unique:false});
        objectStore.createIndex('telefono','numero',{unique:false});
        console.log('Columnas creadas ');
    }
}

function crearCliente(){
    //Para trabajar con indexDB se hace por medio de transacciones 
    let transaction = DB.transaction(['crm'],'readwrite');//Se le indica en que BD y el modo
    transaction.oncomplete = () => {
        console.log('Transacción completada ');
    } 
    
    transaction.onerror = function(){
        console.log('Hubo un error en la transaccion ');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 16554,
        nombre: 'Dan',
        email: 'dan@hotmail.com'
    }
    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}