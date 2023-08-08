
const fs = require('fs')
const chalk = require('chalk')
// Pesan


global.fiturr = `
(+) toanime | Merubah foto menjadi anime. Dengan mereply foto/kirim foto dengan caption #toanime\n
(+) ai | Nanya kepada ai\n
(-) ig-story | Banyak Bug / gaatau cara pasange\n

=== [ INFORMATION ] ===

=> Botnya gratis servernya dari bang @Rama
Jadie kelen harus berterima kasih sama beliau.

=> Pakai lah bot ini dengan bijak.
=> Donasi :
Dana : 0831-5960-0797 ( Muhamad Aulia )
Dana : Rama Store ( Chat aja orangnya +62 813-3914-9976 )

Maaci donate 1 rb pun kami iklas
`



//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
