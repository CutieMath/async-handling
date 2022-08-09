// How to handle async functions

// ====================
// Use promise chaining
// ====================
fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  response
    .json()
    .then((users) => {
      const firstUser = users[0];
      console.log(firstUser);
      return fetch(
        `https://jsonplaceholder.typicode.com/users/${firstUser.id}/posts`
      );
    })
    .then((response) => response.json())
    .then((posts) => console.log(posts))
    .catch((error) => console.log(error))
);

// ===============
// Use async await
// ===============
const anAsyncFunction = async () => {
  try {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = await usersResponse.json();
    const firstUser = users[0];
    console.log(firstUser);
    const postsResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${firstUser.id}/posts`
    );
    const posts = await postsResponse.json();
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};
