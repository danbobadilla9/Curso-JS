const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto','Septiembre'];
const meses3 = ['Octubre','Noviembre','Diciembre'];


//Unir dos arreglos: Importa el orden en que se van concatenando los arreglos

const resultado = meses.concat(meses2,meses3,'Otro mes');
console.log(resultado);

//Spread Operator

const resultado2 = [...meses,...meses2,...meses3,...'Otro mes','Año nuevo'];
console.log(resultado2);






