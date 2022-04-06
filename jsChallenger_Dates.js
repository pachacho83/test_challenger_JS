/*** Check if two dates are equal (Comprobar si dos fechas son iguales) ***/
// Suena fácil, pero necesitas saber el truco
// Escribe una función que tome dos instancias de fecha como argumentos
// Debería devolver verdadero si las fechas son iguales
// Debería devolver falso de lo contrario

const checkDatesEqual = (a, b) => a.getTime() === b.getTime(); //+a === +b //número de milisegundos transcurridos desde el 1 de Enero de 1970, 00:00:00 UTC
console.log(checkDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')), 
            checkDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')), 
            checkDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

/*** Return the number of days between two dates (Devuelve el número de días entre dos fechas) ***/
// Escribir una función que tome dos instancias de fecha como argumento
// Debería devolver el número de días que hay entre esas fechas

const returnNumberDaysBetweenDates = (a, b) => Math.abs(a-b)/(1000 * 3600 * 24);
/*Solucion Autor
  const dif = Math.abs(a - b);
  return dif / 1000 / 60 / 60 / 24
*/
console.log(returnNumberDaysBetweenDates(new Date('2020-06-11'), new Date('2020-06-01')), returnNumberDaysBetweenDates(new Date('2000-01-01'), new Date('2020-06-01')));

/*** Check if two dates fall on the exact same day (Comprobar si dos fechas caen exactamente en el mismo día) ***/
// Escribir una función que tome dos instancias de fecha como argumento
// Debería volver verdadero si caen exactamente el mismo día
// Debería devolver falso de lo contrario

const checkIfExactSameDay = (a, b) => a.getDay() === b.getDay();
/*Solucion Autor return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate()=== b.getDate()*/
console.log(checkIfExactSameDay(new Date('2000/01/01'), new Date('2000/01/01')),
            checkIfExactSameDay(new Date('2000/01/01'), new Date('2000/01/02')),
            checkIfExactSameDay(new Date('2001/01/01'), new Date('2000/01/01')),
            checkIfExactSameDay(new Date('2000/11/01'), new Date('2000/01/01')));

/*** Check if two dates are within 1 hour from each other (Comprobar si dos fechas están dentro de 1 hora de diferencia) ***/
// Escribir una función que tome dos instancias de fecha como argumento
// Debería devolver verdadero si la diferencia entre las fechas es menor o igual a 1 hora
// Debería devolver falso de lo contrario

const checkIfDifferenceWithinHour = (a, b) => (Math.abs(a-b)/(1000 * 60) <= 60) ? true : false;
/*Solucion Autor return Math.abs(a - b) / 1000 / 60 <= 60*/
console.log(checkIfDifferenceWithinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')),
            checkIfDifferenceWithinHour(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')),
            checkIfDifferenceWithinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00')),
            checkIfDifferenceWithinHour(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00')));

/*** Check if one date is earlier than another (Comprobar si una fecha es anterior a otra) ***/
// Escriba una función que tome dos instancias de fecha (a y b) como argumentos
// Debería devolver verdadero si a es anterior a b
// Debería devolver falso de lo contrario

const checkAnotherDate = (a, b) => ( (a.getTime() - b.getTime()) < 0 ) ? true : false;
/*Solucion Autor a < b*/
console.log(checkAnotherDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')),
            checkAnotherDate(new Date('2000/01/01 08:45:00'), new Date('2000/01/01 08:00:00')),
            checkAnotherDate(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

/*** Add n days to an existing date (Agregar n días a una fecha existente) ***/
// Escribe una función que tome como argumento una instancia de fecha (a) y un número (b)
// Debería agregar b días a a y devolver la cantidad de milisegundos desde el 1 de enero de 1970, 00:00:00 UTC

const addNDaysDate = (a, b) => a.getTime() + (b*1000*24*60*60);
console.log(addNDaysDate(new Date(Date.UTC(2000,01,01)), 31),addNDaysDate(new Date(Date.UTC(2000,01,01)), 10),addNDaysDate(new Date(Date.UTC(2000,02,28,)), 2));
/*Solucion Autor
  const currentDays = a.getDate();
  return a.setDate(currentDays + b)
*/

/***  () ***/
/***  () ***/