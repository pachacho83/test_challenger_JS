//cuantas Vocales hay en una cadena

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