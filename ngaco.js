// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')


global.setatus = ['','Succes','Pending','Declined'];
global.prdkt = ['','Spotify 2 Bulan','Youtube Premium 4 Bulan','Youtube Premium 1 Bulan','Vidio 1 Tahun','Vidio 3 Bulan','Canva admin 2 bulan','Canva team 2 bulan','Prime Vidio 1 bulan','Wetv Sharing 1 Bulan','Wetv Private 1 Bulan','Viu Private 2 Bulan','Jaspay Yt Prem 4 Bulan','Jaslog Yt Prem 4 bulan'];
global.catatan = [` *BACAAAAA !!*`]
global.gr = 'https://chat.whatsapp.com/GW3aOUY3wiw2Ny2DkKlo1v'
global.ig = '@xyzlanzzs' // ubah aja
global.email = 'whodlann@proton.me' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Xyz Lanzz' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.babik = ['6281311268263']
global.owner = ['6281311268263'] // ubah aja pake nomor lu
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = `LANZZ Bot24` //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'LANZZ Bot24' // ubah aja ini nama sticker
global.author = 'Fadhlan' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'lanzz' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 100
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})