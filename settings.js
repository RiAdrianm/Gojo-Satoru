//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': '992164a7fe', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['6281271139724']
global.premium = ['6281271139724']
global.ownernomer = '6281271139724'
global.ownername = 'Ri'
global.botname = 'Chino'
global.footer = 'Chino'
global.ig = 'https://twitter.com/Riadrianm'
global.region = 'Indonesia'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 't.me/LewdRi'
global.packname = 'BPM Official'
global.author = 'BPM Official'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Yatta Onii-chan ✓',
    admin: 'Cuma *Admin* yang bisa ngelakuin itu!',
    botAdmin: 'Aku harus jadi *Admin* dulu!',
    owner: 'Fitur ini hanya untuk *Ri Onii-chan*',
    group: 'Fitur ini hanya untuk *Group*!',
    private: 'Fitur ini hanya untuk *Chat Pribadi*!',
    bot: 'Fitur ini hanya untuk *Watashi* dake dayo!',
    wait: '*Cotto Matte Onii-Chan*',
    error: '*Watashi* koware teru!(Eror bang:v)',
    endLimit: 'Kamu sudah mencapai *Limit* Onii-chan, tunggu *12jam* lagi yaa!',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
