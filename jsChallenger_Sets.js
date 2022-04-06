/*** Check if value is present in Set (Compruebe si el valor está presente en Set) ***/
// Escribir una función que tome un Set y un valor como argumentos
// Comprobar si el valor está presente en el Conjunto

const checkValueInSet = (set, val) => set.has(val);
console.log(checkValueInSet(new Set([1, 2, 3]), 2), checkValueInSet(new Set([123]), 2), checkValueInSet(new Set(['1', '2', '3']), '2'), checkValueInSet(new Set('123'), '2'));

/*** Convert a Set to Array (Convertir un conjunto en matriz) ***/
// Escribir una función que tome un Set como argumento
// Convierte el conjunto en una matriz
// Devuelve la matriz

const convertSetToArray = (set) => [...set];
console.log(convertSetToArray(new Set([1, 2, 3])), convertSetToArray(new Set([123])), convertSetToArray(new Set(['1', '2', '3'])), convertSetToArray(new Set('123')));

/*** Get union of two sets (Obtener unión de dos conjuntos.) ***/
// Escribir una función que tome dos Conjuntos como argumentos
// Crear la unión de los dos conjuntos
// Devuelve el resultado
// Consejo: trate de no cambiar a matrices, esto ralentizaría su código

const getUnionSets = (a, b) => new Set([...a, ...b]);
/*Solucion Autor
  const result = new Set(a);
  b.forEach((el) => result.add(el));
  return result;
*/
console.log(getUnionSets(new Set('123'), new Set('234')), getUnionSets(new Set([1, 2, 3]), new Set([3, 4, 5])), getUnionSets(new Set([false, false, NaN]), new Set([true, true, NaN])));

/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/