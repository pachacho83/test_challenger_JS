/*********************** javascript Basics *******************************/

/*** Sum two numbers (Suma dos números) ***/
// Escribe una función que tome dos números (a y b) como argumento
// Suma a y b
// Devuelve el resultado

const sumar = (a, b) => a +b;
console.log(sumar(1,2), sumar(1,10), sumar(99,1));

/*** Comparison operators, strict equality (Operadores de comparación, igualdad estricta) ***/
// Escribe una función que tome dos valores, digamos a y b, como argumentos
// Devuelve verdadero si los dos valores son iguales y del mismo tipo

const comparar = (a, b) => a === b;
console.log(comparar(2, 3), comparar(3, 3), comparar(1, '1'), comparar('10', '10'));

/*** Get type of value (Obtener tipo de valor) ***/
// Escribir una función que tome un valor como argumento
// Devuelve el tipo del valor

const tipoValor = (a) => typeof a;
console.log(tipoValor(1), tipoValor(false), tipoValor({}), tipoValor(null), tipoValor('string'), tipoValor(['array']));

/*** Get nth character of string (Obtener el carácter n de la cadena) ***/
// Escribir una función que tome una cadena (a) y un número (n) como argumento
// Devuelve el carácter enésimo de 'a'

const devolverCaracter = (a, n) => {
  /*const arrayText = [...a].splice(0,n);
  return arrayText[arrayText.length - 1];*/

  return a[n - 1];
}

console.log(devolverCaracter('abcd',1), devolverCaracter('zyxbwpl',5), devolverCaracter('gfedcba',3));

/*** Remove first n characters of string (Eliminar los primeros n caracteres de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Eliminar los primeros 3 caracteres de un
// Devuelve el resultado

const eliminarCaracteres = (a) => {

  /*return a.substring(3,10);*/
  return a.slice(3);
}

console.log(eliminarCaracteres('abcdefg'), eliminarCaracteres('1234'), eliminarCaracteres('fgedcba'));

/*** Get last n characters of string (Obtener los últimos n caracteres de la cadena) ***/
// Escribir una función que tome una cadena como argumento
// Extrae los últimos 3 caracteres de la cadena
// Devuelve el resultado

const eliminarTresUltimos = (str) => {
  /*return str.substring(str.length -3, str.length);*/
  return str.slice(-3);
}

console.log(eliminarTresUltimos('abcdefg'), eliminarTresUltimos('1234'), eliminarTresUltimos('fgedcba'));

/*** Get first n characters of string (Obtener los primeros n caracteres de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Obtener los primeros 3 caracteres de un
// Devuelve el resultado

const mostrartresPrimeros = (a) => a.slice(0, 3);

console.log(mostrartresPrimeros('abcdefg'), mostrartresPrimeros('1234'), mostrartresPrimeros('fgedcba'));

/*** Extract first half of string (Extraer la primera mitad de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Extrae la primera mitad de un
// Devuelve el resultado

const mitadTexto = (a) => a.slice(0, a.length/2);

console.log(mitadTexto('abcdefgh'), mitadTexto('1234'), mitadTexto('gedcba'));

/*** Remove last n characters of string (Eliminar los últimos n caracteres de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de un
// Devuelve el resultado

const eliminarUltTres = (a) => {
  /*return a.slice(0, a.length -3);*/
  return a.slice(0, -3);
}

console.log(eliminarUltTres('abcdefg'), eliminarUltTres('1234'), eliminarUltTres('fgedcba'));

/*** Return the percentage of a number (Devuelve el porcentaje de un número) ***/
// Escribe una función que tome dos números (a y b) como argumento
// Devuelve b por ciento de a

const porcentajeNum = (a, b) => a * (b/100);

console.log(porcentajeNum(100,50), porcentajeNum(10,1), porcentajeNum(500,25));

/*** Basic JavaScript math operators (Operadores matemáticos básicos de JavaScript) ***/
// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos
// Suma a y b
// Luego restamos por c
// Luego multiplica por d y divide por e
// Finalmente elevamos a la potencia de f y devolvemos el resultado
// Consejo: cuidado con el orden

const variasOperaciones = (a, b, c, d, e, f) => ((((a+b)-c)*d)/e)**f;

console.log(variasOperaciones(6,5,4,3,2,1), variasOperaciones(6,2,1,4,2,3), variasOperaciones(2,3,6,4,2,3));

/*** Check if a number is even (Comprobar si un número es par) ***/

// Escribir una función que tome un número como argumento
// Si el número es par, devuelve verdadero
// De lo contrario, devuelve falso

const siEsPar = (a) => (a % 2 === 0);

console.log(siEsPar(10), siEsPar(-4), siEsPar(5), siEsPar(-111));