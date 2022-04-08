/*********************** javascript Basics *******************************/

/*** Sum two numbers (Suma dos números) ***/
// Escribe una función que tome dos números (a y b) como argumento
// Suma a y b
// Devuelve el resultado

const sumTwoNumbers = (a, b) => a +b;
console.log(sumTwoNumbers(1,2), sumTwoNumbers(1,10), sumTwoNumbers(99,1));

/*** Comparison operators, strict equality (Operadores de comparación, igualdad estricta) ***/
// Escribe una función que tome dos valores, digamos a y b, como argumentos
// Devuelve verdadero si los dos valores son iguales y del mismo tipo

const comparisonStricEquality = (a, b) => a === b;
console.log(comparisonStricEquality(2, 3), comparisonStricEquality(3, 3), comparisonStricEquality(1, '1'), comparisonStricEquality('10', '10'));

/*** Get type of value (Obtener tipo de valor) ***/
// Escribir una función que tome un valor como argumento
// Devuelve el tipo del valor

const getTypeValue = (a) => typeof a;
console.log(getTypeValue(1), getTypeValue(false), getTypeValue({}), getTypeValue(null), getTypeValue('string'), getTypeValue(['array']));

/*** Get nth character of string (Obtener el carácter n de la cadena) ***/
// Escribir una función que tome una cadena (a) y un número (n) como argumento
// Devuelve el carácter enésimo de 'a'

const getCharacterString = (a, n) =>  a[n - 1]; /*const arrayText = [...a].splice(0,n); return arrayText[arrayText.length - 1];*/
console.log(getCharacterString('abcd',1), getCharacterString('zyxbwpl',5), getCharacterString('gfedcba',3));

/*** Remove first n characters of string (Eliminar los primeros n caracteres de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Eliminar los primeros 3 caracteres de un
// Devuelve el resultado

const removeFirstCharacters = (a) => a.slice(3); /*return a.substring(3,10);*/
console.log(removeFirstCharacters('abcdefg'), removeFirstCharacters('1234'), removeFirstCharacters('fgedcba'));

/*** Get last n characters of string (Obtener los últimos n caracteres de la cadena) ***/
// Escribir una función que tome una cadena como argumento
// Extrae los últimos 3 caracteres de la cadena
// Devuelve el resultado

const getLastNCharacters = (str) => str.slice(-3); /*return str.substring(str.length -3, str.length);*/
console.log(getLastNCharacters('abcdefg'), getLastNCharacters('1234'), getLastNCharacters('fgedcba'));

/*** Get first n characters of string (Obtener los primeros n caracteres de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Obtener los primeros 3 caracteres de un
// Devuelve el resultado

const getFirstNCharacters = (a) => a.slice(0, 3);
console.log(getFirstNCharacters('abcdefg'), getFirstNCharacters('1234'), getFirstNCharacters('fgedcba'));

/*** Extract first half of string (Extraer la primera mitad de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Extrae la primera mitad de un
// Devuelve el resultado

const extractFirstHald = (a) => a.slice(0, a.length/2);
console.log(extractFirstHald('abcdefgh'), extractFirstHald('1234'), extractFirstHald('gedcba'));

/*** Remove last n characters of string (Eliminar los últimos n caracteres de la cadena) ***/
// Escribir una función que tome una cadena (a) como argumento
// Eliminar los últimos 3 caracteres de un
// Devuelve el resultado

const removeLastNCharacters = (a) => a.slice(0, -3); /*return a.slice(0, a.length -3);*/
console.log(removeLastNCharacters('abcdefg'), removeLastNCharacters('1234'), removeLastNCharacters('fgedcba'));

/*** Return the percentage of a number (Devuelve el porcentaje de un número) ***/
// Escribe una función que tome dos números (a y b) como argumento
// Devuelve b por ciento de a

const percentageNumber = (a, b) => a * (b/100);
console.log(percentageNumber(100,50), percentageNumber(10,1), percentageNumber(500,25));

/*** Basic JavaScript math operators (Operadores matemáticos básicos de JavaScript) ***/
// Escribe una función que tome 6 valores (a,b,c,d,e,f) como argumentos
// Suma a y b
// Luego restamos por c
// Luego multiplica por d y divide por e
// Finalmente elevamos a la potencia de f y devolvemos el resultado
// Consejo: cuidado con el orden

