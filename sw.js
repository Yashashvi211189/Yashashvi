const CACHE_NAME = 'star-wars-portfolio-v1.2';
const urlsToCache = [
  '/',
  '/Yashashvi/',
  '/Yashashvi/assets/wp3614448.webp',
  '/Yashashvi/assets/mountain-1.png',
  '/Yashashvi/assets/mountain-2.png',
  '/Yashashvi/assets/mountain-3.png',
  '/Yashashvi/assets/planets.png',
  '/Yashashvi/assets/menu.svg',
  '/Yashashvi/assets/close.svg',
  '/Yashashvi/models/scene.gltf',
  '/Yashashvi/models/scene.bin'
];

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('Service worker cache failed:', error);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Important: Clone the request. A request is a stream and can only be consumed once
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then((response) => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Important: Clone the response. A response is a stream and can only be consumed once
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          
          return response;
        }).catch(() => {
          // Return offline fallback if available
          if (event.request.destination === 'document') {
            return caches.match('/Yashashvi/');
          }
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for performance
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Preload critical resources in background
      caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll([
          '/Yashashvi/assets/wp3614448.webp',
          '/Yashashvi/models/scene.gltf'
        ]);
      })
    );
  }
});

// Performance optimizations
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});