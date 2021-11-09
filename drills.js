const getHello = () => {
  return "Hello,"; // returns Hello,
};
console.log(getHello("Hello"));

const reflect = (a) => a;
console.log(reflect(5)); // returns 5

const square = (a) => a * a;
console.log(square(5)); // returns 25

const sayHello = (name) => `${getHello()} ${name}!`;

console.log(sayHello("Sudha")); //returns Hello, Sudha!

const multiply = (x, y) => x * y;
console.log(multiply(2, 3)); //returns 6

const areaOfCircle = (radius) => multiply(Math.PI, square(radius));
console.log(areaOfCircle(5)); //returns 78.53981633974483

const isVowel = (letter) =>
  letter === "a" ||
  letter === "e" ||
  letter === "i" ||
  letter === "o" ||
  letter === "u";
console.log(isVowel("i")); //returns true

const isVowel2 = (letter) => ("a", "e", "i", "o", "u").includes(letter);
console.log(isVowel2("b")); //returns false because "b" is not an vowel

const isConsonant = (letter) => isVowel(letter) === false;
console.log(isConsonant("a")); //returns false because "a" is not consonant

const getDayOfWeek = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = new Date().getDay();
  return days[dayOfWeek];
};
console.log(getDayOfWeek()); // returns current weekday whatever today is.

const users = [
  {
    name: "Shawn",
    role: "consultant",
    nickname: "william zane",
    address: {
      city: "San Francisco",
    },
    interests: ["wrestling"],
  },
  {
    name: "Gus",
    role: "consultant",
    nickname: "tan",
    address: {
      city: "San Francisco",
    },
    interests: ["wrestling"],
  },
  {
    name: "Carlton",
    role: "detective",
    nickname: "lassie",
    address: {
      city: "Santa Barbara",
    },
    interests: ["squirrels"],
  },
  {
    name: "Julliet",
    role: "detective",
    nickname: null,
    address: {
      city: "San Francisco",
    },
    interests: ["scottish christmas stuff"],
  },
];
const getConsultants = () => users.filter((user) => user.role === "consultant");
console.log("Consultants in users are:", getConsultants()); // returns array of users who are consultants in users.

const getUsersWithoutNicknames = () =>
  users.filter((user) => user.nickname === null);
console.log("Users without nicknames are:", getUsersWithoutNicknames()); //returns array of users who has no nickname.

const getWrestlingFans = () =>
  users.filter((user) => user.interests.includes("wrestling"));
console.log("Wrestling fans are:", getWrestlingFans()); // returns array of users who are interested in wrestling.

const firstDetective = () => users.find((user) => user.role === "detective");
console.log("First detective in array:", firstDetective()); // returns array of users who are first detective in an array.

const randomDetective = () => {
  const detectives = users.filter((user) => user.role === "detective");
  return detectives[Math.floor(Math.random() * detectives.length)];
};
console.log("Random detectives are:", randomDetective()); //returns array of users randomly who are detectives in array.

const displayLocations = () => {
  users.forEach((user) =>
    console.log(`${user.name} is in ${user.address.city}`)
  );
};
displayLocations();

const addPerson = (name, role) => {
  let newPerson = {
    name: name,
    role: role,
    nickname: null,
    address: {
      city: null,
    },
    interests: null,
  };
  users.push(newPerson);
};
addPerson("Sudha", "Student");
console.log("Added new person sudha to users as 4th index", users);

const addInterest = (usersIndex, interest) => {
  if (users[usersIndex].interests != null) {
    users[usersIndex].interests.push(interest);
  } else {
    users[usersIndex].interests = interest;
  }
};
addInterest(3, "Coding");
console.log("Added interest to the users array by using index method", users);
