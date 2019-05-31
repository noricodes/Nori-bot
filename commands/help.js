const Discord = require('discord.js');

exports.run =  (client, message, args, ops) => {


  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    //.setDescription('don\'t ask me for help')
    .setDescription('+ping\n+roles\n+poll\t[question]\n+scrabble\t[word]\n+wwf\t[word]\n+conch\t[question]\n+pay\t[text] (in #payouts only)')
    .setAuthor('Nori Bot Commands', "https://imgur.com/nDAhzzg.png")
  
  if(message.channel.id != '570803215310782480'){
  message.channel.send(embed);
  
  message.delete({timeout: 1000});
  }
  

}
