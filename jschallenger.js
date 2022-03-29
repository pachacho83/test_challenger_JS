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

const devolverCaracter = (a, n) =>  a[n - 1]; /*const arrayText = [...a].splice(0,n); return arrayText[arrayText.length - 1];*/
console.log(devolverCaracter('abcd',1), devolverCaracter('zyxbwpl',5), devolverCaracter('gfedcba',3));

/*** Remove first n characters of string (Eliminar los primeros n caracteres de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Eliminar los primeros 3 caracteres de un
// Devuelve el resultado

const eliminarCaracteres = (a) => a.slice(3); /*return a.substring(3,10);*/
console.log(eliminarCaracteres('abcdefg'), eliminarCaracteres('1234'), eliminarCaracteres('fgedcba'));

/*** Get last n characters of string (Obtener los últimos n caracteres de la cadena) ***/
// Escribir una función que tome una cadena como argumento
// Extrae los últimos 3 caracteres de la cadena
// Devuelve el resultado

const eliminarTresUltimos = (str) => str.slice(-3); /*return str.substring(str.length -3, str.length);*/
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

const eliminarUltTres = (a) => a.slice(0, -3); /*return a.slice(0, a.length -3);*/
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

/*** How many times does a character occur? (¿Cuántas veces aparece un personaje?) ***/
// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b

const vecesAenB = (a, b) => b.split(a).length - 1; /*let contador = 0; for (const letra of b) { (letra.includes(a)) && contador++; } return contador;*/
console.log(vecesAenB('m', 'how many times does the character occur in this sentence?'),
            vecesAenB('h', 'how many times does the character occur in this sentence?'),
            vecesAenB('?', 'how many times does the character occur in this sentence?'),
            vecesAenB('z', 'how many times does the character occur in this sentence?'));

/*** Check if a number is a whole number (Comprobar si un número es un número entero) ***/
// Escribir una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso

const esEntero = (a) => Number.isInteger(a); //(a - Math.floor(a) === 0);
console.log(esEntero(4), esEntero(1.123), esEntero(1048), esEntero(10.48));

/*** Multiplication, division, and comparison operators (Operadores de multiplicación, división y comparación) ***/
// Escribe una función que tome dos números (a y b) como argumentos
// Si a es menor que b, dividimos a por b
// De lo contrario, multiplica ambos números
// Devuelve el valor resultante

const dividirMulti = (a, b) => (a < b) ? a / b : a * b;
console.log(dividirMulti(10, 100), dividirMulti(90, 45), dividirMulti(8, 20), dividirMulti(2, 0.5));

/*** Check whether a string contains another string and concatenate (Comprobar si una cadena contiene otra cadena y concatenar) ***/
// Escribe una función que tome dos cadenas (a y b) como argumentos
// Si a contiene b, agrega b al comienzo de a
// Si no, añádelo al final
// Devuelve la concatenación

const concatenarSi = (a, b) => (a.includes(b)) ? b+a : a+b; //a.indexOf(b) === -1 ? a + b : b + a;
console.log(concatenarSi('cheese', 'cake'), concatenarSi('lips', 's'), concatenarSi('Java', 'script'), concatenarSi(' think, therefore I am', 'I'));

/*** Round a number to 2 decimal places (Redondear un número a 2 decimales) ***/
// Escribir una función que tome un número (a) como argumento
// Redondea a al segundo dígito después de la coma
// Devuelve el número redondeado

const redondearDos = (a) => +(Math.round(a + "e+2")  + "e-2") /*Number(a.toFixed(2)); //No es la mejor forma de redondear*/
console.log(redondearDos(2.12397), redondearDos(3.136), redondearDos(1.12397), redondearDos(26.1379));

/*** Split a number into its digits (Dividir un número en sus dígitos) ***/
// Escribir una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en una matriz
// Consejo: es posible que desee cambiar el tipo de número para la división

const toArrayNumeros = (a) => [...a.toString()].map(numero => Number(numero)); /*const string = a + ''; const strings = string.split(''); return strings.map(digit => Number(digit)); //solucion autor*/
console.log(toArrayNumeros(10), toArrayNumeros(931), toArrayNumeros(193278));

/*** Clear up the chaos behind these strings (Aclarar el caos detrás de estas cuerdas) ***/
// Parece que algo le pasó a estas cadenas
// ¿Puedes descubrir cómo aclarar el caos?
// Escriba una función que una estas cadenas de modo que formen las siguientes palabras:
// 'Javascript', 'Campo' y 'Centro'
// Es posible que desee aplicar métodos básicos de cadena JS como replace(), split(), slice(), etc.

