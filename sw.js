self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(k => Promise.all(k.map(n => caches.delete(n))))
    .then(() => self.clients.claim())
    .then(() => {
      self.clients.matchAll().then(clients => {
        clients.forEach(c => c.postMessage({type:'SW_UPDATED'}));
      });
    })
  );
});
self.addEventListener('fetch', e => e.respondWith(fetch(e.request)));
