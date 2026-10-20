/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const a = [17, 28, 30];
const b = [99, 16, 8];

const equalTo = (a, b) => a === b;
const greaterThan = (a, b) => a > b;
const lessThan = (a, b) => a < b;

function compareTriplets(a, b) {
  let bob = 0;
  let alice = 0;

  /**
  for (let i = 0; i < a.length; i++) {
    if (greaterThan(a[i], b[i])) {
      alice++;
      console.log(alice);
    } else if (lessThan(a[i], b[i])) {
      bob++;
      console.log(bob);
    }
}
  */

  // Moderno
  a.map((value, index) => {
    if (greaterThan(value, b[index])) {
      alice++;
    } else if (lessThan(value, b[index])) {
      bob++;
    }
  });

  return [alice, bob];
}

console.log(compareTriplets(a, b));
