// const CACHE_NAME = 'version-1';
// const ulsToCache = [
//   'index.html',
//   'offline.html',
//   './images/Hero-Slider_Square_Escape-in-Bora-Bora_Just-A-Dash-Beauty.jpg',
//   './images/Hero-Slider_Square_GoodBye-Sunshine_Just-A-Dash-Beauty.jpg',
//   './images/Hero-Slider_Square_No-Handyman-Needed_Just-A-Dash-Beauty.jpg',
// ];
// const self = this;

// // Install SW
// self.addEventListener('install', (e) => {
//   e.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log('Opened Cache');
//       console.log(cache);
//       return cache.addAll(ulsToCache);
//     })
//   );
// });

// // Listen for requests
// self.addEventListener('fetch', (e) => {
//   e.respondWith(
//     caches.match(e.request).then(() => {
//       console.log('hello from fetch', e.request.url);
//       return fetch(e.request).catch(() => caches.match('offline.html'));
//     })
//   );
// });

// // Activate SW
// self.addEventListener('activate', (e) => {});
