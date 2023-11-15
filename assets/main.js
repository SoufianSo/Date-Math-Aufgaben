// Teil2-Aufgabe1
console.log("Math.PI:", Math.PI);

const PI = Math.PI;

const roundedPI = PI.toFixed(2);

console.log("Rounded PI:", roundedPI);

// Teil2-Aufgabe2

let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

function roundNumber(number) {
  return Math.round(number);
}

array.forEach(function (num) {
  console.log("Gerundet:", roundNumber(num));
});
// Teil2-Aufgabe3

const randomNum = Math.random().toFixed(2);
console.log("Zufällige Nummer zwischen 0 und 1:", randomNum);

const randomNum1_10 = Math.random().toFixed(2) * 10 + 1;
console.log("Zufällige Nummer zwischen 1 und 10:", randomNum1_10);

const randomNum1_100 = Math.random().toFixed(2) * 100;

console.log("Zufällige Nummer zwischen 1 und 100:", randomNum1_100);

// Teil2-Aufgabe4
const numbers = [
  393, 205, 479, 47, 376, 267, 385, 2, 190, 383, 286, 462, 115, 138, 331, 409,
  427, 245, 224, 276, 483, 55, 147, 177, 208, 347, 135, 282, 33, 270, 475, 426,
  476, 453, 474, 351, 219, 358, 354, 410, 240, 139, 371, 356, 277, 202, 264,
  204, 447, 488,
];

const lowestValue = Math.min(...numbers);
console.log("Niedrigster Wert:", lowestValue);

const highestvalue = Math.max(...numbers);
console.log("Höchste Wert:", highestvalue);

// Teil2-Aufgabe5
function roundTo(number, koma) {
  const roundedNumber = Number(number.toFixed(koma));
  return roundedNumber;
}
console.log(roundTo(3.1415926535, 5));

// Teil2-Aufgabe6

const randomNumber = Math.floor(Math.random().toFixed(2) * 10) + 1;
const userGuess = prompt("Rate die Zahl zwischen 1 und 10:");

if (userGuess == randomNumber) {
  console.log("Herzlichen Glückwunsch! Du hast die richtige Zahl erraten.");
} else {
  console.log(`Leider falsch. Die richtige Zahl war ${randomNumber}.`);
}

// Teil1-Aufgabe1

const date1 = new Date("September 2, 2019 09:00:00");
const date2 = new Date(0);
const date3 = new Date(31556908800);
const date4 = new Date(86400000);

// Zeige die Werte mit innerHTML
document.getElementById("result").innerHTML = `
   date1: ${date1.toString()} <br>
   date2: ${date2.toString()} <br>
   date3: ${date3.toString()} <br>
   date4: ${date4.toString()} <br>
 
 `;
// Teil1-Aufgabe2
const currentDate = new Date();

// Setze das aktuelle Datum im HTML-Dokument
document.getElementById("result1").innerHTML = `
      Aktuelles Datum: ${currentDate.toString()} <br>
    `;

// Füge 30 Tage hinzu
currentDate.setDate(currentDate.getDate() + 30);

// Zeige das Datum nach Hinzufügen von 30 Tagen
document.getElementById("result1").innerHTML += `
      Datum nach Hinzufügen von 30 Tagen: ${currentDate.toString()} <br>
    `;
// Teil1-Aufgabe3

function monatsName(dateString) {
  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const monthName = list[monthIndex];
  return monthName;
}

let list = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

console.log(monatsName("2001,3,4"));
console.log(monatsName("2019,12,24"));
console.log(monatsName("1410,07,15"));

// Teil1-Aufgabe4
function getAMPM(time) {
  const period = time.getHours() < 12 ? "AM" : "PM";
  return period;
}

const d1 = new Date(1999, 10, 5, 15);
const d2 = new Date();
const d3 = new Date(2019, 12, 3, 12);
const d4 = new Date(2000, 1, 1, 11);

console.log(getAMPM(d1));
console.log(getAMPM(d2));
console.log(getAMPM(d3));
console.log(getAMPM(d4));
// Teil1-Aufgabe5
function istWeekend(dateString) {
  const date = new Date(dateString);
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return "Weekend";
  } else {
    return "Arbeitstag";
  }
}

console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));
