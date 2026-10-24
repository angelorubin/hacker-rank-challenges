/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const s1 = '07:05:45PM'
const s2 = '12:00:00AM' // OUTPUT 00:00:00

function timeConversion(s) {
  // Write your code here

  let hours = 0
  let minutes = 0
  let seconds = 0
  let sufix = ''
  let newTime = ''

  hours = s.slice(0, 2)
  minutes = s.slice(3, 5)
  seconds = s.slice(6, 8)
  sufix = s.slice(8, 10)
  newTime = 0

  // console.log(typeof(hours))

  if (sufix === 'PM') {
      newTime = `${+hours + 12}:${minutes}:${seconds}`
  }
  else if (SUFIX === 'AM') {

  }
  else {
    newTime = `${+hours}:${minutes}:${seconds}`
  }

  return newTime
}

console.log(timeConversion(s2))
