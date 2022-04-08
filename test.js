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