const mathOperators = (a, b, c, d, e, f) => ((((a+b)-c)*d)/e)**f;
console.log(mathOperators(6,5,4,3,2,1), mathOperators(6,2,1,4,2,3), mathOperators(2,3,6,4,2,3));

/*** Check if a number is even (Comprobar si un número es par) ***/

// Escribir una función que tome un número como argumento
// Si el número es par, devuelve verdadero
// De lo contrario, devuelve falso

const ifNumberEven = (a) => (a % 2 === 0);
console.log(ifNumberEven(10), ifNumberEven(-4), ifNumberEven(5), ifNumberEven(-111));

/*** How many times does a character occur? (¿Cuántas veces aparece un personaje?) ***/
// Escribe una función que tome dos cadenas (a y b) como argumentos
// Devuelve el numero de veces que a ocurre en b

const howTimesCharacter = (a, b) => b.split(a).length - 1; /*let contador = 0; for (const letra of b) { (letra.includes(a)) && contador++; } return contador;*/
console.log(howTimesCharacter('m', 'how many times does the character occur in this sentence?'),
            howTimesCharacter('h', 'how many times does the character occur in this sentence?'),
            howTimesCharacter('?', 'how many times does the character occur in this sentence?'),
            howTimesCharacter('z', 'how many times does the character occur in this sentence?'));

/*** Check if a number is a whole number (Comprobar si un número es un número entero) ***/
// Escribir una función que tome un número (a) como argumento
// Si a es un número entero (no tiene lugar decimal), devuelve verdadero
// De lo contrario, devuelve falso

const checkNumberWhole = (a) => Number.isInteger(a); //(a - Math.floor(a) === 0);
console.log(checkNumberWhole(4), checkNumberWhole(1.123), checkNumberWhole(1048), checkNumberWhole(10.48));

/*** Multiplication, division, and comparison operators (Operadores de multiplicación, división y comparación) ***/
// Escribe una función que tome dos números (a y b) como argumentos
// Si a es menor que b, dividimos a por b
// De lo contrario, multiplica ambos números
// Devuelve el valor resultante

const multiplicationDivisionComparison = (a, b) => (a < b) ? a / b : a * b;
console.log(multiplicationDivisionComparison(10, 100), multiplicationDivisionComparison(90, 45), multiplicationDivisionComparison(8, 20), multiplicationDivisionComparison(2, 0.5));

/*** Check whether a string contains another string and concatenate (Comprobar si una cadena contiene otra cadena y concatenar) ***/
// Escribe una función que tome dos cadenas (a y b) como argumentos
// Si a contiene b, agrega b al comienzo de a
// Si no, añádelo al final
// Devuelve la concatenación

const concatenateStrings = (a, b) => (a.includes(b)) ? b+a : a+b; //a.indexOf(b) === -1 ? a + b : b + a;
console.log(concatenateStrings('cheese', 'cake'), concatenateStrings('lips', 's'), concatenateStrings('Java', 'script'), concatenateStrings(' think, therefore I am', 'I'));

/*** Round a number to 2 decimal places (Redondear un número a 2 decimales) ***/
// Escribir una función que tome un número (a) como argumento
// Redondea a al segundo dígito después de la coma
// Devuelve el número redondeado

const roundNumberTwoDecimal = (a) => +(Math.round(a + "e+2")  + "e-2") /*Number(a.toFixed(2)); //No es la mejor forma de redondear*/
console.log(roundNumberTwoDecimal(2.12397), roundNumberTwoDecimal(3.136), roundNumberTwoDecimal(1.12397), roundNumberTwoDecimal(26.1379));

/*** Split a number into its digits (Dividir un número en sus dígitos) ***/
// Escribir una función que tome un número (a) como argumento
// Dividir a en sus dígitos individuales y devolverlos en una matriz
// Consejo: es posible que desee cambiar el tipo de número para la división

const splitNumberDigits = (a) => [...a.toString()].map(numero => Number(numero)); /*const string = a + ''; const strings = string.split(''); return strings.map(digit => Number(digit)); //solucion autor*/
console.log(splitNumberDigits(10), splitNumberDigits(931), splitNumberDigits(193278));

