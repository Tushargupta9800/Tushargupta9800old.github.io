'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e97c99ab29a51a4af818124de2c0a006",
".git/config": "165da1555d1f433026195efea6614921",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b18ccbae2e593ab17db6c0fe57d4aaef",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f52445b3387d815a16e3c185586ac171",
".git/logs/refs/heads/master": "f52445b3387d815a16e3c185586ac171",
".git/logs/refs/remotes/origin/master": "254432ff90ca8f8d44c24397cc57337a",
".git/objects/07/903e5cc3a77c2e4b83af8008b1ce9d6327b331": "a21b3a1a2f11bfcf5b2b74fdee9a21ab",
".git/objects/09/5ed855e7b2eaeccedc7b869c346925bd4c79b1": "000ae0111deacb3320b2bd70ed9fcbe7",
".git/objects/0b/95a907b3386993fe6acfe341fdcb3467ed7ee8": "f9b05ffb87e920a887f7d393d80dc382",
".git/objects/16/e1cdbaa5b94134f82840455b1b6b74f0576885": "eec90f7a41408ac195e0df2540e8ad8f",
".git/objects/1b/38c7e9384add0cd4b76e73cd2d3450026da9d7": "b4c02393e0b66969179f821a8bf61d53",
".git/objects/1b/59ef9729eab957e4643f05da21b3d3d5ac4bbf": "867c4b73ec8dfcbeccfa9a1708548067",
".git/objects/1b/d845fdd6e58a7d7dd8121f63b9f073713e58fd": "65fe5889e5d859a2f5e1beb89e62528f",
".git/objects/1b/d8683475a75e31ed9ca6050b9eaef3372a59f6": "694b0574c92b0a4431b869e0ff669918",
".git/objects/1c/90f8ae76913a40f56b59d340a7cf6ac79043b2": "1feea8d04d82f19a31f4a9964cc15f38",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/a3aae3c583b84b39ec935aa31f4b4659fb5a1b": "e9e1a6bc1814e8c72fdc7281eab43238",
".git/objects/31/047ea7148c52ed1a33801be9dd761ae71fa0db": "83f2366f542be1fea2d1ec769f70fde3",
".git/objects/31/0c43b4aad51ab2b8f786494d5417a1cd80c4fd": "91be3a78fa6ede69a44ca047e540be1a",
".git/objects/3d/e166866f02ab0e58b5e74e5f580442860ec07a": "29f110992e1a8d06216a56b6a7dae0bd",
".git/objects/43/486b3513f3a8d82b5662d8ee39b9f805c93875": "495182195a3c32fb3a260d9e22b46e9b",
".git/objects/4c/091c10ca5afaecbd93aa9b0528058501f5ab9f": "27572522bfff3b5b161105d0bcb80c79",
".git/objects/5f/d50754e02b9e5a644a8d7b452c06788675a728": "daa9097a194365a8908c752337dc67a8",
".git/objects/68/92c2ec4579b1b957c93c2b853235b3d06b60fb": "a61ff101abcda88c5f01ab632e53732d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/1f189434f1d84ed6b066c5e3a77eacb378923f": "fbd8e3fb319b2163f1b2726c7bb1c518",
".git/objects/8b/85401a8a044918eb6548f35d2885af78f0b666": "0b8043a852516bb759f1b0dc773dcb4a",
".git/objects/97/859b50ff3b8b2ed22b3dd5d11fa28e37d91e68": "11a9cf02c390193ba65dbee6241175f5",
".git/objects/99/81c9b0aa32103dafd4213763182b5104527386": "05b8d8339a49826b06c982aaec87ceb6",
".git/objects/9a/7dfa62b9eb56a24df6baf79a13b0760b9ac2f6": "a0c011b3a3d09a451eade295d4993926",
".git/objects/9d/0660db6010e1c9cc78ee094d11fd4d325e0437": "28343d258a2e40af55244b6ccf4fde08",
".git/objects/9e/52ec50971f0a4f95033e1e951f29e6d60174f1": "b68ebf38f807647a12f8a01e695d6e6f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b2/8fe8d245a8728856745d0dbc639981fddd548f": "dd8c627383c0c88b93b7350ab0fe8e8c",
".git/objects/b5/e87733807c0c63c97c4ef63dabb75d7ca649d7": "20ac207cfe9f9822dd798763ce02ec87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/e5ff9080110261f4d0b2ee8c50d0d786eafbff": "1d4da68f46f529bc96c0ecfe9858380c",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/cb/9e2565600e6758271b3b958e58c68731abb0a0": "97e537117ef679d570a540ce444ad7e9",
".git/objects/d3/8f10107967aa46c0adeb78dfbeeedb2b034979": "b129def7aa0f3c04b8f8f9c514a04fc5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ef/a46a829d8c7fc4430b172279e8eefd8707d2e3": "2eca13dd900033df730096b57584fc64",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/bf84788ba29033e7bb0c2af71062199482f0ed": "16effb8bc6d4f241e17da4e6afd71c9e",
".git/refs/heads/master": "59ed7aab5d47f1cc174d4b7f6e6f5350",
".git/refs/remotes/origin/master": "59ed7aab5d47f1cc174d4b7f6e6f5350",
"assets/AssetManifest.json": "c6fd46cfcf17672e8b742aa5bf2b006c",
"assets/assets/images/background/background.png": "8ba9cca78e4a2777dc9958f28087ad87",
"assets/assets/images/background/productBG.jpg": "607b90c46801b3991cf1ef92c6c2d2de",
"assets/assets/images/ordersandsales/nothing_found.jpg": "7a0159d29eb47107cd3d143e7b1db2fb",
"assets/assets/images/product/noimage.png": "03fad063a85d0da6a9a639f16a8273e3",
"assets/assets%255Cfonts%255CAlmarai-Light.ttf": "484f968404893edf87a29965d05711d3",
"assets/FontManifest.json": "c8d55e22eab40156360aaf8e4e03f199",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "a1a2dbf7a2ceefc7937d686ded463454",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "daf41653bd74ec4669131babec64d49c",
"/": "daf41653bd74ec4669131babec64d49c",
"main.dart.js": "5617df10e53203a6ee94fd56f6dbe078",
"manifest.json": "7f717461503613ae5ddb1b3144bb0926",
"version.json": "ea1293db3614935dbbede3a1c01fc4d9"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
