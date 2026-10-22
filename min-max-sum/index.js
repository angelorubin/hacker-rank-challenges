/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr1 = [1, 2, 3, 4, 5]
// let arr2 =[7, 69, 2, 221, 8974]

function miniMaxSum(arr) {
    let sortedArray = arr.sort((a, b) => a - b)

    let sumSmallerNumbers = 0
    let sumLargerNumbers = 0

    sumSmallerNumbers = sortedArray.slice(0, 4).reduce((accumulator, currentValue) => accumulator + currentValue)
    sumLargerNumbers = sortedArray.reverse().slice(0, 4).reduce((accumulator, currentValue) => accumulator + currentValue)

    console.log(`${ sumSmallerNumbers } ${ sumLargerNumbers }`)
}

miniMaxSum(arr1)