const ordenarCaos = (a, b) => (a.charAt(0).toUpperCase() + a.slice(1).replace('%', '')) +  (b.replace('%', '').split("").reverse().join("")); 
/*const func = x => x.replace('%',''); const first = func(a); const second = func(b).split('').reverse().join(''); return first.charAt(0).toUpperCase() + first.slice(1) + second; //solucion autor*/
console.log(ordenarCaos('java', 'tpi%rcs'), ordenarCaos('c%ountry', 'edis'), ordenarCaos('down', 'nw%ot'));

/*** Return the next higher prime number (Devuelve el siguiente número primo más alto) ***/
// Este desafío es un poco más complejo
// Escribir una función que tome un número (a) como argumento
// Si a es primo, devuelve a
// Si no, devuelve el siguiente número primo más alto

const saberPrimo = (a) => {

  const verificarPrimo = (num) => {

    /*
    // solucion Autor
    function isPrime(num) {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    }
    let n = a;
    while (!isPrime(n)) n++;
    return n
    */

    let numeroMulti = 2;

    for (let i = 2; i < num; i++) {
      ((num % i) === 0) && numeroMulti++;
    }
     return numeroMulti;
  }

  let nuevoNumero = a;

  while(verificarPrimo(nuevoNumero) !== 2)
  {
    nuevoNumero++;
  }

  return nuevoNumero;
}

console.log(saberPrimo(38), saberPrimo(7), saberPrimo(115), saberPrimo(2000));

/*** Find next higher natural number that is divisble by y (Encuentre el siguiente número natural más alto que sea divisible por y) ***/
// Escribe una función que tome dos números, digamos x e y, como argumentos
// Comprobar si x es divisible por y
// Si es así, devuelve x
// Si no, devuelve el siguiente número natural más alto que sea divisible por y

const findNumNatural = (x, y) => {

  /*const verificarEntero = (num) => num % y;
  let nuevoNumero = x;

  while(verificarEntero(nuevoNumero) !== 0)
  {
    nuevoNumero++;
  }

  return nuevoNumero;*/

  while (x % y !== 0) x++;
  return x;
}

console.log(findNumNatural(1, 23), findNumNatural(23, 23), findNumNatural(7, 3), findNumNatural(-5, 7));

/*** Insert character after every n characters (backwards) (Insertar carácter después de cada n caracteres (hacia atrás)) ***/
// Escribe una función que tome dos cadenas (a y b) como argumentos
// Comenzando al final de 'a', inserte 'b' después de cada tercer carácter de 'a'
// Devuelve la cadena resultante

const insertCaracterAtras = (a, b) => {

  const atras = a.split("").reverse().join("");
  let arrayLetras = '';

  for (let i = 0; i < atras.length; i++) {
    
    if(i % 3 === 0 && i > 0) 
      arrayLetras = arrayLetras + b;

    arrayLetras = arrayLetras + atras[i];
  }

  return arrayLetras.split("").reverse().join("");

  /*
  //solucion autor
  let result = [];
  let rest = a;
  while (rest.length) {
    result.push(rest.slice(-3));
    rest = rest.slice(0, -3);
  }
  return result.reverse().join(b);*/
}

console.log(insertCaracterAtras('1234567','.'), insertCaracterAtras('abcde','$'), insertCaracterAtras('zxyzxyzxyzxyzxyz','w'));

/*** Find the correct word by incrementing letters in alphabet (Encuentra la palabra correcta incrementando letras en el alfabeto) ***/
// Escribir una función que tome una cadena como argumento
// Tal como está, la cadena no tiene significado
// Incrementar cada letra a la siguiente letra del alfabeto
// Devuelve la palabra correcta

const nextLetraAbecedario = (str) => {

  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
  let newPalabra = '';
  
  for (const item of str) {

    const indice = abc.indexOf(item);
    newPalabra = newPalabra + abc[indice+1];
  }

  return newPalabra;

  /*
  //solucion autor
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
  */
}

console.log(nextLetraAbecedario('bnchmf'), nextLetraAbecedario('bgddrd'), nextLetraAbecedario('sdrshmf'));


/*********************** javascript Arrays *******************************/

/*** Get nth element of array (Obtener el elemento n de la matriz) ***/
// Escribir una función que tome una matriz (a) y un valor (n) como argumento
// Devuelve el n-ésimo elemento de 'a'

const getElementArray = (a, n) => a[n-1];
console.log(getElementArray([1,2,3,4,5],3), getElementArray([10,9,8,7,6],5), getElementArray([7,2,1,6,3],1));

/*** Remove first n elements of an array (Eliminar los primeros n elementos de una matriz) ***/
// Escribir una función que tome una matriz (a) como argumento
// Elimina los primeros 3 elementos de 'a'
// Devuelve el resultado

const deleteElements = (a) => a.slice(3);
console.log(deleteElements([1,2,3,4]), deleteElements([5,4,3,2,1,0]), deleteElements([99,1,1]));

/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/