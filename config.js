import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['94767973534', '🎭𝗚𝗔𝗠𝗜𝗡𝗚 αкιуα🎭', true],
  ['94767973534', '🎭𝗚𝗔𝗠𝗜𝗡𝗚 αкιуα🎭', true], 
  [''] 
] //Number of owners

global.mods = ['917605902011','32460248586'] 
global.prems = ['917605902011', '32460248586', '919398758484']
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['BrunoSobrino']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '🎭𝗚𝗔𝗠𝗜𝗡𝗚 αкιуα🎭'
global.premium = 'true'
global.packname = '🎭𝗚𝗔𝗠𝗜𝗡𝗚 αкιуα🎭' 
global.author = '@🎭𝗚𝗔𝗠𝗜𝗡𝗚 αкιуα🎭' 
global.igfg = '▢ subscribers on youtube https://youtube.com/@SLcartoonclub' 
global.dygp = 'https://youtube.com/@SLcartoonclub'
global.fgsc = 'https://youtube.com/@SLcartoonclub' 
global.fgyt = 'https://youtube.com/@SLcartoonclub'
global.fgpyp = 'https://youtube.com/@SLcartoonclub'
global.fglog = 'https://telegra.ph/file/f57a2b6f45f2080ea78c7.jpg' 
global.dbase = 'mongodb://mongo:q4bHb1TK9mOyuKFmp1oY@containers-us-west-56.railway.app:6244' //ADD YOUR MONGODB BY CHANGIMG IT

global.wait = '*LOADING PLEASE WAIT....🎭𝗚𝗔𝗠𝗜𝗡𝗚 αкιуα🎭*'
global.rwait = '🎭⌛🎭'
global.dmoji = '🎭🤭🎭'
global.done = '🎭✅🎭'
global.error = '🎭❌🎭' 
global.xmoji = '🎭🔥🎭' 

global.multiplier = 69 
global.maxwarn = '3' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
