const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect: true});
const token = "fRnE43zyYiJ23XmQuR4XkLDK8bjP96xK";

client.on('ready', () => {
  console.log(`Connecté a ${client.user.tag} avec ${client.users.size} utilisateurs, dans ${client.channels.size} channel et ${client.guilds.size} guildes.!`);
  client.user.setStatus("online");
  client.user.setGame("Essaie actuellement de fonctionner. C'est compliqué, mais on y arrive quand même.");
});

client.on('message', msg => {
  if (msg.content === '?help') {
    msg.reply('WIP.');
  }
});


// ROLL COMMANDS

client.on('message', (message) => {
  const messageWords = message.content.split(' ');
  const rollFlavor = messageWords.slice(2).join(' ');
  if (messageWords[0] === '?roll') {
    if (messageWords.length === 1) {
      //100
      //Ne pas oublier que le JS, c'est de la merde. [IMPORTANT]
      return message.reply(
        (Math.floor(Math.random() * 100) + 1) + ' ' + rollFlavor
      );
    }

    let sides = messageWords[1]; //20
    let rolls = 1;
    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {
      //4d20
      rolls = messageWords[1].split('d')[0] / 1;
      sides = messageWords[1].split('d')[1];
    } else if (messageWords[1][0] == 'd') {
      //d20
      sides = sides.slice(1);
    }
    sides = sides / 1;
    if (isNaN(sides) || isNaN(rolls)) {
      return;
    }
    if (rolls > 1) {
      const rollResults = [];
      for (let i = 0; i < rolls; i++) {
        rollResults.push(Math.floor(Math.random()*sides)+1);
      }
      const sum = rollResults.reduce((a,b) => a + b);
      return message.reply(`[${rollResults.toString()}] ${rollFlavor}`);
    } else {
      return message.reply(
        (Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor
      );
    }
  }
});


client.login('TOKEN')