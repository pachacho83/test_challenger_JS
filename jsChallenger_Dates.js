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
/*Solucion Autor
  const currentDays = a.getDate();
  return a.setDate(currentDays + b)
*/
console.log(addNDaysDate(new Date(Date.UTC(2000,01,01)), 31),addNDaysDate(new Date(Date.UTC(2000,01,01)), 10),addNDaysDate(new Date(Date.UTC(2000,02,28,)), 2));

/*** Calculate difference between two dates in hours, minutes, and seconds (Calcula la diferencia entre dos fechas en horas, minutos y segundos) ***/
// Este es un desafío más difícil
// Escribe una función que tome dos instancias de fecha como argumentos
// Debería devolver un objeto con las propiedades 'hrs', 'min' y 'sec'
// Los valores correspondientes deben mostrar la diferencia absoluta entre las dos fechas en horas, minutos y segundos

const calculateDifferenceBetweenDates = (a, b) => {

  const milliseconds = (Math.abs(a-b));
  const hrs =  parseInt((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const min = parseInt((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const sec = (milliseconds % (1000 * 60)) / 1000;

  return { hrs, min, sec };
};
/*Solucion Autor
  const dif = Math.abs(a - b);
  const hrs = Math.floor(dif / 1000 / 60 / 60);
  const min = Math.floor(dif / 1000 / 60) % (hrs * 60 || 60);
  const sec = Math.floor(dif / 1000) % (min * 60 + hrs * 60 * 60 || 60);
  return { hrs, min, sec }
*/
console.log(calculateDifferenceBetweenDates(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')),
            calculateDifferenceBetweenDates(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')),
            calculateDifferenceBetweenDates(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')));

/*** Return the next nearest quarter hour of a date (Devuelve el próximo cuarto de hora más cercano de una fecha) ***/
// Escribir una función que tome una instancia de Fecha como argumento
// Debería devolver el próximo cuarto de hora más cercano en minutos
// Por ejemplo, si la fecha dada tiene la hora 10:01, la función debería devolver 15

const returnNextNearestQuarterHour = (date) => {
  
  let minutes = date.getMinutes();
  while (minutes % 15 !== 0) minutes++;
  return minutes;
}
/*Solucion Autor
  const quarter = 15 * 60 * 1000;
  const closestQuarter = new Date(Math.round(date / quarter) * quarter);
  const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
  return nextQuarter.getMinutes();
*/
console.log(returnNextNearestQuarterHour(new Date(2021, 8, 10, 15, 14, 00)), returnNextNearestQuarterHour(new Date(2021, 8, 10, 15, 31, 00)), 
            returnNextNearestQuarterHour(new Date(2021, 8, 10, 15, 22, 00)));
