// Placeholder service worker. Add caching logic as needed.
self.addEventListener('install', event => { self.skipWaiting(); });
self.addEventListener('activate', event => { self.clients.claim(); });
self.addEventListener('fetch', event => {});
