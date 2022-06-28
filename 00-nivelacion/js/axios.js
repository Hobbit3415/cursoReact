// Facilita las solicitudes asincronas
// Una forma mas facil que Fetch
axios
  .get("https://jsonplaceholder.typicode.com/users/3")
  .then(({ data }) => console.log(data));
// Notese como en el metodo then de la promesa
// se utiliza el destructuring visto en las
// lecciones pasadas
