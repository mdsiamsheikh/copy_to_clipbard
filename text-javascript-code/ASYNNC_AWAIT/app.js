// async function myFunc() {
//   const prmoise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await prmoise;
//     return res;
//   } else {
//     await Promise.reject(new Error("something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // Only proceed once its resolved
  const Data = await response.json();

  // Only proneed once seconed promise is resolved
  return Data;
}

getUsers().then((users) => console.log(users));
