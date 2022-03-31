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

/*** Get last n elements of an array (Obtener los últimos n elementos de una matriz) ***/
// Escribir una función que tome una matriz (a) como argumento
// Extraer los últimos 3 elementos de un
// Devuelve la matriz resultante
const lastElements = (a) => a.slice(-3);
console.log(lastElements([1,2,3,4]), lastElements([5,4,3,2,1,0]), lastElements([99,1,1]));

/*** Get first n elements of an array (Obtener los primeros n elementos de una matriz) ***/
// Escribir una función que tome una matriz (a) como argumento
// Extrae los primeros 3 elementos de un
// Devuelve la matriz resultante

const firstElementsN = (a) => a.slice(0,3);
console.log(firstElementsN([1,2,3,4]), firstElementsN([5,4,3,2,1,0]), firstElementsN([99,1,1]));

/*** Return last n array elements (Devuelve los últimos n elementos de la matriz) ***/
// Escribe una función que tome una matriz (a) y un número (n) como argumentos
// Debería devolver los últimos n elementos de un

const lastElementsN = (a, n) => a.slice(n * -1); //a.slice(-n);
console.log(lastElementsN([1, 2, 3, 4, 5], 2), lastElementsN([1, 2, 3], 6), lastElementsN([1, 2, 3, 4, 5, 6, 7, 8], 3));

/*** Remove a specific array element (Eliminar un elemento de matriz específico) ***/
// Escribir una función que tome una matriz (a) y un valor (b) como argumento
// La función debe limpiar a de todas las apariciones de b
// Devuelve la matriz filtrada

const removeSpecificElement = (a, b) => a.filter(element => element !== b);
console.log(removeSpecificElement([1,2,3], 2), removeSpecificElement([1,2,'2'], '2'), removeSpecificElement([false,'2',1], false), removeSpecificElement([1,2,'2',1], 1));

/*** Count number of elements in JavaScript array (Cuente el número de elementos en la matriz de JavaScript) ***/
// Escribir una función que tome una matriz (a) como argumento
// Devuelve el número de elementos en un

const numberElements = (a) => a.length;
console.log(numberElements([1,2,2,4]), numberElements([9,9,9]), numberElements([4,3,2,1,0]));

/*** Count number of negative values in array (Cuente el número de valores negativos en la matriz) ***/
// Escribir una función que tome una matriz de números como argumento
// Devuelve el número de valores negativos en la matriz

const countNumberNegative = (a) => a.filter(element => element < 0).length;
console.log(countNumberNegative([1,-2,2,-4]), countNumberNegative([0,9,1]), countNumberNegative([4,-3,2,1,0]));

/*** Sort an array of numbers in descending order (Ordenar una matriz de números en orden descendente) ***/
// Escribir una función que tome una matriz de números como argumento
// Debería devolver una matriz con los números ordenados en orden descendente

const sortArrayDescending = (arr) => arr.sort( (a,b) => b-a );
console.log(sortArrayDescending([1,3,2]), sortArrayDescending([4,2,3,1]));

/*** Sort an array of strings alphabetically (Ordenar una matriz de cadenas alfabéticamente) ***/
// Escribir una función que tome una matriz de cadenas como argumento
// Ordenar alfabéticamente los elementos de la matriz
// Devuelve el resultado

const sortArrayStringsAlphabetically = (arr) => arr.sort();
console.log(sortArrayStringsAlphabetically(['b', 'c', 'd', 'a']), sortArrayStringsAlphabetically(['z', 'c', 'd', 'a', 'y', 'a', 'w']));

/*** Return the average of an array of numbers (Devuelve el promedio de una matriz de números) ***/
// Escribir una función que tome una matriz de números como argumento
// Debería devolver el promedio de los números

const averageArrayNumbers = (arr) => arr.reduce((acum, item) => acum + item, 0) / arr.length;
console.log(averageArrayNumbers([10,100,40]), averageArrayNumbers([10,100,1000]), averageArrayNumbers([-50,0,50,200]));

/*** Return the longest string from an array of strings (Devuelve la cadena más larga de una matriz de cadenas) ***/
// Escribir una función que tome una matriz de cadenas como argumento
// Devuelve la cadena más larga

const longestStringArray = (arr) => arr.reduce((a, b) => a.length <= b.length ? b : a);
console.log(longestStringArray(['help', 'me']), longestStringArray(['I', 'need', 'candy']));

/*** Check if all array elements are equal (Comprobar si todos los elementos de la matriz son iguales) ***/
// Escribir una función que tome una matriz como argumento
// Debería devolver verdadero si todos los elementos de la matriz son iguales
// Debería devolver falso de lo contrario

const checkElementsEqual = (arr) => new Set(arr).size === 1;
console.log(checkElementsEqual([true, true, true, true]), checkElementsEqual(['test', 'test', 'test']), checkElementsEqual([1,1,1,2]), checkElementsEqual(['10',10,10,10]));

/*** Merge an arbitrary number of arrays (Combinar un número arbitrario de matrices) ***/
// Escribir una función que tome argumentos en un número arbitrario de arreglos
// Debería devolver una matriz que contenga los valores de todas las matrices

const mergeArbitraryArrays = (...arrays) => [].concat(...arrays); //arrays.flat();
console.log(mergeArbitraryArrays([1, 2, 3], [4, 5, 6]), mergeArbitraryArrays(['a', 'b', 'c'], [4, 5, 6]), mergeArbitraryArrays([true, true], [1, 2], ['a', 'b']));

/*** Sort array by object property (Ordenar matriz por propiedad de objeto) ***/
// Escribir una función que tome una matriz de objetos como argumento
// Ordenar la matriz por propiedad b en orden ascendente
// Devuelve la matriz ordenada

