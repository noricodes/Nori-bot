const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

  if (!args[0]) return message.channel.send('Please input an equation');

  let resp;

  let msg = 'fk u, do it urself';

  try {

    resp = math.eval(args.join(' '));

  } catch (e) {

    return message.channel.send('Sorry, please input a valid equation');

  }

  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('Math Calculator')
    .addField('Input', `\`\`\`js\n${args.join(' ')}\`\`\``)
    //.addField('Output', `\`\`\`js\n${msg}\`\`\``)
    .addField('Output', `\`\`\`js\n${resp}\`\`\``)

  message.channel.send(embed);
  
  message.delete({timeout: 1000});

}
