const prompt = require("prompt-sync")();
const name = "Sudha Vallabhapurapu";
const age = 30;
const birthday = "August 14";
const pineapplePizza = true;

const lifeEvents = [
  "I was born in India.",
  "I went to the college.",
  "I came to the United States when I was 22 years old.",
  "I'm graduated from Bachelors degree in Electronics.",
];
for (const lifeEvent of lifeEvents) {
  console.log(lifeEvent);
}
if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on  pizza. I 
am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I am not into pineapples on pizza. I 
am currently ${age} years old and my birthday is on ${birthday}.`
  );
}
var counter = 0;
while (true) {
  const randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5`
    );
    break;
  }
}
//EXTENDED CHALLENGES

var hours = prompt("How many hours did you work? hrs: ");
var wages = prompt("How much payment are you getting per hours? $ ");
var total = 0;
if (hours <= 40) {
  total = hours * wages;
} else if (hours > 40) {
  var extraHours = hours - 40;
  var extraWages = extraHours * wages * 1.5;
  total = 40 * wages + extraWages;
}
console.log(total);

var finalIncome = 1000000;
var weeks = finalIncome / total;
if (Number.isInteger(weeks)) {
  weeks = weeks;
} else {
  weeks = parseInt(weeks) + 1;
}
console.log(weeks);
