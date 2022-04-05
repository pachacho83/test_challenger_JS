/*** Check if two dates are equal (Comprobar si dos fechas son iguales) ***/
// Suena fácil, pero necesitas saber el truco
// Escribe una función que tome dos instancias de fecha como argumentos
// Debería devolver verdadero si las fechas son iguales
// Debería devolver falso de lo contrario

const checkDatesEqual = (a, b) => a.getTime() === b.getTime(); //+a === +b
console.log(checkDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')), 
            checkDatesEqual(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')), 
            checkDatesEqual(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00')));

/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/