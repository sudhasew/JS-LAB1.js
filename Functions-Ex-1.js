function getAreaOfCircle(radius) {
  let circleArea = Math.PI * radius * radius;
  return circleArea;
}
let cArea = getAreaOfCircle(6);
console.log(`${cArea}`);

function getCircumferenceOfCircle(radius) {
  let circumferance = 2 * Math.PI * radius;
  return circumferance;
}
let cCircum = getCircumferenceOfCircle(6);
console.log(`${cCircum}`);

function getAreaOfSquare(side) {
  let squareArea = side * side;
  return squareArea;
}
let aSquare = getAreaOfSquare(4);
console.log(`${aSquare}`);

function getAreaOfTriangle(base, height) {
  let triangleArea = (height * base) / 2;
  return triangleArea;
}
let aTriangle = getAreaOfTriangle(5, 8);
console.log(`${aTriangle}`);
