// Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

// For example, suppose you have the following list:
// 1-3 a: abcde
// 1-3 b: cdefg
// 2-9 c: ccccccccc

// In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

// How many passwords are valid according to their policies?

let input = `6-7 w: wwhmzwtwwk
10-12 q: qqqqqqqqqqqdqqq
16-17 d: ddddgdddddkddddsxddd
2-4 q: shbqwqpps
3-4 q: qkfq
2-10 m: bkdrmcfdhmr
13-19 s: blccvhsgsnsssqszssm
1-3 l: qlxllhl
4-6 h: hhhqhhh
15-17 l: jrtllrlllllmmlllg
11-12 n: bnzlnnnnbnntnnnc
1-7 p: pppvppjppmptp
5-6 t: tttnht
8-12 g: glbnlqgggjkh
1-8 g: dvgsggngg
13-16 x: xxxzxxxxxxnxjxxxx
6-9 m: ffmwhxxsm
10-11 b: bclbkkxblbbb
5-7 m: mtmmbmmm
2-4 c: cdgdkcd
9-15 f: ffffffffpfffffbffff
2-3 k: kkkqk
12-13 s: ssssssssssssgs
13-15 d: ddddddddddddcdqd
3-10 g: vpgqrvqnlpgjd
12-16 x: zrrxjxvvrcnkwklddm
2-6 g: lgjwpg
17-18 b: bblsjbkrbbbrknmgbx
3-5 c: ccpmcsvfxlhgbgccccxw
3-6 x: zsxrhxnptxtwwbbb
18-19 h: hhhhhhhhhhhhhhhhhcbl
12-13 h: hhlhnqdhttwhqcwdd
17-18 c: cccccccccczcccccfcc
9-19 h: shhhbhhhhtwhkhnbhfp
7-11 c: tntwmfzdncchszl
5-8 x: pxmkxmzbbvfldpwc
3-6 n: rmwnqnlt
5-11 z: zzhzkzzzzzq
3-4 v: vwvdb
6-9 t: ttttctttb
4-5 h: hhbzc
2-4 c: cccpccmpcp
6-7 w: wwwwwhwwj
4-9 g: qgbwsqlgg
2-4 c: cddc
6-13 r: bqxjlrdrgdjlhcpqp
9-15 f: qqflwbjgffwfxkv
8-11 t: txtstwzrggtcrtttmpp
6-11 m: mmmmmlmmrmmmm
7-13 c: ccsbbcccmckpzrsncbvz
6-8 v: vvdvdrvkv
8-11 h: mhhhvshhthhhhtmshhh
1-5 k: ckkkkk
2-3 v: nhvvqnvlz
13-16 z: zzzzzzzzzzzzzzzfz
2-3 k: gkrj
16-17 h: hhhhhhhhmghhhhhhrh
3-4 c: cccs
3-4 s: ssssssssss
2-4 r: rlrg
10-11 d: ddwdddddddz
7-12 c: pllhkcgrkmcmxqwccclv
8-9 b: bbbbbbbbg
11-20 b: bbdbbrbmjbbbxsbgzbsm
2-4 m: mmqmmfthp
8-13 w: fwgjkfwwfcbpwbh
4-10 t: tttttttttqtt
11-15 k: pkbmgkkkkkrkkkkkkpkk
9-10 k: mkkkkkkkkg
16-17 b: bbbbbbbbbbbbbvbbt
12-14 h: hhhhhhhhhhhphhhhhh
5-17 z: knzcjlgjlkvglrsqzwt
4-6 s: vwpjsds
1-4 j: jjqgnqq
2-3 b: bbhb
1-6 k: kgkkkkkvjkkkgjkk
8-11 d: dddddddnddd
5-10 w: hdbcwwqltq
5-6 t: tttttttt
2-6 l: lllllqlllclgltllj
2-5 k: kjkkckkhdkkkn
12-15 l: llvlllllllljplw
1-3 d: ddnddddcdd
8-14 b: vbdbfbhsjbbgbpsbq
9-12 z: zzzzzzzzxzzzz
2-3 w: swmt
17-18 z: pfpzprvxdzvkzzhxpz
9-10 p: lpqppppspjprmppnp
18-20 r: rrhrxrwkrfrrhgkmftrr
5-7 x: ppkbxxp
2-13 s: skqtnddznmqlsjfn
14-17 l: cdlkcxpvjghdnlllqt
3-9 t: pttlpbdhtvtkjgh
1-6 b: zbbbbv
1-3 r: vrqr
7-19 h: hhhhhhqhhhhhhhhhhhsh
11-17 g: gfgmsggzggpgbgggggg
15-18 b: btzwbbpbsbmvrbbjncb
6-9 b: bbvbcxxbbbprbbbcxqvp
4-5 r: kqrhh
5-12 n: ncnnnmnnmnnf
8-9 p: nnmmbqcprcbppzgdjft
6-8 h: hhrhhjhh
1-6 t: ltjmrtttttnzjtcttv
5-6 g: gvgwgkgg
4-8 q: znlthvfskq
1-7 q: qpqdrzq
3-4 z: xsqztkz
2-5 w: bwwwrjww
3-15 k: kkrkkkkkkkkkkkpkk
1-4 z: pzbzztkv
2-4 h: nhbg
1-6 q: hwntnqpwhcqknpfkqn
12-14 p: ppdhllppptjcgp
6-11 k: kkkkktkkkkkk
10-12 f: fjffzrfqffcfzfcf
1-6 m: lzmmmz
18-19 z: zzzzzzzztzzswzzzgxzz
1-3 g: ggbfxgg
1-3 c: xgcwxmtzjvlcp
8-10 z: zzlzzzpbzdzz
1-9 s: qpsskgwsssvksfvxsss
7-9 j: tqxjtjddjjjjjjh
4-17 h: xhhfhhhhhhthhhhhhhh
11-13 n: nnnnnnnnnnsnnnnnnn
12-14 j: jxjjjjjjjjljjd
11-15 q: qnprkqtqcntttqqwgqx
15-16 h: hhhhhhhhhhhhhhbhh
3-4 w: wwtw
2-8 n: wqnnmngnnjnnnnv
5-6 k: xbkrklb
3-7 l: lrvlrlllfhslsl
10-17 t: fhltmsgptmhckrvkttzs
8-9 k: kkkkkkkxd
7-9 d: dddddfddddkd
8-11 m: mgdmmmmmmprmmm
5-16 s: ssssmsssssssssssssx
2-3 k: kkmk
2-10 m: mfmmmmmlcmjwm
9-10 k: kkkkkkkkxkk
8-9 l: jkzdnljrlgnf
2-3 h: vdhlhpcdsh
8-13 h: hhhhhhhphhhhhhhh
13-18 k: kkrkkxkkkkkkrpkkkkk
1-3 t: rttptklrtvtp
8-13 s: jhssbsssssslb
16-18 v: zpfwlvcdbjpcxfhvtlrv
5-7 j: jfmjljj
5-10 c: cgctckffldkcjd
10-11 k: kkkkkkkkknk
10-12 g: rggggggggggwg
12-13 n: nknnnnnnnnnnnn
2-4 c: vdccccf
2-5 b: hblbb
1-4 m: spmm
12-16 s: shsssssssrssgssdss
10-11 x: xxxxxxxxxxpx
2-17 z: xzjmjdclpdtqjhhqm
4-5 j: qjljz
1-2 t: ftttr
4-5 k: krnktrmjvkcqdwm
11-12 n: nljwhlkpdknfl
12-13 x: xxxxxxxxgxxxj
5-15 j: jjhvjjjqjljpjjkjj
3-5 w: hqwkmmqddbncznm
5-14 l: lllllllllllllll
9-20 z: vvfmxfbpzzgmcclhgzzz
8-9 x: xxxxxxxbjx
5-6 m: mmkvmgdmm
1-13 x: qkxlvzxxxxxxxbnx
7-8 r: rsrrrrbrlrr
2-3 r: lrndhwcbxf
4-8 q: qqqqqqqwq
6-11 g: bxzlpftzfwk
1-3 k: hlkwkgh
4-6 c: hmchdm
2-8 d: ddgbxrfc
2-7 b: tnmtcbbrwnvwsmfmd
17-18 p: btpppwcxppqpspppwp
13-17 d: dddddxzddddddddddxd
5-11 z: zfvzzzzzzzpz
5-14 z: zvkzqzzzzzzdzpzzzzz
4-7 n: nnwnqntnmnn
1-6 l: blllllllll
11-13 f: fmffffflrfzfpf
3-11 v: zqvbjxvjvbvnsznkm
7-8 b: wqbbpcbb
1-4 s: jzvwscxzsd
2-5 w: wwtpn
1-3 k: mklk
6-7 v: vvvvvvv
4-5 n: gnnlclqbnwgngzc
7-14 w: scdwgdzljgdwmww
9-10 b: brmnhptdwblr
5-12 t: tchrszgdttmpvntwdpv
12-14 j: vjnzjjppjwhjnrpj
5-6 h: rmjhfhdh
2-7 h: hbptmhhh
5-8 n: dszknnnnrbxc
13-15 p: pkpwdnqvkdxtkppcdtrp
1-8 s: sjssssshss
1-2 p: pbtprdj
3-18 k: nkkkqkkkrkkkkmkvkkmk
15-16 w: wmwwwzwbwwwswwqswwrw
7-12 d: dsdzddvddddjldddcxd
10-11 r: msjrgbrgrlr
1-2 t: tttltpqtqzt
3-4 n: nxwnpnk
11-12 k: jkkkkkjlkzfvxzkk
6-7 m: mmmmmmz
4-6 r: rbghdr
2-4 k: kqqkxkktkxkkk
7-9 t: jlfttntttdt
5-6 t: sttttzk
5-11 v: vvvvvhvvvssvvgvfv
4-5 m: mmmqm
13-16 r: rrrqrrrrrrrrrrrpr
3-5 t: pdrhtt
2-7 x: zgkxxxxszmhvb
5-6 q: qqdbzd
3-5 g: gxgst
6-14 g: zslgrmgrgjgglg
12-13 q: qqqrfqqqqqqqqqqqqx
2-3 r: lrrr
5-6 n: qnnnfnnn
4-5 w: wwwwmw
1-8 h: hhhhhhhhhhhhhh
3-4 k: kkrcfqxvqhqxzvkkt
7-13 s: tsrmwckktjnqslm
2-17 r: rrrrrrrrrrrrrrrrhr
4-6 q: qqqqqdqqq
18-19 m: mzxmzpmccmcmmmmmtmm
5-11 m: cmmmlmmmhmsmmmmm
17-18 j: blqwsqcjjjfrjrjzwh
2-19 s: zsmzkcvcmjlsfwfzqmcn
2-7 g: bgjkglnqnf
5-11 n: qcxpjnfnnnnnhjvn
4-5 r: cwzrrpmwwbrkbrrcr
5-6 n: nhthvnfngd
10-11 b: xsvrvbvnhbn
9-11 j: jkjjjmjjjrkjmjv
4-5 v: kvvvw
4-5 s: scnfs
3-4 n: bmff
1-9 r: rvnfbzklr
7-9 h: hmbhhhhhhh
2-8 d: dddlddddddddd
3-5 b: vxbbp
3-6 j: jjzjjj
3-4 q: qqrq
7-17 s: vssrsswsssqssssvsvws
15-16 x: czxkgcfwxdxxmxxx
1-11 f: jdxfccfbvffmh
1-5 r: rrrrkrrrrj
3-5 k: kkzklkkk
3-9 f: hxqfffpfff
13-17 q: cqtqqqgqkzqqqqqqjwq
4-5 r: srwdtrr
3-4 c: ccnc
10-12 d: ddddfdddgtdg
4-9 k: kkkkkhlkkkkkkk
6-7 q: rtgqnqxpnq
11-14 v: mhnvnjthhfvvwvnzjjrj
9-11 b: mxzvbwvrqvb
7-8 z: zzzzzzzzzzz
8-12 z: bstjbngzfqppdvgwxddk
3-5 m: tgmvv
1-4 d: ddsxbxkmxhxrhstz
7-8 w: wwqrwwrk
8-16 h: hkkhhhhhmhjhhhhhhhh
11-14 l: lllqlllllllllcglf
12-14 w: wwdwwwwjwwwwtwwwwvw
3-4 g: ggvgg
7-9 q: qqqqqxqqqhfqsfqqbqvv
9-10 q: qqqqqqqqtqq
11-16 s: ssssssssssdssssjs
1-4 g: gggm
7-8 m: mmmmmmkmm
7-8 d: bxfdddsdp
7-8 d: ddddddwzdddddddddd
5-9 w: wwwwwfwwfwww
3-9 r: fqrchrrjwbrdsdtrr
13-18 z: zzzzzzjzzzzzzzzzztz
11-17 p: pskwgpmprpspvqpxp
4-12 z: zzzczzzzzzzzz
3-5 l: lltlnll
3-13 p: qvpnxrxprjdtpcspjck
7-9 m: wzmvxpfhbmjc
8-9 j: jjktkjjhjjjj
8-14 d: dddddtdddddddmdddd
5-6 b: bbjbcbbhbc
15-16 d: ddddddddddddddjd
12-13 t: tttttttttttts
2-4 r: rqrmr
6-13 g: ggtgggcgjzggtmgtgv
7-8 m: vmmmdmbmcbmm
9-10 f: ffffffffft
6-14 d: mqtfhdbrdsdljkrfnhw
3-12 b: lqbbcblbbxgbbt
2-7 z: nsbqqlzszzwtgqz
8-9 f: lmxqslffrd
1-4 f: ffflf
8-10 h: cqfsjlkdfhhp
6-7 k: kkkkkdk
16-19 n: nhnnvxnhjnnmnjnrnnkn
1-4 g: mggzgghgg
2-3 k: tcknkbkgcvl
8-11 q: bqqqqqqqtpq
12-18 w: wwwwwwwwwwwwwwwwwww
2-7 t: fljgtvt
2-3 w: dwmsltbqnw
7-11 g: szpgzxgggggsgr
8-17 p: pppppppvpcppppppmppp
1-7 p: pjpnbqk
1-6 z: zzzzzq
5-11 m: smmmzgmrjmm
6-7 s: rkkwvssqdhgxqx
5-6 r: rrrrrwrr
3-8 k: gkkjtfztsxrt
5-15 w: wsrrwwwddwwtwss
4-5 p: pppprp
13-15 z: xzjzzzfzzwzzpzdzzz
4-8 f: fqfhfbqfffvrfsfpf
16-17 g: gggggggghgggggghg
8-11 v: pchlvdfmvjrpsdsgw
5-6 r: rrrrwrdrfrk
6-8 f: nxmfjhkf
19-20 m: stmqmrddplzlwzdjbsmk
10-15 c: jccpcscccpccccxccccf
4-5 j: ksjjxjmvjwrjlqvxr
15-16 m: mmrmmmmmjmsmmmcm
9-11 l: lsrlfgxxcfs
4-5 r: lrprj
3-8 m: zdmmxmmjmmm
3-9 x: xxnxxxxxxxxxxx
6-10 q: vsqbjvpnnqqnhz
5-6 h: xghnhqmzf
5-6 c: rcgphkccb
5-6 w: wkdwjwwwp
5-7 v: vvvvsvv
1-6 c: ccccccccc
6-9 f: wfbfsfkftffffz
3-4 q: qqwqqqqqq
5-8 m: qmrmqkmgw
10-12 q: pqqqqqcqmlqnqqqjqq
2-11 x: bxxqrwvmpwwxkrx
6-8 f: fhlvlffn
4-7 w: wwwwwww
5-7 t: nbcbtpb
2-7 x: xdxxzgx
8-19 p: llgkthwqdpwcdcptlzp
12-15 x: xtxgxsftqgccldxc
2-3 l: xlklt
2-4 s: mwws
3-4 w: wwgw
6-7 m: mgmmmpm
8-9 f: mwzfmmkfw
4-11 s: ssssssssgsbssss
1-2 z: zzvxl
7-9 m: mmmmmmlmmmm
2-3 r: brxrt
3-5 v: hdrjvwv
3-7 f: bknpftfs
10-17 p: ppkpfpglfpgpzwvwxt
2-6 d: cddzdfdd
1-3 d: pdddd
13-16 c: cccdccccccccccch
9-10 x: khmxxwmqwxglf
1-3 q: qqqq
3-11 v: whvlvkrknmn
18-19 w: wwwwkwwwwwwwwwwwwshw
12-13 g: lgcqwrmggxmbg
8-13 x: xxxxxxxxnxxmk
3-8 m: mmmmmmmmm
7-17 d: dddddddddddddddddd
2-6 c: sccspkcccbz
1-4 b: bbnzb
3-4 m: mmmd
3-4 v: pmsv
4-7 t: qttttqd
8-11 b: bbbbbbbbbbkb
8-10 j: dlwsgtjdqv
5-7 x: fxxxxxj
4-6 p: ppppzlp
6-7 n: cnnnxgtnwnnnn
3-7 d: jdddjbpzddpd
4-19 x: xxxfzfxxxxqxxrxxxxmx
9-11 q: qqqqqqqqqqcq
14-16 r: rrrrrrrrrrrrdtnrrrr
8-10 k: kkkzkkkqkqkk
4-5 m: mmmmhm
12-14 b: bbbbbbbbbbbbbb
8-12 m: mmmmmmmmmmmzm
4-5 j: jjjfk
8-10 g: ggggggggggg
13-15 d: vdzdmdpxdnddxdn
6-7 m: pmzmmbnmmm
1-13 p: ppppppzpppppzpzp
2-4 z: qvfzfsscrthxtwpbkwsd
5-17 v: xtbdvdlrllvnphbcm
6-15 m: dbdmwmpnfmnhpmmb
1-9 p: ppppppppqpp
3-4 v: kvvqb
3-8 j: fxrcmjkxknlsn
5-7 w: wwvwkwt
6-12 v: hvmwwzrkjvhvjwlsjxv
3-4 d: dvzd
4-5 m: mmmmk
3-4 g: fghg
5-6 m: mmmmcmmmmmv
5-6 t: rlngtbbrscwf
5-15 w: wwwxwwwwwwxwwwqww
1-8 d: wddddddcdddtd
3-4 f: fffff
2-3 z: kkzzgzkc
9-10 z: zzbzzzzzzvvzvk
1-5 v: dvvgvvqvtsvvlsmj
8-9 g: ggggggggg
4-5 k: jkkkv
10-12 f: czbfffffffzwd
8-11 x: wshfbxnfxxxxxqpxxqqx
4-5 q: gmsqbsx
11-14 k: hkjkgkwkkkkfnp
2-4 c: gccccmccc
3-7 r: rrrrrrkrr
8-10 r: wrrmrzrrtrrrrr
4-10 s: stwnclhsss
1-9 l: lllgbxllr
2-4 v: dvvjgv
3-6 p: mrppkm
3-6 l: llnllll
9-10 v: dcvvmvvvvcvvvvvvl
1-4 d: dddzd
10-18 n: npnnsnlxmxvcnmgnqpns
4-5 l: llplh
4-5 x: mgxxzdcbqfglqrzshk
4-5 w: wswwzlwwwjw
3-12 w: wwwwpwwwwwwqw
3-5 g: xgggr
6-10 r: dlrjpncmsnq
5-18 t: ttttwtttttttttttttjt
4-5 f: bfdfr
3-4 p: pqvrlnp
6-11 d: knsrhrbcjndmgxhcphjr
3-6 x: xkkxxxx
4-12 t: thtjsrptttmmtpbbcctb
11-12 m: mxcmfbmfxmpmlm
15-20 c: cccpckwcbgscccccwccc
5-6 t: rrttgttttttrtnj
3-4 n: vnnn
2-3 x: xxzxxxxxxxxjxxxxxd
4-6 v: vvvvvj
11-16 q: dqqkqqqqqqqqkphvcgqq
13-15 j: jjhvjqjbjwwhjkj
6-7 q: dkrgqfq
5-6 j: gjjjcbj
7-9 n: nbqjklnnt
1-10 z: gzzzzzzzzzzzzzzzz
10-13 q: qddtjhrlsjkqq
4-5 q: zndqjhkznkfxkbdn
14-20 v: vfhvmkvvmvvlhssvvtvv
3-5 z: zzwzzz
16-19 s: sssssssshsssssslsss
2-4 k: fkks
1-8 t: ttttttttt
6-11 s: swvsvmjszskdjfp
3-4 b: nqrb
2-14 r: rcvrrvlcrrrnrrrkv
2-4 z: zjqznwzzpzz
1-7 h: phhhhhhhhhhhhhhhh
14-16 v: vvbvlvvgvvvvvvxrvvc
4-5 p: pppsp
4-7 b: rbdpbbplmqxbbb
1-5 b: pbbbbbbbbbb
1-5 d: dddddd
2-3 g: gqwg
12-13 d: dddrddqcldbpfc
3-13 n: chnthxplvnnvcxdwj
1-11 c: cnnctbgrvgflcccsc
10-12 n: nnnnnnngndnnnn
5-7 z: cjqpzzz
15-18 z: zjhzkzhkzzwzzqmslz
12-17 m: mmmmmmmmmmmgmmxmmmm
5-13 x: jxfxxxxsqtmkd
9-11 r: gsrrwrbrrrrjrmndrrrq
7-10 b: bbbbqbpbbqb
11-12 q: qqqqqqqqqqdq
1-9 h: hhhhhhhgvrhhh
14-17 l: lxlrfcnnlllllwvcllb
1-2 f: rppf
13-15 f: wfwrcwffffkfnnfffl
5-7 h: hhhhzhhhhhh
2-6 q: qqpdljq
4-12 k: kfwnkmkkkkkk
3-4 r: prqr
8-9 p: pppppppppp
16-17 c: cccctccccpccccctccwc
3-4 r: lqfrfkgtvrzb
2-4 g: gglv
3-5 z: zhzcz
3-4 p: ppgpp
6-8 q: qtmqqvkq
5-7 n: ksrnnnbsjls
2-9 z: zrlccsztzzzzzzh
1-8 s: sssssssss
3-10 z: zzvzzzzzzzqzzz
4-5 w: wwwzww
12-14 s: ssssssskssszstnsssss
1-9 k: kkkkkknpkkkkdkk
2-4 t: qnstqt
4-5 q: qqqbq
7-8 p: kkzpptpj
7-17 c: cccnqhckxhcxckmffbv
9-12 l: llpllcllllllzplhglz
6-9 j: jjjjjjjjrjj
6-8 l: lmllllln
4-10 d: dddldddkdd
13-18 m: sdkgmrdmmsxjcfmcwdwv
1-5 k: kkbkkk
8-9 b: bzbrbngbh
14-16 d: mdhdddpddddddkddgddj
5-6 p: zjmplf
3-4 x: xksxrx
1-11 w: wwwwwwwwwmxwzw
4-9 v: vvvdvvvvvpvv
3-5 x: bwxxq
3-5 k: ntkklsjkqvwvkxkqtkwr
2-4 c: gcjc
7-8 h: hppwshwhnbhk
10-18 n: nnnnnnnnnnnnnnnnnnn
8-13 w: qwwvfxwpwlwwwx
2-6 b: wdlmtbhkfnb
2-12 z: zzjqjkzblzzmfkzzz
8-12 s: svgsfssqssns
11-14 d: ddddddddddqddc
16-17 x: txxxrxzdxxxxxvhxxx
2-8 l: rllvllwxllkl
18-19 c: ccccccccccccccccccs
9-11 l: llllsllllrx
3-5 n: nnnln
5-6 k: frmkkz
2-4 l: tlmj
4-5 m: mmmvvm
15-17 k: kkkkmbkgkkkkkkkkmk
15-19 h: hhhhhhhhrhhhhhjhhhh
2-5 n: xnnjnd
7-9 k: kxkkkrxkvrkq
3-4 c: rccbm
9-10 d: ddldddrdkp
14-15 h: hlpcmhbvzhdhphr
4-5 m: mtmmvm
1-4 m: xmjmmm
3-18 m: qxmwmmbrdtxtqwcxfm
4-5 p: ppppl
6-9 s: ssssksssrs
7-11 q: qnqwxwppmqqqqwlk
3-5 w: wwwwww
13-15 v: vvvvvvvvvchvfvp
6-11 z: zdbzzqmkztzt
7-8 d: ndwmvdldx
3-7 h: hhjhqhhmpfzjvgmh
11-12 m: mmmcmmmcmhqf
7-8 x: xztkvxxd
2-6 h: wcnhzvh
4-5 x: xlgxpbxt
9-11 t: ktdtdxttgnm
3-10 j: jjjjjjjjjkjjjjjjqjj
11-14 x: xxxmxrxxxjxxcwxx
6-8 w: wcpwhfzwwcwj
1-6 n: wnfgxnnsvknngm
3-6 n: fkjnlnn
16-17 f: ffffffffffftffffx
3-4 v: vvzvv
11-12 r: rrrrrrrdrrrr
5-8 m: xwmmmmmmmmmmmmmmmmmm
4-7 x: nxxxkxx
7-8 t: ttttttxtt
7-8 d: ddddhddd
11-12 k: nqcbtrkvmwskm
1-2 d: dkdd
3-5 r: kbrrgxzkbr
1-4 d: ddddddfddddddddddddd
3-5 k: kkqkkkk
8-9 x: lrxkxhxxcxxxxd
3-8 s: rksdvzsss
7-9 k: kzhkkqmkm
6-11 h: hhhhhhhhzjhwcmnhhsh
3-5 x: fzptx
10-11 z: zzzzzzzzzhz
3-4 w: qmswdcdmxqwwqj
6-7 w: wwwwwnw
14-15 x: xxnxxxxxxxxxxxx
15-16 g: gkgpdftggvgchgsgl
2-7 k: vbvvfgkndklkk
2-3 c: qmccbcpzc
5-7 s: srssrssj
11-15 j: jjjjjjmwjjjhjjq
3-8 h: hktmzhhhchvhf
16-18 t: tttttttttttttttttrt
5-7 v: cvvknfvvv
1-4 c: xbgccfccqqvbgjtc
1-3 p: ppxppp
1-11 c: cgzddqwfkbc
2-4 t: xttht
14-16 w: pzvwgwwwwrhwlwwb
2-16 q: znqhqqqqzqpqqwqqqqq
16-17 w: wwwwwwwwwwwwwwwbwwvw
1-5 m: rmmmm
8-9 r: mfsdnqczrrqrdwvtcs
2-6 k: vktqrg
4-5 b: bbbrbbb
6-11 t: dxrnktlnbqtqt
12-13 j: jjjjjjjjjjjjj
15-16 l: lllqfllllllllllpll
13-15 j: jjjjjjjjjjjjbjz
18-19 z: fzwzxzzzkzmzzzzlpmn
2-11 n: nnnnnnnnnnpnn
11-14 n: mgnncnnnnncnnkn
1-4 n: rskn
3-4 g: xggg
3-5 d: lddgfg
1-5 s: thcss
1-12 s: cbzfbqstssqbss
4-7 z: jbfzzwnqhsgxxvndzlg
7-9 v: dbqzstvbcxgncgszp
6-9 b: gfklpbfkbbn
7-11 s: mslxkdsrtgss
3-5 x: dxxgd
8-10 n: npgnrbgnzr
3-4 j: mtzjrkmgfqmjbjhg
12-17 j: jjjjjjjjjjmvjjjjmj
5-6 j: srpckj
1-2 t: thtt
1-3 b: gbrl
19-20 p: phfppphpdptrxpwpzvcr
2-9 v: mvkwmtkhm
13-16 m: mmmmmmsmmmmmrtmm
5-11 f: ffffffffffffffffffff
2-8 h: hqhhhbhhhh
16-17 k: vjzqgvfqkrwtnldkcb
2-3 z: dzpptzzztzfg
6-7 c: brwcfcw
1-7 n: nnnnnnnnnnn
11-12 b: bbbbmbbbrwhbbbb
6-7 p: pppppgj
5-8 t: ttttwtttt
2-17 v: vfvvvvvvvvvvvvvvvvvv
9-14 p: ppbpdppppdpppplzqg
1-4 d: dddfdd
2-4 m: xbvmnmvmpsmfvpdzh
1-10 b: bbbbbbbbbxbbbbbbbbl
1-4 b: bgglftqqt
4-6 z: nzzfgzzzzzzkzzztf
2-3 r: pxrqdmrz
6-7 t: thttttrtt
7-14 d: ddddddkddddddjd
3-4 s: hsrsr
13-15 x: xwxxxjcxxxxxnxxxxs
8-12 x: xdmxqxxgxxxxzxxlx
6-14 w: wfwwwwjwwwwwwww
6-19 c: ldrqmvfpkrtrtqkcvtc
9-11 g: ggggggggdgg
3-6 h: hhhhhh
7-12 n: nznxxfdnnkrlnnfnnn
3-6 z: zgdzqztv
13-15 c: gcwsjjvnbnpkzncjlw
1-4 d: ddbg
5-15 t: tpntttttttttftrrtt
1-4 r: crrrr
7-9 d: rmddspmddz
3-4 w: wpbwzswqtwpwxmtpj
11-13 n: nnrnznjnncdnn
1-8 g: bggggggggg
11-12 b: hzltbtqgwxbbxb
1-3 b: hqbz
8-13 f: ffffffwfffffd
1-5 r: srrrj
2-5 f: fcffff
6-16 s: xmnhmbzlxvsmrffskl
2-3 t: tttgnxmtsdttttt
3-4 l: lplg
10-11 g: lggggggvggggggggw
6-11 v: vvvvvvvvvvwvvv
1-9 p: lppspptpp
6-10 p: zcpfqphgbppvcfmz
1-6 v: vvcvvzvvkv
5-8 g: ctggcsxg
3-12 s: sstsfjssssss
6-12 z: zzzzzzzzzzzzz
6-8 r: crrrrrcrrs
7-12 b: bbbbbbbbbgblbvb
2-5 f: qttqpfxmlf
4-14 d: dddddddddddddgd
15-16 k: wtchnbbwkmzsmrkk
1-4 n: nnnznnlnhnnwnznnnnn
5-13 f: ffrffffrtsndc
5-18 t: dmtwqmccltqrvkntft
1-2 f: fdnnslrfdv
2-6 r: txdtlrtbxrrxdsmrr
2-6 f: ljdgff
7-10 f: fddfffltfh
5-6 j: mjgjrgkjdj
3-8 j: mlbljhzn
5-6 r: slnrbjgr
10-13 c: lcxxccpcbvgdccgccccp
9-18 v: vvrnlvvvvvvsvvvsvvvv
6-7 k: nkkkkxk
3-4 q: rqqw
10-12 p: ppppppdkprppp
15-18 d: ddddddddddddddwddddd
16-17 n: nnnnnnnnnnnnnnnnlj
6-10 p: ktbfplppnp
1-7 v: xqpvxrm
5-6 l: sldflbxpdlltzlpjpml
4-13 t: tttvtttttttttt
15-19 x: xxxxxxxxxxxjxxxgxxdx
2-8 p: hhjdqvzmhxtkbbcptshb
14-15 g: gggggggggwgggdngg
9-11 j: jjjjjjjjwjjjjn
1-13 w: wwwcxxwwzrwwxww
3-12 l: vtxtlxjqrfplw
8-12 x: xqfdfzrxrnkwv
1-6 q: nqkqqqqq
5-9 l: lhlmklllllgjll
1-4 k: jwtkk
2-10 d: dvdjdddhdddddd
10-14 l: lllfslkltllqdrllxllv
8-11 r: rwplctrrrvpd
13-15 x: xdxxjddmcccmxxx
1-14 c: cccccjcjkcctcjc
9-13 m: gcpkqzgqwlznmqsmgxc
9-15 t: ttttttwtstttttwttttt
2-13 d: zkqdtclhmlpfd
14-18 j: jdjjjgjjjjjjjjcjjgj
9-13 h: hsgvzlktmzqhhw
5-6 b: bsbbbbbbbbbbd
3-4 z: zzsz
2-5 d: bcnrdgsfqnwqgdgmctq
9-12 q: qqqqqtcqqqqhzcvqfqr
1-3 w: rwww
2-8 h: tfhppjcrzchjhhrcnt
17-19 w: wwwwwwwwwwwwwwwwswww
2-7 f: fsffffffp
17-18 c: jcccfrzkgbzpmdwfvc
5-6 f: ffnfffvqff
1-2 b: bbtb
4-6 x: xgxxxgxr
6-9 v: crzvxfznvlx
13-15 k: nkkklkkvkkkkkxkkkkkk
3-5 m: mmzmwmmmm
1-6 b: brbqgk
5-13 k: qnmkktjgrkfqrzkkk
6-10 l: plllklfcllzvll
1-3 m: lmmmb
2-3 k: kqkk
4-6 k: kkkkkjkkkjkkkwk
2-3 w: nrwlrtkrkvtxwpr
9-10 b: kghdmcvswxbvtbjhdwb
9-11 n: fnnhdnnnnnj
9-12 b: bqbrbtbbsbbtgzgbb
6-14 f: fffffffffffffffffff
8-9 h: hhhhhhhhhhh
3-6 p: pwpfrbgfzqpghs
3-4 g: ggggg
7-13 c: bcccccpcccccccc
10-13 f: vppzffvnffkfq
1-4 f: vfffxfff
9-13 j: jjjjjjjjljjjjjj
3-4 f: ffhf
3-8 m: mmmmmkmcmmmmm
11-16 c: ccccccqccnsncccxkccc
3-8 w: wwwwwwwwww
3-10 c: llrkgsvwkcmphp
11-13 s: sssssspsssfsts
14-15 s: gssszgscsqfkssqsj
14-17 j: jjjjsjjjjjjrjjjjzp
1-9 q: wqqqqqqvqq
6-10 f: kffvfffdffsff
4-5 d: ddddbdddddd
10-14 d: wbdxrddtnrddddddg
6-9 x: xggxnfpcxxxdxxsd
14-17 p: pppppppppppjppppkp
1-8 m: tccmxmmm
6-12 p: vmspgmlzzqppfrpggglp
13-14 v: njnlcwlzdwwdvvgrfxtf
3-4 f: fmftfd
4-5 z: pvzzz
16-18 m: mmmmmmmmmmmmgmmxmz
1-4 z: pxzzz
9-10 b: bbbbbbbbbd
4-16 v: vvvwvvvvvvvvvvvrrv
13-16 f: jxlqrnngfghxfzfp
16-18 x: xxxxxxxxxxxmgxxxxhx
13-16 c: ccccccpccccctccc
8-11 c: ccccccccccvc
9-17 t: tttthtttttttttttzsl
7-14 w: wchwdrftbdhhww
3-6 r: kzrrzr
15-16 r: rrrrrrrlpzrvtrxw
6-9 t: tttttlttttttt
3-4 w: wwsww
6-8 c: cccccccxc
3-6 h: hphhhhvtxjrndzhh
12-16 j: jjvwsrkmjjqjdjjpsf
3-7 k: mtxqkzpkdkfkp
12-15 b: bbbbsbbbbzbbbbbb
4-6 h: qhhlshhhh
2-11 l: ljbllllljlllllzrljl
1-3 z: zzlz
1-3 w: wwnww
14-15 b: cbbbbbbbbpbjbbvgb
10-12 x: xdxxxxxxxdxz
17-20 n: nvnvzchcdfpnmnnsrnrn
1-5 b: bbnpxbb
5-6 b: gdkgsxqkbw
2-5 x: fxkgm
5-6 z: zzgzwzzxxn
2-4 d: hdqmdk
2-10 r: gnjqjctrrrvnjjvxgmx
6-7 v: cfdwvpxvvvpvvj
8-11 m: wtkprnmshmmmqtmzqq
3-5 j: jjwjv
7-11 t: xtfjvtttwtvttxtt
1-2 b: bbbb
8-10 f: ffffffqdfffffff
5-6 d: ddddmp
10-12 n: nnnnnnnnnmnnnnnnnnnn
9-10 x: xxxxxxxxkx
8-10 c: cccccccccb
19-20 w: wwwwwwwwwwwwwwwwwwmd
16-18 h: zhhhwnqnhhhhhghhvt
12-17 z: zzzzqzzzlzzzzzzzzk
2-6 h: hhvfjhrghhhhhthfhhhh
3-4 c: chgc
1-5 j: jjjjjjj
4-8 z: rzzzzzzszzb
9-10 t: ttttttttmt
3-5 g: bgggng
11-12 c: mcdcrcchsdccgtbj
2-9 f: rrjwgftffmnfm
12-15 r: rrgrrrrrrbrcrrrbrrrr
4-6 h: hxhxhghhhhhhhhhhhwh
10-11 n: nnjnznnnngnnqsnx
3-10 j: zfwklgrdnjtxj
3-4 b: bgrbbjf
3-4 n: nlqn
2-5 j: mslvj
14-20 c: cccccccccccccdcccccc
16-17 g: ggxtgggjcgggggggwggg
5-6 l: llvhfwhlwztxpdh
4-7 c: dcdzcccgm
10-15 q: qqqqqqqqqqqqqqjqqqqq
1-4 j: zdqw
9-19 q: hqqqqqqqjfqqqmnlbqqq
13-14 q: rqqklqfqqqbqhq
2-4 z: dlmz
10-17 g: xhnggglggqggqggqgz
6-11 j: djjjjjjjjjjjj
3-5 q: qqrqqq
3-9 n: xdlxngttnlmjb
7-9 b: bbbbbbzbtb
1-2 b: jbbtb
10-18 z: qzzzztzbzzzzzkzzzzz
3-4 p: pjjwpw
8-10 q: qqxqqqtqqpnm
4-7 f: fffffdff
1-10 j: pjjjjcjxjbjjj
3-11 c: tfrjqdtkcjcjkcwn
7-8 p: cpptjkpf
9-10 g: pggggggggvg
1-5 b: lbjbbbzbb
2-4 m: mmmtmmm
8-12 w: hwpkjdwzpwwwkcsw
6-10 b: mbkskbpbkr
13-16 q: qqqcqqqpqqqqqlqjqq
6-12 r: rlxrrrlrgjkr
15-16 k: kbkkkkfksmkqgkrk
1-2 l: lwll
3-5 x: xqxlcb
7-8 s: sssssssp
5-8 m: mmmmmmmrmm
2-4 l: lnllllzlsl
4-5 z: zzzwzzzq
5-8 l: hqdflnll
1-2 v: jvvzczgrv
9-13 z: zhzzzdzzzzzzzqzp
4-5 d: dddcdddddd
8-9 s: ssssgsshss
1-2 c: cccc
2-17 h: hhhhhhhhhhnhhhhhrhh
7-9 n: ndnlnnnnnz
10-14 p: hppzpxprfvrpppphpp
14-15 b: xwvqdfqmpbzvbgbtt
7-8 q: qqqqqqqn
11-15 m: mfmmmfmmmmmbmmn
2-4 g: bgbpr
5-10 f: fnbbpmffjphv
6-7 h: nnshthh
4-10 c: cccwccccccccc
17-18 p: hppnmppmpppppwphpc
7-8 g: ggggmggdg
1-3 f: fdwjpkdrbfff
5-10 v: lmvcldnwwzjznzsctzvv
10-14 b: bbbbbbbbxbbbbbbbb
4-9 r: whkjzsvrr
9-18 h: hrdzhrhrxdnrhfhhhh
2-5 n: nnvqbnbhwqfr
1-11 q: qndbrqxtkqq
6-8 r: rrrjsrlrrg
12-16 z: jhzzzzzzzzzzzzzwz
4-6 q: wstfcqqsbqq
1-3 g: bggg
5-11 w: xrgvsjvwjrd
13-16 b: bbjbbbbbbblbpbbbbb
7-8 h: hbhdqphmp
15-19 d: dvddddddddddddmdddl
7-13 p: vtbclnppvvqxljk
7-9 k: xkmksddkg
11-13 z: zzzzqtzzzqmzpzz
12-18 x: xxxqxxxxxxxxxxxxxt
5-6 f: fffffc
17-18 v: vvvvvvwvvvvvvvvvvv
4-14 r: ndqxfrbtfmptcrf
1-2 z: mszzz
5-9 n: nnnnnnnnnnn
1-3 n: ftfdl
14-19 n: tnjgfppdhswwdhclxmn
12-14 l: lllvlllglllfll
7-16 p: ppppppppmpppppppppp
6-17 c: sccccqxwscvbmcccxcz
1-6 x: wxxxxxxx
1-10 v: kdkkkmvgvmsfswvbtsc
16-19 k: kkkkkkkkkkkkkkkkkkdk
7-9 c: ccccchcjd
3-10 v: vmpvvmgjkfsv
10-18 s: ssssslsssqnjssssss
8-11 h: htvqnhgbszh
2-14 j: ptdrlpnnjrpppjrgp
8-10 w: wgxwwtntwrsczwwrjz
4-6 b: bbbqbbbbbb
2-3 x: gxxx
6-20 t: fntbvdtjmtsktztpdgkt
2-4 f: fffbff
7-14 m: mmmmmlgmmmmmmwlmmmm
17-18 z: zknzsdlzzszzzzzxzz
18-19 c: cccccccccccccccccvc
4-7 v: bwgvvxvvv
1-8 k: kkkkkxkdkkk
1-2 x: xfsxxd
4-6 r: hhxhrrlrbwwnjkkwb
1-7 r: rnxrrrrrrrrlrrr
9-12 l: lllllwllzlll
3-9 l: llllllllll
12-19 c: cccccccdtccrcclcccc
8-9 t: tttttttttt
2-3 n: nnkn
3-5 l: xqvqlsjlgl
4-5 k: kkkrrkn
5-7 d: mdrdmddpmd
4-6 c: ccccch
3-5 m: mmfmcmm
6-8 x: gxxdzbxzxxxx
2-3 r: rmtkgcrvlrg
6-7 r: cmrrwrzv
2-3 c: dcjlzl
6-13 b: bbbbbbrpbmbmnbbb
1-5 s: ssssws
2-8 l: sllwlvjl
3-5 b: bbxlbbb
1-3 c: cczpq
10-14 k: vqgnlzbbkjkljk
3-7 h: hhfhhhhhhhhhhhh
5-6 k: kfkkrx
6-7 q: qqqqqqr
5-8 l: dsqllgzl
8-9 r: rrrrrrrrxr
3-4 v: mvvh
1-4 p: ppppppp
17-18 x: xxxxxxxxxxxxxxxxkxx
5-8 b: bbbbcbbpb
7-10 j: jjjjcpjjjwjjjjjjjj
1-10 r: rscprvknxrgxqzsrs
3-7 w: wwgwwwhcwwwwwww
1-3 b: blkb
4-5 r: zrrrhlt
3-4 m: wcmmmfh
3-5 t: mctnxtktrsj
1-4 c: wcccc
4-13 j: sjjjjjjjjjjjtjj
7-8 r: fztxkwhrrxnnn
5-6 r: rrqrrrr
1-5 q: qqqqvqqq
8-14 t: ttvpttkptthtttrcj
2-7 n: znjqsvpstfjph
6-7 l: llllllnl
19-20 c: vwltcctcmcdccrqdccwc
4-15 d: bfkxfrsznfkdzpjmbp
12-15 q: qqqqqqqqqqqvqqqq
6-10 t: tttttbttktt
1-18 c: ccdczcvccvclcccvkccb`;


