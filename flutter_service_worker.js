'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b22b1573cfe90afa52386ac4eb4cc606",
".git/config": "86b96d08c18c29a962a3e1783e0ef521",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "582988a8dc05a70ea878f3d7c3ffbb4b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "4cc95281396fffee4305d9a806e655a0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "29bdfdf92c3453c035e6d46ba1f23a4b",
".git/logs/refs/heads/master": "29bdfdf92c3453c035e6d46ba1f23a4b",
".git/logs/refs/remotes/origin/master": "8172a4aab1933d5b3082575c662f3c18",
".git/objects/15/1c869f572012e6bd0993033e7ec4cf1442717b": "c4943a39eb9d448a6bfce53133f4a18e",
".git/objects/1d/3735d833f364daced3680afbdcd69c520dc697": "004df2c147bafdbd26f310406a14d35a",
".git/objects/1d/3d5defef5b45d15805ed9046f34ed28cb9398e": "317e1da1c71650b55946ff62c5251972",
".git/objects/1f/c73128a3e1ffcba0c977fc8803535da0c74570": "704c6857f35a46447167b829f702bcf0",
".git/objects/2d/b047fd0afc27571fc336bef2c1bd1aac1b3cfd": "261ead35e028d500fc0cdc59b79aa5f1",
".git/objects/3a/fb2c08bd9a21c78d2c6c7792a0b710a236f583": "120d64a04d9135d206039b2afce7fbd1",
".git/objects/3e/70e95d3b6b3782357f9f09d449fd110e892cfe": "545f0baff8ef86b8f9900903b2b33dac",
".git/objects/43/cb16ed34aec2b3e19c9925406fdbb337e71279": "205c9731ea5208cd52f8d375b8a55e29",
".git/objects/49/01a147fbe71bf10044b763af6c20ca856d4b17": "9c83e2f3aac6407877f28a5537a1c4d4",
".git/objects/4d/28ca16fb6004f1003f7aead32a8555de072d8d": "eb8a4e455b6b2e3459165ea67346dbae",
".git/objects/4f/47ece6d6f566f3f9a3644950f8afd5d6a57ba7": "40e85c9343174b7f16b8ae35bede4fc1",
".git/objects/50/f24a290ca16abc9c37d3d9eb6a9749611e623d": "b197f0ee2dc9f49c57fd858fd276d2bb",
".git/objects/52/2d9aaf32191d8b728e0ff1dce5719718bc9fd1": "c2f48efc3497317b50b759df42919f94",
".git/objects/52/522d40acaec67f4aeb99fca76cd305796bf304": "f47a1e4355ef0da3642367f85bb15f73",
".git/objects/56/d2fcca02a25d94c086aabb75ce4479bbb6b45f": "0589d251ce4cb98a28dad798bd1804c0",
".git/objects/5a/a460c231011c6654f3b57b1249ff6247681752": "7d5cd5666e1accbf2a1ece81897fed4b",
".git/objects/5b/c28145dd522180428a61e95d804a67e11a29c6": "21c544caff8a8911333e438d03cad9df",
".git/objects/66/7d1f94a95164ef4b5bfeac5c6450727529db90": "116cdae14bb7621ba3752431272404bc",
".git/objects/69/d6058f3d33c3d86eea5d2dd0a1f7fc25ac52a7": "78120763a54c5ed898a9bdf1dea52fa1",
".git/objects/6b/7a9d9eb4db8aeb8abe275a4a17a6d2d25b0a66": "d25037c4652d4193aa18f30ca893f024",
".git/objects/72/60945ce9debcc54be1d8a9e9213ccf6b4e94fb": "eaeff82afc1b810c6a53819a498874e4",
".git/objects/72/dee1a5d164321b79f9ca2cce0d8e62671d3378": "9ce0c48a51034245d0858aecad4bdb6f",
".git/objects/79/8c23a47c75f8424cd276737964c0e7d5751cf0": "91943e845627ceacf56cbc35621871c5",
".git/objects/7a/2e5f1521f3834362543a772d73185f406f25bd": "2c86a89d6732cc4c249773d269f13870",
".git/objects/81/8e7d830661758edbf88fd750e255c4cf5ca7cf": "9bcd1d4d20737ba0f200702a820ab271",
".git/objects/88/cbe1baaf8a000554a1840848b1dd37bdcdba2e": "365d72f57f64d1875b84101673e7ea4e",
".git/objects/8c/2c4217ba2250dd45ef6ecd3824b9c3b15a30a3": "eeb156860325ad59e1759fac1d696f6b",
".git/objects/9b/8a974587e5097f83cd84866c84632b00a2dd62": "cdbf2912fe5778a8a99fcbe92e3e46ee",
".git/objects/a5/32239179cb306248825398f4ece97d236b69bc": "5b9c27348797a37b5d2533f164b244c7",
".git/objects/a7/27072b69b0fd70079bf72442a7c8bbdacf8c4f": "5de973dd018fc0b8a06baeb601d4583d",
".git/objects/a8/61bcac69daf9dc80cd3bef42e4708d162fd575": "a7b6a241d0f83e6b6f8c139adbcf010e",
".git/objects/b4/7de12abd1281bd2f488024611f477e7cf1ecc8": "742f66e721bf372668be12cc319ae231",
".git/objects/ba/1c92786d878089eb17a6b72584a1c99c38d41f": "1d7345801f43df6a917e4ea5410267b1",
".git/objects/c2/50a353335a24f9e99f67224b1fbbf097d4008f": "ca43e248aa8bdfe912c7b8e7e6210bd2",
".git/objects/c4/a2e70fb40d7e68997ba8c4bd3c3fb639a01052": "1452de41e25ac7698e71b1834a229666",
".git/objects/c7/71bcfc30eb8745a445ec188456804715baedfb": "e5c9ed062c38e69725b60eeac46990e3",
".git/objects/c8/b312e5fbbbac2b6513d5f3dde464b2cf438169": "95a7f461e18b2753150b7505b823c10b",
".git/objects/c9/8e189e6a5afb178626c7838bb3291440166619": "cfa23402569d281d06adaf6d1bb19c03",
".git/objects/ca/2835852bf6e74451032d977376bb972725807e": "6b75a236c1e98488b7ff0f28cef15080",
".git/objects/d1/42f629a4f5dd66c8215ecec85333b0f2f79d57": "42fc086f3055bf631c04162c598a3f74",
".git/objects/d4/fe3622ca99879d4cb17a11b274ae792d3d2283": "e0d45a77ba1004a649e0338d30c69784",
".git/objects/db/335573fc6d020cb0a410b6b37138d5c89ee798": "878c2b048163bd86bda4880d3274aa78",
".git/objects/db/e7298d8247f1cf488ceb484375109f1d637a7f": "3bb1fe95772552c04ffd37500c8b8342",
".git/objects/e3/ab79d37d296adb457573ef0cf18cabdc087c4a": "d7fac8eb8bc52436bf52c5d321a86518",
".git/objects/e5/d80aff0df45cf5fdbb3483dc803b501d89616e": "86442e4f44b4f77eee0fa33efd348202",
".git/objects/e8/c74bbbe9e94f03181f28a3f599d11daf7c3446": "c3cccbf24e68a2ca741c1f32bc905baf",
".git/objects/e9/3a3eb3e64ef297e44d28d10bc010e40aab39ef": "db2bfcfb85f17b9e786be52853d56a74",
".git/objects/f0/869772599f4f3c81610c83933aa08a72ffa4c1": "3a6ef5846c93f785941364007a176e51",
".git/objects/fc/d2a8b14c0094b6647e9135ce7b86758ac3b66f": "2cd1bf7fa9554cf080b78544466322bf",
".git/objects/fd/b057a55cadd3aa5385f4123e950b4cea6fefd4": "6e4db536f9e8c582725187d7ca59e734",
".git/objects/pack/pack-70d3a22d0bb4cae8d7fb71874b6830dccf18a574.idx": "ad827a0de202964239383ea6df7b2820",
".git/objects/pack/pack-70d3a22d0bb4cae8d7fb71874b6830dccf18a574.pack": "94f80d40db963d479e55827ba70ed3ec",
".git/refs/heads/master": "f3fb4e94fca11b1b35e6b8101e6a18c3",
".git/refs/remotes/origin/master": "f3fb4e94fca11b1b35e6b8101e6a18c3",
"assets/AssetManifest.json": "6c8163faf3169c10bbd5058541ff5721",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "caa9f8e9d295086503100c3b173983c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"canvaskit/canvaskit.js": "cf51f0145ed508c7203981a6297dfb6c",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js": "0cc1c5d3c107110e84d1df1358319b09",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c79b0ec81dfbcd64acc64c3567f86963",
"/": "c79b0ec81dfbcd64acc64c3567f86963",
"main.dart.js": "3be22f83ef6da54a7029c7a0cf9eb839",
"manifest.json": "646bcb281bf42ca53d181d4588903652",
"version.json": "632119a2911c1979f912df94e1700599",
"web.zip": "260ac10feb649f57814dccc1fbdde4f7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
