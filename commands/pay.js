const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

try{
  if(!args[0] && message.channel.id == '570803215310782480') return message.channel.send('Proper Usage: +pay text');

  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setFooter(`by ${message.author.username}`)
    .addField(args.join(' ').toUpperCase(), 'Did you win?')
    //.setDescription(args.join(' '))

  if(message.channel.id == '570803215310782480'){
  let msg = await message.channel.send(embed);
  
  message.delete({timeout: 1000});
  
  await msg.react('👍');
  await msg.react('👎');
  }

 } catch (e){
   console.log(e);
 }

}
