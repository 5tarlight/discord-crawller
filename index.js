const { Client } = require('discord.js')
require('dotenv').config()

const client = new Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('y.') && msg.author.id != '352755226224361482') {
    msg.reply('Permission Denied')
    return
  } else {
    // On Command
  }

  if (msg.content === 'y.ping') {
    msg.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