const sortArrayObject = (arr) => arr[0].b > arr[1].b ? [arr[1], arr[0]] : [arr[0], arr[1]];
console.log(sortArrayObject([{a:1,b:2},{a:5,b:4}]), sortArrayObject([{a:2,b:10},{a:5,b:4}]), sortArrayObject([{a:1,b:7},{a:2,b:1}]));

/*** Merge two arrays with duplicate values (Combinar dos matrices con valores duplicados) ***/
// Escribe una función que tome dos arreglos como argumentos
// Combinar ambas matrices y eliminar valores duplicados
// Ordenar el resultado de la fusión en orden ascendente
// Devuelve la matriz resultante

/*const mergeTwoArraysDuplicateValues = (a, b) => {

  const mergeArray = a.concat(b);
  const deleteDuplicates = new Set(mergeArray);

  return [...deleteDuplicates].sort( (a,b) => a-b );
}*/
const mergeTwoArraysDuplicateValues = (a, b) => [...new Set([...a, ...b])].sort((x, y) => x - y);
console.log(mergeTwoArraysDuplicateValues([1, 2, 3], [3, 4, 5]), mergeTwoArraysDuplicateValues([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

/*** Sum up all array elements with values greater than (Sumar todos los elementos de la matriz con valores mayores que) ***/
// Escribe una función que tome una matriz (a) y un número (b) como argumentos
// Sumar todos los elementos de la matriz con un valor mayor que b
// Devuelve la suma

const sumAllElementsValuesGreater = (a, b) => a.filter(item => item > b).reduce((acum, item) => acum + item, 0);
/*solucion autor
return a.reduce((sum, cur) => {
    if (cur > b) return sum + cur;
    return sum;
  }, 0);
*/
console.log(sumAllElementsValuesGreater([1, 2, 3, 4, 5, 6, 7], 2), sumAllElementsValuesGreater([-10, -11, -3, 1, -4], -3), sumAllElementsValuesGreater([78, 99, 100, 101, 401], 99));

/*** Create a range of numbers (Crear un rango de números) ***/
// Escribe una función que tome dos números (mínimo y máximo) como argumentos
// Devuelve una matriz de números en el rango min a max

const createArrayRangeNumbers = (min, max) => {

  let newArray = [];
  while (min <= max) {
    newArray.push(min);
    min++;
  }

  return newArray;
}
/*solucion autor
  let arr = [];
    for (let i = min; i <= max; i++) {
      arr.push(i);
    }
  return arr;
*/
console.log(createArrayRangeNumbers(2, 10), createArrayRangeNumbers(1, 3), createArrayRangeNumbers(-5, 5), createArrayRangeNumbers(2, 7));

/*** Group array of strings by first letter (Agrupe la matriz de cadenas por primera letra) ***/
// Escribir una función que tome una matriz de cadenas como argumento
// Agrupa esas cadenas por su primera letra
// Devuelve un objeto que contiene propiedades con claves que representan las primeras letras
// Los valores deben ser matrices de cadenas que contengan solo las cadenas correspondientes
// Por ejemplo, la matriz ['Alf', 'Alice', 'Ben'] debe transformarse en
// { a: ['Alfa', 'Alicia'], b: ['Ben']}

const groupArrayStringsFirstLetter = (arr) =>{

  const arrayLetters = arr.map(item => [...item][0].toLowerCase());
  const letterObject = [...new Set(arrayLetters)];

  const objectConstruct = letterObject.map((letter) => {
    return { [letter] : arr.filter(item => [...item][0].toLowerCase() === letter) };
  });

  return Object.assign({}, ...objectConstruct);
}
/*solucion Autor
  return arr.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
*/
console.log(groupArrayStringsFirstLetter(['Alf', 'Alice', 'Ben']), groupArrayStringsFirstLetter(['Ant', 'Bear', 'Bird']), groupArrayStringsFirstLetter(['Berlin', 'Paris', 'Prague']));

/*** Define an array with conditional elements (Definir una matriz con elementos condicionales) ***/
// Escribe una función que tome una matriz con elementos arbitrarios y un número como argumentos
// Devuelve una nueva matriz, el primer elemento debe ser el mismo número dado
// o cero si el número es menor que 6
// Los otros elementos deben ser los elementos de la matriz original
// Intenta no mutar la matriz original

const defineArrayConditionalElements = (arr, num) => {
  arr.unshift(num < 6 ? 0 : num);
  return arr;
}
/*solucion Autor
  return [...(num > 5 ? [num] : [0]), ...arr];
*/
console.log(defineArrayConditionalElements([1,2,3], 6), defineArrayConditionalElements(['a','b'], 2), defineArrayConditionalElements([null,false], 11));

/*** Get every nth element of array (Obtenga cada enésimo elemento de la matriz) ***/
// Escribir una función que tome una matriz (a) y un valor (n) como argumentos
// Guardar cada n-ésimo elemento en una nueva matriz
// Devuelve la nueva matriz

const getEveryElementN = (a, n) => a.filter((item,key) => ((key+1)%n === 0) && item);
/*solucion Autor 
  let rest = [...a];
  let result = [];
  for (let i = 0; i < a.length; i++) {
    if (rest.length < n) break;
    result.push(rest[n - 1]);
    rest = rest.slice(n);
  }
  return result;
*/
console.log(getEveryElementN([1,2,3,4,5,6,7,8,9,10],3), getEveryElementN([10,9,8,7,6,5,4,3,2,1],5), getEveryElementN([7,2,1,6,3,4,5,8,9,10],2));