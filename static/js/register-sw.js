if ('serviceWorker' in navigator) {
  if (window.location.hostname === 'localhost') {
    navigator.serviceWorker.getRegistrations().then(function (registrations) {
      for (let registration of registrations) {
        registration.unregister();
      }
    });
  } else {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js').catch(function (error) {
        console.error('DevDojo PWA: no se pudo registrar el service worker.', error);
      });
    });
  }
}