let inputs = input.split("\n");
let splitPasswords = inputs.map(input => input.split(" "));

function createUsablePassword() {
  for (let i = 0; i < splitPasswords.length; i++) {
    // split "1-18" into ["1", "18"]
    splitPasswords[i][0] = splitPasswords[i][0].split("-");
    // parseInt to turn ["1", "18"] into [1, 18]
    splitPasswords[i][0][0] = parseInt(splitPasswords[i][0][0]);
    splitPasswords[i][0][1] = parseInt(splitPasswords[i][0][1]);
    // remove the colon after the middle letter
    splitPasswords[i][1] = splitPasswords[i][1][0];
  }
}
createUsablePassword();

let numValidPasswords = 0;

function isPasswordValid() {
  splitPasswords.map(password => {
    // password looks like [[1, 18], c, ccdczcvccvclcccvkccb]
    // split the password by character, filter it to only contain the target character, then rejoin it
    let singleCharPassword = password[2].split("").filter(char => char === password[1]).join("");
    // if its length is within the desired range in password[0], add 1 to numValidPasswords
    if (singleCharPassword.length >= password[0][0] && singleCharPassword.length <= password[0][1]) numValidPasswords++;
  })
}
isPasswordValid();

console.log(numValidPasswords); // 477

// --- Part Two ---
// While it appears you validated the passwords correctly, they don't seem to be what the Official Toboggan Corporate Authentication System is expecting.
// The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.
// Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

// Given the same example list from above:
//     1-3 a: abcde is valid: position 1 contains a and position 3 does not.
//     1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
//     2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
// How many passwords are valid according to the new interpretation of the policies?

let numValidPasswordsPart2 = 0;

function isPasswordValidPart2() {
  splitPasswords.map(password => {
    // password looks like [[1, 18], c, ccdczcvccvclcccvkccb]
    // firstPos and secondPos make the code more readable, and minus 1 because the Toboggan Policies don't use zero indexing
    let firstPos = password[0][0] - 1;
    let secondPos = password[0][1] -1;
    if (password[2][firstPos] === password[1] && password[2][secondPos] !== password[1] || password[2][firstPos] !== password[1] && password[2][secondPos] === password[1]) numValidPasswordsPart2++;
  })
}
isPasswordValidPart2();

console.log(numValidPasswordsPart2);  // 686