'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "432dd596d393fb464ab34afbd343549c",
"index.html": "35fd23e13d961a4fa8d04135bbc5b37d",
"/": "35fd23e13d961a4fa8d04135bbc5b37d",
"main.dart.js": "df8db9e5031171ead0fa483e2547b653",
"assets/terms.md": "ff50a8f65d108f7275acbe4d2c5e8bcd",
"assets/AssetManifest.json": "07ed9b4cdca0d875f90105ed03b643e3",
"assets/LICENSE": "10ba54df31a60d1d3552130869fe5571",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/assets/favicon.ico": "fe4792d482196a50cf9ae0d9d90b6493",
"assets/assets/img1.jpg": "1c11df7b10929fe20cbae60d9e4a068e",
"assets/assets/se.mp3": "505d26958137c1f1260fabd335c4d353",
"assets/assets/img3.jpg": "22ed268aacd7667a16c2744dcac42f6f",
"assets/assets/icon-512x512.png": "8b08d2125d41f3b5c66d99aa052c0e23",
"assets/assets/background_dot.png": "83005f2db9164637bb12faf03147b759",
"assets/assets/img2.jpg": "53fccaf3108f36c49d25e5b83f81033f",
"assets/assets/manifest.webmanifest": "6da4198933cff66c6f700ff762565e75",
"assets/assets/logo.png": "a09cab9af28c5e28a4a73af3d131bbf2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/flutter_markdown/assets/logo.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/privacy.md": "08756ee6cf76ce4a03cf4634c103887b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
