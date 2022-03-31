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