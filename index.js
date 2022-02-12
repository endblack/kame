const {
    WAConnection,
  MessageType,
  Presence, 
  MessageOptions,
  Mimetype,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  ChatModification,
  waChatKey,
  WA_DEFAULT_EPHEMERAL,
  mentionedJid,
  processTime
} = require('@adiwajshing/baileys')
const fs = require("fs-extra")
const crypto = require('crypto')
const { exec } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const gis = require('g-i-s')
const { uploadimg } = require('./lib/uploadimg');
const moment = require("moment-timezone")
const { webp2gifFile } = require("./lib/gif.js")
const { fetchJson } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const speed = require('performance-now')
const { wait, simih, getBuffer, h2k, generateMessageID, mail2, getGroupAdmins, mail, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { ind } = require('./language')
const express = require('express');
const app = express();
const Exif = require('./database/data/exif');
const exif = new Exif();
const {convertSticker} = require("./lib/swm.js") 
const PORT = process.env.PORT || 8080

app.get('/', (request, response) => {
  console.log("bot online");
  response.sendStatus(200);
});

app.get('/info', (req, res) => {
  res.json({
    status: 'rodando normalmente'
  })
})

app.listen(PORT, () => {
console.log('okok '+PORT)
})

apiz = `vrMSPgXFfqY87hnTJ87arA9N2LN`
const packID = 'com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2'
const playstore = 'https://play.google.com/store/apps/details?id=com.dts.freefireth'
const itunes = 'https://itunes.apple.com/app/sticker-maker-studio/id1443326857'

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + 'FN:My dono\n' 
            + 'ORG: MaxWorld;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=559184035474:+55 91 8403-5474\n' 
            + 'END:VCARD' 
prafix = '!'
namo = 'Otakinhos_sticker'
marca = 'Megah-chan 😳'
owner = '559184035474'
ator = 'megah_gostosa'
blocked = []
/******* max gostoso**********/
const ownerNumber = ["559184035474@s.whatsapp.net","559192136241@s.whatsapp.net","5511988985726@s.whatsapp.net","5514996541467@s.whatsap.net"] 

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Horas, ${pad(minutes)} Minutos e ${pad(seconds)} Segundos`
}
//****** carregando arquivos *******
const inte = JSON.parse(fs.readFileSync('./banco/rpg/inte.json')) 
//****************************

async function connectToWhatsApp() {
	const client = new WAConnection()
	client.on('qr', () => {
		console.log(color('[','white'),color('∆','red'),color(']','white'),color('Leia o qr code','white'),color('AGORA','red'),color('E um recado:','white'),color('Max é foda','yellow'))
	})
	client.on('connecting', () => {
		console.log(color('Conectando...','cyan'))
	}) 
	
	
	client.on('open', () => {
	const authInfo = client.base64EncodedAuthInfo()
   console.log(color('Você está conectado!','yellow'))
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
client.connect();
console.log(color('Sessão web aberta','yellow'))
     
     client.on('close', () => {
     rc = 'A conexão caiu...'
     console.log(color(rc,'red'))
     })
     charging = 'não detectado'
     client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = 'verdadeiro'
		if (json[2][0][1].live == 'false') charging = 'falso'
	    })
		global.prefix
		global.batrei = global.batrei ? global.batrei : []
		client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	    })


client.on('chat-update', async (mek) => {
		try {
		    if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
            if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			mek.message =
            Object.keys(mek.message)[0] === "ephemeralMessage"
            ? mek.message.ephemeralMessage.message
            : mek.message;
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY')
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const timi = moment.tz('America/Sao_Paulo').add(30, 'days').calendar();
			const timu = moment.tz('America/Sao_Paulo').add(20, 'days').calendar();
			bady = (type === 'conversation' && mek.message.conversation.startsWith(prafix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prafix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prafix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prafix) ? mek.message.extendedTextMessage.text : ''
			bedy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const isCmc = bady.startsWith(prafix)
			var prefixRegEx = /^[!&z?=#.+\/]/gi;
    let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : "";
        let prefix = _chats.match(prefixRegEx) ? prefixRegEx.exec(_chats)[0] : "";
    body =
      type === "conversation" && mek.message.conversation.startsWith(prefix)
        ? mek.message.conversation
        : type == "imageMessage" &&
          mek.message.imageMessage.caption.startsWith(prefix)
        ? mek.message.imageMessage.caption
        : type == "videoMessage" &&
          mek.message.videoMessage.caption.startsWith(prefix)
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" &&
          mek.message.extendedTextMessage.text.startsWith(prefix)
        ? mek.message.extendedTextMessage.text
        : "";
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

    let chats = _chats.match(prefixRegEx)
      ? _chats
          .split(prefixRegEx)
          .find((v) => v === _chats.replace(prefixRegEx, ""))
      : _chats;
	        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
	        let command = chats.split(/ +/g)[0];
    const args = _chats.trim().split(/ +/).slice(1);
    const commander = body.slice(1).trim().split(/ +/).shift().toLowerCase()
    const arg = budy.slice(commander.length + 2, budy.length)
    const isCmd = _chats.match(prefixRegEx)
      ? prefixRegEx.exec(_chats)["input"]
      : _chats;
    const q = args.join(" ");
			const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
			client.updatePresence(from, Presence.availabe)
			const tescuk = ["0@s.whatsapp.net"]
			const isGroup = from.endsWith('@g.us')
			const botNumber = client.user.jid
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			let senderr = mek.key.fromMe
      ? rimuru.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
			stt = await client.getStatus(sender)
			const rece = `${stt.status}`
			pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupDesc = isGroup ? groupMetadata.desc : ''
            const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
            const foto = await fs.readFileSync('./mega.jpg')
            
            /************** SCURITY FEATURE ************/
            const totalchat = await client.chats.all()
            const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
            const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
			const isImage = type === 'imageMessage'
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
						
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const sendImage = (teks) => {
		    client.sendMessage(from, teks, image, {quoted:mek})
		    }
		    const costum = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
			const costumimg = (pesan, tipe, target, target2) => {
			client.sendMessage(from, pesan, tipe, {quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` }}})
			}
		    const sendPtt = (teks) => {
		    client.sendMessage(from, audio, mp3, {quoted:mek})
		    }
		    

		    //###### BUTAO #########
		    const envbut = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      client.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };
    
		//########## FIM##########
		    
		    colors = ['red','white','black','blue','yellow','green']
		    
		    selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
  
            responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
   
            q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
            
	        butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
			
			//detector media
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//private chat message
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
			
			//group message
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXECUTADO\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECEBIDO\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
			
			//****** FUNÇÕES ******
			const armar = (userid, nome, idade, serie) => {
             obj = {user: userid, nome: nome, idade: idade, id: serie}
             console.log(obj)
            inte.push(obj)
            fs.writeFileSync('./banco/rpg/inte.json', JSON.stringify(inte))
        }
        
        const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
        //#######PUXAR DADOS DO JOGADOR######
        const getNome = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].nome
            }
        }
        
        const getUser = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].user
            }
        }

