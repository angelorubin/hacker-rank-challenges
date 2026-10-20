/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

console.log(
  aVeryBigSum([
    1000000001, 1000000002, 1000000003, 1000000004, 1000000005, 1000000001,
    1000000002, 1000000003, 1000000004, 1000000005,
  ]),
);
