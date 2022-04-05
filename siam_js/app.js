// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

// for (let i = myArray.length - 1; i > 0; i--) {
//   console.log(myArray[i]);
// }

// let i = 0;
// while (i < myArray.length) {
//   console.log(myArray[i]);
//   i++;
// }

// let myPrompt = Number(prompt("Enter a Number:"));

// console.log(typeof myPropt);

// while (myPrompt < 77) {
//   alert("Sory sa fore you!");
//   let myPrompt = Number(prompt("Enter a Number:"));

// if (myPrompt >= 10) {
//     //   alert("Yese my Love You!");
//     // }
// }
//

// let myArray = ["one", "two", "three", "four", "five", "six", "siven"];

// myArray.forEach(function (elem, i) {
//   console.log(elem);
//   console.log(i);
// });

// let value;
// let Number1 = 10;
// let Number2 = 5;

// value = Number1 + Number2;
// value = Number1 - Number2;
// value = Number1 * Number2;
// value = Number1 / Number2;
// value = Number1 % Number2;

// value = Math.PI;
// value = Math.E;

// value = Math.floor(2.9);
// value = Math.random(2.9);

// value = Math.random() * 10;
// value = Math.floor(value) + 1;

// console.log(value);

// Love Colculator

// Persons Name
// let firstName = prompt("What is your name?");
// let partnerName = prompt("What is your Partnr name?");

// // Calculation
// let Number = Math.random() * 100;
// Number = Math.floor(Number) + 1;

// // Showing Result
// alert(
//   firstName + " and " + partnerName + "'s love percentage is: " + Number + "%"
// );

// Function

// function add(a, b) {
//   console.log(a + b);
// }

// add(66, 55);

// function name() {
//   let fistName = "Sheikh";
//   console.log("Siam " + fistName);
// }

// name();

// let userNae = "siam";

// function greet() {
//   console.log("Hello " + userNae);
// }
// greet();

// console.log(userNae);

// function text(a, b) {
//   console.log("siam " + a + b);
// }
// text("siam ", "sahin");

// for (let i = 10; i > 0; i--) {
//   //   if (i === 5) break;
//   if (i === 5) continue;
//   console.log(i);
// }

// let myPrompt = Number(prompt("Enter a Number"));

// while (myPrompt < 10) {
//   alert("soriy");
//   myPrompt = Number(prompt("NO"));
// }

// if (myPrompt < 10) {
//   alert("Yese");
//   myPrompt = Number(prompt("OK"));
// }

// UperCase and LowerCaser

// let userName = prompt("whtat is Name?");
// let userNameUpprCase = userName.toLocaleLowerCase();
// let userNameLowerCase = userName.toLocaleLowerCase();

// let firstLettr = userNameUpprCase.slice(0, 1);
// let totalLegnth = userName.length;

// alert("Hello " + firstLettr + userNameLowerCase.slice(1, totalLegnth));

// const name = new Date();

// console.log(name);

// const Number = [1, 100, 2, 3, 5, 6];
// const Number2 = new Array(2, 3, 4, 34, 54);
// const color = ["red", "yello", "gerene", "whete"];
// const mext = [23, "red", true, undefined, null, new Date()];

// let value;

// value = Number.length;
// value = Array.isArray(Number);
// value = Number[2];
// value = Number[0];

// value[0] = 100;

// Number.push(100);
// Number.unshift(200);
// value = Number.length;

// Number.pop();
// Number.shift();

// Number.splice(1, 2);
// Number.reverse();

// value = Number.concat(Number2);

// value = Number.sort(function (x, y) {
//   return x - y;
// });

// console.log(Number);
// console.log(value);

// let str1 = "My name is siam sheikh this is a one of the Best";
// let str2 = "I we the of the verey cagey of my one carey";

// console.log(str1.charAt(0));
// console.log(str1.charCodeAt(0));
// console.log(str1.concat(str2));
// console.log(str1.endsWith("Best"));
// console.log(str1.includes("this"));
// console.log(String.fromCharCode(77));

// let globlVar = "I am globlvar";

// function any() {
//   var localVar = "i am vare like you";
//   console.log(localVar);
//   console.log(globlVar);
// }

// any();

// let myArray = ["one", "two", "three", "four", "five", "six", "siven"];

// for ([i, elem] of myArray.entries()) {
//   //   if (i === 2) break;
//   if (i === 3) continue;

//   console.log(`index: ${i}, Elememt: ${elem}`);
// }

// let num = 1000000;
// let myArray = new Array(num);

// console.time("for");
// for (let i = 0; i < num; i++) {}
// console.timeEnd("for");

// console.time("while");
// while ((i = num)) {
//   i++;
// }
// console.timeEnd("while");

// let Number = 20;

// if (Number > 20) {
//   console.log("Yes!!");
// } else if (Number < 20) {
//   console.log("No!!");
// } else {
//   console.log("No masing");
// }

// let name = "siam";
// let age = 19;
// let havDagri = false;
// let xepernt = 5;

// if (havDagri == true || age >= 18) {
//   console.log(name + ", Yes votor!");
// } else {
//   console.log("No votar na");
// }

// let name;
// let rollNumder = 3;

// switch (rollNumder) {
//   case 1:
//     name = "congasoleson fist";
//     break;
//   case 2:
//     name = "congasoleson sekent";
//     break;
//   default:
//     name = "No mesing";
// }

// console.log(name);

// function digun(E) {
//   return E * 6;
// }

// console.log(digun(3));

// function greeting() {
//   console.log("I am vare lage mane ");
// }
// function myfunc(callback) {
//   callback();
// }

// myfunc(greeting);

// Arrow function

// const add = (a, b) => {
//   return a * b;
// };

// console.log(add(6, 4));

// const isEven = (a) => {
//   return a % 2 === 0;
// };

// console.log(isEven(8));

// const names = ["siam", "manik", "shublo", "sheikh"];

// const nowname = names.map((names) => {
//   return names.toUpperCase();
// });

// console.log(nowname);

// const topPlayer = [
//   "M. Shakib",
//   "Q. Tamim",
//   "Babar Azam",
//   "F. du Plessis",
//   "V. Kohli",
// ];

// const [first, second, ...others] = topPlayer;

// console.log(topPlayer);

// const numbers = [12, 25, 46, 27, 32, 2000];
// const votar = ["Yes", "No", "Yes", "Yes", "No", "Absent"];

// const products = [];

// const max = numbers.reduce((acc, val) => Math.max(acc, val));
// const min = numbers.reduce((acc, val) => Math.min(acc, val));

// console.log(min)

const points = [40, 100, 1, 5, 25, 10];

console.log(...points);
