const CACHE = 'pacto-sombrio-v4';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  // Não intercepta Range requests (streaming de áudio/vídeo precisa de 206 Partial Content)
  if (req.headers.has('range')) return;

  // Não cacheia / não intercepta arquivos de mídia (deixa o navegador lidar com streaming)
  if (/\.(mp3|ogg|wav|m4a|webm|opus|mp4)$/i.test(url.pathname)) return;

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) {
        // Revalida em background para próxima visita
        fetch(req).then((res) => {
          if (res && res.status === 200 && res.type === 'basic') {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(req, clone));
          }
        }).catch(() => {});
        return cached;
      }
      return fetch(req).then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => {
        if (req.mode === 'navigate') return caches.match('./index.html');
      });
    })
  );
});
