// TEST 1
/*
Se requiere una función que según una palabra ingresada
identifique y muestre la cantidad de vocales encontradas

Ej: 
 palabra = "Hola mundO"
 Vocales encontradas 4
*/

const vocales = ["a", "e", "i", "o", "u"];

const saberVocales = (frase) => {

    let contadorVocales = 0;

    for (let palabras of frase.toLowerCase()) {
      if (vocales.includes(palabras))
        contadorVocales++;
    }

    return contadorVocales;
}

const text = "hola mundo";
const totalVocales = saberVocales(text);

console.log(`Numero de Vocales ${ totalVocales }`);

//TEST 2
/*
Se requiere se cree un metodo identico al forEach de "Lodash"
que recorra de igual manera Arreglos como Objetos

Ej:
    arr = [1, 'a', 3, 'b', 5]
    forEach(arr, (value, key) =>{
        console.log(value) // 1 a 3 b 5
    })
    
    obj = { a: 1, b: 2, c: 5, d: 'a'}
    forEach(obj, (value, key) =>{
        console.log(value) // 1 2 5 a
    })
*/

const obj = { a: 1, b: 2, c: 5, d: 'a'};
const objValues = (obj) => Object.entries(obj).reduce((acc, [key, val]) => [...acc, val], []);
console.log(objValues(obj));

//cuantas palabras empieza con a

const palabras = ['andrea', 'olga', 'lalo', 'fernando', 'osvaldo', 'angela', 'melanie'];

const comienzaConA = (arrayPalabra) => {

  let contador = 0;

  for (const item of arrayPalabra) {
    if([...item][0].toLowerCase() === 'a')
      contador++;
  }

  return contador;
}

console.log(`Numero de palabras que empiezan con A son:  ${ comienzaConA(palabras) }`);

p.replaceAll()
string.replace(/[.*+\-?^${}()|[\]\\]/g,'\\$&');

/*** Sum two numbers (Suma dos números) ***/
const sumTwoNumbers = (a, b) => a +b;
/*** Comparison operators, strict equality (Operadores de comparación, igualdad estricta) ***/
const comparisonStricEquality = (a, b) => a === b;
/*** Get type of value (Obtener tipo de valor) ***/
const getTypeValue = (a) => typeof a;
/*** Get nth character of string (Obtener el carácter n de la cadena) ***/
const getCharacterString = (a, n) =>  a[n - 1]; /*const arrayText = [...a].splice(0,n); return arrayText[arrayText.length - 1];*/
/*** Remove first n characters of string (Eliminar los primeros n caracteres de la cadena) ***/
const removeFirstCharacters = (a) => a.slice(3); /*return a.substring(3,10);*/
/*** Get last n characters of string (Obtener los últimos n caracteres de la cadena) ***/
const getLastNCharacters = (str) => str.slice(-3); /*return str.substring(str.length -3, str.length);*/
/*** Get first n characters of string (Obtener los primeros n caracteres de la cadena) ***/
const getFirstNCharacters = (a) => a.slice(0, 3);
/*** Extract first half of string (Extraer la primera mitad de la cadena) ***/
const extractFirstHald = (a) => a.slice(0, a.length/2);
/*** Remove last n characters of string (Eliminar los últimos n caracteres de la cadena) ***/
const removeLastNCharacters = (a) => a.slice(0, -3); /*return a.slice(0, a.length -3);*/
/*** Return the percentage of a number (Devuelve el porcentaje de un número) ***/
const percentageNumber = (a, b) => a * (b/100);
/*** Basic JavaScript math operators (Operadores matemáticos básicos de JavaScript) ***/
const mathOperators = (a, b, c, d, e, f) => ((((a+b)-c)*d)/e)**f;
/*** Check if a number is even (Comprobar si un número es par) ***/
const ifNumberEven = (a) => (a % 2 === 0);
/*** How many times does a character occur? (¿Cuántas veces aparece un personaje?) ***/
const howTimesCharacter = (a, b) => b.split(a).length - 1; /*let contador = 0; for (const letra of b) { (letra.includes(a)) && contador++; } return contador;*/
/*** Check if a number is a whole number (Comprobar si un número es un número entero) ***/
const checkNumberWhole = (a) => Number.isInteger(a); //(a - Math.floor(a) === 0);
/*** Multiplication, division, and comparison operators (Operadores de multiplicación, división y comparación) ***/
const multiplicationDivisionComparison = (a, b) => (a < b) ? a / b : a * b;
/*** Check whether a string contains another string and concatenate (Comprobar si una cadena contiene otra cadena y concatenar) ***/
const concatenateStrings = (a, b) => (a.includes(b)) ? b+a : a+b; //a.indexOf(b) === -1 ? a + b : b + a;
/*** Round a number to 2 decimal places (Redondear un número a 2 decimales) ***/
const roundNumberTwoDecimal = (a) => +(Math.round(a + "e+2")  + "e-2") /*Number(a.toFixed(2)); //No es la mejor forma de redondear*/
/*** Split a number into its digits (Dividir un número en sus dígitos) ***/
const splitNumberDigits = (a) => [...a.toString()].map(numero => Number(numero)); /*const string = a + ''; const strings = string.split(''); return strings.map(digit => Number(digit)); //solucion autor*/
/*** Clear up the chaos behind these strings (Aclarar el caos detrás de estas cuerdas) ***/
const clearChaosStrings = (a, b) => (a.charAt(0).toUpperCase() + a.slice(1).replace('%', '')) +  (b.replace('%', '').split("").reverse().join("")); 
/*** Return the next higher prime number (Devuelve el siguiente número primo más alto) ***/
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
/*** Find next higher natural number that is divisble by y (Encuentre el siguiente número natural más alto que sea divisible por y) ***/
const findNextHigherNaturalNumber = (x, y) => {

  while (x % y !== 0) x++;
  return x;
}
/*** Insert character after every n characters (backwards) (Insertar carácter después de cada n caracteres (hacia atrás)) ***/
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
/*** Find the correct word by incrementing letters in alphabet (Encuentra la palabra correcta incrementando letras en el alfabeto) ***/
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