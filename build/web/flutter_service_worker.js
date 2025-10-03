'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "56926134b831e79a136b24b8f82c90bb",
"assets/AssetManifest.bin.json": "683bb15f0ccadc0d2652d52d28055e74",
"assets/AssetManifest.json": "ea265376290cabf838c8bc0e4eefc8a8",
"assets/assets/game_map.svg": "90f5fb5e685e9c5ddfdea7d3808914a7",
"assets/assets/questions/categories.json": "cf6ebdd6566122a6c9590e4cb12d55bf",
"assets/assets/questions/images/1a.jpg": "5618a6cd95f730598c1c1d1e8471132a",
"assets/assets/questions/images/1q.jpg": "6e098f946e8e18f465e28e4562ec102b",
"assets/assets/questions/images/2a.jpg": "4326a13c3df11316dcb49694638dec46",
"assets/assets/questions/images/2q.jpg": "c5462f8e5cf81ff17f7ee6c3acc90a27",
"assets/assets/questions/images/3a.jpg": "16ea716ad7395549c0551d971d99e2cc",
"assets/assets/questions/images/3q.jpg": "6b133945b3b7f01156c1781eefbcd81c",
"assets/assets/questions/images/4a.jpg": "948196f3dac799ce03574b08a35f5cdb",
"assets/assets/questions/images/4q.jpg": "3345457d91934f168ef2c899290ecdf9",
"assets/assets/questions/images/5a.jpg": "f20e1302178a73ae8e7b4779baba67e6",
"assets/assets/questions/images/5q.jpg": "ed64e1ffea5ee0b329c6e77ab4ce3e3d",
"assets/assets/questions/images/global/5g.jpg": "911a96665af870cba70f5053c8a0d420",
"assets/assets/questions/images/global/bird.jpg": "948c10951fd90e0d063ba7bd030f194d",
"assets/assets/questions/images/global/capitalism.jpg": "d5e3568dbc977b2b4d7c69258ed81223",
"assets/assets/questions/images/global/carrefour.jpg": "04b129dfd42c4ebf0417b62902df39e3",
"assets/assets/questions/images/global/chess.jpg": "312dab54fa41e01ac0b7f5104ae9121f",
"assets/assets/questions/images/global/empty_quarter.jpg": "7b7810a14af3006a19c522e37ec2b294",
"assets/assets/questions/images/global/iceland.jpg": "2f3baee814677808d0126e83de2cf52b",
"assets/assets/questions/images/global/lemon.jpg": "357d8409eb849e20519da7185c61a330",
"assets/assets/questions/images/global/oyster.jpg": "524325ace5f5636feb17ed29c7b1a047",
"assets/assets/questions/images/global/pulled_chicken.jpg": "98c6a959a4eeb05582e94b0ead556f3e",
"assets/assets/questions/images/global/samosa.jpg": "64e6eacc87884aae5a9564f5c47e6124",
"assets/assets/questions/images/global/shawarma.jpg": "702dace18d3c49beaa361ba294ba2576",
"assets/assets/questions/images/global/uber.jpg": "aa269a550b1547022d14ef0d088f8968",
"assets/assets/questions/images/people/adel.jpg": "e1d867cb2be53b129caca26c016a9fcf",
"assets/assets/questions/images/people/hasan_yasser.jpg": "f92688cc13c69916ab60cc612d965e30",
"assets/assets/questions/images/people/omar_mohammad.jpg": "8cb7cb06e9ddb4885312986af63e32da",
"assets/assets/questions/images/people/yousef_saeed.jpg": "9f91789d9e7ce740bac620c2b3c92a02",
"assets/assets/questions/images/README.md": "079e235c1dc86794f0ecc35b208f01fb",
"assets/assets/questions/questions.json": "79b631ae1edc9a400c48865119618ed3",
"assets/assets/questions/questions_backup_before_people_eyes.json": "df6bc9fe7cf2d833356ba70f09eff376",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "115a0b6cfc4088128290fd0a7aafa4d2",
"assets/NOTICES": "36be9ac1db968e6354a30e831cc939f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "28b2b58238c2b6b5eb6bc48a59b52f14",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9195382d19e8729460e8f29260cf2cbb",
"/": "9195382d19e8729460e8f29260cf2cbb",
"main.dart.js": "1a8382f4c06c169820242a28e621415d",
"manifest.json": "866adb1a6f40072c1d20376de5f544dc",
"version.json": "b967d8ea80a0325f04923030cfd12eb7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
