class Room {
  name;
  length;
  width;
  available = true;
  capacity;
  constructor(name, length, width, capacity = 15) {
    this.name = name;
    this.length = length;
    this.width = width;
    this.capacity = capacity;
  }
  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
}
const room1 = new Room("Sun", 30, 20);
const room2 = new Room("Green", 15, 20, 18);
room2.available = false;
//room2.capacity = 18;
console.log(
  `${room1.name},${room1.length},${
    room1.width
  },${room1.getArea()},${room1.getPerimeter()},${room1.available},${
    room1.capacity
  }`
);
console.log(
  `${room2.name},${room2.length},${
    room2.width
  },${room2.getArea()},${room2.getPerimeter()},${room2.available},${
    room2.capacity
  }`
);
