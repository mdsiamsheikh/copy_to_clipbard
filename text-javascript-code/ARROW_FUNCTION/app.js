// const sayHello = function () {
//   console.log("Hello");
// };

// const sayHello = () => {
//   console.log("Hello");
// };

// One line function does not need braces
// const sayHello = () => console.log("Hello");

// One line returns
// const sayHello = () => "Hello";

// Same as above
// const sayHello = function () {
//   return "Hello";
// };

// Return Object
// const sayHello = () => ({ msg: "Hello" });

// Single param does not need parenthesis
// const sayHello = (name) => console.log("Hello ${name}");

// Multuiple params need parenthesis
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Brad");

const usars = ["Nathan", "John", "William"];

// const nameLengths = usars.map(function (name) {
//   return name.length;
// });

// Shortest
// const nameLengths = usars.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = usars.map((name) => name.length);

console.log(nameLengths);
