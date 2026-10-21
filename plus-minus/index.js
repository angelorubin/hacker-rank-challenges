/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const arr = [1, 1, 0, -1, -1];

function plusMinus(arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }

  console.log((positiveCount / arr.length).toFixed(6));
  console.log((negativeCount / arr.length).toFixed(6));
  console.log((zeroCount / arr.length).toFixed(6));
}

plusMinus(arr);
