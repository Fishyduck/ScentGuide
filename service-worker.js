// Update cache name with version
const CACHE_NAME = 'fragrance-guide-v2';
const STATIC_CACHE = 'fragrance-static-v2';
const DYNAMIC_CACHE = 'fragrance-dynamic-v2';

// Implement stale-while-revalidate for images
self.addEventListener('fetch', event => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.open(DYNAMIC_CACHE).then(cache => {
        return cache.match(event.request).then(response => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
          return response || fetchPromise;
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
          // Cache hit - return response
          if (response) {
            return response;
          }
          
          // Clone the request
          const fetchRequest = event.request.clone();
          
          return fetch(fetchRequest).then(
            response => {
              // Check if valid response
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Clone the response
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
              
              return response;
            }
          );
        })
  );
  }
});
const urlsToCache = [
  '/',
  '/index.html',
  '/js/app.js',
  '/manifest.json',
  '/images/icons/icon-192x192.png',
  '/images/icons/icon-512x512.png'
];

// Add all fragrance images to cache
const fragranceImages = [
  '/images/versace-eros-flame.png',
  '/images/versace-eros-energy.png',
  '/images/crown-peter-millar.png',
  '/images/polo-rl-blue.png',
  '/images/dg-light-blue.png',
  '/images/bleu-de-chanel.png',
  '/images/burberry-brit.png',
  '/images/tf-fougere-argent.png',
  '/images/gucci-guilty-elixir.png',
  '/images/dg-the-one.png'
];

// Combine all URLs to cache
const allUrlsToCache = [...urlsToCache, ...fragranceImages];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(allUrlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});