const endpoint = "https://jsonplaceholder.typicode.com/users/1";

fetch(endpoint)
  // Primera promesa
  .then((response) => response.json())
  // Segunda promesa
  .then((data) => {
    console.log(data);
  });
