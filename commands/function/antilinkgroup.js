module.exports = { 
name: "antilinkgroup", //By @arifirazzaq2001 Fixed by Ivanzz`
async functions(m) { 
const gMdata = m.isGroup ? await conn.groupMetadata(m.isGroup) : '' //Fixed by @arifirazzaq2001
const grupAdmin = m.isGroup ? getGroupAdmin(gMdata.participants) : ''
const isAdmin = grupAdmin.includes(m.sender)
 if (m.text.includes("https://chat.whatsapp.com/")) {
 if (m.sender === conn.user.jid) return
 if (m.sender === isAdmin) return
m.reply(`Maaf @${m.sender.split("@")[0]} *Anti Link Group Terdeteksi!* \n_Maaf Anda Di Keluarkan._`)
await conn.groupRemove(m.chat, [m.sender])
}
}
}
function getGroupAdmin(participants) {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
