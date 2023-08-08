const fs = require('fs')
const chalk = require('chalk')

grupWa = `https://chat.whatsapp.com/HH13cdUeLRx1VqGVkO1Qy7`
// List Akun
global.Akun = [`
[ SPOTIFY 2 B ]
⚡ EMAIL : kosong (hubungi fadhlan)
⚡ PASS  : kosong
`,
`[ YTB PREM 4 B ]
⚡ EMAIL : kosong (hubungi fadhlan)
⚡ PASS  : kosong`,
`[ YTB PREM 1 B ]
⚡ EMAIL : kosong (hubungi fadhlan)
⚡ PASS  : kosong`,
`[ VIDIO 12 B ]

kosaksodd
✨Password : aff#1
`,
`[ VIDIO 3 B ]

kosong

✨ Password : koskaong#12`,
`[ CANVA ADMIN 2B ]

Hubungi fadhlan
`,
`[ CANVA TEAM 2 B ]

Hubungi fadhlan`,
`[ PRIME VIDIO 1 B ]

Hubungi fadhlan`,
`[ WETV SR 1 B ]

Hubungi fadhlan`,
`[ WETV PRVT 1B ]

Hubungi fadhlan`,
`[ VIU 2 B ]

EMAIL: asds@gmail.com  
PASSWORD: asdfad#1                


EMAIL: asfdasf@gmail.com  
PASSWORD: asfs#28$&17                
`]
listAcc = ['Spotify-2b','Yt-4b','Yt-1b','Vidio-1th','Vidio-3b','Canva-admin-2b','Canva-team-2b','Prime-Vidio-1b','Wetv-Sharing-1b','Wetv-Private-1b','Viu-Private-2b']
global.garansi = [``,`*GUARANTED ✅*`,`*NOT GUARANTED ❌*`]
// Product
global.kode = `[ CODE STATUS ]

[1] Succes
[2] Pending
[3] Declined

[ CODE PRODUCT ]

[1] Spotify 2 Bulan 
[2] Youtube Premium 4 Bulan
[3] Youtube Premium 1 Bulan
[4] Vidio 1 Tahun
[5] Vidio 3 Bulan
[6] Canva admin 2 bulan
[7] Canva team 2 bulan
[8] Prime Vidio 1 bulan
[9] Wetv Sharing 1 Bulan
[10] Wetv Private 1 Bulan
[11] Viu Private 2 Bulan
[12] Jaspay Yt Prem 4 Bulan
[13] Jaslog Yt Prem 4 bulan

[ KODE FITUR #MINTA ]
- Vidio-3b
- Vidio-1th
- Canva-Admin2b
- Canva-Team2b
- Viu-2b
- Ytb-4b
- Ytb-1b
- Prime-1b
- Spotify-2b
`
global.setatus = ['','Succes','Pending','Declined'];
global.prdkt = ['','Spotify 2 Bulan','Youtube Premium 4 Bulan','Youtube Premium 1 Bulan','Vidio 1 Tahun','Vidio 3 Bulan','Canva admin 2 bulan','Canva team 2 bulan','Prime Vidio 1 bulan','Wetv Sharing 1 Bulan','Wetv Private 1 Bulan','Viu Private 2 Bulan','Jaspay Yt Prem 4 Bulan','Jaslog Yt Prem 4 bulan'];
global.catatan = [` *BACAAAAA !!*

✨ Garansi 100% Uang kembali jika produk yang Ber Label "GARANSI" telah terkena BF ( Premiumnya Hilang / Akun Tidak bisa login ) pada masa periode Garansi berlaku.
Cashback 100% hanya berlaku pada metode pembayaran sesama Ewallet dana. Jika anda memakai Metode lain, maka admin akan memotong biaya yang anda keluarkan sebelumnya dengan nominal admin dari proses transfer dari ewallet/bank yang berbeda.`,
`Spo 2 bulan :

❌ NO Log-in Multidevice
❌ NO Change Ip Addres Only Indonesia 
❌ Do not complain on products that do not have a "Warranty" description`,
`Youtube Premium 4 Bulan :

✨ Budayakan Membackup Playlist
✨ Jangan login multi-device
✨ Akun dari seller fresh
✨ Akun dari buyyer harus fresh
✨ Tidak pernah langganan premium sebelumnya.`,
`Youtube Premium 1  Bulan Famplan :

✨ Jangan login multi-device
✨ Akun dari seller fresh
✨ Akun dari buyyer harus fresh
✨ Tidak pernah langganan premium sebelumnya.
`,
`Vidio 1 Tahun : 

✨ Jangan login multi-device
✨ Akun dari seller fresh
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.`,
`Vidio 3 Bulan : 

✨ Jangan login multi-device
✨ Akun dari seller fresh
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.
`,
`Canva admin 2 bulan :

✨ Budayakan Membackup Link Design / Project
✨ Jangan login multi-device
✨ Tidak boleh mengundang orang lebih dari 1.
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.
`,
`Canva team 2 bulan :

✨ Budayakan Membackup Link Design / Project
✨ Jangan login multi-device
✨ Tidak boleh share link team invite. 
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.`,
`Prime vidio 1 bulan :

✨ Jangan login multi-device
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.`,
`Wetv Sharing 1 bulan :

✨ Jangan login multi-device
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.`,
`Wetv Private 1 Bulan :

✨ Jangan login multi-device
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.`,
`Viu Private 2 Bulan :

✨ Jangan login multi-device
✨ Tidak mengganti email jika produk ada keterangan Garansi.
✨ Tidak boleh Complain juga produk tidak ada keterangan Garansi.
`,
`Jaspay Yt Prem 4 Bulan :

✨ Transfer sebelum proses dimulai
✨ Menggunakan gmail fresh dan telah terlogin bundling 4 bulan sebelumnya.
✨ Tidak boleh mengganti password sebelum proses dinyatakan selesai oleh seller.`,
`Jaslog Yt Prem 4 Bulan :

✨ Transfer sebelum proses dimulai
✨ Menggunakan gmail fresh dan telah terlogin bundling 4 bulan sebelumnya.
✨ Tidak boleh mengganti password sebelum proses dinyatakan selesai oleh seller.`]
res = [`
Untuk mengunakan bot Khusus Reseller.
Ada fitur khusus.

[ BACA !!! ]

Ketik _!kode_ terlebih dahulu sebelum membaca keterangan di bawah ini.

- order <status> <jenisitem (angkanya ada di command kode)> <harga> <id>

- send <nomor(62)> <email> <pass> <jeniakun> <harga> <note> <garansi 1/2>

-  <akunya apa> <kode-verifikasi>

order berfungsi untuk melakukan transaksi dengan buyyer di grup meggunakan bot.

send untuk mengirim email dan password ke buyyer melalui bot

minta untuk mengambil akun premium lewat bot disaat saya fadhlan off

Contoh Penggunaan :

send 6281311268263 kanzz122@gmail.com ayammm 1 19.000 1 1 ( DI BOT SAJA!!!!! )

order 1 1 12.000 bebasajasihini

minta Vidio-3b kanzzadjao#!#! ( Kode verifikasi bisa berubah jadi hubungi fadhlan )

Untuk yang masih bingung dengan angka coba cocokan dengan Teks yang ada di fitur _!kode_

Klau gapaham jga tanya fdhlan!!!!

`];
global.Resseller = [
    { nama: 'Putri Saja',username: "PutriGC", password: "putriJawaTengah" },
    { nama: 'Panggih Gumilang',username: "panggihsp", password: "DoremiFasolasido" },
    { nama: 'Muhamad Fadhlan',username: "fadhlan", password: "xIra" }
];
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})