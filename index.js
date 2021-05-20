const { Client, MessageEmbed } = require('discord.js')
require('dotenv').config()

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('y.') && msg.author.id != '352755226224361482' && msg.author.id != '328392758798581761') {
    msg.reply('Permission Denied')
    return
  } else {
    // On Command
  }

  if (msg.content === 'y.ping') {
    msg.channel.send("Pinging...").then(m => {
      var ping = m.createdTimestamp - msg.createdTimestamp;

      var embed = new MessageEmbed()
        .setAuthor(`Your ping is ${ping}`)
        .setColor("Your Color")

      m.edit(embed)
    })
  }
});

client.login(process.env.BOT_TOKEN);