const getAge = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].idade
            }
        }
        
  const getSeri = (sender) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return inte[position].id
            }
        }
        
        const edit = (sender, nn) => {
            let position = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    position = i
                }
            })
            if (position !== false) {
                inte[position].nome = nn
                fs.writeFileSync('./banco/rpg/inte.json', JSON.stringify(inte))
            }
        }
        
        const checkUser = (sender) => {
            let status = false
            Object.keys(inte).forEach((i) => {
                if (inte[i].user === sender) {
                    status = true
                }
            })
            return status
        }
        //######## FIM ########
        
       // ******* SECURE *********
        isRPG = checkUser(sender)
			
							
	 //********* FIM **************
	 			switch(command) {
				  case 'rpg':
				if (isRPG) return  reply(ind.rediregis())
	            if (!q.includes('/')) return  reply(ind.wrongf())
                const nomeUser = q.substring(0, q.indexOf('/') - 0)
                const idadeUser = q.substring(q.lastIndexOf('/') + 1)
                const serialUser = createSerial(5)
                if(isNaN(idadeUser)) return await reply('A idade precisa ser um número!!')
                if (nomeUser.length >= 30) return reply(`Pq seu nick é tão grande, isso seria um nick ou um trem? 🚆`)
                if (idadeUser > 40) return reply(`Precisa ter no maximo 40 anos`)
                if (idadeUser < 12) return reply(`Precisa ter no mínimo 12 anos`)
                veri = sender
                if (isGroup) {
                    armar(sender, nomeUser, idadeUser, serialUser)
                    await reply(ind.registered(nomeUser, idadeUser, date, serialUser, time, sender))
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(nomeUser, 'cyan'), 'Age:', color(idadeUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    armar(sender, nomeUser, idadeUser, serialUser)
                    await reply(ind.registered(nomeUser, idadeUser, date, serialUser, time, sender))
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(nomeUser, 'cyan'), 'Age:', color(idadeUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
                  break
                  case 'menu':
               menu = '*MENU*'
               envbut(from, menu, `${marca}`, [{buttonId:'!menud',buttonText:{displayText:'📁𝚖𝚎𝚗𝚞 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍'},type:1},
               {buttonId:`!dono`,buttonText:{displayText:'👤𝚍𝚘𝚗𝚘'},type:1},
               {buttonId:`!regras`,buttonText:{displayText:'🧾𝚛𝚎𝚐𝚛𝚊𝚜'},type:1}])
               break
               case 'menud':
        kkl = `༒︎ *MENU DOWNLOAD* ༒︎
☦︎ ➪ !play 
☦︎ ➪ !video
☦︎ ➪ !pinterest
༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎
☦︎ *Modo de usar*
☦︎ use o comando seguido 
☦︎ do que desejas buscar
☦︎ exemplo:
☦︎ !play lovely
☦︎
༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎`
envbut(from, kkl, `${marca}`, [{buttonId:'!ping',buttonText:{displayText:'✈︎𝚙𝚒𝚗𝚐'},type:1},
{buttonId:'!menua',buttonText:{displayText:'💿𝚖𝚎𝚗𝚞 𝚊𝚞𝚍𝚒𝚘'},type:1}])
               break
               case 'menua':
                meno = `༒︎ *MENU AUDIO* ༒︎
☦︎➪ !lento
☦︎➪ !esquilo
☦︎➪ !grave
☦︎➪ !fast
☦︎➪ !estourar
☦︎➪ !bass
༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎
☦︎ *Modo de usar*
☦︎ envie uma audio e
☦︎ marque com um dos
☦︎ comandos acima
༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎`
envbut(from, meno, marca, [{buttonId:'!bateria',buttonText:{displayText:'🔋bateria'},type:1}])
break
                  case 'perfil':
                  nom = getUser(sender) //user
                  nom2 = getNome(sender)
                  nom3 = getAge(sender)
                  nom4 = getSeri(sender)
                  if (!isRPG) {
                  reply('sem registro')
                  } else {
                  reply(`${nom}, ${nom2}, ${nom3}, ${nom4}`)
                  }
                  break
                  case 'd':
                  gg = body.slice(3)
                  await edit(sender, gg)
                  reply('testando')
                  break
                  case 'c':
                  ac = body.slice(3)
                  as = getSeri(sender)
                  if (ac == as) {
                  reply('correto')
                  } else {
                  reply('errado')
                  }
                  break
                  case 'pinterest':  
					  case 'images':		
					if (args[0] == 'hentai') return reply('naum pode')
					if (args[0] == 'porno') return reply('naum pode')
					dojo = budy.slice(10)
					code = encodeURI(dojo)
					client.updatePresence(from, Presence.composing);
					reply(ind.wait())
					data = await fetchJson(`https://api.megah.tk/img?q=${code}`)
					buffer = await getBuffer(data.url)
					await client.sendMessage(from, buffer, image, {quoted: mek, caption: `link: ${data.url}`})
			   	break
                  case 'info':
                  reply('vish, esse cmd foi banido por causa falhas no sistema...')
					break
					case 'attp':
                try {
				if (args.length < 1) return reply('digite o texto')
                reply(ind.wait())
                cod = body.slice(5)
                code = encodeURI(cod)
                console.log(code)
                url = await getBuffer(`https://api.xteam.xyz/attp?file&text=${code}`)
                client.sendMessage(from, url, sticker, {quoted: mek})
                } catch (e) {
				console.log(`Error :`, color(e,'red'))
				reply('erro')
				}
                break
					case 'email':
                    client.updatePresence(from, Presence.composing)
                    if (!isRegistered) return reply(ind.noregis(pushname))
                    if (!q.includes('/')) return  reply('está errado, faz assim:\n\n!email gostosa.ofc@gmail.com/eae gostosa :3')
					if (args.length < 1) return reply('qual o texto?')
					agia = `${body.slice(7)}`
			        eml = agia.split("/")[0];
			        teks = agia.split("/")[1];
					anu = await mail(teks, eml)
					reply(`Pronto, enviei sua msg.`)
					break
					case 'clima':
                    if (args.length < 1) return reply('Digite o nome da cidade sem acentos')
                    try {
                    cs = body.slice(7)
                    data = await fetchJson(`http://api.weatherapi.com/v1/current.json?key=d7f33929455b4e1e986173946210804&lang=pt&q=${cs}`, {method: 'get'})
                    console.log(data)
                    if (data.error) return reply('Cidade não encontrada')
                    kiny = `Cidade: ${data.location.name}
Região: ${data.location.region}
País: ${data.location.country}
id1_local: ${data.location.tz_id}
Latitude: ${data.location.lat}
Temperetura: ${data.current.temp_c}c⁰
raios uv: ${data.current.uv}
pressão: ${data.current.pressure_in}
umidade: ${data.current.humidity}%
Precipitação: ${data.current.precip_mm}%
descrição: ${data.current.condition.text}
data: ${data.location.localtime}`
cla = `༒︎༒︎𖣘 Clima 𖣘༒︎༒︎
☦︎ Cidade: ${data.location.name}
☦︎ Região: ${data.location.region}
☦︎ País: ${data.location.country}
☦︎ Temperatura: ${data.current.temp_c}c⁰
☦︎ Raios Uv: ${data.current.uv}
☦︎ Umidade: ${data.current.humidity}%
☦︎ Precipitação: ${data.current.precip_mm}%
☦︎ Descrição: ${data.current.condition.text}
☦︎ Data: ${data.location.localtime}
༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎`
                    client.sendMessage(from, cla, text, {quoted: mek})
                    } catch (err) {
                    console.log(err);
                    return reply('Deu erro, tente mandar sem acentos dessa vez')
                    }                  
                   
                 case 'cep':
				 if (args.length < 1) return reply('cadê o cep?')
					try { 
					lxrd = body.slice(5)
                    data = await fetchJson(`https://viacep.com.br/ws/${lxrd}/json/`, {method: 'get'})
                    console.log(data)
                    if (data.erro) return reply('cep não encontrado')
                    kiny = `*🔍CONSULTA REALIZADA🔍* \n\n ➸ *CEP:* ${data.cep} \n\n ➸ *ENDEREÇO:* ${data.logradouro}\n\n ➸ *COMPLEMENTO:* ${data.complemento} \n\n ➸ *BAIRRO:* ${data.bairro} \n\n ➸ *LOCALIDADE:* ${data.localidade} \n\n ➸ *UF:* ${data.uf}\n\n ➸ *DDD:* ${data.ddd}`
                    client.sendMessage(from, kiny, text, {quoted: mek})
                    } catch {
                    return reply('deu erro, cep invalido')
                    }
                    break
                    case 'encurta':
                    case 'en':
                    case 'encurtar':
                    case 'e':
				cs = args[0]
               client.updatePresence(from, Presence.composing) 
                data = await fetchJson(`https://api.megah.tk/curt?q=${cs}`)
                hasil = `*Aqui está seu link encurtado:*\n${data.url}`
                reply(hasil) 
                break
                    case 'covid':
                    try {
                    cs = body.slice(7)
                    if (cs.length > 2) return reply('A sigla dos estados so tem duas letras')
                    data = await fetchJson(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${cs}`, {method: 'get'})
                    console.log(data)
                    if (data.error) return reply('Sigla do estado não encontrada')
                    kiny = `Estado: ${data.state}
Casos: ${data.cases}
Mortes: ${data.deaths}
possiveis casos: ${data.suspects}
casos recusados: ${data.refuses}`
cla = `༒︎༒︎☠︎︎ Covid-19 ☠︎︎༒︎༒︎
⁂ Estado: ${data.state}
⁂ Casos: ${data.cases}
⁂ Mortes: ${data.deaths}
⁂ Possiveis casos: ${data.suspects}
⁂ Casos recusados: ${data.refuses}
༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎༒︎`
                    client.sendMessage(from, cla, text, {quoted: mek})
                    }
                    catch (err) {
                    console.log(err, color('red'))
                    reply('deu erro')
                    }
                    break
                    case 'covidm':
                    try {
                    dados = await fetchJson('https://www.luc4rio-rest-api.tk/api/consultas/covid/mundial')
                    console.log(dados)
                    kep = `*COVID GLOBAL*

 *Casos totais*: ${dados.Total_Casos}
 *Casos totais ativos*: ${dados.Total_Casos_Ativos}
 *Casos totais críticos*: ${dados.Total_Casos_Criticos}
 *Casos totais hoje*: ${dados.Total_Casos_Hoje}
 *Mortes totais*: ${dados.Total_Mortes}
 *Mortes hoje*: ${dados.Total_Mortes_Hoje}
 *Total recuperados*: ${dados.Total_Recuperados}
__________________________`
client.sendMessage(from, kep, text, {quoted: mek})
                    } catch (err) {
                    console.log(err)
                    reply('deu erro')
                    }
                    break
                    case 'infogp':
                    client.updatePresence(from, Presence.composing)
                    if (!isGroup) return reply(ind.groupo())
                    try {
                    ppUrl = await client.getProfilePicture(from) // leave empty to get your own
                    } catch {
                    ppUrl = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                    }
			        buffer = await getBuffer(ppUrl)
		            client.sendMessage(from, buffer, image, {quoted: mek, caption: `*NOME*: ${groupName}\n*MEMBROS*: ${groupMembers.length}\n*ADMINS*: ${groupAdmins.length}\n*DESCRIÇÃO*:\n${groupDesc}`})
                    break
                      case 'wlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_052617.jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=6%25&text.0.position.y=55%25&text.0.size=30&text.0.color=ff0000&text.0.font.family=Signika%20Negative&text.0.font.weight=700&text.0.background.opacity=11&text.0.outline.blur=98&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
					//Se for kibar deixa is creditos
               case 'glogo':
			    dark = `${body.slice(7)}`
			    da = dark.split("/")[0];
			    rk = dark.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/0d1dc54c127cf3f8a53afe515a1efb8f.jpg?text.0.text=${rk}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=30&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${da}&text.1.position.gravity=north&text.1.size=30&text.1.color=ff0000&text.1.font.weight=600&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break
			    case 'simi':
                    client.updatePresence(from, Presence.composing)
					if (args.length < 1) return reply('o que vc quer conversa?')
					teks = body.slice(6)
					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})
					//if (anu.error) return reply('Simi ga tau kak')
					reply(anu)
					break
			    case 'frase':
			    nobg = `${body.slice(7)}`
			    no = nobg.split("/")[0];
			    bg = nobg.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://api.ritekit.com/v2/image/quote?text=${no}&author=${bg}&textFont=Lora&textColor=%23000000&textFontWeight=400&authorFont=Lato&authorColor=%23e5e5e5&authorFontWeight=400&highlightColor=transparent&backgroundColor1=%238686bd&backgroundColor2=%231ddad6&width=400&height=400&client_id=52ad7438afd2baa8779f9266a8a997cd92771f1eb625`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break
			    case 'amor':
			    love = `${body.slice(7)}`
			    lo = love.split("/")[0];
			    ve = love.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://assets.imgix.net/examples/couple.jpg?txt64=VEUgQU1PIOKdpO-4jw&txt-font=bold&txt-align=middle%20center&txt-size=${lo}&blur=${ve}&txt-color=FF0000`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
			    case 'aguia2':
			    agia = `${body.slice(7)}`
			    ag = agia.split("/")[0];
			    ia = agia.split("/")[1];
			    reply('*Estou fazendo, se der erro tente novamente ✓*')
			    buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${ia}&text.0.position.gravity=center&text.0.position.y=45%25&text.0.size=24&text.0.color=ffffff&text.0.font.weight=700&text.0.font.style=italic&text.0.background.opacity=79&text.0.outline.opacity=37&text.1.text=${ag}&text.1.position.gravity=north&text.1.size=24&text.1.color=0040f2&text.1.font.family=Noticia%20Text&text.1.font.style=italic`, {method: 'get'})
			    client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
			    await limitAdd(sender) 
			    break  
                case 'black':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T225108.251.jpeg?text.0.text=${teks}&text.0.color=ffffff&text.0.font.family=Tangerine&text.0.font.weight=800&text.0.background.opacity=18&text.0.outline.blur=82`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'clogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_230542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=2%25&text.0.size=23&text.0.color=000000&text.0.opacity=58&text.0.font.weight=600&text.0.font.style=italic&text.0.outline.opacity=24`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break	
                case 'letxt':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-23T231504.507.jpeg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=8%25&text.0.position.y=30%25&text.0.size=30&text.0.color=0800ff&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=northwest&text.1.position.x=7%25&text.1.position.y=30%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.background.opacity=96`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break		
                case 'text3d':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210223_235608.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=2%25&text.0.size=30&text.0.color=ff0000&text.0.font.weight=600&text.1.text=${teks}&text.1.position.gravity=center&text.1.position.x=1%25&text.1.size=30&text.1.color=ffffff&text.1.font.weight=600&text.1.outline.blur=57`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break			
                case 'milogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/images%20-%202021-02-22T014719.920.jpeg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=15&text.0.color=000000&text.0.font.family=Ek%20Mukta&text.0.font.weight=600&text.0.font.style=italic&text.0.background.opacity=29`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'aguia':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_024526.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=30%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Philosopher&text.0.font.style=italic&text.0.background.color=ffffff`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'randlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://darkkkw.herokuapp.com/`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'monkey':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_030251.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=39%25&text.0.size=25&text.0.color=ffffff&text.0.font.family=Source%20Sans%20Pro&text.0.font.weight=600`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dlg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://mhankbarbar.tech/api/ephoto?text=${teks}`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dnulis':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 200) return reply('O texto é longo, até 200 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_040232.png?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=10%25&text.0.position.y=8%25&text.0.align=right&text.0.size=55&text.0.color=000000&text.0.opacity=72&text.0.font.family=Bitter&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'tlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_164542.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=40%25&text.0.size=50&text.0.color=ffffff&text.0.font.family=Lobster%20Two&text.0.font.weight=800&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'nlogo':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 20) return reply('O texto é longo, até 20 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_165159.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.y=38%25&text.0.size=24&text.0.color=ff0000&text.0.font.family=Signika&text.0.font.weight=600&text.0.background.opacity=34&text.0.outline.opacity=16`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dmeme':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 9) return reply('O texto é longo, até 9 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_050527.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=10%25&text.0.position.y=22%25&text.0.size=18&text.0.color=000000&text.0.font.family=Vollkorn&text.0.font.style=italic`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                case 'dnobg':
					if (args.length < 1) return reply(mess.blank)
					teks = body.slice(7)
					if (teks.length > 15) return reply('O texto é longo, até 15 caracteres')
					reply('*Estou fazendo, se der erro tente novamente ✓*')
					buffer = await getBuffer(`https://nturshro.sirv.com/Api-dark/20210222_052102.png?text.0.text=${teks}&text.0.position.gravity=center&text.0.color=ff0000&text.0.opacity=99&text.0.font.family=Droid%20Serif&text.0.font.weight=600&text.0.background.opacity=74&text.0.outline.opacity=0`)
					client.sendMessage(from, buffer, image, {quoted: mek, caption: '*PRONTINHO ✓*'})
					break
                    case 'wasted': 
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    media = await client.downloadMediaMessage(encmedia)
				    emBase64 = new Buffer(media).toString('base64')
				    try {
				    void async function() {
				    gat = await uploadimg(emBase64)
				    console.log(gat.data.image.url)
				    lk = `${gat.data.image.url}`
				    reply(`${gat.data.image.url}`)
				    ft = await getBuffer(`https://api.lolhuman.xyz/api/editor/wasted?apikey=ea1c735e809aedcb3b42793a&img=${lk}`)
				    reply(`https://api.lolhuman.xyz/api/editor/wasted?apikey=ea1c735e809aedcb3b42793a&img=${lk}`)
				    client.sendMessage(from, ft, image, { quoted: mek})
				    }()
	                } catch (e){
                    console.log(e)
                    }
                    break
                    case 'vidro': 
					encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
				    media = await client.downloadMediaMessage(encmedia)
				    emBase64 = new Buffer(media).toString('base64')
				    try {
				    void async function() {
				    gat = await uploadimg(emBase64)
				    console.log(gat.data.image.url)
				    lk = `${gat.data.image.url}`
				    data = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/glasscrack?url=${lk}`)
				    console.log(data)
				    ft = await getBuffer(data.result.url)
				    reply(`${data.result.url}`)
				    client.sendMessage(from, ft, image, { quoted: mek})
				    }()
	                } catch (e){
                    console.log('EITA '+e)
                    }
                    break
                  case 'converter':
				case 'toimg':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					reply(ind.wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, image, {quoted: mek, caption: 'aqui está'})
						fs.unlinkSync(ran)
					})
					} 
					 if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const mediaaa = await client.downloadAndSaveMediaMessage(encmediaaa)
reply(ind.wait())
a = await webp2gifFile(mediaaa)
mp4 = await getBuffer(a.result)
client.sendMessage(from, mp4, MessageType.video, {mimetype: 'video/gif', filename: `stick.gif`, quoted: mek, caption: 'Aqui está ✅'})
fs.unlinkSync(mediaaa)
} else {
reply('Marque um sticker!')
}
break
                  case 'tts':
				case 'fl':  
				if (args.length < 1) return client.sendMessage(from, '', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args[0] < 1) return client.sendMessage(from, 'Falta colocar o código do idioma!', text, {quoted: mek})
					if (args[1] < 1) return reply('cade o texto?')
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					dtt.length > 80
					? reply('Para reduzir spam o máximo de letras permitidas são 80!')
					: gtts.save(ranm, dtt, function() {
						exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
							fs.unlinkSync(ranm)
							buffer = fs.readFileSync(rano)
							if (err) return reply(ind.stikga())
							client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
							fs.unlinkSync(rano)
						})
					})
					
					break
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(ind.ownerb())
					prefix = args[0]
					reply(`*Prefixo alterado para:* ${prefix}`)
					break
					case 'bc': 
					if (!isOwner) return reply(ind.ownerb()) 
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「BOT_MEGAH」*\n\n${body.slice(4)}`)
						}
						reply('transmitido ')
					}
					break
					case 'mon': 
					if (!isOwner) return reply(ind.ownerb()) 
					anu = await client.chats.all()
					buffer = fs.readFileSync('on.mp3');
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, audio, {ptt:true})
						}
						reply('transmitido ')
					}
					break
					case 'moff': 
					if (!isOwner) return reply(ind.ownerb()) 
					anu = await client.chats.all()
					buffer = fs.readFileSync('off.mp3');
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `❮ 𝙋𝙀𝙎𝘼?? 𝘽??𝙊𝘼𝘿𝘾𝘼𝙎𝙏 ❯\n\n${body.slice(4)}`})
						}
						reply('𝙨𝙪𝙘𝙘𝙚𝙨𝙨 𝙗𝙧𝙤𝙖𝙙𝙘𝙖𝙨𝙩 ')
					} else {
						for (let _ of anu) {
							client.sendMessage(_.jid, buffer, audio, {ptt:true})
						}
						reply('transmitido ')
					}
					break
					case 'regras':
					reply('ainda não tem')
					break
				case 'link':
				    if (!isGroup) return reply(ind.groupo()) 
				    	if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.groupInviteCode(from)
				    yeh = `_Bora dilvulgar o grupo? 🍻😏_\n*Link:* https://chat.whatsapp.com/${linkgc}`
				    client.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender) 
			        break
			        case 'rv':
				    if (!isGroup) return reply(ind.groupo()) 
				    if (!isGroupAdmins) return reply(ind.admin())
				    if (!isBotGroupAdmins) return reply(ind.badmin())
				    linkgc = await client.revokeInvite(from)
				    mg = 'Link atualizado'
				    client.sendMessage(from, mg, text, {quoted: mek})
			        break
			        case 'add':			        
