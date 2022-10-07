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
const CACHE_NAME = "v2_cache_contador_react";

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

self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];
  // Espere a...
  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        // Recibe un array y puede ejecutar varias promesas y resolverlas al mismo tiempo
        // O puedo lanzar un array de lo que necesite y retornar
        // una promesa del mismo
        return Promise.all(
          cacheNames.map(
            (cacheName) =>
              // Si contiene el nombre del cache...
              // Si es estrictamente igual a -1
              // Quiere decir que este cache no existe
              /**
               * Esta linea lo que hace es corroborar cual es el
               * cache mas reciente que tiene el SW y elimina
               * el mas antiguo
               */
              cacheWhitelist.indexOf(cacheName) === -1 &&
              caches.delete(cacheName)
          )
        );
        /**
         * Tras revisar cual es el cache mas reciente, debo reclamarlo
         */
      })
      .then(() => self.clients.claim())
  );
});
