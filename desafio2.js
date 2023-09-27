function verificarString(frase) {
  let contador = 1;
  for (let i = 0; i < frase.length; i++) {
    const caracterer = frase[i];
    caracterer === caracterer.toUpperCase() ? contador++ : contador;
  }
  return contador;
}

const str = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
console.log(`A quantidade de palavras é: ${verificarString(str)}`);
