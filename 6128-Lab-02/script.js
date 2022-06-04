if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', {scope: '/my-pwa/'})
    .then((registration) => {
    console.log('Success. Scope:', registration.scope);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
    }