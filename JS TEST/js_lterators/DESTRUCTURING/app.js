// Destruring Assignment

let a, b;
[a, b] = [100, 200];
// Rest Pattetn
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// Array Destructuring
// const people = ["John", "Beth", "Mike"];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array reurned from function
// function getPeople() {
//   return ["John", "Beth", "Mike"];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Objec Destructuring

const person = {
  name: "Siam",
  age: 32,
  city: "Miami",
  gender: "Male",
  sayHello: function () {
    console.log("Hello");
  },
};

// Old E55
// const name = person.name,
//   age = person.age,
//   city = person.city;

// New E56 Destructuring
const { name, age, city, sayHello } = person;

console.log(name, age, city);

sayHello();
