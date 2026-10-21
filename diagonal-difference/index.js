/** Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonalPrincipal += arr[i][i];
    diagonalSecundaria += arr[i][arr.length - 1 - i];
  }

  return Math.abs(diagonalPrincipal - diagonalSecundaria);
}

console.log(diagonalDifference(arr));
