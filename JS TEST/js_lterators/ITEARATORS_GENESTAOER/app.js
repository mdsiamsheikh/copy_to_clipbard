// Itertor Example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function () {
//       return nextIndex < names.length
//         ? { value: names[nextIndex++], done: false }
//         : { done: true };
//     },
//   };
// }

// // Crate an array of names
// const namesArr = ["Jack", "Jill", "John"];
// // Inierator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// Genertor Example
// function* sayname() {
//   yield "Siam";
//   yield "Jill";
//   yield "John";
// }

// const name = sayname();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
