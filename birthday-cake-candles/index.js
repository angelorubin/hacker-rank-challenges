/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

const candles = [1, 8, 2, 4, 8]

function birthdayCakeCandles(candles) {
  /**
   * TO-DO
   * - percorrer o array e encontrar a maior altura;
   * - contar quantas velas possuem essa altura;
   * - retornar essa contagem.
   **/

  let orderedCandles = candles.sort((a, b) => a - b).reverse()

  let greatestHeight = []

  for (let i = 0; i < orderedCandles.length; i++){
    if (orderedCandles[0] === orderedCandles[i]) {
      greatestHeight.push(orderedCandles[i])
    }
  }

  return greatestHeight.length
}

console.log(birthdayCakeCandles(candles))
