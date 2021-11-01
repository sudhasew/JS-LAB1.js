const prompt = require("prompt-sync")();
const person = {
  name: "Sudha Vallabhapurapu",
  age: 30,
  birthday: "August 14",
  pineapplePizza: true,
};
console.log(
  `My name is ${person.name} and I like pineapples on  pizza. I 
am currently ${person.age} years old and my birthday is on ${person.birthday}.`
);

const lifeEvents = [
  "I was born in India.",
  "I went to the college.",
  "I came to the United States when I was 22 years old.",
  "I'm graduated from Bachelors degree in Electronics.",
];
for (const lifeEvent of lifeEvents) {
  console.log(lifeEvent);
}
if (person.pineapplePizza) {
  console.log(
    `My name is ${person.name} and I like pineapples on  pizza. I 
am currently ${person.age} years old and my birthday is on ${person.birthday}.`
  );
} else {
  console.log(
    `My name is ${person.name} and I am not into pineapples on pizza. I 
am currently ${person.age} years old and my birthday is on ${person.birthday}.`
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