/*** Clear up the chaos behind these strings (Aclarar el caos detrás de estas cuerdas) ***/
// Parece que algo le pasó a estas cadenas
// ¿Puedes descubrir cómo aclarar el caos?
// Escriba una función que una estas cadenas de modo que formen las siguientes palabras:
// 'Javascript', 'Campo' y 'Centro'
// Es posible que desee aplicar métodos básicos de cadena JS como replace(), split(), slice(), etc.

const clearChaosStrings = (a, b) => (a.charAt(0).toUpperCase() + a.slice(1).replace('%', '')) +  (b.replace('%', '').split("").reverse().join("")); 
/*const func = x => x.replace('%',''); const first = func(a); const second = func(b).split('').reverse().join(''); return first.charAt(0).toUpperCase() + first.slice(1) + second; //solucion autor*/
console.log(clearChaosStrings('java', 'tpi%rcs'), clearChaosStrings('c%ountry', 'edis'), clearChaosStrings('down', 'nw%ot'));

/*** Return the next higher prime number (Devuelve el siguiente número primo más alto) ***/
// Este desafío es un poco más complejo
// Escribir una función que tome un número (a) como argumento
// Si a es primo, devuelve a
// Si no, devuelve el siguiente número primo más alto

const nextHigherPrimeNumber = (a) => {

  const checkPrime = (num) => {

    let numberMultiplication = 2;

    for (let i = 2; i < num; i++) {
      ((num % i) === 0) && numberMultiplication++;
    }
     return numberMultiplication;
  }

  let newNumber = a;

  while(checkPrime(newNumber) !== 2)
  {
    newNumber++;
  }

  return newNumber;
}
/*Solucion Autor
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
console.log(nextHigherPrimeNumber(38), nextHigherPrimeNumber(7), nextHigherPrimeNumber(115), nextHigherPrimeNumber(2000));

/*** Find next higher natural number that is divisble by y (Encuentre el siguiente número natural más alto que sea divisible por y) ***/
// Escribe una función que tome dos números, digamos x e y, como argumentos
// Comprobar si x es divisible por y
// Si es así, devuelve x
// Si no, devuelve el siguiente número natural más alto que sea divisible por y

const findNextHigherNaturalNumber = (x, y) => {

  /*const checkWhole = (num) => num % y;
  let newNumber = x;

  while(checkWhole(newNumber) !== 0)
  {
    newNumber++;
  }

  return newNumber;*/

  while (x % y !== 0) x++;
  return x;
}
console.log(findNextHigherNaturalNumber(1, 23), findNextHigherNaturalNumber(23, 23), findNextHigherNaturalNumber(7, 3), findNextHigherNaturalNumber(-5, 7));

/*** Insert character after every n characters (backwards) (Insertar carácter después de cada n caracteres (hacia atrás)) ***/
// Escribe una función que tome dos cadenas (a y b) como argumentos
// Comenzando al final de 'a', inserte 'b' después de cada tercer carácter de 'a'
// Devuelve la cadena resultante

const insertCharacterAfterEveryN = (a, b) => {

  const back = a.split("").reverse().join("");
  let arrayLetters = '';

  for (let i = 0; i < back.length; i++) {
    
    if(i % 3 === 0 && i > 0) 
      arrayLetters = arrayLetters + b;

    arrayLetters = arrayLetters + back[i];
  }

  return arrayLetters.split("").reverse().join("");

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
console.log(insertCharacterAfterEveryN('1234567','.'), insertCharacterAfterEveryN('abcde','$'), insertCharacterAfterEveryN('zxyzxyzxyzxyzxyz','w'));

/*** Find the correct word by incrementing letters in alphabet (Encuentra la palabra correcta incrementando letras en el alfabeto) ***/
// Escribir una función que tome una cadena como argumento
// Tal como está, la cadena no tiene significado
// Incrementar cada letra a la siguiente letra del alfabeto
// Devuelve la palabra correcta

const findCorrectWord = (str) => {

  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'x', 'y', 'z'];
  let newWord = '';
  
  for (const item of str) {

    const indice = abc.indexOf(item);
    newWord = newWord + abc[indice+1];
  }

  return newWord;

  /*
  //solucion autor
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
  */
}
console.log(findCorrectWord('bnchmf'), findCorrectWord('bgddrd'), findCorrectWord('sdrshmf'));