/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

let arr = [1,2,3,4,5]

function miniMaxSum(arr) {
    let sortedArray = arr.sort((a, b) => a - b)

    let menoresSomados = 0
    let maioresSomados = 0
    let total = 0

    menoresSomados = sortedArray.reduce((accumulator, currentValue, index, arr) => index >= 3 ? accumulator + currentValue : 0)
    console.log(menoresSomados)
    maioresSomados = sortedArray.slice(sortedArray.length - 4).reduce((acc, cur) => acc + cur)
    total = `${ menoresSomados } ${maioresSomados}`
    return total
}

console.log(miniMaxSum(arr))
