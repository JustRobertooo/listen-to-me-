const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  console.log('bot online ');
});

client.login('token')
