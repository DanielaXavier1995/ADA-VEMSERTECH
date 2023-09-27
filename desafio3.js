function contarRecorencias(arr) {
  const contador = [];

  for (const n of arr) {
    contador[n] ? contador[n]++ : (contador[n] = 1);
  }
  return contador;
}

function encontrarNumerosSolitarios() {
  const contador = contarRecorencias(numeros);
  const numerosSolitarios = [];

  for (const n in contador) {
    contador[n] === 1 ? numerosSolitarios.push(parseInt(n)) : numerosSolitarios;
  }
  return numerosSolitarios;
}

const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
console.log(encontrarNumerosSolitarios());
