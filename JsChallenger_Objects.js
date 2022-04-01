/*********************** javascript Objects *******************************/

/*** Accessing object properties one (Accediendo a las propiedades del objeto uno) ***/
// Escribir una función que tome un objeto con dos propiedades como argumento
// Debe devolver el valor de la propiedad con clave país

const accessingProperties = (obj) => obj.country;
console.log(accessingProperties({  continent: 'Asia',  country: 'Japan'}), accessingProperties({  country: 'Sweden',  continent: 'Europe'}));

/*** Accessing object properties two (Acceso a las propiedades del objeto dos) ***/
// Escribir una función que tome un objeto con dos propiedades como argumento
// Debería devolver el valor de la propiedad con clave 'prop-2'
// Sugerencia: es posible que desee utilizar el acceso a la propiedad de corchetes

const accessingPropertiesTwo = (obj) => obj['prop-2'];
console.log(accessingPropertiesTwo({  one: 1,  'prop-2': 2}), accessingPropertiesTwo({  'prop-2': 'two',  prop: 'test'}));

/*** Accessing object properties three (Acceso a las propiedades del objeto tres) ***/
// Escribir una función que tome un objeto con dos propiedades y una cadena como argumentos
// Debe devolver el valor de la propiedad con clave igual al valor de la cadena

const accessingPropertiesThree = (obj, key) => obj[key];
console.log(accessingPropertiesThree({  continent: 'Asia',  country: 'Japan'}, 'continent'), 
            accessingPropertiesThree({  country: 'Sweden',  continent: 'Europe'}, 'country'));

/*** Check if property exists in object (Comprobar si la propiedad existe en el objeto) ***/
// Escribir una función que tome un objeto (a) y una cadena (b) como argumento
// Devuelve verdadero si a tiene una propiedad con clave b
// Devuelve falso en caso contrario

const checkPropertyExists = (a, b) => (Object.keys(a).indexOf(b) > 0 ) ? true : false; /*solucion Autor b in a;*/
console.log(checkPropertyExists({a:1,b:2,c:3},'b'), checkPropertyExists({x:'a',y:'b',z:'c'},'a'), checkPropertyExists({x:'a',y:'b',z:'c'},'z'));

/*** Creating Javascript objects one (Creación de objetos Javascript uno) ***/
// Escribir una función que tenga una cadena (a) como argumento
// Crear un objeto que tenga una propiedad con clave 'clave' y un valor de a
// Devolver el objeto

const creatingObjects = (a) => new Object({ key: a});
console.log(creatingObjects('a'), creatingObjects('z'), creatingObjects('b'));

/*** Creating Javascript objects two (Creando objetos Javascript dos) ***/
// Escribe una función que tome dos cadenas (a y b) como argumentos
// Crear un objeto que tenga una propiedad con la clave 'a' y un valor de 'b'
// Devolver el objeto

const creatingObjectsTwo = (a, b) => new Object({ [a] : b });
console.log(creatingObjectsTwo('a','b'), creatingObjectsTwo('z','x'), creatingObjectsTwo('b','w'));

/*** Creating Javascript objects three (Creación de objetos Javascript tres) ***/
// Escribe una función que tome dos arreglos (a y b) como argumentos
// Crear un objeto que tenga propiedades con claves 'a' y valores correspondientes 'b'
// Devolver el objeto

const creatingObjectsThree = (a, b) => a.reduce((acc, item, key) => ({ ...acc, [item]: b[key] }), {});
console.log(creatingObjectsThree(['a','b','c'],[1,2,3]), creatingObjectsThree(['w','x','y','z'],[10,9,5,2]), creatingObjectsThree([1,'b'],['a',2]));

/*** Extract keys from Javascript object (Extraer claves del objeto Javascript) ***/
// Escribir una función que tome un objeto (a) como argumento
// Devolver una matriz con todas las claves de objeto

const extractKeysObjects = (a) => Object.keys(a);
console.log(extractKeysObjects({a:1,b:2,c:3}), extractKeysObjects({j:9,i:2,x:3,z:4}), extractKeysObjects({w:15,x:22,y:13}));

/*** Sum object values (Sumar valores de objeto) ***/
// Escribir una función que tome un objeto (a) como argumento
// Devuelve la suma de todos los valores de los objetos

const sumObjectsValues = (a) => Object.values(a).reduce((acum, item) => acum + item, 0);
console.log(sumObjectsValues({a:1,b:2,c:3}), sumObjectsValues({j:9,i:2,x:3,z:4}), sumObjectsValues({w:15,x:22,y:13}));

/*** Remove a property from an object (Eliminar una propiedad de un objeto) ***/
// Escribir una función que tome un objeto como argumento
// Debería devolver un objeto con todas las propiedades del objeto original
// excepto por la propiedad con clave 'b'

const removePropertyObject = (obj) => {
  delete obj.b;
  return obj;
  /*solucion Autor
    const { b, ...rest } = obj;
    return rest;
  */
}
console.log(removePropertyObject({ a: 1, b: 7, c: 3 }), removePropertyObject({ b: 0, a: 7, d: 8 }), removePropertyObject({ e: 6, f: 4, b: 5, a: 3 }));

/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/
/***  ***/