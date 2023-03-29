'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b49ebedbc8053239a60c48f835692c8d",
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
".git/index": "2c360b39064c73530628b977bbf80c81",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c594105ec06ad94bc7d2f0f816874f6b",
".git/logs/refs/heads/master": "c594105ec06ad94bc7d2f0f816874f6b",
".git/logs/refs/remotes/origin/master": "d6a12c1096dc63f71bc3a713f3b21b96",
".git/objects/00/c010b770bf2ffcf6c8a002f400cf21096bd5f0": "aee9838903bc5d8a871c712337d00706",
".git/objects/03/2fa7aad7eb87f9a41152bf88ffbc992326afa1": "b0000e489976fc1a97e52303faa659c0",
".git/objects/0e/17a0b9424ec1c21467edc162725e51ddc64354": "d2a027223cf7dd4f5a2b25f55733bac1",
".git/objects/0e/470e6bcc0fe76538ca630212e9af39399126ac": "b709685a98b764e36b867887b70362d7",
".git/objects/15/1c869f572012e6bd0993033e7ec4cf1442717b": "c4943a39eb9d448a6bfce53133f4a18e",
".git/objects/16/606eea65b5fad1d98bb257c85a5bb3238bf7ed": "b8bc040dd95fa76490667417a4c5400a",
".git/objects/16/9b1f90fc4c3db6810686ce44c2d3faa41f4ad5": "21e9751424d947136dd5de35883a69f2",
".git/objects/18/eedc90493952a79b3a7fa23712da5cad169442": "39dc37ca3c6f9f04dd4a1ce444b74cd9",
".git/objects/1b/1a75891fee945cc31a72da529487b91567f361": "6622df98a86713e39e96d38863b861b4",
".git/objects/1c/ab92005b76bea43da9facf7f7a5bca1e30249c": "b3e350019342d3dab2e9093cf4b5ea3e",
".git/objects/1d/3735d833f364daced3680afbdcd69c520dc697": "004df2c147bafdbd26f310406a14d35a",
".git/objects/1d/3d5defef5b45d15805ed9046f34ed28cb9398e": "317e1da1c71650b55946ff62c5251972",
".git/objects/1f/1bff79ead11f6e8727428ac10bbf1e1bfa0c27": "7bd262d56959980cd613d0a651fdc2f8",
".git/objects/1f/c73128a3e1ffcba0c977fc8803535da0c74570": "704c6857f35a46447167b829f702bcf0",
".git/objects/20/e8f04f2d0da488bb33fe8b90353b1e27e60124": "b70d68049062a8b17a9e546d639d9bdb",
".git/objects/2d/4ae779f3f801b3a8711ac4371e74486f109c7d": "f9228fd496ba7ac40f0619f75789bcd2",
".git/objects/2d/b047fd0afc27571fc336bef2c1bd1aac1b3cfd": "261ead35e028d500fc0cdc59b79aa5f1",
".git/objects/2e/c5f93acc37d837606999d97d0ea51f98d13485": "d83487d0b68898648ddaae3b441550ee",
".git/objects/35/56793c09f29e70fc34e891486a7b0a60227a9a": "5f978705d3621a6f6fc57566707d705d",
".git/objects/36/82ef3f1fe5cb53884409be9888874b5da7c67f": "f7bfc3a3b533efcdb284aece2ccb2add",
".git/objects/38/f76412936136f7f3e38207b3a45255b5366523": "d16e9ee539cfe259b5b533e1651186f7",
".git/objects/3a/fb2c08bd9a21c78d2c6c7792a0b710a236f583": "120d64a04d9135d206039b2afce7fbd1",
".git/objects/3e/70e95d3b6b3782357f9f09d449fd110e892cfe": "545f0baff8ef86b8f9900903b2b33dac",
".git/objects/41/0921ac2bd9c0b1de8c0b9e6f5f946a083cf09b": "3ab0430ff8ed707438b6f9f150fca0f5",
".git/objects/43/cb16ed34aec2b3e19c9925406fdbb337e71279": "205c9731ea5208cd52f8d375b8a55e29",
".git/objects/45/2e757c8029ce047adb27737d253fec3c95a48e": "4a76fa3a692b155e4af1420c9fd72828",
".git/objects/49/01a147fbe71bf10044b763af6c20ca856d4b17": "9c83e2f3aac6407877f28a5537a1c4d4",
".git/objects/4d/28ca16fb6004f1003f7aead32a8555de072d8d": "eb8a4e455b6b2e3459165ea67346dbae",
".git/objects/4d/698dce6d10f45dcd502bc1497cbdc95b431d82": "4c4c2702c0ca7b96d607b7fca85a3285",
".git/objects/4d/c8c1ea9e40c8b264dd29f14c586a2328583eb5": "3b17c9d9479c24568d24d13eaea7c2b2",
".git/objects/4f/47ece6d6f566f3f9a3644950f8afd5d6a57ba7": "40e85c9343174b7f16b8ae35bede4fc1",
".git/objects/50/12cb0c7d977202707d573944d9904af780ca3d": "cdf71a15ed70bbaf2e5c713d0a49fbdc",
".git/objects/50/f24a290ca16abc9c37d3d9eb6a9749611e623d": "b197f0ee2dc9f49c57fd858fd276d2bb",
".git/objects/51/da50a59e3541457319b7793a359247b0082f28": "6af1d2f4c7b7d0a8f0f7dcfd9c0867af",
".git/objects/52/2d9aaf32191d8b728e0ff1dce5719718bc9fd1": "c2f48efc3497317b50b759df42919f94",
".git/objects/52/522d40acaec67f4aeb99fca76cd305796bf304": "f47a1e4355ef0da3642367f85bb15f73",
".git/objects/53/8055ee3c86d0ab6c57613e0690a30a35cdb904": "ce349058f66fe98fa6679bbd93304f72",
".git/objects/54/25cdd882d1dd4ea6dbca8df2bbea2e082f8a56": "e25f3b208e6c326c86e25aea0b959f4e",
".git/objects/55/a042be5f5e92dda61867c8d5ba27df73133cd4": "f998bce5658dc751f6edbcfcb6e3908e",
".git/objects/56/d2fcca02a25d94c086aabb75ce4479bbb6b45f": "0589d251ce4cb98a28dad798bd1804c0",
".git/objects/5a/a460c231011c6654f3b57b1249ff6247681752": "7d5cd5666e1accbf2a1ece81897fed4b",
".git/objects/5b/7761773a4e79b30c09e3d0a9b577d6fa350672": "9149a3de254c63bc726b9511f495b28c",
".git/objects/5b/c28145dd522180428a61e95d804a67e11a29c6": "21c544caff8a8911333e438d03cad9df",
".git/objects/5f/e58c872b46f8bff0f2db66ae56a02b5b1ead5b": "0219038ed43da7122f8ac20532a9d961",
".git/objects/66/1425bf42e433898e1b76ee4b3db28794c79312": "765ca9a80003364ba675b81ec1708a6d",
".git/objects/66/7d1f94a95164ef4b5bfeac5c6450727529db90": "116cdae14bb7621ba3752431272404bc",
".git/objects/69/d6058f3d33c3d86eea5d2dd0a1f7fc25ac52a7": "78120763a54c5ed898a9bdf1dea52fa1",
".git/objects/6a/dcdcc1a50bfc10d8b8647abde2c2a76b441f00": "e775f07abfd20c7388e3d137f20293b5",
".git/objects/6b/7a9d9eb4db8aeb8abe275a4a17a6d2d25b0a66": "d25037c4652d4193aa18f30ca893f024",
".git/objects/70/881120d6b316adde2b96fd7aac35b15597b1d4": "361811f6e39afe48c3826fdfd24f041d",
".git/objects/72/60945ce9debcc54be1d8a9e9213ccf6b4e94fb": "eaeff82afc1b810c6a53819a498874e4",
".git/objects/72/dee1a5d164321b79f9ca2cce0d8e62671d3378": "9ce0c48a51034245d0858aecad4bdb6f",
".git/objects/79/8c23a47c75f8424cd276737964c0e7d5751cf0": "91943e845627ceacf56cbc35621871c5",
".git/objects/7a/2e5f1521f3834362543a772d73185f406f25bd": "2c86a89d6732cc4c249773d269f13870",
".git/objects/80/64d6fa53eb99f1b64868937d5bbdc234898c7e": "f746e72d3d057758beef9b9506e97236",
".git/objects/81/8e7d830661758edbf88fd750e255c4cf5ca7cf": "9bcd1d4d20737ba0f200702a820ab271",
".git/objects/83/a191b45332dc7a5e73334a4e60cac11f7a7057": "0ffa3fc801c553a6df4d02d7c55d93b1",
".git/objects/85/cf66eb30f7675a8ba33f9a081c3674104aac14": "f0a8fbba3b88c44a4e5c25fcc5f4e4ce",
".git/objects/88/cbe1baaf8a000554a1840848b1dd37bdcdba2e": "365d72f57f64d1875b84101673e7ea4e",
".git/objects/89/f34d29e62084e5d9f6fa1954b622f87525ef78": "9fc1ecddebcfcd5cc13b713f284d5463",
".git/objects/8c/2c4217ba2250dd45ef6ecd3824b9c3b15a30a3": "eeb156860325ad59e1759fac1d696f6b",
".git/objects/91/120e67aef3aa9c6973b2a29834683773298545": "c52be1f9073c07cc0f4fcb5c6546f41a",
".git/objects/91/803d671054bead287204b78e1710f3b1e9ee82": "5430214f97b5d00033bbb268987306a9",
".git/objects/93/3e4c11688862972a2d9a5cc9a0fe90f4b74a01": "b089d3d76ef6bf71b9a49ac7077c75e6",
".git/objects/94/a5d8f7b02f24150cd7c37eed8dff703390ec22": "c220e37dfa3a3f72928c1e993e6c1a0b",
".git/objects/97/cd239aab86ad0f45f457f908a59406651ec28d": "aa95468098cd7e2cf2f5b5b6fcf23cc5",
".git/objects/98/5bfc362d52ac25bdda5cf66896e1441f1d87ca": "64d52dd05be12b71bc44f6e313b616e4",
".git/objects/9b/8a974587e5097f83cd84866c84632b00a2dd62": "cdbf2912fe5778a8a99fcbe92e3e46ee",
".git/objects/a0/f463c10a024afe46442beab86bfa8bb55523d8": "900e2d58074e32aabc0df66f4e7b00d5",
".git/objects/a4/1c29bdc882421f92254d19579f83cf709c91d8": "c1a5714cafabb47ba614f66f25a6fea8",
".git/objects/a5/32239179cb306248825398f4ece97d236b69bc": "5b9c27348797a37b5d2533f164b244c7",
".git/objects/a7/27072b69b0fd70079bf72442a7c8bbdacf8c4f": "5de973dd018fc0b8a06baeb601d4583d",
".git/objects/a7/44e87b570873c637961232ce12a7dd8e1d031b": "755391f92f1fd36f75b5959ef99f8c67",
".git/objects/a7/87a58d5d069ce70512953a8e6782fd812652db": "ff8cadf5049f5f83aa65d1bfc1385c4e",
".git/objects/a8/61bcac69daf9dc80cd3bef42e4708d162fd575": "a7b6a241d0f83e6b6f8c139adbcf010e",
".git/objects/ad/6ff711ac5bc25f2d61bec26e11b45717ff8910": "96fc668c79f6b15d3d27c70e66143410",
".git/objects/b2/a340ef8ead08885c762bc8bc570e31711d6a21": "9df0a493f4ad107b5ba36e22043f63ab",
".git/objects/b4/0b1a1f5832c6d8d07d8dfd72ae66a66f242057": "12df18819a68434753d5711b6a058ba5",
".git/objects/b4/7de12abd1281bd2f488024611f477e7cf1ecc8": "742f66e721bf372668be12cc319ae231",
".git/objects/b9/2aab550bcd824b27ee25df9f0d22c48a9d550e": "bb0b132a513d6071d2b5409cc62041c8",
".git/objects/ba/1c92786d878089eb17a6b72584a1c99c38d41f": "1d7345801f43df6a917e4ea5410267b1",
".git/objects/be/8d206ba5a94ea8920fec3a46971ae57dee4fff": "41adc16db46223eebbedf35f1dd6730b",
".git/objects/c2/50a353335a24f9e99f67224b1fbbf097d4008f": "ca43e248aa8bdfe912c7b8e7e6210bd2",
".git/objects/c3/3c09840dcfa5fdc13ff550b9709a192a9c4d26": "2a12e33b0319e9949ba6ce9598be05fd",
".git/objects/c3/9b7b29089bbdc8de53724863075238a9041c05": "98b8c840e1a6bea001fb391411bc9e3e",
".git/objects/c4/a2e70fb40d7e68997ba8c4bd3c3fb639a01052": "1452de41e25ac7698e71b1834a229666",
".git/objects/c7/71bcfc30eb8745a445ec188456804715baedfb": "e5c9ed062c38e69725b60eeac46990e3",
".git/objects/c8/b312e5fbbbac2b6513d5f3dde464b2cf438169": "95a7f461e18b2753150b7505b823c10b",
".git/objects/c9/8e189e6a5afb178626c7838bb3291440166619": "cfa23402569d281d06adaf6d1bb19c03",
".git/objects/ca/2835852bf6e74451032d977376bb972725807e": "6b75a236c1e98488b7ff0f28cef15080",
".git/objects/ca/656a0a46e265b7180e2521ecf57e087a1cd128": "a7908f1dae37fe0244a13b27492af5f9",
".git/objects/cb/c8542e9f3bc2c4f8f91e48770ad5dfc104e066": "4abbe06e4092e57d18d7cabadebed178",
".git/objects/cd/999ee2d51d48f749d149344c0194e89416a733": "9311b4b70beaf54d7c39b67edbe54947",
".git/objects/d0/40adf09e82217efd788b6d9aa19b623471f23d": "276f7897f1d047d43c682937e963ae5c",
".git/objects/d1/42f629a4f5dd66c8215ecec85333b0f2f79d57": "42fc086f3055bf631c04162c598a3f74",
".git/objects/d4/2bf2c9a5e9063d0e1b83f9e6f1fa6421cb3f9f": "c19328431c189db80469fdac4489e876",
".git/objects/d4/fe3622ca99879d4cb17a11b274ae792d3d2283": "e0d45a77ba1004a649e0338d30c69784",
".git/objects/d6/deaa48acca2f08c4b66568f5511ebe8bbdef88": "ae3ef450f23ee6008995719f028557df",
".git/objects/d9/e81640d89fbe180798da3cb5b11207aee19430": "670f28813cc10c46d79828f1d6b40fce",
".git/objects/db/335573fc6d020cb0a410b6b37138d5c89ee798": "878c2b048163bd86bda4880d3274aa78",
".git/objects/db/e7298d8247f1cf488ceb484375109f1d637a7f": "3bb1fe95772552c04ffd37500c8b8342",
".git/objects/df/f6e1562828d5c8774e44b08cbc44644e51b66c": "eab1f39cdda834ba2bc8a7f50203b7fc",
".git/objects/e0/15d9c8cfd4b4175637235c0511542b3c8f7ce7": "2f0bb16c2c2823b2d6db2746e6ee1fe5",
".git/objects/e2/e3fff9e77b54f69af7ec3608a91afccca5ab52": "963f2d57e7d687a71a0f0feab2f2149d",
".git/objects/e3/ab79d37d296adb457573ef0cf18cabdc087c4a": "d7fac8eb8bc52436bf52c5d321a86518",
".git/objects/e5/d80aff0df45cf5fdbb3483dc803b501d89616e": "86442e4f44b4f77eee0fa33efd348202",
".git/objects/e8/c74bbbe9e94f03181f28a3f599d11daf7c3446": "c3cccbf24e68a2ca741c1f32bc905baf",
".git/objects/e9/3a3eb3e64ef297e44d28d10bc010e40aab39ef": "db2bfcfb85f17b9e786be52853d56a74",
".git/objects/ea/055771c1b9307863daac4d1aa954048c01ad42": "752c2d19370b935ecb79206dbf5763c8",
".git/objects/ee/2862313d0e924d20fec2b9806882d4808e7ce5": "414061d738dea792b05073ac6d446c9d",
".git/objects/f0/869772599f4f3c81610c83933aa08a72ffa4c1": "3a6ef5846c93f785941364007a176e51",
".git/objects/f2/1e4885cc5a51df5e96074f61f8ef436d18e000": "13474cc16bdcedc5783ecebbbfa03a61",
".git/objects/fc/d2a8b14c0094b6647e9135ce7b86758ac3b66f": "2cd1bf7fa9554cf080b78544466322bf",
".git/objects/fd/b057a55cadd3aa5385f4123e950b4cea6fefd4": "6e4db536f9e8c582725187d7ca59e734",
".git/objects/fe/42098163eca66cdb47a113afc232f2b98b8012": "a1ad301a4e67a4f9cb3f8e6b8da68031",
".git/objects/pack/pack-70d3a22d0bb4cae8d7fb71874b6830dccf18a574.idx": "ad827a0de202964239383ea6df7b2820",
".git/objects/pack/pack-70d3a22d0bb4cae8d7fb71874b6830dccf18a574.pack": "94f80d40db963d479e55827ba70ed3ec",
".git/refs/heads/master": "caf5dbb5fb05b3b0468a4c8cefe4d51c",
".git/refs/remotes/origin/master": "caf5dbb5fb05b3b0468a4c8cefe4d51c",
"assets/AssetManifest.json": "6c8163faf3169c10bbd5058541ff5721",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "1487a2a77c49586f6c88519fda17af8a",
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
"index.html": "c02016ed81830565b1e90902cd44423e",
"/": "c02016ed81830565b1e90902cd44423e",
"main.dart.js": "cd465db0c95e789fa2a42b5943f429ac",
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
