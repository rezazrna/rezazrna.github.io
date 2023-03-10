'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3c88ed8a92d42e6b9ca4066d15bf7eda",
".git/config": "4af0966054a366e47587e17845b649ff",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "ede11d937b1a439629b6f67c07b8a011",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d4933ee199c2bf63ab2656dd5de49514",
".git/logs/refs/heads/master": "d4933ee199c2bf63ab2656dd5de49514",
".git/logs/refs/remotes/origin/master": "341a4fd6ccdf6ebe0dfbf49ec28f74d3",
".git/objects/00/99182ace6a02ba645096bd42e41c8728a28ff8": "2b10135d94b523f09f1f75f8b192ca67",
".git/objects/01/d8b0983a1f776b260ddd46f310ffed5fa0ad92": "d6e42abb5e70070e35fd4ce7c943941d",
".git/objects/03/0209c556de68c4803cc9fb008b4940b874fbee": "2c5da3a410466da28e6db2226ba89981",
".git/objects/05/04c7e05a486d1a61e1111ab7fb515b04ce4f31": "25d1e27ed0314383b66fc195702e2a6f",
".git/objects/05/fecbd48a4f90006cf3a77412f9ddc445626442": "b9ad46a543a7913d3b7d6378908dc327",
".git/objects/07/1ad58e53fde147f1f13a9a4332e63af88d2b44": "92a9f3f40b420e31b5b13311a5824f95",
".git/objects/08/0f14a501e35f7c587c87c6fbce4e6be4d14114": "f4f90119eac4e1315524a180d8575ef4",
".git/objects/08/76e2048676e3971ca850637df4abc0dd7247d1": "789f04ab907712a518a5d77b9b84fe6f",
".git/objects/09/fd05f09cce80698b021fd66675d16fbb0e80dc": "b45ac9f6344ed8dc84ac6856f6cd1758",
".git/objects/0b/0391f47fb190d8320a2ecaad68e296cb034f23": "0eda2a16a50bd3ba73c119d86e389929",
".git/objects/0e/0337fa6c9239b74952d015edd9df49accfd2fd": "23573d415d20df765f401f3706d32bfa",
".git/objects/0e/2c5fdf30f1d3809bd697f40001a309f62b9de9": "0ff5211e33ae75e42e5478a97450cf8f",
".git/objects/0e/7414fa08b0f6111dab05e74adabcc59b65f7eb": "37ec1e05ee79db1bc5d67b50720b9144",
".git/objects/0e/d1320284d39ac775fc9ef9e7742e701e070b04": "3b0855148473b9b410de12437499c3fd",
".git/objects/0e/d13e477f75aa51e1d878f83438886c4649e892": "1c59ea2abe292e7b019e152e186d2a62",
".git/objects/0f/6e4c65ac2c6b293cd8235f6197b7950401a694": "06eba120f5f8d257ea40d02d678de59f",
".git/objects/10/2dc76d748cde4713b7f9ef1fb49ecb3af34218": "433483ed456a9b8c13be87dcbe93e69b",
".git/objects/10/479864cf5cad626f60bb47b5add0594ba05c38": "825db7afb96027e64e878770d609ea7d",
".git/objects/10/89c54c69030f9987dfff4bcc28f072c6e9c788": "2b535c9fff7187d6164dc0afc2f8747b",
".git/objects/11/76bb7746f5a8e60d899eaf5847b732fba5a597": "578bba83ad83b59d40fc23838f4da60f",
".git/objects/11/a0d85697b66e5bd2932a5b0cd61535df2d7238": "f325f710b73fdbdc09fc774f2672a070",
".git/objects/12/1aed0c1f56c60f694d3704ee863caad0e92b6b": "13d70a32721acfa5ec85f80ba33e36f5",
".git/objects/12/e6530d85109ebfb7ae68e85781b68d126a6022": "9b450dae2be557d6aaffef1e8761feee",
".git/objects/14/66d42b15e4a343d4bad4d69551a13822091c6e": "448aad099a78cc6c19c2203bb4b011ab",
".git/objects/14/cb86b9af571ecacbbdaa90415cdef19b8dc29f": "7d6814db6d1c577e7c9c7b1ad18a7bdb",
".git/objects/14/e1108d5bd98caba3cf1245a39bcd03eef300e3": "1343ceb7ef25a25845286415123a292f",
".git/objects/15/ae39c702799c7eb098f11180c728d770c9495b": "a915ba5d87a375f213e7b3ee6933634b",
".git/objects/17/89d63bd8b2a28b4302e9a70dd988224593629b": "325868e00624fc3a4aea1e10651d6dbf",
".git/objects/1a/03c81350505554346b4a1703a94d7b1d256a32": "dfed933debf7a3c0cec579573d031783",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1b/079f769bad76772f659aeeed5b1dae6aa48f2f": "554946e6dedcb467aaa4579426ec2579",
".git/objects/1b/24cd4a1143c7c1cb1abd3887ecab36795ce062": "6558f4fc036c2b7218383f652cc4d5f0",
".git/objects/1b/3f1a57b4966bb861b46ec5d1385dc59a4d100d": "36b41dc93fe7b9ca3fc628eafff53660",
".git/objects/1c/59a27c49a999ac95bd2e4bc43c25545fa66f65": "e9da2a0e2358c401250757655a0f08df",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/a89dac3d38e9b83330f8d81af975e74dda6f50": "10d4119f481af3f0a545a5a7608cd68b",
".git/objects/1d/f263d745f7499584af422f5039de9c0bc52bfc": "957fc505f8dad2b4cd038239c297e168",
".git/objects/1e/7170756c12bc19f7c286baa95e0a8e3fb2faf9": "a57e4ae27693a01f9a6a908c541a9614",
".git/objects/1f/d9f3c2a4e48161e1c852b1a2b2e035628927fa": "55d0b95cc5408d15a5b804e4c7470247",
".git/objects/22/aa68ec2be23cc91927bae48ef83caa93506341": "b3a87355289c569a27f8b4f8ff900d39",
".git/objects/23/97b4363286b3ef10423004952ecb70ab97fd81": "27a376d7704cc00c03afd6ba1b509602",
".git/objects/24/5fe9c4f0111b2953c20265d3478a989aab2fed": "202afd973b1b00b6bb98e8441d3b59a0",
".git/objects/26/40ae4e37c2c52e8ab706ff21fae09af83ef2fb": "6053924da902a8e4e765fd5a562c8c7d",
".git/objects/26/e82a768ec1da26629c817cbea67e8ff9812ef8": "6e1d09eb7fccebf919f28de1d9aba0e3",
".git/objects/27/7277f07a98d37ceda179f9ac870ae5b9c2b84c": "2d6a70b27e9fff1829eb2f06def421e2",
".git/objects/27/c300e6b9f9ec2f92b7087f7184c4a42654fa91": "ec5bbc04f8e272c7a6742242e6fd1aa3",
".git/objects/28/26fc30e8a3a6f8e4d4389bce3a963dd175215c": "6d942901d95d96769384d0dfff3e8db7",
".git/objects/28/7a825e3187178f0f59f6572785a9ba8aae1916": "d5d128eaaccffe61f07d2dfa7de3820c",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2b/23e655827b5939820e84435092c3071ba29188": "6a262cbcc93d07292eee355a3141bc88",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2d/d0182d4a4dc1ac193e549ee7626c9900a519d5": "52110b016e28c8504bd90d1d34ed1a07",
".git/objects/2d/da1b60ea44349f4102b1cc601c7be1a55cd5b9": "a700a68144d0fbb406cb429f56649a6c",
".git/objects/2e/a58d69c17ee34a36605710075872d2c7de4375": "cf2e79c2f4644277296e42370c63f233",
".git/objects/2f/3dabd84559ec1b3106292927cbe2cddea7f025": "e852982aa9f90cd80c14d8157b9795e5",
".git/objects/2f/50c32d7b26d1666cf59157c38c67b3f52760c9": "eba108e3e9e9b665d69cfe647abb0a11",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/30/4538d9d439db11581fdbd861b2a9728c3f484e": "46b9ed7e0a0deb6db900aebf76199fa6",
".git/objects/30/c14d5999819789a077bf1717b652a78d62ca05": "080c928164b19f3275d7f811d1b825d3",
".git/objects/31/3fc4350ddf79939f6a39c11dc6f75944f96750": "676b4d96f7ed74e93344b5f4a772f11d",
".git/objects/31/658de83a4f751261b7a3540afa6418083c45fa": "89ea73a53379f9e3911979b50adabd81",
".git/objects/31/9c72b8504822b31e22a951ea2927c630c04c63": "fffc6f4acaa9c16f0b43616ecca4352d",
".git/objects/31/d0ac8008512abd77ad8f00ec516aef2f9a3a08": "41257120bea0b09736e4db75f2818792",
".git/objects/32/4f2295b6a4c46a5bb1ca1fa120ff6f86ecde21": "00e0dc6cde0f5daf69c134283ae533ca",
".git/objects/32/b30ed4cc91dc6aeab498e2a0e8a164eb0521d0": "d58585ce4d0d982db424fdf7d3868009",
".git/objects/33/45cb4439524b2f367590130e79ada2061c6b31": "92e1b8f873db72a3c3787cf84b46a7c2",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/35/01d9ecd0e959a2b5d74dbcfc97795d5719cec5": "cd0eb05faabc0c1512767c52b0e8275e",
".git/objects/37/6c44e27b14f8edcd0639cae8849020f14738e7": "3b437cf3c8310167cf5770475ed7fa42",
".git/objects/37/ef0986c0ac9b038dbf6241417fe893db145ea8": "95a32c774fc7c19dd1fc3e35f2cae644",
".git/objects/38/1ae9b6ac1c3b9653ed9e93aa7ce15053a0563f": "13983364edc7bfbaecc58f4f6abcf022",
".git/objects/38/4a0e899dc0faf37f57b6d317ca467e2be557f5": "9df505f1a57c0e8b720600acb4764137",
".git/objects/3b/2a9082220ca75e35f13fd03aa93718881659e0": "8e8b9fe0ba9cd8c72d387f972bb4f3f6",
".git/objects/3c/fce98a045dd71b9a31327156e21d18ffbb37db": "dcd068e50924929fb8c9bd3f9c08e68a",
".git/objects/3d/93635fc98964104e1e193098bc92c2ffae2a86": "ea80369952ffad3b8db9cc24ac5dab04",
".git/objects/3d/fef6923fcdf681aa5f0f9d0907c7d5189a3979": "0e4d4d3340075faef6c5802e14e31abe",
".git/objects/3f/3af45e81dbc7d3ddeb26ec85ca4c3d650ebe17": "4bbf61ed754d6b87174414af6b4ec242",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/40/519b18d80ceb8f143e0c01e3ce51c563dc21ca": "a62d49404784083dbe57809c57164429",
".git/objects/41/f2bc1700225c70c38922cf15f73e31ce95bcca": "0bc19f76d635f51c3b22059c42aa47a7",
".git/objects/42/49edb6621fa37a1fb9b84baeed8eba32a93ce7": "7f1c74cb8dfe88add2bc033d32b1ecee",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/80ba827bd19d7d9da2f550d459363ce271a3e2": "f18e030f9b88f59ce231c352d9a21b89",
".git/objects/43/a9497a01581b76efdcbf43c66759d96309de2d": "295b8009b234315e577251db5fecaed9",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/45/a86bdf59b68ed91811284e4a106ff75e40a8c2": "39fd17209d19f56df13de99d84bc2fa7",
".git/objects/45/b0facc80966f79aacad390aad766b7944033ca": "9dfc4fee17837f0c1e2ae4dc9b13f19a",
".git/objects/47/db41d2fc0746d94968234b8e4ea72cfcb7abbb": "bd7572bea30e1da1ca9feade4a010bbf",
".git/objects/49/b3f56e2a9745115972e2d7c26a9e287e7add8d": "13d8295714253c82a9f050c04020b89d",
".git/objects/4a/13fbce3e9b76080857df7ca0804b8862acb878": "f12de52d06eb5021d6ed9d08961ddcde",
".git/objects/4a/94b428c1d37322aa46079d63ceaffcf9eb690a": "89193ca35cf462b9b17b81faaf65f281",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/6562acb39cf8feda4786392453b41408752087": "5f1646dadb47d46d020b31db43636e42",
".git/objects/4c/5a6ad0bdcfeb2208982780372f486affd8eb0d": "8b1c16d7f802314179b3a93e8f6e4a1a",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4e/b4eb2fbd0ec9dd6ce17ff49cce64d0816fc18e": "126150ca189663e0050c755b31a899b8",
".git/objects/50/a145e99cc4316c78546027cd11844123017078": "b9ca7ee346e609ecca2cf7ebcf7c2f6f",
".git/objects/51/4109e1d6618282749ccf63b3b59595a2493dd4": "612d5a520978c1e0ae9dab33a2e28124",
".git/objects/51/8923bb3323295d00a98109daeea453be7e53f2": "19dfc323ea2dc7f6ac2ebf15596a9a75",
".git/objects/52/00c77eee859ea2d95ef126e1cc5733357a0b54": "420fcf68d776add90cfbcdfb1f8b7f7b",
".git/objects/52/416fcb1bb68a50195d8e1cfc2c213037d7791a": "d5005b0bb18f9ea57b8158ee4cc886ac",
".git/objects/53/0dcbae6b021557917fc2ed71f3637a866beb63": "03c7eb1395ca638ccfd4fa7c83dc9691",
".git/objects/53/f62609e50ddbdd342284b5f7dabe55e1f370ee": "6d7bf286a8fcf2121a190b20a2aac412",
".git/objects/53/f8659ddcfeda3e2820e25dfe724c8041c3d529": "5854fb29d4a4a730f478c7a696955fcf",
".git/objects/53/fce7be56d53f2c42946a8cdabbe9c7e8bcf6d3": "4a92731e162dd51cca7c746ad396e4e6",
".git/objects/54/96a4e31e8d5a37ea39faa3470ff39dcbb9a4cb": "020b0a50c8373177ae99e09a413a7ad3",
".git/objects/55/30afc93d663aa64010894fcb04fc39b535819a": "8a7bfb3637264de8d3ec8d3282676da7",
".git/objects/55/4decd5da0b1abdcba8953e4a2784af3d5e7296": "48a79f55b2d7e318fd7c9ba265684628",
".git/objects/55/8080f59c424c333dbe3cb377e16ee22def76b2": "b89981c0471e5d2d5048390cd0847a71",
".git/objects/55/c6af79a2c711962ce03d62487afae2c971b75b": "b4377dfa4d52e340bbc32344a4bda3c5",
".git/objects/56/08ecb8085cb01cfd6eff8cdac21c05c81de0f5": "b06de128c78eaff7a869a6a0a6e540f7",
".git/objects/57/ff9fbdddbbc5c5bbdc2c785152efb1124cc970": "73cf0d6a61761fb77c4d572384d07305",
".git/objects/58/510fbd432c08ae0e64b52a55b029b18137e81d": "c2bc0adfbfd94db7f8aec73734595725",
".git/objects/58/ca8c121f2e013f2c5f58f3fcde57fe03d05237": "cbdba0f48731d71fba1d40f2efe61661",
".git/objects/59/469d1c3cd537d91119873829534f8da0f28280": "eda79660d9eb7476d17f07df8c3c302c",
".git/objects/5b/8260d1e4f7b8594b6f4bf8b5ceb5a783367109": "0d65c3488b6f4a128b65b38a22e074d7",
".git/objects/5c/ae70030e2f5afa0a099a70fd9a217511af7da1": "07ac43aef2236a951287811c5d2bd4fd",
".git/objects/5e/3b3f065ecedbbb2201b61a53305a40644c2098": "6d1e36fbd78abad138b51d2f25133105",
".git/objects/5e/515000f90307a5d2ddd0756c46ecf19557be11": "e70fa4b644b93166c54a6b4d9262501c",
".git/objects/5f/07b09aa417494eef0ea9692715d838269c4e41": "595781da701881ae0d48007a7139a2be",
".git/objects/5f/6e6cd504e5a5a84d05c438d5136453a53e73f7": "b01ba621b85ed708a33a694f09b434fd",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/60/ad64d1aaf042f89ab1f541424bf1a152acbeda": "3e3c84c9dfdb456bd185cbbadfeba1df",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/790ef4971bbd5d1598a5d1c084d4434012c049": "b0352622a50de9cd02be35466ae621b7",
".git/objects/62/6d6caebdcf01a8757301ad9f9cb7e191e713bd": "428f3e55b62b4560551a895e8ce3ac19",
".git/objects/64/92b350c71bb3f6de7a4212441da282969f9959": "6c46289a6cecc5ab8cabba23436fa991",
".git/objects/64/99a6bf8cc9906270f642723175301c8421b171": "5015d6755b0d6db055dc77186a3ee391",
".git/objects/64/b0089e51942ada0d7f40e4f62af7a1a13be61f": "c74bdf2dd62b435e54dae97a407d69d4",
".git/objects/65/4b7cfa9345875868aa326ea3bf711188d18239": "81a4b15b4a9ff9cd6c96d41c3f6f2053",
".git/objects/65/9b61c19ec90850e1f5b10b1dbb6fb7d1c39fc4": "91684fa315db469e91701c78924cb099",
".git/objects/65/b64866eb836dac5a913e7f60682488c6850096": "d431d3af4a037e8e86e378bb9bd41a8b",
".git/objects/66/09d03cd91e79da5fc767cf9b0ca64d289c03b9": "edab39b8f5751feb78af04d9d89d8bdf",
".git/objects/66/728d48618cdbb0107a836cd2f91200a6cf0c24": "00e845630a757ac11baf3bcabe6d4076",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/37fe60eccd40a6d1f7191ccda9042c05605951": "c3902f9f48daba51abe4223e337a3bf3",
".git/objects/69/c39a344844e73bc4158628853ac4d0c3d21a6f": "d6569a349d951b7c22d66d14a8e6189c",
".git/objects/6a/2fefaeb36f27351608a9b238f670da04ad2c54": "e1bd03b02b922818592893676b59ea19",
".git/objects/6b/08ff61aa5a2fa792c27a7b840d88ad136959b6": "1f4c7079b679d909396b50edd08fb56e",
".git/objects/6b/69ca917865a46be0f3b5d947c3f6eb8802d1c1": "36b73d710e89b0197f0697f2508f5a9d",
".git/objects/6c/822265aef522a4321187fa04511c3b5450917b": "f89f79098174e2416ff6cff9b01b04f9",
".git/objects/70/d6854a62d5bf762c391950c307f267ac9bb2d5": "7b00d128b9ddba8b4ef6a0669b8acbe9",
".git/objects/72/cab050155dd72120c893694acd93e745995aa6": "3cedce09161901fc27d458e2eddab045",
".git/objects/73/6a7678b3fbd7835608b7c634b62abe060ed4bb": "30284bdd54a79bc2798efe84db3d742e",
".git/objects/74/bef51c2c61bce3e5af684eda5a9caee8c12120": "5d605dd48aa60bdd7d86a729e294d4e2",
".git/objects/76/96ba55f7dbdcd4d184077ac9750002a6b788fd": "fbb6dcbc806ff4e2451693724fad2975",
".git/objects/77/d4bc7e64ccb810013c0321b77f5d1d189de9ad": "c011c19355b6de91ef7ec25d37ad2d74",
".git/objects/77/fb43a54fdedae45fbcfb45d057452e1d2d0372": "420a60d0d080e7b3544c1edf9ea6e298",
".git/objects/79/055e42680032d4b949e369dd03563d59559a4f": "069beeb450b5533674c4c94824bb20f0",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/ee98765561ed58b66a466f466f726921e5cafe": "164d81a7481c094176f150544404042f",
".git/objects/7a/4767ba7b502dc48fd41b7a853274e4b8e4222b": "59087f6fbf2f2ef64200b305b415cd4f",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/41bc7d59196229d5ddd5ec564089912f117854": "291414e99658749b3980e8a2295b0bf4",
".git/objects/7e/ef64ef301fd2e89fb003320d408ecf8e90bbfe": "6a2177bf1631262b1f2e3096c81a030c",
".git/objects/7f/a0243910f95a2b49833a4d5b2dff86add35f9e": "e314185b30b4bff5278c8ad50f7d1f3c",
".git/objects/7f/e1475cc62d8cc3876f07d436cbd66910ae7822": "bf91e863057e0cbf0f1caf7f0d734a1c",
".git/objects/80/0441feb8cb692a8bdceb5ee9f62831a897989e": "7ec756eacd0b154a314424cac7f80bdc",
".git/objects/81/39aa43abb6a6d3d4c92bab6ffeb63a718b8ee8": "0bcde3b4a147a7073c0133c464dafab2",
".git/objects/82/1944fc2b86386cf52fa550022e3b7d14af528b": "61efd86f3a8eba142ef2a31d881668c3",
".git/objects/82/2609fe1cd1ebd0b5b49797a147ef0a57cdd048": "16904ad010ab6cc0bc8a8b25edd427c2",
".git/objects/83/4e11f16fe9eec2a8babb1fc163f47ce77cc13c": "d34159d8b4a0047490fad3ab8b6b2886",
".git/objects/86/26443c1886804b8dcbd4a902fee9299fa39186": "c4a9ce3219ce05b7b3d8ed78ad9f5d55",
".git/objects/86/803bb3a9199a8510d73b9bfc8c8c9702ed36e4": "6977b48f0c79c81fc46667e69f03f773",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/6de647e92c5964c1dd2062c99268654dd933bc": "de950625ded137d1979682528772b6e2",
".git/objects/89/efb883e47bf030356b4cf9f0445d6e94fa9e4c": "773cc90d76c6e4255c4305d91ee85044",
".git/objects/89/fb0bc05c4034b9cba7cf431fa9509f1e01f44b": "6c6157d8903519dc553b7d15d9804039",
".git/objects/8a/2403ea7bfb4f56403e97793b167e7df19f2b33": "936018302417288df14ce1437d448be2",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e1f45fe745b29c4f1f392f2183c5af2e0862dd": "94f53e8228edbeb977d1ce304c80d0b4",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/8f/54d93b5cb6f623f0d582e6110b3bad813f4eaa": "8ba505c2c79900ad455b9bbe750488cb",
".git/objects/8f/6123293444110704266c04d59a9e983dade572": "802082e69732a09d78760fb9feaaa567",
".git/objects/8f/7edffe1267d4b29c66add74c8471368972ea63": "a63509439db8607b08d62fdf9cac8c6f",
".git/objects/8f/811e8653980b9cd489d80e4fe073da2f77861d": "1c1330cc0f9440a98985b889ff5c8fa4",
".git/objects/8f/f3c02f11ce16ca8e89b0da8556b19802c37d8d": "09fcb11d6f498da7a4df9343de3a150c",
".git/objects/90/ec149540d8b4cd4b311dffc61f0e67e81fb7a5": "fd1668d79842b75c23cd02942c10fda4",
".git/objects/91/0c2a60ffcd906578f78b3c1ee8a4666bf8391a": "31a2012293a1865cdf73fa6139f7324b",
".git/objects/92/3ee481bb6bf16eb4dc20b94ac7c9ffb72a8b8a": "16093ecb8c7771939347aab989e55181",
".git/objects/92/e27885478a620e3ffe115ff79520e629da22b5": "be732bb945326d8347e40097a4cbd3cb",
".git/objects/92/eaaea0b06e045c275f9d4ee51b794a5759f32a": "c898d61548fdde16574efa68d8c47439",
".git/objects/93/34a15a437ca226ef3a9febf23c4636dcd36aaf": "593e0b4f9ca39b92dcab90de5c8f2ce4",
".git/objects/93/68458cc86f21fccda87469aaeec8b0a2e27fee": "0147a4e0c3a7a3a7d65d53d2f27b7c43",
".git/objects/94/091e577aa343c18cfcf6d61ad9f91ce4c45ca9": "ae254fe56ccd674fe6e9cfd6a10751fb",
".git/objects/95/0d74292b46649d60c8ecdad91c4488d25e8d21": "aa692664973fdc672f93245ec6b30517",
".git/objects/95/f4d609b3a5ff1e4ea10cbeffcb7b4342ab9ca9": "f2f0d8dc39714d06aad0d4f81e3a96c0",
".git/objects/96/98eca6334bc7f2818229654b111f05e1cd28b9": "65b8c33d4e2e53edd56a41810b7fdd71",
".git/objects/96/b92eb17693a30123afc8e600bf4b6955a113a7": "aec659305de87d4100457810ba9b71f6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/cb777cb2e6453365cec88ce7f7d55522bdf929": "63b6629db09e3c3c2e1465597749001a",
".git/objects/99/6a43c640c86d262068505ed0d54db6c3f5aa62": "bd3a17033ca793758ef94d2f2916da15",
".git/objects/99/a61d10799df55f14dee667a83acde2db4a8022": "1d8965ad0db93c20fe37d0f91727c89e",
".git/objects/9a/ddf0f53bd36b503f6663a1f6faa1147f98ecb3": "14ede0f6c188d3f9a1db96bc8d2d37b6",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/d73a2c8e6903649384f543bc88bcbe22a4ae7e": "5a96775ab789ac59198299fb981f260f",
".git/objects/9c/f5ffa54a4e01a6fb8609db3268d4d583c9ba48": "58b1fdb0626b008912d60d6dd32d43bc",
".git/objects/9d/837f9f31a95017cc2ab743c9de344e89b933f9": "966611a738cc6b48ef75e311735edc82",
".git/objects/9d/89fed7b16c87d79fe14b78e36aee0580feb86d": "444a9b4728a295c07fdd8748c3994c18",
".git/objects/9e/81f9225295c65960f5c792b9b7892b061373f1": "d59fadc39c8299a05760ba47ff337e8d",
".git/objects/a0/672cfa46a0e40c64b20759dfddb3204d43d01e": "11e561446714049f88377e0de3bb3125",
".git/objects/a0/ec769beddd69d297cc30c51482dc540cb8199c": "b91d2fa04095110f65f4b2156d779202",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/84ffd9a8936ec09bf2cecd99fd928594359c0f": "a49af2bc1fbae481a1a762ea4ff0e876",
".git/objects/a2/d2232cc215d34bb571c309f91312307556d1ba": "48dcc3784a1373239600f010afda1c70",
".git/objects/a2/e878dec233ea59fff62b9cfae051fac4e361bc": "7319946572e2ee807e29bce77686f791",
".git/objects/a3/2f7c1350b1b0ec3f5758cb0d1d288c44e45e84": "7f55d04eec582ec025ea6645cd9aea63",
".git/objects/a4/3b5e26b1ff56e7ab6b1520b744bd3bb7df2d61": "4ab79f72ce02ef536c6cc02006832acd",
".git/objects/a7/ac5e32d2642ba135def6d61488dfbdd9cd3a45": "be3b35daa40ce5f096f0d680b0acb3f7",
".git/objects/a8/2012eb6c01979332266fe021f3c7bdac018280": "9c41a7b35edfb03f5faffaa3fe188f00",
".git/objects/a8/25c2a64e2f58348d3bfb30d8b2be369fe1b615": "1476508b3e3911cf18e178543565cd3d",
".git/objects/a8/d56da25fbf51048fa9d132441271862d11c5cf": "ab5c83feeadc73f01768d2499860b6c1",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/dd821b4a5fe74ab11a342f5b5491b20e5edc44": "9dc518f2bf97ea30492424260ef58520",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/aa/1339a6390fda3dbfe2ca5755d0740ea5cb2b9f": "55b62e973789c2fe5e3e240101fcc5f1",
".git/objects/aa/3a161e765e969734aae91b96a23e5c837b28af": "8359a81e409acdc975d29f98b08e987f",
".git/objects/aa/58c4d4a227b5d94be04289ccbd8881b3f4f84f": "4c07654cc9c3d2809053aa48329e6bc9",
".git/objects/ab/99dcc665d17c8b4b63b0ce9e21396f3dbcc6fe": "e54f879951ddd3eda99ffae0043a8530",
".git/objects/ac/2f3bdedbe2f19bc84ea71f7e15a159dbc439c2": "e376ed2a1f9910e200ce92828a2130b1",
".git/objects/ac/98a8fed9c7dc302e86338332ae09e775277602": "ffb38b133b85ea539670a2f9077af564",
".git/objects/ac/f8ff14355f8bc835552bbfce31fe825fd2850a": "cd46fbfed698b2c8211d4a345f81e187",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/43159893dc4d9dbf517b709700fdafab7f0495": "d09d3a84693fd41f9e612d31dd1ae1f7",
".git/objects/ae/d751abdaf0e717735feaf7e513fda777dbd67a": "5b51a3aa8bbfc3cd77b56d119374514e",
".git/objects/ae/fe9209765dfe9ac845259c5b0c50a91f143385": "281d7be038d17e07da96789eae71948d",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/b1/d7c5c04bae3b0cba0b027301cc04e015104efb": "b872f279c07e9b8f110a68a7eb22d4cf",
".git/objects/b2/125ef296ccfce2b003c08c9bab390db190cbed": "659a75de4f8108aaf79c4d9df230ad74",
".git/objects/b2/6aa0cf8d8006020c93ea0a6313191dcbd20ec1": "d2455fa7e2878dae274ae0c956b4678c",
".git/objects/b4/0353f706d729bc14cc05303711a496d9490b3c": "03f862ce83c162d45de3ec7116dc7ac8",
".git/objects/b6/b7fbb6eacbceafaa8901b807141701a2aa0b21": "36674e676c437551760751b19157eb75",
".git/objects/b7/12349b7f45d2b91eb1613faadcd118a2f6b744": "32cc55dc7cb755e31e19c9e7be885bb1",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e51c95d60b9621aabe945800eb7f45e9fe2929": "d85896b755356a1a60408189afd8d841",
".git/objects/ba/623a74ca6775197b9da7ead0aba48aa9d4061d": "f0574ca7e062c18f476b3525640183a1",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bd/916a158fdff789d44b8632b6146b4003350603": "8a0a5beac4d4a40f07762ec91ba44011",
".git/objects/be/bc5ef7cc628f888ad4681a83b3b7bce5af0393": "dc798c559a60e449023b7d7f85d5e209",
".git/objects/be/c7f612c9223aeb0b88d74e57a8e2b94d3b4a03": "0cb47aa5f59b978ceb78e3588152ae54",
".git/objects/be/d4ced823ad66bf0471aed52a877075dd219c91": "2c5e1c0a4d79b0dceeb38671e48f9637",
".git/objects/bf/8b353472cdf9dc3f4c7774918f25a4c1438769": "2f533a6578083dabdf40f89ba3128a09",
".git/objects/bf/b11bf8c158e961b54fd62eac2e70d1cbab3f65": "6aa3eaeb8eaea9e01c58074581b5bedc",
".git/objects/c1/2361551429402323775fda0800357799a5d470": "fdcc8f070fc4e8065b4ee34cbadc45b5",
".git/objects/c1/27cbdec491cc0995b01c7a86486ff0b5c18378": "b80b8f17bca526d27d2a0cafc3cde757",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c1/6ea9c0ee013c506ace4454c1b5cce4ed6fac78": "ea9918a56df0c243b69e4cbda9e5e0a9",
".git/objects/c1/86e67a5d244c1978c2f7cfa6368d0b4b83c1e4": "dacbd3707e15f41d37b933a7e38e3d0c",
".git/objects/c2/0ba9ebdaa5217cb66f70d5b32f18924098426e": "37264b9c4fa7a9e79591b116d8a1e2d7",
".git/objects/c3/5ebd127339b8df3aed129c99f9e4180fa73aea": "7250d0ac687b340f95beb8e36e69d10d",
".git/objects/c5/0836606914b220ee41dfafcbea35b3775adad2": "d4264fb012bc3d6b86fd05b0920a46d1",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c6/896262405c24d73ea7c59ea480b2a885a72a64": "738f094df645dcd9de82eb5435d29dfe",
".git/objects/c7/b6222c7172ae2bd38a5709a52f656d07cd1eb7": "07e19ac717074e24660f20f46cc305cf",
".git/objects/c8/5699c790ec6fbe257b2a3b0d58471e0080a314": "d7f72dbc421e482e82c1bb14a5003ed5",
".git/objects/c8/d2927a55f6657dad77880d0e1e454e9e70453b": "d4436cb27d6a3e05028d937c35f46fd5",
".git/objects/ca/eb65d6bb5278810fd717fa2ae4cdaad558cbc7": "6f931e1768e8b87582fece9af68f89c4",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/2b63ae293804541b9b24973e34d12a51d6f846": "2c03f20fda8eb583848c2338eeb4888d",
".git/objects/ce/4e2c76b436bf89e32e440ddfc7393bd926b785": "9ec7bb467f51cf080e0bffc430afd7c5",
".git/objects/ce/c01de0c38e0ca60723f6f24d22f476b64f6892": "20ff2608d3692f76bce3dcffa57a8505",
".git/objects/cf/9358b2cbae5187e44ff26198df565ebdbb8e83": "76073d078d617e04372b05d6aeae5418",
".git/objects/cf/9ca2753afb9a492ed3731ef96c9084dbb8aa4b": "ed5608b43aaecd3ef682ebad2773e675",
".git/objects/d0/fe044d05ea4767d8c02d70b5bab570c25a0f9b": "bb050c34b74c35284db3697e76c7e567",
".git/objects/d1/f18225c9c4b4fd09383cf840851b5403fd301e": "40850e6d03bcaf5b77eceb1ffec4a650",
".git/objects/d2/ad5db7f75f9985ed6c7daf77f5e3b81edbac4c": "674c0299d39346aea3f13f4198a90b38",
".git/objects/d2/d9fdd2bedf8e712f3b5300bbd1c8ff33f5da17": "8ec3416c5a69818212f61d36f0fa6be1",
".git/objects/d4/2f6b74f822b903416b041775c9d8b90db1af90": "b884a000dcac4ddcdf7450b8a4398dfd",
".git/objects/d5/01e7b8af1370ddff226b081ee161fa2e5915ac": "994016ef9d885e48ad5f443dd33cbcbd",
".git/objects/d5/4741266364761c20d880fbfe404ecbff2985c8": "1f548d694a0cfe8de27b75c96367b41e",
".git/objects/d5/4a9e6db87131a34d6661b090a64b40d5bf117d": "7270c7720a17ce1918c27b813194d1a3",
".git/objects/d5/fc59cd95ef1daddfbbc31a68cd3d9190166a44": "69cde9a03d18a2adabee4b1ce1a30fc0",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/d6e635d0c654c0f936d6935be123e7689ea36f": "fa7179641dd1d90e989aec788747e7a7",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d7/c414f5c8f7f1ec0c085a9f37ee8cb78b1ba3c1": "4d8fd869ae805e38f0603e74921a2972",
".git/objects/d7/e842265fa156de0df8091fa275c3807492930c": "930817b1364234d5e0c84ef708a797b1",
".git/objects/d8/15664dd430b626e48579b3c30a8401b7ec8a2a": "9cb62cde0f3db970964ed0bd4a4a708d",
".git/objects/d8/902f9a5166e6a36da1e433938aeff5097475e4": "bfb93a137a95f40fecd1efa1f7840309",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/fe6b022b4ae1a6077b59bad4c3fc893a346c58": "d1c00c4cf96fcdbd82a3ace5bedd71e2",
".git/objects/da/d0d6b6203fd5f99c5b1583cba585a74cf8ff78": "a3e1fa9136ffe922b38d81360b99ae33",
".git/objects/db/16f26d936329d31ebf757fb37db47e2eabebb7": "7c08615dc10a3951896452634dc7d639",
".git/objects/db/4660abcf37d798c3973879f5df27cd24129006": "e2364ddce476fbcdbe3ea620ebfaca27",
".git/objects/db/c1903a8df3a5d724a8f523a40d91a2821e90fc": "f9c57ee530b72b85f029a194750e095a",
".git/objects/dc/c0b3554e0772d0f5c546c538467a3a2860d3b5": "2faa209660701859ec7fdc8f0352de27",
".git/objects/dc/e7268de54df2d5645f9e14841705eed0e3dbb9": "81a57245d5fdfb35ddacd9cd494655a8",
".git/objects/dc/ebc70d93ae2190ad9f3c7a56f5cee6091d4c9e": "9215a90464511e66a44eaa0bb880ec9b",
".git/objects/dd/d7a0cee45efb87f1cd08eb45699e365e289aa7": "41329bd18f102468ab1900a27da9f6be",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/df/3ac26b8450bbd9f998c1643f333c1f67238ed3": "b6b85039bb7f4aef7293499011b3cb19",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e1/34312423f06c57ba34d9eae85efb413b2f0874": "5cef25d91f7edbef512bb554abeca815",
".git/objects/e1/cbbef9d6cea4f53912bea9bf38e8d0cdce0fa3": "b82df77aaf943e277da154ac2013a7bb",
".git/objects/e1/f9ff8b89a873ff96016a490e3290a3613ea5bf": "d2751cb15e09a5b3f65bc567a8a55374",
".git/objects/e2/4c4d708ced5cf4953711067ceb204eef7f9a13": "a68c02a0149441928998ea36a797b5be",
".git/objects/e2/83aa433d36421c0a6d62ba4a76bc16837f0b66": "707f3e5b0db592bd8ab7395ac0c46203",
".git/objects/e2/b2539a1f636ad25aa24b0dd4148554a87264c7": "5edbca44a248a4d4ef689f4609c9073e",
".git/objects/e3/3dea97a28f56eba26082ab45b23cc41e2b3464": "ea968648b0c274e2b53219bf7296baed",
".git/objects/e3/a4fb1acf08b9d6773501a678fd79bfd829cd61": "814cecee7ab975e3d89f807f2a4418ff",
".git/objects/e4/c7cf7ffca129785a0c37d9a0b923b38e943eab": "9b3f170f073875f5fc7dde2cf155c197",
".git/objects/e4/d06328816f2e1c9604466bbbc55aef1bf8dc24": "f1f68219b17fd2e14bf462f5a6abc941",
".git/objects/e4/f2f3d959bff28cf75dfd0b5723bb56b93a8446": "03a55161cd48a6beef410afa5afd2259",
".git/objects/e5/910a8f63e8f4c6d74aa8078fb08c9875c54558": "8114e198a9751faaf4e0988f0b463760",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2898bc1613edb6c96d43443edca2785294dee4": "8f6b9ba89e2babca3a2b5de4ad625349",
".git/objects/e6/9273b6d65a760fdea8d5134ffbacecbb4a49bf": "79a45779dcd43cf5b59f7fcbe9752f8c",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/2a178f9b7f0d15322ab6100ce9e8292134771b": "57e66e4f1c2b8a21787325f9ae1bd1ac",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e9/2c1b64fc31ff582e80d38181014c1e5dcc96e4": "0874ee11605ab19129ca69b77c55ade6",
".git/objects/e9/429ac3b5613e586001a22526f8d646a564ff27": "047b1ae1ac968af48c1c2cd84b11e6c4",
".git/objects/e9/beb95a22cdaa5c4c9f35ed38374efa0b994ed0": "34b7cb7d5c99502098fa8a8c3e8a23c8",
".git/objects/ea/45cecbb68166299ed0f6b2393f093f51611b58": "69d6fd5075de267a7092af9f6ed02e1e",
".git/objects/ea/b7d4dcf4a5d41834a592b3fee569dde367db9c": "4e0ce31084a80e9000381eaf39885025",
".git/objects/ea/cf6e91f21b87f627d1315e84d8176241f92134": "8aa9290ff80eff7bfef827c1268dd8cf",
".git/objects/eb/108fddefe0122e88858ae2dc84fd265f1ecb9f": "b29d56a5c9347c7f39e97fc0d4adf9ff",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/8bcc1db8b56d6bc8fc7e4a9a5a45960dd02543": "6c655ec8c2e1feb09add6d22acd84717",
".git/objects/ec/bf170f518b237425705a96a0ad1715ee79a5ae": "0c0ad6c7429241b71f2b8cc784b60b8c",
".git/objects/ed/01f3cec48dad10dde074c5a3db2ca8798fad26": "03b0a76cf2ccc469a95343bf4ba7aa25",
".git/objects/ed/5cfb2d91c4dee24e826699c0f440750edfb003": "ab32cba223f8acefaaceed6c550b1e0b",
".git/objects/ef/8bdde9ec88e13634da297388e227a2587d2cef": "05b25cd3986351a86c8aecbf82615c64",
".git/objects/f0/62e95ccb25fba8e87a50e9d96a72480352c275": "d147c607589e034512e4ae45412a9e44",
".git/objects/f0/a4fa065675f42377c48e859a8a98a77e866b10": "6918d6eb51603e96b882117b97bacac7",
".git/objects/f3/4a425ef858c9ca2dac5ad19f1bfce670a1531f": "0c769252aff9d1835e27b0b333bfeabc",
".git/objects/f3/5de80c1f70a6ee9f82ff7d2744011745e5fbdc": "581365ece3f46945b96d945655b172ad",
".git/objects/f4/06648af8baab112dd5cb2571bd6609fd9c0a15": "12f2bb50bbd4a0a3f6a15d7c5ab75694",
".git/objects/f4/3e12878ffad8b6626393d5698c156341e0d0c7": "732fdea3bddec1c655fa10d7cb0e6b43",
".git/objects/f5/98566196e1f4cf8a64f4a8d7a09495e139ef5c": "e91cefc7be2be2f98e11122a521d9188",
".git/objects/f6/4a3c90b9aa8c0dee8da4ba67835c6dc4267674": "635037dacd32f501cc0fb074f7b372bf",
".git/objects/f6/ca67d7216fb6716a0f02839460c0cb732b1820": "188dae8af3c79116925c04576ffc8d1c",
".git/objects/f7/45326ba179975e84e8bc5393337b930d1396d0": "07b4820b9b95577c202af34ca4507801",
".git/objects/f7/c2224b803597dbec2460072c8367aaa986ac24": "a82c5623b2e85b4a315c40c988dd5b1d",
".git/objects/f7/e911ac812c75484f1f8170b0c4112504c2f202": "db0ac8f9881235118b6dacf07d85dc55",
".git/objects/f8/2b48f325d5583a720e8f7c8a431e263c25f8a9": "fe22fbbfb7853b95bbe83e088bc4e336",
".git/objects/f8/98265c3dbd1bc9478ba57f3cb628d957a62d73": "5315fc5611e10cbba27e770b41ad9f21",
".git/objects/f9/52d6a8b5f66d58856cd5901a85ad7605b35df0": "3242aeff205b9f7de329b7aad5964c48",
".git/objects/fa/c041bc17d178da3da63a9c684868d0572f6d18": "3d54de943627d4e1bb1bb571623a72b5",
".git/objects/fb/af055c928d9a3cc5ff10e7152c60110b4c950f": "5cc830e83c24378150c0959057a4629e",
".git/objects/fc/7c9434505c41a6c2aa26e60b9b5dbcb9801c7c": "74be812e665f805866f8cd2f9b7753fc",
".git/refs/heads/master": "5d6663df3da6c86b9782ebcfbcc6eef8",
".git/refs/remotes/origin/master": "5d6663df3da6c86b9782ebcfbcc6eef8",
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
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "31baabe820d9712ce2b926dfa8665a63",
"/": "31baabe820d9712ce2b926dfa8665a63",
"main.dart.js": "9cdca634f21d634034294cbf8d71975f",
"manifest.json": "646bcb281bf42ca53d181d4588903652",
"version.json": "632119a2911c1979f912df94e1700599",
"web.zip": "9fe4f3d7f9feacdff8ab9d1af1233bca"
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
