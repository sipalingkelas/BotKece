const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282134960751?text=.chat 6283832392088|Hi Razor Hehehe π', body: 'Razorbotz By Razorπ', thumbnail: await (await fetch('https://telegra.ph/file/345dfdd724db22d617ed3.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282134960751?text=.chat 6283832392088|Hi Razor Hehehe π', body: 'Razorbotz By Razorπ', thumbnail: await (await fetch('https://telegra.ph/file/345dfdd724db22d617ed3.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://telegra.ph/file/b9a32ee41970d7a71b476.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Yah Kak', sourceUrl: 'http://wa.me/6282134960751?text=.chat 6283832392088|Hi Razor Hehehe π', body: 'Razorbotz By Razorπ', thumbnail: await (await fetch('https://telegra.ph/file/345dfdd724db22d617ed3.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Saya Bot Ada Yang Kirim Pesan Ke Kamu
Seseorang Temanmu
(Pengirim Rahasia)

β¬‘βββ¬‘ββββββββββ¬‘βββ¬‘

π Pesan : ${pesan}

β¬‘βββ¬‘ββββββββββ¬‘βββ¬‘

Maaf Anda Belum Bisa Membalas ke Pengirim`

let haori = `β?PENGIRIM RAHASIA γ 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/mantan
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .chat nomor|pesan untuknya

Contoh: #chat 628xxxxxxxxxx|hai owner`

    
    let logs = `BOT AKAN BLOKIR KONTAKMU?
    
β« Spam
β« Chat Aneh Aneh
β« Berantem`

 let haori1 = `Sukses Mengirim Pesan
π₯ Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

β¬‘βββ¬‘ββββββββββ¬‘βββ¬‘

Isi Pesan : ${pesan}

β¬‘βββ¬‘ββββββββββ¬‘βββ¬‘`
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['menfess']
handler.command = /^(chat|menfess)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
