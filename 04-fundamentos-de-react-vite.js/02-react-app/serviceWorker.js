console.log("Registrado...");
// Aqui se almacenaran todas las rutas que existan
// en nustro sitio web o todas aquellas a las que
// queramos ahcer peticiones
const CACHE_ELEMENTS = [
  "./",
  "./index.html",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./src/App.css",
  "./src/App.jsx",
];
// Nombre que tendra el cache
const CACHE_NAME = "v1_cache_contador_react";

// Primer evento del service worker
/* El evento isntall es la primera parte del ciclo de
  vida de un service worker que es cuando se registra, se 
  instala (cachear las rutas) para ya no tener que realizar
  peticiones constantes
*/
// Agrego un escuchador al evento "install"
self.addEventListener("install", (e) => {
  // Espere a...
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Agrego todos los cache al array de elementos cache
      cache
        .addAll(CACHE_ELEMENTS)
        .then(() => {
          // Si todo sale bien...
          self.skipWaiting();
          // Si no sale bien, clg error
        })
        .catch(console.log);
    })
  );
});
