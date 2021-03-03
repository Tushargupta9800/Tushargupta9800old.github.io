'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0449dd31e94754874d19c9080dbd8cab",
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
".git/index": "684d7b68f585d8719e97738b91cfd618",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b2c6ae24d3fb6b9d81ec6ec902b4f7bd",
".git/logs/refs/heads/master": "b2c6ae24d3fb6b9d81ec6ec902b4f7bd",
".git/logs/refs/remotes/origin/master": "4d6ad2b9e91affe686d6bf25f6171ca8",
".git/objects/02/72fff63e192be6fd0c609b02caa4a2e35b2944": "2339cfe5bd461af191c0b06a815886ff",
".git/objects/06/3ad2d1f5db072a538b8e3c78c51d1732ea9964": "879c2347a1c38148bdfd68063e12b9a2",
".git/objects/07/903e5cc3a77c2e4b83af8008b1ce9d6327b331": "a21b3a1a2f11bfcf5b2b74fdee9a21ab",
".git/objects/09/5ed855e7b2eaeccedc7b869c346925bd4c79b1": "000ae0111deacb3320b2bd70ed9fcbe7",
".git/objects/0b/95a907b3386993fe6acfe341fdcb3467ed7ee8": "f9b05ffb87e920a887f7d393d80dc382",
".git/objects/0d/88bf1ca2779c4549f5926479f7dfb77eff8226": "3da7d11ef42be7030c5bd5c552b7ca2e",
".git/objects/0d/956959da3b55f23a3c04c04b90b5db34f914f7": "2dec81f30b5f0272ba744e3ba040b3be",
".git/objects/14/c8cb0c4487ab6aa37dbe76e9cff6ce34b1ad6d": "09508350e4672a0a1654e85f2d2810c3",
".git/objects/16/33c2a9b53b32b8a903a6c1f58c53cc1ad85721": "7ddac7b33eb7ce50b354437f53eec2c6",
".git/objects/16/e1cdbaa5b94134f82840455b1b6b74f0576885": "eec90f7a41408ac195e0df2540e8ad8f",
".git/objects/16/fab7e73ed3be625bc5f3f10208af804f2af549": "a4ee339ce91019a129afa8df67068134",
".git/objects/1b/38c7e9384add0cd4b76e73cd2d3450026da9d7": "b4c02393e0b66969179f821a8bf61d53",
".git/objects/1b/59ef9729eab957e4643f05da21b3d3d5ac4bbf": "867c4b73ec8dfcbeccfa9a1708548067",
".git/objects/1b/7fe5656e337ab9ca6c6deeaa5183d7e0d193c4": "8a766d214ceb956f930be103e99d0b20",
".git/objects/1b/d845fdd6e58a7d7dd8121f63b9f073713e58fd": "65fe5889e5d859a2f5e1beb89e62528f",
".git/objects/1b/d8683475a75e31ed9ca6050b9eaef3372a59f6": "694b0574c92b0a4431b869e0ff669918",
".git/objects/1c/90f8ae76913a40f56b59d340a7cf6ac79043b2": "1feea8d04d82f19a31f4a9964cc15f38",
".git/objects/1c/ab4152274dc8f60e3a9f423f50142237ea471a": "1e32d758679ffcb83f60b26ebed3f942",
".git/objects/20/2a37b7322fb44b302f23cc5794062f1c49507d": "0e481cb0b632faca362f492d38784415",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/627b257027074ba1fadf48836f215e49e47803": "0d4eafcb0e907d528971988d736d4d7c",
".git/objects/20/a3aae3c583b84b39ec935aa31f4b4659fb5a1b": "e9e1a6bc1814e8c72fdc7281eab43238",
".git/objects/22/5795bbbbee7fd6d3f502e9fd15b8955d2beda3": "76bece9511db30900c6fb57891f63e55",
".git/objects/2b/7d6ccb0c4003d63175218c88a2b7d573ee6712": "a917f740a81c2206f9dc66fbe85cbfbc",
".git/objects/2e/3a267db1bb6d413ef62a9bb73632262768740c": "67073809dfde4bc3453c8cd4bb92135f",
".git/objects/31/047ea7148c52ed1a33801be9dd761ae71fa0db": "83f2366f542be1fea2d1ec769f70fde3",
".git/objects/31/0c43b4aad51ab2b8f786494d5417a1cd80c4fd": "91be3a78fa6ede69a44ca047e540be1a",
".git/objects/34/20ca97ca02e8a548962f56425da5ad48295f15": "97f8c2b6ee382846705dd2ff734a8bf6",
".git/objects/38/0cf0dd041a77f89008c00bfcdea4dc99cf92ac": "7e745a1fa466f0d2ed8f7db78d90354f",
".git/objects/38/b29d43b81cd98476adca224b2e4dac03ab9efb": "e31eea1183ca732f43cdd814b85dc44f",
".git/objects/3a/4debac9a4339b7372b915710b20757e745b661": "4e609455e7132d65d62c2f0624062cb4",
".git/objects/3d/9104e8acd659a136dd083a144eb367c54322b3": "8fe61f2041381c715d18c5eaf44c4ec4",
".git/objects/3d/e166866f02ab0e58b5e74e5f580442860ec07a": "29f110992e1a8d06216a56b6a7dae0bd",
".git/objects/3e/7bf51567be237a3e8424459a527aeec02006b8": "cf39c2379757b56e58dcf56ab02fb8d4",
".git/objects/3f/b6e0ede6c30d2e45d16aa0d957a0a22b035a9c": "1522d4071161c5a4f91db5c8949e6aaf",
".git/objects/43/486b3513f3a8d82b5662d8ee39b9f805c93875": "495182195a3c32fb3a260d9e22b46e9b",
".git/objects/48/e3798592b4910ef60dfecf409640d074c2df05": "33c502b635050774f3c345a8b5696e0d",
".git/objects/49/c5578aaaf3c4056966685b738c1c7093c10b0e": "7c8f867531ee715cbae1568f4c21f50f",
".git/objects/4b/3177d9a68b3d443d1b3f17239172a71325c5c2": "1784450d15ca7933c6df96bb0fed33fc",
".git/objects/4c/091c10ca5afaecbd93aa9b0528058501f5ab9f": "27572522bfff3b5b161105d0bcb80c79",
".git/objects/53/cef7b87cf84fa3c2d67855e9fdce0d411b5d64": "eda3c061102220fefa87e378b5675c9c",
".git/objects/5b/4b062acc1e3889a31434000ffe25c3419316cb": "7a04256b34cf846cdc865ee57a5d233c",
".git/objects/5f/d50754e02b9e5a644a8d7b452c06788675a728": "daa9097a194365a8908c752337dc67a8",
".git/objects/60/9fd4487a77faeefae5696c88e5a25798707853": "7920598efc6f9366e30abcc3142d2495",
".git/objects/61/d2649c608b574c0728df00e76a7b71d6daa6e8": "71333237dad7e319aa5756385237c0ee",
".git/objects/67/dfd8cdf357bda23b61d3ec22c476f96044e683": "94cd5e7c684cb49ca2d7a86c139f543c",
".git/objects/68/92c2ec4579b1b957c93c2b853235b3d06b60fb": "a61ff101abcda88c5f01ab632e53732d",
".git/objects/6b/327600b302732426bdeb8b757ad2da3004c5de": "70ed8cba5caf991f9c524b04271ace17",
".git/objects/6f/4a25b3eaaed06189668d185fef8975ffff60b9": "eb1e1dd919824d2a31d226679a4f1758",
".git/objects/73/8e8c918a6eeb673cafeac50040cbcf1f54ec4e": "0b0643be33660b58e12254c92c35f8db",
".git/objects/75/d40857caab821c378e584ef0ed4828eb4c08fa": "b1453a3fe617619797d183cb2a834a04",
".git/objects/75/f6672a1b231066da3b862022b637f8c448f3c2": "e7bb10761943d702561a97646049a6f0",
".git/objects/77/00af14c90bffe0ef3dc7c972d51ed6ffdc69b1": "fbedfd347205ef15f0a41844000d06dd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/1631c240303b08a20dd4c270cbbb2c73172706": "0ab88c1095058c47c15b82266b3904af",
".git/objects/7d/2914d417880aaaecb8d9a43df29bea79dc6bf7": "f186c58ae6435580fe8e33abc67f0583",
".git/objects/7f/235530daa83983e59eee0bc33df2d4e40287d4": "2bd414aa618d5ede9a4ea185c3eb2142",
".git/objects/80/6f73a916b04fe6440050b9c6126174f4228693": "08d37123ccf74adc713875d4b862f598",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bf5556f6679195aff1d45a026966fe10fb387a": "5fa183a8bb1f67c9f838a9e76d861f09",
".git/objects/8b/1f189434f1d84ed6b066c5e3a77eacb378923f": "fbd8e3fb319b2163f1b2726c7bb1c518",
".git/objects/8b/85401a8a044918eb6548f35d2885af78f0b666": "0b8043a852516bb759f1b0dc773dcb4a",
".git/objects/8d/096de595f73d4ceccf1e40a7279a77e6b03fec": "0a5b6d8a46a5bb1f36223e10e3583aa0",
".git/objects/97/859b50ff3b8b2ed22b3dd5d11fa28e37d91e68": "11a9cf02c390193ba65dbee6241175f5",
".git/objects/99/81c9b0aa32103dafd4213763182b5104527386": "05b8d8339a49826b06c982aaec87ceb6",
".git/objects/9a/7dfa62b9eb56a24df6baf79a13b0760b9ac2f6": "a0c011b3a3d09a451eade295d4993926",
".git/objects/9d/0660db6010e1c9cc78ee094d11fd4d325e0437": "28343d258a2e40af55244b6ccf4fde08",
".git/objects/9d/dece9ed1d0b2246878a3d420be458e0ffabfe4": "ea76c190b474b21266f52cf435d0fac2",
".git/objects/9e/52ec50971f0a4f95033e1e951f29e6d60174f1": "b68ebf38f807647a12f8a01e695d6e6f",
".git/objects/9e/6d45b76f2ded7c2bac78903ab8d1e5747fad08": "8857f6b49bbefb2c60027f81897e7783",
".git/objects/9e/b49dfef7aa0b0014c138c7fb789e346e143ef2": "207903fd54cefb8ad8082b5b751aa35c",
".git/objects/9f/e8e2b296e4781a78a37af429daf23aaf364ccb": "c930a605cd6f1d74809e74de003458ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/7bbb96687a9e77cdb2b12a9af1434cd4b20233": "50b3f2f0bd55b84c9ce1e4931cbb73e5",
".git/objects/a7/044280a12d1d1fec6ff5809476642c5b17e0ed": "5205c1fa92a3898304019d9d08ccdd55",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/aa888449526714ad20dad3fee290081044e97c": "1241eef02136365f899c9bed258688b9",
".git/objects/aa/ec63951b7bfd726a46a188cf1012bdf57bc7d9": "70f77a52b5a292541567e1951b4a2be4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/f8b977ea532ba65c318b541ab65d4344118126": "0c8643e7222be1a11a48e11ea3dc395c",
".git/objects/ac/23e42df63d3840fadacb235038bd278b01fcb9": "30c3772162ac15f4ce379ab4f18b4bb4",
".git/objects/ac/3dfdd82b34789e827c99f00142f5daf90e5526": "76c6f7495118d9b515a04e1e487976a9",
".git/objects/af/be2db58e3af93239085bff48aac3d464d88b6f": "16eff2b7ad1d13dc19772ad5550975b8",
".git/objects/b0/f6e178456bbde2e812b418945d0eec25f198b3": "0b3eaf5c0cf00b444fcaa147e808e8c1",
".git/objects/b2/8fe8d245a8728856745d0dbc639981fddd548f": "dd8c627383c0c88b93b7350ab0fe8e8c",
".git/objects/b3/eb96718d89cd7d224110d07285cd74b76303d4": "8bc92819a8157f162e2c9bfe99fefdf1",
".git/objects/b5/e87733807c0c63c97c4ef63dabb75d7ca649d7": "20ac207cfe9f9822dd798763ce02ec87",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/e45d1401ab810e1c3ecd18b94c39f0e41b9f91": "4cbfaebce0d8b22d61f05eb9a8b1b00d",
".git/objects/be/e5ff9080110261f4d0b2ee8c50d0d786eafbff": "1d4da68f46f529bc96c0ecfe9858380c",
".git/objects/c1/2f6944bb6b3210cfc3e4e132a4d0fa55bb7e33": "63e8f9dc4ad677d461fb83dff76d6eff",
".git/objects/c2/a6c86df85a41b4b4a1ed06fc44309d646dc928": "70092688c360e89e0c3e465b22ede2bb",
".git/objects/c6/1d750d1c380fb80ff389b6c12ccd2c95fee65b": "e880dc3f3070743e75fbbe1d35ae284e",
".git/objects/ca/37027c915a2392f382a2025781bc7d99d8df66": "47d5bc29f16c18b7b0fe06ccbf06000e",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/cb/9e2565600e6758271b3b958e58c68731abb0a0": "97e537117ef679d570a540ce444ad7e9",
".git/objects/ce/97b77044a415a18f6e57c96035062cae75e098": "a114c1e4f8226df2d8074ccbd0ad4ef3",
".git/objects/d1/fb3a85cd5bb9f66f9655556345b3d6a119c39f": "d1dd846f9c6cfd9fd57d1a661b1ffa7f",
".git/objects/d3/674dddbd986481f3e9971744be2222cb3d4be2": "6a0939922251248097e1c655cea279b7",
".git/objects/d3/8f10107967aa46c0adeb78dfbeeedb2b034979": "b129def7aa0f3c04b8f8f9c514a04fc5",
".git/objects/d3/b9dcb4cbef062e5838b8958c164efd66337b3a": "57e0540962c543ff57c25f10f56d663c",
".git/objects/d3/d7bda1f50809018c07953dda4457f8a9b92bd7": "1f5f49aed4be5075933b6365e9b7f787",
".git/objects/de/5f9ccd74e540ffe3a8b8c722fef95c51133080": "3698b41ff6712bd6bc43732ab01b0676",
".git/objects/de/e58579b4133c21d9cefc8af1ded5d1455cd615": "33ba0fa4deeb04b07514edfadfca6e6e",
".git/objects/e1/adf679ce449a6ab44bc0cdaa6ea08ffce8e762": "dcab3de21e6f6ae6509757a9f5bd90f2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/10975e5a39605cc9226489e1365a8375f6c653": "0a3bc7bc3a6b99e71bb41673b0dff6cb",
".git/objects/ef/a46a829d8c7fc4430b172279e8eefd8707d2e3": "2eca13dd900033df730096b57584fc64",
".git/objects/f0/8547b9dbc7b37a0a51b5ed29a732254993e65d": "28ec0dfc9f34c9ad66520e82b8e74ecf",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/bf84788ba29033e7bb0c2af71062199482f0ed": "16effb8bc6d4f241e17da4e6afd71c9e",
".git/objects/f5/bfd0a1c3eff605b0d97ec3591d8d204ad1689a": "cf5d40b9f17e35ddfb155e71c6201dd0",
".git/objects/f5/fa60dd689f6356d4b99bbab29b8233a6f1e0ed": "76e2f4d2e2e12405ce0b6d586769ea81",
".git/objects/ff/8f445d1ec75c722a3bbba6ddede496a61f0519": "1612b5c95ca855457f09a661c8013888",
".git/refs/heads/master": "fa3534f0932bed5c2dde23eacf605d47",
".git/refs/remotes/origin/master": "fa3534f0932bed5c2dde23eacf605d47",
"assets/AssetManifest.json": "c6fd46cfcf17672e8b742aa5bf2b006c",
"assets/assets/images/background/background.png": "8ba9cca78e4a2777dc9958f28087ad87",
"assets/assets/images/background/productBG.jpg": "607b90c46801b3991cf1ef92c6c2d2de",
"assets/assets/images/ordersandsales/nothing_found.jpg": "7a0159d29eb47107cd3d143e7b1db2fb",
"assets/assets/images/product/noimage.png": "03fad063a85d0da6a9a639f16a8273e3",
"assets/assets%255Cfonts%255CAlmarai-Light.ttf": "484f968404893edf87a29965d05711d3",
"assets/FontManifest.json": "c8d55e22eab40156360aaf8e4e03f199",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "000df3a045ff8d434f3e2acc1ab8c197",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "e9994e740cf7c6a847383939553b2278",
"/": "e9994e740cf7c6a847383939553b2278",
"main.dart.js": "896a486e225946ac9069dc4206ac2cbb",
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
