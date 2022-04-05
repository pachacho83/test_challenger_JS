/*** Check if two dates are equal (Comprobar si dos fechas son iguales) ***/
// Suena fácil, pero necesitas saber el truco
// Escribe una función que tome dos instancias de fecha como argumentos
// Debería devolver verdadero si las fechas son iguales
// Debería devolver falso de lo contrario

const checkDatesEqual = (a, b) => a.getTime() === b.getTime(); //+a === +b
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

/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/