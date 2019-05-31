const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

  try {
    if (!args[0] && message.channel.id != '570803215310782480') return message.channel.send('Proper Usage: +wwf word');

    var one = ["a", "e", "i", "o", "r", "s", "t"];
    var two = ["d", "l", "n", "u"];
    var three = ["g", "h", "y"];
    var four = ["b", "c", "f", "m", "p", "w"];
    var five = ["k", "v"];
    var eight = ["x"];
    var ten = ["j", "q", "z"];

    var score = 0;
    for (var i = 5; i < message.content.length; i++) {
      if (one.includes(message.content.charAt(i).toLowerCase())) {
        score += 1;
      }
      else if (two.includes(message.content.charAt(i).toLowerCase())) {
        score += 2;
      }
      else if (three.includes(message.content.charAt(i).toLowerCase())) {
        score += 3;
      }
      else if (four.includes(message.content.charAt(i).toLowerCase())) {
        score += 4;
      }
      else if (five.includes(message.content.charAt(i).toLowerCase())) {
        score += 5;
      }
      else if (eight.includes(message.content.charAt(i).toLowerCase())) {
        score += 8;
      }
      else if (ten.includes(message.content.charAt(i).toLowerCase())) {
        score += 10;
      }
    }

    const embed = new Discord.RichEmbed()
      .setColor(16754843)
      .setTitle('WWF Score')
      //.setDescription('fk off')
      .setDescription(`**${args.join(' ')}**: ${score}`)

    if(message.channel.id != '570803215310782480'){
    message.channel.send(embed);

    message.delete({ timeout: 1000 });
    }

  } catch (e) {
    console.log(e);
  }

}
