const diaHoy = new Date();
// const diaHoy = new Date('1-5-2000'); //Es una fecha
// const diaHoy = new Date('January 5 200'); //Es una fecha

let valor;
valor = diaHoy; // Regresa toda la información de date que es un objeto

//Obtener el año
valor = diaHoy.getFullYear(); //Regresa el año actual
valor = diaHoy.getMonth(); //Regresa el mes actual comienza con 0 => enero 1 => febrero
valor = diaHoy.getMinutes(); //Regresa los minutos actuales
valor = diaHoy.getHours(); // Regresa las horas
valor = diaHoy.getTime(); //Son los milisegundos desde el 1 de enero de 1970 hasta la fecha
valor = diaHoy.setFullYear(2010);
valor = diaHoy;
//Convierten las fechas a tu formato
valor = diaHoy.toLocaleString();
valor = diaHoy.toLocaleTimeString();
valor = diaHoy.toLocaleDateString();
console.log( valor);
console.log(typeof valor);









