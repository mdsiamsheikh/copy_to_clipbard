const http = new easyHTTP();

// Get Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get("https://jsonplaceholder.typicode.com/posts/1", function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// create Data
const data = {
  title: "Custom Post",
  body: "This is a cust",
};

// http.post(
//   "https://jsonplaceholder.typicode.com/posts",
//   data,
//   function (err, post) {
//     console.log(err);
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Update Post
// http.put(
//   "https://jsonplaceholder.typicode.com/posts/1",
//   data,
//   function (err, post) {
//     console.log(err);
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(post);
//     }
//   }
// );

// Delete post
http.delete(
  "https://jsonplaceholder.typicode.com/posts/1",
  function (err, respones) {
    if (err) {
      console.log(err);
    } else {
      console.log(respones);
    }
  }
);
