const arr = [1, 5, 10, 7]

function simpleArraySum(ar) {
  // Write your code here
  let sum = 0

  for (let i = 0; i < ar.length; i++){
    sum += ar[i]
  }

  return sum
}

console.log(simpleArraySum(arr))