try {
linkgc = await client.groupInviteCode(from)
yeh = `*Link:* https://chat.whatsapp.com/${linkgc}`
if (!isGroup) return reply("Somente em grupos!")
if (!isGroupAdmins) return reply("Não hmmmm")  
if (!isBotGroupAdmins) return reply(`Tornar bot como administrador de grupo!`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
response = await client.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
console.log(inv)
if(inv[0].code == 409) return reply('O alvo já está no grupo!')
if(inv[0].code == 403) {
 reply('Erro, conta privada do usuário') 
 client.sendMessage(entah, yeh, text, {quoted: mek})
 }
if(inv[0].code == 408) return reply('Erro, usuário acabou de sair')
if(inv[0].code == 401) return reply('Erro, porque o bot está bloqueado pelo alvo ')
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
response = await client.groupAdd(from, [entah])
o = response.participants[0]
let inv = (Object.values(o))
console.log(inv)
if(inv[0].code == 409) return reply('O alvo já está no grupo! ')
if(inv[0].code == 403) {
 reply('Falhou, porque o número é privado ') 
 client.sendMessage(entah, yeh, text, {quoted: mek})
 }
if(inv[0].code == 408) return reply('Falha, porque o alvo acabou de sair ')
if(inv[0].code == 401) return reply('Falha, porque o bot está bloqueado pelo alvo ')
}
} catch {
return 
}
break
case 'online':
case 'on':
					   		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
			    client.sendMessage(sender, 'Lista Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break
              case 'delete':
					    case 'del':
					    case 'apagar':
					    case 'apaga':
					client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
                  case 'play':   
	          if (args.length < 1) return reply('Digite o nome da música')
	            try{
                play = body.slice(5)
                code = encodeURI(play)
                deco = decodeURI(code)
                anu = await fetchJson(`https://api.megah.tk/json3?q=${code}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
              //reply(ind.wait)
                buffer = await getBuffer(anu.thumb)
                infomp3 = `Título: ${anu.titulo}\n\nLink: ${anu.fonte}\nLink para download manual: ${anu.url}`
                await client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download da música, aguarde...')
                lagu = await getBuffer(anu.url)
                reply('terminei, to enviando a música ✔')
                await client.sendMessage(sender, lagu, audio, {mimetype: 'audio/mp4', filename: 'megahchan.mp3', quoted: mek})
                } catch (e) {
                console.log(e)
                return reply('Deu erro :(')
                }
                break
                case 'ytmp3':
                if (args.length < 1) return reply('Digite o nome da música')
	            url = body.slice(5)
                reply('To fazendo o download do mp3, aguarde...')
                anu = await getBuffer(`https://api.megah.tk/mp3?q=` + url)
                reply('terminei, to enviando o mp3 ✔')
                await client.sendMessage(sender, anu, audio, {mimetype: 'audio/mp4', filename: 'megahchan.mp3', quoted: mek})
                break
                case 'stickergif': 
				case 'sticker':
				case 's':
				if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply('Aguarde..., Se a figurinha ficar pequena use !st')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga)
							})
							.on('end', function () {
								console.log('Finish')
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply('Aguarde... Se a figurinha ficar pequena ou parada use !st')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ falha ao converte ${tipe} em sticker`)
							})
							.on('end', function () {
								console.log('Finish')
									client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=28, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`envie uma foto ou video/gif não muito pesado com legenda ${prefix}sticker ou marque a imagem/gif`)
					}
					break
					case 'st':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(ind.wait())
await ffmpeg(`./${media}`)
.input(media)
.on('start', function(cmd) {
})
.on('error', function(err) {
reply('erro')
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(ind.wait())
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function(cmd) {
})
.on('error', function(err) {
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
exec(`webpmux -set ${rano} -o ${rano}`, async(error) => {
buffer = fs.readFileSync(rano)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(rano)
})
})
} else {
reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
}
break

					case 'bateria':
  const charg = ["carregando "," carregando "," carregando "," carregando "," carregando "," desconectado "]
chargo = charg[Math.floor(Math.random() * charg.length)]
let batans = global.batrei[global.batrei.length - 1]
  batter =`
  •🔋 : ${batans}%
  • 🔌 : ${charging}`
  client.sendMessage(from, batter, text, {quoted: mek})
  break
                case 'criador':
            case 'dono':
                 client.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                 client.sendMessage(from, 'Não recebe vcard? Sem problemas, aqui está o link:\nWa.me/559184035474',MessageType.text, { quoted: mek} )
					break    
					case 'video':   
					case 'vídeo':
                play = body.slice(7)
                code = encodeURI(play)
                deco = decodeURI(code)
                anu = await fetchJson(`https://api.megah.tk/json4?q=${code}`)
                if (anu.message) return reply('Não encontrei nada :(')
                console.log(anu)
                //reply(ind.wait)
                buffer = await getBuffer(anu.thumb)
                infomp3 = `Título: ${anu.titulo}\n\nLink: ${anu.fonte}\nLink para download manual: ${anu.url}`
                await client.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                reply('To fazendo o download do video, aguarde...')
                lagu = await getBuffer(anu.url)
                end = lagu
                reply('terminei, to enviando o vídeo')
                await client.sendMessage(sender, lagu, document, {mimetype: 'video/mp4', filename: `${anu.titulo}.mp4`, quoted: mek})
                break
					case 'loc':
					client.sendMessage(from, {degreesLatitude: -23.53, degreesLongitude: -46.62}, MessageType.liveLocation, { quoted: mek, caption: '...'})
					break
					case 'ban':
        if (!isGroup) return reply('Só em grupos');
        if (!isGroupAdmins) return reply('Você não é adm 🤨');
        if (!isBotGroupAdmins) return reply("Bot não é admin");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("tag ou marque alguém");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          client.groupRemove(from, mentioned);
          reply('Pronto');
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          client.groupRemove(from, [anu]);
          reply('Pronto');
        } else {
          client.groupRemove(from, mentioned);
          reply('Pronto');
        }
        break
					case 'nightcore':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break   

//_EFEITO SLOW PARA AUDIO
case 'slow':
case 'lento':
low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
slo = await client.downloadAndSaveMediaMessage(low)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${slo} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(slo)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFEITO ESQUILO PARA AUDIO
case 'esquilo':
pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
tup = await client.downloadAndSaveMediaMessage(pai)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${tup} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(tup)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_EFDEITO GIGANTE PARA AUDIO	
case 'gemuk':
case 'grave':
muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
gem = await client.downloadAndSaveMediaMessage(muk)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO RÁPIDO
case 'fast':
case 'rapido':
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Erro')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_AUMENTA O BASS DE UM AUDIO	
case 'bass':                 
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break

//_DEIXA O AUDIO ESTOURADO		
case 'earrape':         
case 'estourar':       
ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
bas = await client.downloadAndSaveMediaMessage(ass)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${bas} -af equalizer=f=90:width_type=o:width=2:g=50 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(bas)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
                case 'ping':
					  const chatsIds = await client.chats.all()
                const timestamp = speed();
                const latensi = speed() - timestamp 
                p0 =` \`\`\`Carregando Messagens...\`\`\`
                
\`\`\` - [ Chats aberto ]  ${totalchat.length}\`\`\`
\`\`\` - [ smartphone ] ${client.user.phone.device_manufacturer} ${client.user.phone.device_model}\`\`\`
\`\`\` - [ WA versão ] ${client.user.phone.wa_version}\`\`\`
\`\`\` - [ Servidor ] ${client.browserDescription[0]}\`\`\`
\`\`\` - [ Navegador ] ${client.browserDescription[1]}\`\`\`
\`\`\` - [ ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / 2095 ] RAM\`\`\`

\`\`\`Velocidade: ${latensi.toFixed(4)} Segundos\`\`\``
                client.sendMessage(from, p0, text, { quoted: mek})
                    break

		    default:
		    
		    if (messagesC.includes("boa")){
		client.updatePresence(from, Presence.recording)
		  
		buffer = fs.readFileSync('./som/n.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}
	if (messagesC.includes("loli")){
	client.updatePresence(from, Presence.recording)
		ga = ['./som/oni2.mp3','./som/sfoni.mp3','./som/chama.mp3','./som/baka.mp3'] 
		af = ga[Math.floor(Math.random() * ga.length)]
		buffer = fs.readFileSync(``+af +``);
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}
	if (messagesC.includes("animel")){
		  
		buffer = fs.readFileSync('./som/ari.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
	}

	if (messagesC.includes("!say")){
	   teks = text.replace(/!say /, "")
	  client.sendMessage(from, teks, text, { quoted: mek})
	}
	if (messagesC.includes("oi")){
	client.updatePresence(from, Presence.recording)
	    ga = ['./som/oi2.mp3','./som/oig.mp3','./som/bot.mp3','./som/oil.mp3','./som/eq.mp3','./som/igu.mp3','./som/ogay.mp3'] 
		af = ga[Math.floor(Math.random() * ga.length)]
		buffer = fs.readFileSync(``+af +``);
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					
					if (messagesC.includes("tbm")){
					buffer = fs.readFileSync('./som/tbm.mp3');
		client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
    }
					if (budy.includes("para")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/baka.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("bot")){
		    client.updatePresence(from, Presence.recording)
		    ga = ['./som/oi2.mp3','./som/oig.mp3','./som/bot.mp3','./som/oil.mp3','./som/eq.mp3','./som/igu.mp3','./som/chama.mp3'] 
	    	af = ga[Math.floor(Math.random() * ga.length)]
		   buffer = fs.readFileSync(``+af +``);
           client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("safada")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/safada.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("Safada")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/safada.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("Gostoso")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (budy.includes("gostoso")){
		    client.updatePresence(from, Presence.recording)
           buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					
					if (messagesC.includes("davi")){
					  
				  buffer = fs.readFileSync('./som/praga.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("joabe")){
					  
				  buffer = fs.readFileSync('./som/joabe.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					if (messagesC.includes("rebeca")){
					  
				  buffer = fs.readFileSync('./som/rebeca.mp3');
		      client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
					}
					
					if (messagesC.includes("mano")){
					result = fs.readFileSync(`ta.webp`)
					client.sendMessage(from, result, sticker, {quoted :mek})
					}
		    
		    if (budy.includes("menu2")){
					reply(`marque um audio para o cmd funfa`)
					}
		    
		    if (!isCmc && bedy != undefined) {
                  if (isGroup) return console.log(color('Nao permitido em grupo','white'))
                  client.updatePresence(from, Presence.composing)
						muehe = await simih(bedy)
						reply(muehe)
						console.log(color(muehe,'cyan'))
					}
		    
		    }
} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

}connectToWhatsApp ()
.catch (err => console.log("unexpected error: " + err) )