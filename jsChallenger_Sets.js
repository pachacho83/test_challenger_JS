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

/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/
/***  () ***/