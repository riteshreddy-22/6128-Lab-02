// Installing a service worker
self.addEventListener('install', (event) => {
    console.log('SW installed: ', event);
    self.skipWaiting();
});

// Activating a service worker
self.addEventListener('activate', (event) => {
    console.log('SW Activated: ', event);
    event.WaitUntil(clients.claim());
});

// Fetch event from service worker
self.addEventListener('fetch', (event) => {
    return;
 });