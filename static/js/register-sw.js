if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/sw.js').catch(function (error) {
      console.error('DevDojo PWA: no se pudo registrar el service worker.', error);
    });
  });
}
