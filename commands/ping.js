const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('fk off');

  if(message.channel.id != '570803215310782480'){
  message.channel.send(embed);
	
  message.delete({timeout: 1000});
  }
	
}
