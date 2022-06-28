const saludo = () => {
  document.write("<li>Hola mundo</li>");
};

document.write("<ol>");
setInterval(saludo, 2000);
document.write("</ol>");
