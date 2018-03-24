const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', function() {
  console.log('Bot connecté')
  client.user.setGame('faire des trucs de robot').catch(console.error)
});
 
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
 
client.login('uYfWrvdNt4-02X4YT51rRznKwxcecBgf');