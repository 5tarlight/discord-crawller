require('dotenv').config()
const { Client, MessageEmbed } = require('discord.js')
const { save } = require('./crawl')

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('y.')) { // On Command
    const cmd = msg.content.slice('y.'.length)

    if (cmd === 'ping' || cmd === '핑') {
      msg.channel.send("Pinging...").then(m => {
        var ping = m.createdTimestamp - msg.createdTimestamp;

        var embed = new MessageEmbed()
          .setAuthor(`Your ping is ${ping}`)
          .setColor("Your Color")

        m.edit(embed)
      })
    }
  } else { // On Crawl
    if (msg.channel.id == '843033412629823500') {
      save(msg.content)
    }
  }

});

client.login(process.env.BOT_TOKEN);
