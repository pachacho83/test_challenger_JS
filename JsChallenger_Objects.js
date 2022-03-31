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