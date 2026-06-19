const CACHE_NAME = 'fragrance-lab-v3';
const ASSETS = [
  './', './index.html', './styles.css', './app.js', './manifest.json',
  './images/versace-eros-flame.png', './images/versace-eros-energy.png', './images/crown-peter-millar.png',
  './images/polo-rl-blue.png', './images/dg-light-blue.png', './images/bleu-de-chanel.png',
  './images/burberry-brit.png', './images/tf-fougere-argent.png', './images/gucci-guilty-elixir.png',
  './images/dg-the-one.png', './images/lacsote-noir.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
