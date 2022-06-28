const peticion = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/3");
  // Esto tambien es una promesa
  const data = await response.json();

  return data;
};

const data = peticion().then(console.log);

// console.log(data);
