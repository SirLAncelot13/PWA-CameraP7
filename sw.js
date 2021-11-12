const CACHE_STATIC = 'Static-v1';
const CACHE_INMUTA = 'Inmuta-v1';

self.addEventListener('install', (event) => {
    console.log("SW activado UwU");

    const cacheStatic = caches.open(CACHE_STATIC)
        .then(cache => {
            cache.addAll([
                './',
                './index.html',
                './manifest.json',
                './images/user.jpg',
                './js/camera.js',
                './js/app.js',
                './images/icons/android-launchericon-48-48.png',
                './images/icons/android-launchericon-72-72.png',
                './images/icons/android-launchericon-96-96.png',
                './images/icons/android-launchericon-144-144.png',
                './images/icons/android-launchericon-192-192.png',
                './images/icons/android-launchericon-512-512.png'
            ])
        })

    const cacheInmuta = caches.open(CACHE_INMUTA)
        .then(cache => {
            cache.addAll([
                'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js',
                'https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js'
            ])
        })

    event.waitUntil(Promise.all([cacheStatic, cacheInmuta]))
})

self.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request));
})