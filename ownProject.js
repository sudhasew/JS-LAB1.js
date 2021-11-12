function countDown() {
  for (let i = 5; i > 0; i--) {
    console.log(i);
  }
}
countDown();

const countUp = (start, end) => {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};
countUp(10, 20);

function isLong(word) {
  if (word.length > 10) {
    for (let i = word.length; i > 10; i++) {
      word = " " + word;
      return true;
    }
  } else {
    return false;
  }
}
console.log(isLong("Sudhavallabhapurapu"));

const whatWaterState = (temperature) => {
  if (temperature <= 32) {
    console.log("solid");
  } else if (temperature > 32 && temperature < 212) {
    console.log("liquid");
  } else {
    console.log("gas");
  }
};
whatWaterState(30);

const names = [
  {
    name: "Sudha",
    age: 30,
    height: "5.0ft",
    born: 1991,
  },
  {
    name: "Chandu",
    age: 37,
    height: "5.9ft",
    born: 1984,
  },
  {
    name: "Jaasritha",
    age: 7,
    height: "4.2ft",
    born: 2014,
  },
];
console.log(names); //returns array of whole names

function addExtraName(name, age, height, born) {
  let extraName = {
    name: name,
    age: age,
    height: height,
    born: born,
  };
  names.push(extraName);
}
addExtraName("Nishritha", 3, "3.5ft", 2018);
console.log("Added nishritha", names);

function youngerAge(names) {
  let small = names[0].age;
  names.forEach((item) => {
    if (small > item.age) {
      small = item.age;
    }
  });
  return small;
}
youngerAge(names);
console.log("Its print the nishritha age", youngerAge(names));

function eldererAge(names) {
  let elder = names[0].age;
  names.forEach((item) => {
    if (elder < item.age) {
      elder = item.age;
    }
  });
  return elder;
}
eldererAge(names);
console.log("Its print the chandu age", eldererAge(names));

function deleteByIndex(names, index) {
  names.splice(index, 1);
}
deleteByIndex(names, 0);
console.log("Deleted sudha(0) name by index", names);

function deletePersonByName(names, name) {
  let foundPerson = names.findIndex((item) => {
    return item.name === name;
  });
  if (foundPerson >= 0) {
    names.splice(foundPerson, 1);
  }
}
deletePersonByName(names, "Chandu");
console.log("Deleted chandu name by name", names);

addExtraName("Chandu", 37, "5.9", 1984);
console.log("Added chandu", names);

function findHighestAgeArray(names) {
  let elderAge = names[0].age;
  let eldersAge = names[0];
  names.forEach((item) => {
    if (elderAge < item.age) {
      eldererAge = item.age;
      eldersAge = item;
    }
  });
  return eldersAge;
}
console.log("Highest Age is:", findHighestAgeArray(names));

function findYoungestAgeArray(names) {
  let youngestAge = names[0].age;
  let youngersAge = names[0];
  names.forEach((item) => {
    if (youngestAge > item.age) {
      youngestAge = item.age;
      youngersAge = item;
    }
  });
  return youngersAge;
}
console.log("Youngest Age is:", findYoungestAgeArray(names));

function findYoungestHeightArray(names) {
  let youngestHeight = names[0].height;
  let youngersHeight = names[0];
  names.forEach((item) => {
    if (youngestHeight > item.height) {
      youngestHeight = item.height;
      youngersHeight = item;
    }
  });
  return youngersHeight;
}
console.log("Youngest height is:", findYoungestHeightArray(names));

function findBiggestHeightArray(names) {
  let biggestHeight = names[0].height;
  let biggersHeight = names[0];
  names.forEach((item) => {
    if (biggestHeight < item.height) {
      biggestHeight = item.height;
      biggersHeight = item;
    }
  });
  return biggersHeight;
}
console.log("biggest height is:", findBiggestHeightArray(names));
