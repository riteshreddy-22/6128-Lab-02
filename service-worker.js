// Installing a service worker
self.addEventListener('install', (event) => {
    console.log('SW installed: ', event);
    self.skipWaiting();

    // Caching
    event.WaitUntil(
        caches.open('cacheAssets')
            .then((cache) => {
            cache.add('/');
            cache.add('/index.html');
            cache.add('/logo.png');
        })
    );
});

// Activating a service worker
self.addEventListener('activate', (event) => {
    console.log('SW Activated: ', event);
    event.WaitUntil(clients.claim());
});

// Fetch event from service worker (Using cache with Network fallback method)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            return response || fetch(event.request);
        })
    );
 });