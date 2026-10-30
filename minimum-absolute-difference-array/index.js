/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// let vetor = [3, -7, 0];
let vetor = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

function minimumAbsoluteDifference(arr) {
  let vetorOrdenado = [...arr].sort((a, b) => a - b);
  console.log(vetorOrdenado);
  let diferencas = [];

  for (let i = 0; i < vetorOrdenado.length - 1; i++) {
    let diferenca = Math.abs(vetorOrdenado[i] - vetorOrdenado[i + 1]);
    diferencas.push(diferenca);
  }

  console.log(diferencas);

  return diferencas.sort((a, b) => a - b)[0];
}

console.log(minimumAbsoluteDifference(vetor));
