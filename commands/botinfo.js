const Discord = require("discord.js")
const { version } = require('discord.js')
const mongover = require("mongoose").version
const dbcmversion = require("dbcm").version
const cpu = require("cpu-stat")
const address = require("address")
const os = require("os")
const moment = require('moment')
moment.locale('ko-KR')

exports.run = (client, message, args) => {
    let java = client.emojis.get('714290612194771015')
    let Developers = client.emojis.get('702358853957976155')
    let discordjs = client.emojis.get('714290563188391956')
    let cpuEmoji = client.emojis.get('647649699444293632')
    let nodejs = client.emojis.get('714295971403792485')
    let msger = client.emojis.get('668795627437555747')//636204938464198656

    
    let embed = new Discord.RichEmbed()
    .setColor(`#FFFFFF`)
    .setAuthor(`BlackDragon Community Bot Info`)
    .addField(`${msger} Name | ID`, `${client.user.tag} | ${client.user.id}`)
    .addField(`${Developers} Developers`, `ArdanKR / νλ£‘`)
    .addField(`πΎ Memory Usage`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
    .addField(`${cpuEmoji} CPU Model | Clock`, `${os.cpus()[0].model} \n ${os.cpus().map(i => `${i.speed}`)[0]}GHz`)
    .addField(`${java} Language`, `JavaScript`)
    .addField("π Client BirthDay", moment(client.user.createdAt).tz('Asia/Seoul').format("LLLL"))
    .addField(`${discordjs} Discord.js Version`, 'v'+version)
    .addField(`${client.emojis.get('748522338089304165')} Mongoose Version`, 'v'+mongover)
    .addField(`π dbcm Version`, 'v'+dbcmversion)
    .addField(`${nodejs} node Version`, process.version)
    .addField(`${client.emojis.get('668795590263439370')} Ping`, `API: ${Math.round(client.ping)}ms`)
    .addField(`π Client Status`, 49 > Math.round(client.ping) > 30 ? `π  API μν: μ΄μ§ λΆμμ ` : Math.round(client.ping) > 50 ? `π΄ API μν: λ§€μ° λΆμμ ` : `π’ API μν: μ μ`)
    .setFooter(`Made by νλ£‘#3154 & ArdanKR#9999`, client.users.get("779632596237680650").displayAvatarURL)
    message.channel.send(embed)
}

exports.config = {
    name: "botinfo",
    aliases: ['λ΄μ λ³΄']
}