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
