'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/NotoSansCJKJP/NotoSansCJKjp-Black.ttf": "a60ffe194596b90ef86ac3a861e6e10b",
"assets/fonts/NotoSansCJKJP/NotoSansCJKjp-Regular.ttf": "e59dcd70ac2f0db5b2d08dbd2310c456",
"assets/fonts/NotoSansCJKJP/NotoSansCJKjp-Bold.ttf": "6341bc5bc5e4f94843a391647fb3f853",
"assets/fonts/NotoSansCJKJP/NotoSansCJKjp-Light.ttf": "1026dba5586d6da3b6139db79fedf5b4",
"assets/fonts/NotoSansCJKJP/NotoSansCJKjp-Thin.ttf": "cead4da0d6c0490cb5963c16333be437",
"assets/fonts/NotoSansCJKJP/NotoSansCJKjp-Medium.ttf": "3def91e01d1d93f159b070fc6a4990e8",
"assets/fonts/Roboto/Roboto-Bold.ttf": "ee7b96fa85d8fdb8c126409326ac2d2b",
"assets/fonts/Roboto/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/fonts/Roboto/Roboto-Thin.ttf": "89e2666c24d37055bcb60e9d2d9f7e35",
"assets/fonts/Roboto/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/fonts/Roboto/Roboto-Light.ttf": "fc84e998bc29b297ea20321e4c90b6ed",
"assets/fonts/Roboto/Roboto-Black.ttf": "ec4c9962ba54eb91787aa93d361c10a8",
"assets/assets/img3.jpg": "22ed268aacd7667a16c2744dcac42f6f",
"assets/assets/img2.jpg": "53fccaf3108f36c49d25e5b83f81033f",
"assets/assets/icon-512x512.png": "8b08d2125d41f3b5c66d99aa052c0e23",
"assets/assets/manifest.webmanifest": "6da4198933cff66c6f700ff762565e75",
"assets/assets/logo.png": "a09cab9af28c5e28a4a73af3d131bbf2",
"assets/assets/se.mp3": "505d26958137c1f1260fabd335c4d353",
"assets/assets/favicon.ico": "fe4792d482196a50cf9ae0d9d90b6493",
"assets/assets/background_dot.png": "83005f2db9164637bb12faf03147b759",
"assets/assets/img1.jpg": "1c11df7b10929fe20cbae60d9e4a068e",
"assets/AssetManifest.json": "14a783db4fca5978d2c23fa89fd3201a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/LICENSE": "66bf9673ef1d885a8aaf7534ae1387ca",
"assets/FontManifest.json": "efb605bc40c9006b9774c53522793267",
"main.dart.js": "039dd3805fad6297caa8999b1f969d73",
"manifest.json": "432dd596d393fb464ab34afbd343549c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f7b251de88c43b84c80548df2fec815d",
"/": "f7b251de88c43b84c80548df2fec815d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
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
