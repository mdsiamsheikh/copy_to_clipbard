// MAOS = key-valua pairs - can use ANY type as a key or value

const map1 = new Map();

// Set keys
const key1 = "some string",
  key2 = {},
  key3 = function () {};

// set map values by key
map1.set(key1, "value of key1");
map1.set(key2, "value of key2");
map1.set(key3, "value of key3");

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// Count values
// console.log(map1.size);

// ITEATLING MAPS

// LOOP using for...of to get keys and values
// for (let [key, valua] of map1) {
//   console.log(`${key} = ${valua}`);
// }

// Itetate keys only
// for (let [key, valua] of map1) {
//   console.log(key);
// }

// Iterate values only
// for (let valua of map1.values()) {
//   console.log(valua);
// }

// LOop with forEach
// map1.forEach(function (values, key) {
//   console.log(`${key} = ${values}`);
// });

// Create To ARRAYS

// Crete an array of the key value pairs
const keyValArr = Array.from(map1);
console.log(keyValArr);

// Crete an array of the value
const keyVal = Array.from(map1.values);
console.log(keyValArr);
