/*********************** javascript Basics *******************************/

// Escribe una función que tome dos números (a y b) como argumento
// Suma a y b
// Devuelve el resultado

const sumar = (a, b) => a +b;
console.log(sumar(1,2), sumar(1,10), sumar(99,1));

// Escribe una función que tome dos valores, digamos a y b, como argumentos
// Devuelve verdadero si los dos valores son iguales y del mismo tipo

const comparar = (a, b) => a === b;
console.log(comparar(2, 3), comparar(3, 3), comparar(1, '1'), comparar('10', '10'));

// Escribir una función que tome un valor como argumento
// Devuelve el tipo del valor

const tipoValor = (a) => typeof a;
console.log(tipoValor(1), tipoValor(false), tipoValor({}), tipoValor(null), tipoValor('string'), tipoValor(['array']));

// Escribir una función que tome una cadena (a) y un número (n) como argumento
// Devuelve el carácter enésimo de 'a'

const devolverCaracter = (a, n) => {
  /*const arrayText = [...a].splice(0,n);
  return arrayText[arrayText.length - 1];*/

  return a[n - 1];
}

console.log(devolverCaracter('abcd',1), devolverCaracter('zyxbwpl',5), devolverCaracter('gfedcba',3));

// Escribir una función que tome una cadena (a) como argumento
// Eliminar los primeros 3 caracteres de un
// Devuelve el resultado

const eliminarCaracteres = (a) => {

  /*return a.substring(3,10);*/
  return a.slice(3);
}

console.log(eliminarCaracteres('abcdefg'), eliminarCaracteres('1234'), eliminarCaracteres('fgedcba'));

// Escribir una función que tome una cadena como argumento
// Extrae los últimos 3 caracteres de la cadena
// Devuelve el resultado

const eliminarTresUltimos = (str) => {
  /*return str.substring(str.length -3, str.length);*/
  return str.slice(-3);
}

console.log(eliminarTresUltimos('abcdefg'), eliminarTresUltimos('1234'), eliminarTresUltimos('fgedcba'));

// Escribir una función que tome una cadena (a) como argumento
// Obtener los primeros 3 caracteres de un
// Devuelve el resultado

const mostrartresPrimeros = (a) => a.slice(0, 3);

console.log(mostrartresPrimeros('abcdefg'), mostrartresPrimeros('1234'), mostrartresPrimeros('fgedcba'));

// Escribir una función que tome una cadena (a) como argumento
// Extrae la primera mitad de un
// Devuelve el resultado

const mitadTexto = (a) => a.slice(0, a.length/2);

console.log(mitadTexto('abcdefgh'), mitadTexto('1234'), mitadTexto('gedcba'));

// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de un
// Devuelve el resultado

const eliminarUltTres = (a) => {
  /*return a.slice(0, a.length -3);*/
  return a.slice(0, -3);
}

console.log(eliminarUltTres('abcdefg'), eliminarUltTres('1234'), eliminarUltTres('fgedcba'));