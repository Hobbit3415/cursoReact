const peticion = async () => {
  setTimeout(() => {
    const datos = {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    };
    console.log(datos);
  }, 3000);
};

peticion().then(console.log);
