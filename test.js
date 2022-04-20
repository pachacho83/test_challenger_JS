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