'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "33f82463db59284cf82fd6c60e0d4cc8",
".git/config": "0bf84961a00fcd90bac5cd888f284d90",
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
".git/index": "c9636c646b6f3c7c1224d513f78da0b0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "320a4bc920a075d5a274fc63f463571c",
".git/logs/refs/heads/master": "320a4bc920a075d5a274fc63f463571c",
".git/logs/refs/remotes/origin/master": "99b260e00babb1704f9a9d0268423b31",
".git/objects/00/c010b770bf2ffcf6c8a002f400cf21096bd5f0": "aee9838903bc5d8a871c712337d00706",
".git/objects/01/81f9f0ddcdfb326aa06532af7808cbbc6e83d3": "ba02dacec2a074a5b4d8c95fd902847a",
".git/objects/03/2fa7aad7eb87f9a41152bf88ffbc992326afa1": "b0000e489976fc1a97e52303faa659c0",
".git/objects/04/5bcdb5feea0ea2de14fab9042cfa014d8c522f": "65c2028992aa462be2082acb71fa5899",
".git/objects/04/63f7651df5279cb8056a5b1d5b073b24baf6ee": "b988b8e7245353463b5bbee0b72ab26a",
".git/objects/0a/423f0528ae38fc04330c93fb3dc8e98b05f3d0": "1bd6b0a42cda71c790d8ca8e5c40ec1f",
".git/objects/0b/0feb22237771fcda1b56a5bdc509e3a158f4b0": "d74987fe1b1f7554be70a7c026d62d03",
".git/objects/0e/17a0b9424ec1c21467edc162725e51ddc64354": "d2a027223cf7dd4f5a2b25f55733bac1",
".git/objects/0e/470e6bcc0fe76538ca630212e9af39399126ac": "b709685a98b764e36b867887b70362d7",
".git/objects/10/b2bee4a997ffa44949959e02247ab4aa3ba69f": "77be3b9a1da6d93fad49471dd34d3074",
".git/objects/11/ea6aa7f6568dd4c1215a20d38f8df9fc96a7ae": "7cb805bb8c8db41bb653b459d0582fe9",
".git/objects/14/af39cc60aab7b790994e25e1b30443365e1bd4": "aed316c8a10ae9784cff57c5b4cbc565",
".git/objects/15/1c869f572012e6bd0993033e7ec4cf1442717b": "c4943a39eb9d448a6bfce53133f4a18e",
".git/objects/16/606eea65b5fad1d98bb257c85a5bb3238bf7ed": "b8bc040dd95fa76490667417a4c5400a",
".git/objects/16/9b1f90fc4c3db6810686ce44c2d3faa41f4ad5": "21e9751424d947136dd5de35883a69f2",
".git/objects/17/1c8075352979bbea6253f6581cb304357054e9": "53644254370dd880efb05fb8b556d355",
".git/objects/17/2044a356d0facf61f6576007f66c95e8510c33": "114f9800a583b29df8a973815c63a04b",
".git/objects/18/eedc90493952a79b3a7fa23712da5cad169442": "39dc37ca3c6f9f04dd4a1ce444b74cd9",
".git/objects/1b/1a75891fee945cc31a72da529487b91567f361": "6622df98a86713e39e96d38863b861b4",
".git/objects/1b/46a26be855c7694ac57ef4587d59e3f9a997af": "578ba64558ff86c1f320b5a1fa0c948c",
".git/objects/1c/ab92005b76bea43da9facf7f7a5bca1e30249c": "b3e350019342d3dab2e9093cf4b5ea3e",
".git/objects/1d/3735d833f364daced3680afbdcd69c520dc697": "004df2c147bafdbd26f310406a14d35a",
".git/objects/1d/3d5defef5b45d15805ed9046f34ed28cb9398e": "317e1da1c71650b55946ff62c5251972",
".git/objects/1d/ff922455680dbd746926d847d216b05477c30e": "e7fe1f12d2a8a33a3e0ec2fb1314ce83",
".git/objects/1f/1bff79ead11f6e8727428ac10bbf1e1bfa0c27": "7bd262d56959980cd613d0a651fdc2f8",
".git/objects/1f/9f23e5889be466e899985a0b6000af373e7759": "c2505af60377dc14f91b518dbf3c5bfd",
".git/objects/1f/c73128a3e1ffcba0c977fc8803535da0c74570": "704c6857f35a46447167b829f702bcf0",
".git/objects/20/e8f04f2d0da488bb33fe8b90353b1e27e60124": "b70d68049062a8b17a9e546d639d9bdb",
".git/objects/23/771a425ec1b1a73d280f005465b36c519693b2": "3fff0b4938501430b0130f2819ffda26",
".git/objects/24/3f2e51edce3e99ad17275027bc8ab3f35e1992": "c2f54842aa6b61cc70d8f96998cf0ad8",
".git/objects/26/e5e181869d59e5440e27b34b8917b959c1a474": "f4a988785b111d39b9b4b5513ccab59d",
".git/objects/2b/d8c918848e3ec509ec59353e34244ef2d53f04": "cb72d4630235aad142cc4410018f6d60",
".git/objects/2d/4ae779f3f801b3a8711ac4371e74486f109c7d": "f9228fd496ba7ac40f0619f75789bcd2",
".git/objects/2d/b047fd0afc27571fc336bef2c1bd1aac1b3cfd": "261ead35e028d500fc0cdc59b79aa5f1",
".git/objects/2e/c5f93acc37d837606999d97d0ea51f98d13485": "d83487d0b68898648ddaae3b441550ee",
".git/objects/2f/8bd3c2f50b9c38fe2d228e706cf00f037d31cf": "24efa1109b612572114a2770603ead04",
".git/objects/35/56793c09f29e70fc34e891486a7b0a60227a9a": "5f978705d3621a6f6fc57566707d705d",
".git/objects/36/82ef3f1fe5cb53884409be9888874b5da7c67f": "f7bfc3a3b533efcdb284aece2ccb2add",
".git/objects/36/9e2babc8f52d7122688df8755c16b9ff914748": "8f0c7486a944f419202be2819f7604d4",
".git/objects/38/f76412936136f7f3e38207b3a45255b5366523": "d16e9ee539cfe259b5b533e1651186f7",
".git/objects/3a/fb2c08bd9a21c78d2c6c7792a0b710a236f583": "120d64a04d9135d206039b2afce7fbd1",
".git/objects/3c/8a4e568cc9e5e5583a307d280b4bb01a646a51": "77ff1486ecc496f76d144fe04c788613",
".git/objects/3c/e5a70f1a370a13f102bc8c8d2ba119d8aa2286": "454aa41c96874ba40aa1e203de6b2486",
".git/objects/3e/70e95d3b6b3782357f9f09d449fd110e892cfe": "545f0baff8ef86b8f9900903b2b33dac",
".git/objects/41/0921ac2bd9c0b1de8c0b9e6f5f946a083cf09b": "3ab0430ff8ed707438b6f9f150fca0f5",
".git/objects/42/88c4495320031d53b57fe4e718a3a4a18421ed": "a0866d80d8858113a60a1a8c77e49cbc",
".git/objects/43/4adc51f47a404234022af0bd414c456f833e1d": "22e6b8a4343095b9f8fe5c68397fdc83",
".git/objects/43/cb16ed34aec2b3e19c9925406fdbb337e71279": "205c9731ea5208cd52f8d375b8a55e29",
".git/objects/45/2e757c8029ce047adb27737d253fec3c95a48e": "4a76fa3a692b155e4af1420c9fd72828",
".git/objects/47/93aa65611b11f7fda26d1804379542d3a95f7a": "804c6f847bb678132660667a0ce9a1ad",
".git/objects/49/01a147fbe71bf10044b763af6c20ca856d4b17": "9c83e2f3aac6407877f28a5537a1c4d4",
".git/objects/4c/041fb6e0147afe00f75d5ef2f486214c7f3ba4": "16b331ca0fe26f3c83982589efc8197e",
".git/objects/4d/28ca16fb6004f1003f7aead32a8555de072d8d": "eb8a4e455b6b2e3459165ea67346dbae",
".git/objects/4d/698dce6d10f45dcd502bc1497cbdc95b431d82": "4c4c2702c0ca7b96d607b7fca85a3285",
".git/objects/4d/c8c1ea9e40c8b264dd29f14c586a2328583eb5": "3b17c9d9479c24568d24d13eaea7c2b2",
".git/objects/4e/931d88679dec26f28c88ff3493ea3442f3469c": "b224669fac2fa37fb2a2c40bc476a1ce",
".git/objects/4f/47ece6d6f566f3f9a3644950f8afd5d6a57ba7": "40e85c9343174b7f16b8ae35bede4fc1",
".git/objects/4f/49e567fbfe777dbad81be450ce881fc8b46905": "fcb0be367fc20e363c04b4b45dc097fc",
".git/objects/50/12cb0c7d977202707d573944d9904af780ca3d": "cdf71a15ed70bbaf2e5c713d0a49fbdc",
".git/objects/50/f24a290ca16abc9c37d3d9eb6a9749611e623d": "b197f0ee2dc9f49c57fd858fd276d2bb",
".git/objects/51/da50a59e3541457319b7793a359247b0082f28": "6af1d2f4c7b7d0a8f0f7dcfd9c0867af",
".git/objects/52/2d9aaf32191d8b728e0ff1dce5719718bc9fd1": "c2f48efc3497317b50b759df42919f94",
".git/objects/52/522d40acaec67f4aeb99fca76cd305796bf304": "f47a1e4355ef0da3642367f85bb15f73",
".git/objects/53/8055ee3c86d0ab6c57613e0690a30a35cdb904": "ce349058f66fe98fa6679bbd93304f72",
".git/objects/54/25cdd882d1dd4ea6dbca8df2bbea2e082f8a56": "e25f3b208e6c326c86e25aea0b959f4e",
".git/objects/55/a042be5f5e92dda61867c8d5ba27df73133cd4": "f998bce5658dc751f6edbcfcb6e3908e",
".git/objects/56/2a15d7553f5a79690e29b879cdf96e48f37041": "3cc166083fd3b02efeef547ea6f7ef4b",
".git/objects/56/d2fcca02a25d94c086aabb75ce4479bbb6b45f": "0589d251ce4cb98a28dad798bd1804c0",
".git/objects/56/dc627fcd5ec5435e808f4273d3f8c90b0f52b4": "9f61519853fb49d46e4d88034f39dc7c",
".git/objects/59/79fa6703fcff1b42ac67cb0f360ece7fe42b5a": "eacd5e33b7d7defb663d1358afe650cd",
".git/objects/5a/3549893dc46eb48823bf42037c9493a288560a": "e8a6e0ef4e52ae5cbbe05c2e4aa0a94a",
".git/objects/5a/a460c231011c6654f3b57b1249ff6247681752": "7d5cd5666e1accbf2a1ece81897fed4b",
".git/objects/5b/7761773a4e79b30c09e3d0a9b577d6fa350672": "9149a3de254c63bc726b9511f495b28c",
".git/objects/5b/7bc63047c7b9bb8018988e3b9f039a80967d83": "281eaa3811552dae0e2f4144ce868639",
".git/objects/5b/c28145dd522180428a61e95d804a67e11a29c6": "21c544caff8a8911333e438d03cad9df",
".git/objects/5f/e58c872b46f8bff0f2db66ae56a02b5b1ead5b": "0219038ed43da7122f8ac20532a9d961",
".git/objects/60/ea9261465ce5860ae2ae75fa5fb6a17b08f671": "fc5e5b20df0d6dedb652209b57ab184a",
".git/objects/62/b77c25b70d1017e4afc6e9a61ea1e65b43c3bb": "8d6010ea97cd544e847637ed4dc5a59b",
".git/objects/63/ea873341185dc664f47c3bd89168e8a8958a06": "7ff38b66659d30d1e91d68e234249292",
".git/objects/66/1425bf42e433898e1b76ee4b3db28794c79312": "765ca9a80003364ba675b81ec1708a6d",
".git/objects/66/7d1f94a95164ef4b5bfeac5c6450727529db90": "116cdae14bb7621ba3752431272404bc",
".git/objects/67/210973e04b010fdccd769994cef07266119f94": "40a85a0e507ded4cfcb8bea157aa30a8",
".git/objects/67/36ed28c3a502cb12a6671f60f7dbdfe6f283ab": "28ca4353fb305e9d7a8606f6a6ca9edb",
".git/objects/68/2cb42fa4d0a7b80e20276c1c9fd51f99113fe5": "ca2b460bd68745ec97416f7c92a6561a",
".git/objects/69/d6058f3d33c3d86eea5d2dd0a1f7fc25ac52a7": "78120763a54c5ed898a9bdf1dea52fa1",
".git/objects/6a/90dc00ecfe36d66d516ff9f0261931557382a8": "ab94087a5bbc65ffea061271af318b64",
".git/objects/6a/d21bdc10bb48e4f687ce4b9f2e6746a03ac4a1": "0dfedd12c0e96220dead917fd5b8d01a",
".git/objects/6a/dcdcc1a50bfc10d8b8647abde2c2a76b441f00": "e775f07abfd20c7388e3d137f20293b5",
".git/objects/6b/7a9d9eb4db8aeb8abe275a4a17a6d2d25b0a66": "d25037c4652d4193aa18f30ca893f024",
".git/objects/6c/493c4de1432a945cadbba9b32ab8678e41c940": "bffd32f5aa05cf46d2b51de3f1165b11",
".git/objects/6e/06bdb60736688d83c9684365b67403438a54d4": "953e0fe0e7c80663677ecd5f3e9dc922",
".git/objects/6f/bf4d03853d38d57d9288ece6bca676893f4a56": "50ef90dd636e64ae528ba644bbeee261",
".git/objects/70/881120d6b316adde2b96fd7aac35b15597b1d4": "361811f6e39afe48c3826fdfd24f041d",
".git/objects/72/60945ce9debcc54be1d8a9e9213ccf6b4e94fb": "eaeff82afc1b810c6a53819a498874e4",
".git/objects/72/dee1a5d164321b79f9ca2cce0d8e62671d3378": "9ce0c48a51034245d0858aecad4bdb6f",
".git/objects/74/cc5b3b131c4c6162c2b910bd1a957c46139670": "1959d7106558d114194eb338e6af58a8",
".git/objects/75/5b641a81c484666fdf178ce4164fbc2e11d6e0": "13417143cd8aded79fbb468ff94aa684",
".git/objects/79/8c23a47c75f8424cd276737964c0e7d5751cf0": "91943e845627ceacf56cbc35621871c5",
".git/objects/7a/2e5f1521f3834362543a772d73185f406f25bd": "2c86a89d6732cc4c249773d269f13870",
".git/objects/7b/519071e1384e5c038f972b9df0c2484397fba7": "4751af0b0e669562b80075efa3f31af0",
".git/objects/7b/ccbb62415aa66eaf34cd73f2255f993a5c0fcf": "72973f25c9ceb787ab576ffa16d5fdea",
".git/objects/80/64d6fa53eb99f1b64868937d5bbdc234898c7e": "f746e72d3d057758beef9b9506e97236",
".git/objects/81/8e7d830661758edbf88fd750e255c4cf5ca7cf": "9bcd1d4d20737ba0f200702a820ab271",
".git/objects/83/7bbe6c38f4f72e04f6b812d8b1f37511dc91bc": "97608b462efdee80bceae073df37fd75",
".git/objects/83/a191b45332dc7a5e73334a4e60cac11f7a7057": "0ffa3fc801c553a6df4d02d7c55d93b1",
".git/objects/83/bbbbad9c9eace4b689b7786cefeba53a68e038": "062d2e9a96155dc4faebdfe2cb3e9792",
".git/objects/83/d87ce2585058dec1040f63c00849f41cc6a890": "fb4017074dd5d79dfdc75f64aa599e7c",
".git/objects/84/df802c13c3744427649a2bb1a3123498d17f35": "caae0c304d59558a6e10e5c368af4e40",
".git/objects/85/cf66eb30f7675a8ba33f9a081c3674104aac14": "f0a8fbba3b88c44a4e5c25fcc5f4e4ce",
".git/objects/86/b66421525f38c9d50fb6d1e90e40e556dad53b": "37d4031dd1319225b09020007d87a508",
".git/objects/88/cbe1baaf8a000554a1840848b1dd37bdcdba2e": "365d72f57f64d1875b84101673e7ea4e",
".git/objects/89/f34d29e62084e5d9f6fa1954b622f87525ef78": "9fc1ecddebcfcd5cc13b713f284d5463",
".git/objects/8a/ddcf3f432fd6c3aa027ff8f589ea2766680485": "e3b6bab87d9cbc1a478ef44dceac1515",
".git/objects/8b/d50b97b60832beaacfac2ecd7a9621c4b987c5": "843460227481909311813b8be9b7b819",
".git/objects/8c/0cfa75a07ca274dba54e4e4a3879acd4e8b80c": "4ff0525ae041c459ddd26464f65b213a",
".git/objects/8c/2c4217ba2250dd45ef6ecd3824b9c3b15a30a3": "eeb156860325ad59e1759fac1d696f6b",
".git/objects/8e/9a3b1348172aa5f3735ca6d6efaf5a91a6cd7d": "f75f661b5334af9478535dcb73db21ef",
".git/objects/91/120e67aef3aa9c6973b2a29834683773298545": "c52be1f9073c07cc0f4fcb5c6546f41a",
".git/objects/91/803d671054bead287204b78e1710f3b1e9ee82": "5430214f97b5d00033bbb268987306a9",
".git/objects/92/46f40448cf534256136ae66b0fb3bb68598b31": "fe8c7a4638448323b11ebba0468f560c",
".git/objects/93/3e4c11688862972a2d9a5cc9a0fe90f4b74a01": "b089d3d76ef6bf71b9a49ac7077c75e6",
".git/objects/94/a5d8f7b02f24150cd7c37eed8dff703390ec22": "c220e37dfa3a3f72928c1e993e6c1a0b",
".git/objects/96/0d5335a634cd70821b9d1930e9ae69f1981589": "a9ca1a610c10329b277134233e3abadd",
".git/objects/97/407d368f3e1bc3d972f6e9d7547da572b4247e": "4bdfedb0b2e5638e9154ef7d6c1f9c8e",
".git/objects/97/660d34e517bb17cabfb262954e8498d3ba924e": "988bf6912b6f1db9b8b9fa988a0b4366",
".git/objects/97/cd239aab86ad0f45f457f908a59406651ec28d": "aa95468098cd7e2cf2f5b5b6fcf23cc5",
".git/objects/98/507eb9071435ab998dc05d23370379c1453b83": "343c4fca277a3409c2dba2ebf1d25763",
".git/objects/98/5bfc362d52ac25bdda5cf66896e1441f1d87ca": "64d52dd05be12b71bc44f6e313b616e4",
".git/objects/99/46ab3857c1292af3f136fec3901d57362ab0b5": "705da79d26e71729dd5e7a56d91dbdb0",
".git/objects/9b/8a974587e5097f83cd84866c84632b00a2dd62": "cdbf2912fe5778a8a99fcbe92e3e46ee",
".git/objects/9f/31a4ca7cbfa805d27b6ba3814708671a829f09": "c5d8c0b7f59756660cab1158698e28a5",
".git/objects/9f/9acc3ea2ba54a75634508037fe82ad75fc4c3f": "f9261df24edcbee8c8e9a8a10725ae8e",
".git/objects/a0/f463c10a024afe46442beab86bfa8bb55523d8": "900e2d58074e32aabc0df66f4e7b00d5",
".git/objects/a1/66188e966827cdd842b837d3d716e29605d46b": "d987f062a2963bfbb6e506d85ad270da",
".git/objects/a1/cae1192dcdd0ac45c03defe694f71fa75c000d": "fb1090ca2bbedaccacc2e7700f642f70",
".git/objects/a4/1c29bdc882421f92254d19579f83cf709c91d8": "c1a5714cafabb47ba614f66f25a6fea8",
".git/objects/a4/b0e6990e47e6133a9ebca8c6e049173f74aefb": "334a2372cf383eb242c82499fb9c8b01",
".git/objects/a5/32239179cb306248825398f4ece97d236b69bc": "5b9c27348797a37b5d2533f164b244c7",
".git/objects/a6/14c204992244fdf9ddaa53a631df6a0b388abf": "2cd332f12f65b112cf1fd6eff71026a4",
".git/objects/a6/ea2be608534a81e9c1b21dbc2af033ca6bdf65": "4a202926876dc65df7f20d66c486f951",
".git/objects/a7/27072b69b0fd70079bf72442a7c8bbdacf8c4f": "5de973dd018fc0b8a06baeb601d4583d",
".git/objects/a7/44e87b570873c637961232ce12a7dd8e1d031b": "755391f92f1fd36f75b5959ef99f8c67",
".git/objects/a7/87a58d5d069ce70512953a8e6782fd812652db": "ff8cadf5049f5f83aa65d1bfc1385c4e",
".git/objects/a8/61bcac69daf9dc80cd3bef42e4708d162fd575": "a7b6a241d0f83e6b6f8c139adbcf010e",
".git/objects/a9/b2665fe5190a3b0570db84adb0e8b68dcf2766": "014d8c910dfa0ab2f47f4254b8b8cc48",
".git/objects/ab/734a52e0f6cc5fe65d90d0f3f516bb9ae71774": "18cf6dba09f80b5ad13e03ae418071ae",
".git/objects/ab/9e9612549e527fee3fe1f6bfb59175cc73f870": "47773da0415c4c4a8945684b52a7c548",
".git/objects/ad/6ff711ac5bc25f2d61bec26e11b45717ff8910": "96fc668c79f6b15d3d27c70e66143410",
".git/objects/ae/b13b7652fdb84094045707b287aa7cb5261f3d": "132990bb099624eabb5dffca2661d2e2",
".git/objects/b2/68fbf1c6e8a9f3bc639bed54ac68193b553659": "b5eb2bcbc761fed51b4f6eb067239730",
".git/objects/b2/a340ef8ead08885c762bc8bc570e31711d6a21": "9df0a493f4ad107b5ba36e22043f63ab",
".git/objects/b2/fc133513fe0933af5305638ebd3cc9d0a3ac82": "4ba8509cf0581fdb7c376de0280d9a23",
".git/objects/b4/0b1a1f5832c6d8d07d8dfd72ae66a66f242057": "12df18819a68434753d5711b6a058ba5",
".git/objects/b4/7de12abd1281bd2f488024611f477e7cf1ecc8": "742f66e721bf372668be12cc319ae231",
".git/objects/b4/ece827bcc02f1d271939a86717e9dd9ad83746": "fb1943def1989a57a7e6d48c405ad4ac",
".git/objects/b5/6d9444737f354e73dfb16202cae5fa69dbe0fc": "fcf96c567613a29ebe13b5eb8ec75ece",
".git/objects/b9/2aab550bcd824b27ee25df9f0d22c48a9d550e": "bb0b132a513d6071d2b5409cc62041c8",
".git/objects/ba/1c92786d878089eb17a6b72584a1c99c38d41f": "1d7345801f43df6a917e4ea5410267b1",
".git/objects/be/8d206ba5a94ea8920fec3a46971ae57dee4fff": "41adc16db46223eebbedf35f1dd6730b",
".git/objects/bf/08a27c88938198f474120241fe4cbf6999d01f": "efc62e8817de9fc56c8f76feb0fba4bc",
".git/objects/bf/2d72f158d2ccb73a1579e068b308cd88cb7c86": "8e0e1a8e1744ce4c788ce339ba0c4b6f",
".git/objects/c2/50a353335a24f9e99f67224b1fbbf097d4008f": "ca43e248aa8bdfe912c7b8e7e6210bd2",
".git/objects/c3/3c09840dcfa5fdc13ff550b9709a192a9c4d26": "2a12e33b0319e9949ba6ce9598be05fd",
".git/objects/c3/9b7b29089bbdc8de53724863075238a9041c05": "98b8c840e1a6bea001fb391411bc9e3e",
".git/objects/c4/a2e70fb40d7e68997ba8c4bd3c3fb639a01052": "1452de41e25ac7698e71b1834a229666",
".git/objects/c5/289314a08ff1bce065c60d39f730f7ecec6235": "d9b9390d3a5470762171fabc8b152400",
".git/objects/c5/47c359d44cc670e8532bb54d5f28602839c13f": "e93ff0395a95344c11a5db3cc024070e",
".git/objects/c7/71bcfc30eb8745a445ec188456804715baedfb": "e5c9ed062c38e69725b60eeac46990e3",
".git/objects/c7/82336bfa634e4871cb633238db07f45cf6bb8c": "f4442826a9e524496a953c0293a440cd",
".git/objects/c8/b312e5fbbbac2b6513d5f3dde464b2cf438169": "95a7f461e18b2753150b7505b823c10b",
".git/objects/c9/8e189e6a5afb178626c7838bb3291440166619": "cfa23402569d281d06adaf6d1bb19c03",
".git/objects/ca/2835852bf6e74451032d977376bb972725807e": "6b75a236c1e98488b7ff0f28cef15080",
".git/objects/ca/5007695cf87486aa009674c865ff436f3c25d1": "93110ac55e6b81b51e4350f885688355",
".git/objects/ca/656a0a46e265b7180e2521ecf57e087a1cd128": "a7908f1dae37fe0244a13b27492af5f9",
".git/objects/ca/d653757e59458964761d1fdc80c247b2968ade": "72928e205771433ba8aa0aec94c8c3e9",
".git/objects/cb/c8542e9f3bc2c4f8f91e48770ad5dfc104e066": "4abbe06e4092e57d18d7cabadebed178",
".git/objects/cb/dc11c2739846cf640442e8b631791852f9d6d2": "e8a342f5c46b3df8febb886ccf92f581",
".git/objects/cc/245180a4439dc5ee47e9d45243795238a56de6": "33dc555f80cef886470b629c899b26f7",
".git/objects/cd/999ee2d51d48f749d149344c0194e89416a733": "9311b4b70beaf54d7c39b67edbe54947",
".git/objects/d0/40adf09e82217efd788b6d9aa19b623471f23d": "276f7897f1d047d43c682937e963ae5c",
".git/objects/d1/42f629a4f5dd66c8215ecec85333b0f2f79d57": "42fc086f3055bf631c04162c598a3f74",
".git/objects/d2/b6ce99b1b518b7381c8f8589ae1d11ed11c891": "d9c5b55c2ecca917bd03a0707070957b",
".git/objects/d4/2bf2c9a5e9063d0e1b83f9e6f1fa6421cb3f9f": "c19328431c189db80469fdac4489e876",
".git/objects/d4/75c1f23f77220e35799ba2a022bc8715994cd0": "959caa5a227d6a4be4850e75467e2d58",
".git/objects/d4/fe3622ca99879d4cb17a11b274ae792d3d2283": "e0d45a77ba1004a649e0338d30c69784",
".git/objects/d6/deaa48acca2f08c4b66568f5511ebe8bbdef88": "ae3ef450f23ee6008995719f028557df",
".git/objects/d9/4ae9fa5792a848ed0c95f4581a419d4236032d": "700a8bd21b959263808daee077295f53",
".git/objects/d9/e81640d89fbe180798da3cb5b11207aee19430": "670f28813cc10c46d79828f1d6b40fce",
".git/objects/da/68e5fa51a6dbf539e9f87c91a92584b80a9060": "1260c27aea25d946b00ee516f15307f0",
".git/objects/db/335573fc6d020cb0a410b6b37138d5c89ee798": "878c2b048163bd86bda4880d3274aa78",
".git/objects/db/e7298d8247f1cf488ceb484375109f1d637a7f": "3bb1fe95772552c04ffd37500c8b8342",
".git/objects/db/f233270bc76c845f055e11c18a631eb1df7783": "0b73b43a3e3f26885503c982be59361a",
".git/objects/dd/91f0cebceb30c0a08a62e07a39a0a514db9f4d": "d2c387a2a247af7c09e42d2e4552bf4b",
".git/objects/df/f6e1562828d5c8774e44b08cbc44644e51b66c": "eab1f39cdda834ba2bc8a7f50203b7fc",
".git/objects/e0/15d9c8cfd4b4175637235c0511542b3c8f7ce7": "2f0bb16c2c2823b2d6db2746e6ee1fe5",
".git/objects/e0/f4c3e1f5d8ec8b3db8be2d9756e1a9080e449e": "25ce420d48d328fa6e834a5ca398a241",
".git/objects/e2/e3fff9e77b54f69af7ec3608a91afccca5ab52": "963f2d57e7d687a71a0f0feab2f2149d",
".git/objects/e3/ab79d37d296adb457573ef0cf18cabdc087c4a": "d7fac8eb8bc52436bf52c5d321a86518",
".git/objects/e5/d80aff0df45cf5fdbb3483dc803b501d89616e": "86442e4f44b4f77eee0fa33efd348202",
".git/objects/e7/2e46c5764c926a64b81f5fee66f5decb32bb03": "3df8543b61a21e675a72415114837cd4",
".git/objects/e8/c74bbbe9e94f03181f28a3f599d11daf7c3446": "c3cccbf24e68a2ca741c1f32bc905baf",
".git/objects/e9/3a3eb3e64ef297e44d28d10bc010e40aab39ef": "db2bfcfb85f17b9e786be52853d56a74",
".git/objects/ea/055771c1b9307863daac4d1aa954048c01ad42": "752c2d19370b935ecb79206dbf5763c8",
".git/objects/ea/4beeac2233e2a203fe579e5ce800d81bb567a5": "21daf28d6bdeb662994c3eb34569c9c3",
".git/objects/eb/0ee1a564aab1d665cd20a6bb88d7d362320b18": "ea473b8be998a8c9593c783aa00add53",
".git/objects/ee/017ecc19aebb49c9d432d760cdcea9048d6245": "a5804312cd9bef15b2b13608f5b3fd98",
".git/objects/ee/2862313d0e924d20fec2b9806882d4808e7ce5": "414061d738dea792b05073ac6d446c9d",
".git/objects/f0/869772599f4f3c81610c83933aa08a72ffa4c1": "3a6ef5846c93f785941364007a176e51",
".git/objects/f2/1e4885cc5a51df5e96074f61f8ef436d18e000": "13474cc16bdcedc5783ecebbbfa03a61",
".git/objects/f4/492b0cbb5a2b57c0cfd11ab669e58143ae660c": "324e4da9999163fc2c21c2fb558b388c",
".git/objects/f4/c5a0a7d8a2bb440d5d4142164157b2841919cb": "eb04b524cb001dd0d073e93f828d0fe0",
".git/objects/f5/1033669ac8191e8fcfbc1b38276949f9ce665b": "e6eee52894e4595ca63accae231027dd",
".git/objects/f6/866b85be635f237fad9a1bf1ac5571078e89b4": "72c88503e18e0e3b298040b0f039fa27",
".git/objects/f7/5560a6f067307641ef39ba4e1f188c10030e15": "f5a09e8230d7ae82e3ce8f80bd8f05ce",
".git/objects/f9/4a966d20c49b22e4d846ebd552b6a8d9e7e3e4": "137c34aca2f81ebafa2bba94b36a8bc9",
".git/objects/f9/a69b66ace8e9873bbc5b306965d868454463b5": "2dc06e5f3177b3914fa4a268df173853",
".git/objects/fa/414df5eae63f117c4e5d7e0600ca4340f4d7ae": "30b1e0ed25e4e59d08cfbfae1f13e8a1",
".git/objects/fa/933a274455b97bada81cc6f626ce97635e8794": "7706747eb5e23eb2c04532788f73bce2",
".git/objects/fc/69f11afbd2bb54745544a8725f50e8e84fb5fd": "ce2b21ad0aabccbae94cd0c0b56fc7d3",
".git/objects/fc/d2a8b14c0094b6647e9135ce7b86758ac3b66f": "2cd1bf7fa9554cf080b78544466322bf",
".git/objects/fd/8043bdffdd40a085091d8f358755e87318de0c": "bccbc085131696824f2ed487a2fca939",
".git/objects/fd/b057a55cadd3aa5385f4123e950b4cea6fefd4": "6e4db536f9e8c582725187d7ca59e734",
".git/objects/fe/42098163eca66cdb47a113afc232f2b98b8012": "a1ad301a4e67a4f9cb3f8e6b8da68031",
".git/objects/ff/787a18ddc2210d8bf57586ffd8581329d2c96b": "1aae590c68a580dc65fd0e1f831df98a",
".git/objects/pack/pack-70d3a22d0bb4cae8d7fb71874b6830dccf18a574.idx": "ad827a0de202964239383ea6df7b2820",
".git/objects/pack/pack-70d3a22d0bb4cae8d7fb71874b6830dccf18a574.pack": "94f80d40db963d479e55827ba70ed3ec",
".git/refs/heads/master": "e76d945faaf70873261d34666868e58f",
".git/refs/remotes/origin/master": "e76d945faaf70873261d34666868e58f",
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
"flutegram_web_1_0_0.zip": "89604704cffa7ddac1935b2507aba09f",
"flutter.js": "db931120412af26cc1511fa058afaf0a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "850ba8533b9a9a691809ef09815633a0",
"/": "850ba8533b9a9a691809ef09815633a0",
"main.dart.js": "b2ee54f5d70f2ca734697343a596ad3d",
"manifest.json": "646bcb281bf42ca53d181d4588903652",
"version.json": "90d7f805446fa32329e7cf1fcc8b7fed"
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
