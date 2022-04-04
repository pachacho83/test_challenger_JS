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

/*** Merge two objects with matching keys (Combinar dos objetos con claves coincidentes) ***/
// Escribe una función que tome dos objetos como argumentos
// Desafortunadamente, la propiedad 'b' en el segundo objeto tiene la clave incorrecta
// Debería llamarse 'd' en su lugar
// Combinar ambos objetos y corregir el nombre de propiedad incorrecto
// Devuelve el objeto resultante
// Debe tener las propiedades 'a', 'b', 'c', 'd' y 'e'

const mergeTwoObjectsKeys = (x, y) => {

  const { b } = y;
  delete y.b;
  y.d = b;
  return  Object.assign({}, x,y);

  /*Solucion Autor
    const { b, ...rest } = y;
    return { ...x, ...rest, d: b };
  */
};
console.log(mergeTwoObjectsKeys({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 }), mergeTwoObjectsKeys({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 }));

/*** Multiply all object values by x (Multiplica todos los valores de los objetos por x) ***/
// Escribe una función que tome un objeto (a) y un número (b) como argumentos
// Multiplica todos los valores de 'a' por 'b'
// Devuelve el objeto resultante

const MultiplyAllObjectsValues = (a, b) => {

  const objectKeys = Object.keys(a);

  for (const item of objectKeys) {
    a[item] = a[item] * b;
  }

  return a;
  /*Solucion Autor
    return Object.entries(a).reduce((acc, [key, val]) => {
      return { ...acc, [key]: val * b };
    }, {});
  */
};
console.log(MultiplyAllObjectsValues({a:1,b:2,c:3},3), MultiplyAllObjectsValues({j:9,i:2,x:3,z:4},10), MultiplyAllObjectsValues({w:15,x:22,y:13},6));

/*** Swap object keys and values (Intercambiar claves y valores de objetos) ***/
// Escribir una función que tome un objeto como argumento
// De alguna manera, las propiedades y claves del objeto se mezclaron
// Intercambiar la clave del objeto Javascript con sus valores y devolver el objeto resultante

const swapObjectKeysValues = (obj) => Object.entries(obj).reduce((acc, [key, val]) => new Object( { ...acc, [val]: key } ), {});
console.log(swapObjectKeysValues({z:'a',y:'b',x:'c',w:'d'}), swapObjectKeysValues({2:'a',4:'b',6:'c',8:'d'}), swapObjectKeysValues({a:1,z:24}));

/*** Replace empty strings in object with null values (Reemplazar cadenas vacías en objeto con valores nulos) ***/
// Escribir una función que tome un objeto como argumento
// Algunos de los valores de propiedad contienen cadenas vacías
// Reemplazar cadenas vacías y cadenas que contienen solo espacios en blanco con valores nulos
// Devuelve el objeto resultante

const replaceEmptyStringsNullValues = (obj) => Object.entries(obj).reduce((acc, [key, val])=> new Object( {...acc, [key]: (val.trim() === '') ? null : val} ), {} );
/*Solucion Autor
  const newObj = { ...obj };
  for (key in newObj) {
    if (newObj[key].trim() === '') newObj[key] = null;
  }
  return newObj;
*/
console.log(replaceEmptyStringsNullValues({ a: 'a', b: 'b', c: '' }), replaceEmptyStringsNullValues({ a: '', b: 'b', c: ' ', d: 'd' }), replaceEmptyStringsNullValues({ a: 'a', b: 'b ', c: ' ', d: '' }));

/*** Extracting information from objects (Extraer información de los objetos) ***/
// Escribir una función que tome un objeto como argumento que contenga propiedades con información personal
// Extraer nombre, apellido, tamaño y peso si está disponible
// Si se da tamaño o peso, transforma el valor en una cadena
// Adjunte la unidad cm al tamaño
// Adjunte la unidad kg al peso
// Devuelve un nuevo objeto con todas las propiedades disponibles que nos interesan

const extractingInfoObjects = (obj) => new Object({
  fn: obj.fn,
  ln: obj.ln,
  ...(obj.size && { size: `${obj.size}cm` }),
  ...(obj.weight && { weight: `${obj.weight}kg` }),
});
/*
  const newObject = Object.entries(obj).reduce((acc, [key, val]) => new Object( {...acc, [key]: (key === 'size') ? val + 'cm' : (key === 'weight') ? val + 'kg' : val} ), {} );
  delete newObject.age;
  delete newObject.email;
  return newObject;
*/
console.log(extractingInfoObjects({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}),
            extractingInfoObjects({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}),
            extractingInfoObjects({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71}),
            extractingInfoObjects({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'}));

/***  ***/
/***  ***/