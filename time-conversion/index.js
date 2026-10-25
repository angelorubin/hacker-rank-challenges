/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

// const s1 = "07:05:45PM"; // OUTPUT 19:05:45
const s2 = "12:00:00AM"; // OUTPUT 00:00:00

function timeConversion(s) {
  // Declarando variaveis para horas, minutos, segundos e sufixo AM/PM
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let suffix = "";
  let newTime = "";

  // Armazenando os valores de horas, minutos, segundos e sufixo
  hours = s.slice(0, 2);
  minutes = s.slice(3, 5);
  seconds = s.slice(6, 8);
  suffix = s.slice(8, 10);
  newTime = 0;

  // Funcao para conversao de horas
  if (suffix == "PM" && hours != 12) {
    hours = parseInt(hours) + 12;
    newTime = `${hours}:${minutes}:${seconds}`;
  } else if (suffix == "PM" && hours == 12) {
    newTime = `${hours}:${minutes}:${seconds}`;
  } else if (suffix == "AM" && hours == 12) {
    newTime = `00:${minutes}:${seconds}`;
  } else {
    if (suffix == "AM") {
      newTime = `${hours}:${minutes}:${seconds}`;
    }
  }

  return newTime;
}

console.log(timeConversion(s2));
