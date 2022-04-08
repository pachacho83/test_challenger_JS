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

/*** Creating Javascript Sets (Creación de conjuntos de Javascript) ***/
// Escribe una función que tome tres elementos de cualquier tipo como argumentos
// Crear un Conjunto a partir de esos elementos
// Devuelve el resultado

const creatingSets = (a, b, c) => new Set([a, b, c]);
/*Solucion Autor
  const set = new Set();
  set.add(a);
  set.add(b);
  set.add(c);
  return set;
*/
console.log(creatingSets(1, 'b', 3), creatingSets(NaN, null, false), creatingSets('a', ['b'], { c: 3 }));

/*** Delete element from Set (Eliminar elemento del conjunto) ***/
// Escribir una función que tome un Set y un valor como argumento
// Si existe en el Conjunto, elimina el valor del Conjunto
// Devuelve el resultado

const deleteElementSets = (set, val) => {
  set.delete(val); 
  return set;
}
console.log(deleteElementSets(new Set([1, 2, 3]), 1), deleteElementSets(new Set('12345'), '3'), deleteElementSets(new Set([1, 2, 3]), 4));

/*** Add multiple elements to Set (Agregar múltiples elementos al Conjunto) ***/
// Escribir una función que tome un Conjunto y una matriz como argumentos
// Si aún no existe, agregue cada elemento de la matriz al Conjunto
// Devolver el Conjunto modificado


/*** Get Intersection of two Javascript Sets (Obtenga la intersección de dos conjuntos de Javascript) ***/
// Escribe una función que tome dos conjuntos (a y b) como argumentos
// Obtener la intersección de los conjuntos
// En otras palabras, devuelve un conjunto que contiene todos los elementos que están tanto en a como en b