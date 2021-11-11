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

function addExtraName(name, age, height) {
  let extraName = {
    name: name,
    age: age,
    height: height,
    born: 2018,
  };
  names.push(extraName);
}
addExtraName("Nishritha", 3, "3.5ft");
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

addExtraName("Sudha", 30, "5.0ft");
console.log("Again added sudha", names);
addExtraName("Chandu", 37, "5.9ft");
console.log("Again added chandu", names);

function findHighestAgeArray(names) {
  var maxAge;
  for (var key in names) {
    if (!maxAge || names[key].age > maxAge.age) {
      maxAge = names[key];
    }
  }
  return maxAge;
}
console.log(findHighestAgeArray(names));
