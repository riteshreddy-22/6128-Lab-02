if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', {scope: '/6128-Lab-02/'})
    .then((registration) => {
    console.log('Success. Scope:', registration.scope);
    })
    .catch((error) => {
    console.log('Failed. Error:', error);
    });
    }