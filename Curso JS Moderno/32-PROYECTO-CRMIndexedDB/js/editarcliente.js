( function(){
    let DB;
    let idCliente;

    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();
        //Actualiza el registro
        formulario.addEventListener('submit',actualizarCliente);
        //Verificar el ID de la URL 
        const parametrosURL = new URLSearchParams(window.location.search); //Obtendremos ?id=22332
        idCliente = parametrosURL.get('id');//Obtenemos cada parametro
        // console.log(idCliente);

        if(idCliente){
            setTimeout(() =>{
                obtenerCliente(idCliente);
            },1000);
        }
    });

    function actualizarCliente(e){
        e.preventDefault();

        if(nombreInput.value ===''||telefonoInput.value ===''||emailInput.value ===''||empresaInput.value ===''){
            imprimirAlerta('Todos los campos son obligatorios','error');
            return;
        }

        //Actualizar el cliente 
        const clienteActualizado = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: empresaInput.value,
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crm'],'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clienteActualizado);

        transaction.oncomplete = () =>{
            imprimirAlerta('Editado Correctamente');
            
            setTimeout( () => {
                window.location.href = 'index.html';
            },3000);
        }

        transaction.onerror = () => {
            imprimirAlerta('Hubo un error','error');
        }
    }

    function obtenerCliente(id){
        const transaction = DB.transaction(['crm'],'readwrite');
        const objectStore = transaction.objectStore('crm');
        // console.log(objectStore);

        const cliente = objectStore.openCursor();

        cliente.onsuccess = e =>{
            const cursor = e.target.result;
            if(cursor){
                // console.log(cursor.value);
                if(cursor.value.id === Number(id)){
                    // console.log(cursor.value);
                    llenarFormulario(cursor.value);
                }
                cursor.continue();
            }
        }

    }

    function llenarFormulario(datos){
        const { nombre, email, telefono, empresa } = datos;
        
        nombreInput.value = nombre;
        emailInput.value = email;
        telefonoInput.value = telefono;
        empresaInput.value = empresa;
    }

    function conectarDB(){
        let abrirConexion = window.indexedDB.open('crm', 1);

        // si hay un error, lanzarlo
        abrirConexion.onerror = function() {
            console.log('Hubo un error');
        };
    
        // si todo esta bien, asignar a database el resultado
        abrirConexion.onsuccess = function() {
            // guardamos el resultado
            DB = abrirConexion.result;
        };
    }

})();