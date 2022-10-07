// Si el service worker se encuentra
// en navigator
if ("serviceWorker" in navigator) {
  // Registra un Service Worker con el
  // cual sera posible trabajar
  navigator.serviceWorker.register("./serviceWorker.js");
}
