const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

try{
  //if(!args[0]) return message.channel.send('Proper Usage: <prefix>google');

  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    //.setTitle('hope u lose')
    .setFooter(`by ${message.author.username}`)
    .setTitle('React or get moved out of voice chat!')

  if(message.channel.id != '570803215310782480'){
  let msg = await message.channel.send(embed);
  
  message.delete({timeout: 1000});
  
  await msg.react('1⃣');
  await msg.react('2⃣');
  await msg.react('3⃣');
  //await msg.react('4⃣');
  await msg.react('🇶');
  await msg.react('🇭');
  await msg.react('🇱');

  /*const embed2 = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('15 sec left to react or you will be removed from voice chat! \nWatch out for NOTS and dont spam options.');*/
	
  /*setTimeout(() => {
  message.channel.send(embed2);
	}, 15000);*/
  }
  
 } catch (e){
   console.log(e);
 }

}
