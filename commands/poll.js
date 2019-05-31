const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

try{
  if(!args[0] && message.channel.id != '570803215310782480'){
  return message.channel.send('Proper Usage: +poll question');
  }
  
  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setFooter(`by ${message.author.username}`)
    //.setDescription('no one cares about ur dumb question')
    .addField('Poll', args.join(' ') )
    //.setDescription(args.join(' '))
    //.setTitle(`Poll created by ${message.author.username}`)

  if(message.channel.id != '570803215310782480'){
  let msg = await message.channel.send(embed);
  
  message.delete({timeout: 1000});
  
  await msg.react('👍');
  await msg.react('👎');
  await msg.react('🤷');
  }
  
 } catch (e){
   console.log(e);
 }

}
