const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '+';
const ownerID = '275814889430188032';
let status = 'for +help';
//let status = 'with Patrick 💕';

client.on('ready', () =>{

  
    client.user.setPresence({game: {name: status , type: 3}, status: 'online'});

    //client.user.setPresence({activity: {name: status }, status: 'online'});

});

client.on('message', async message => {

	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
  
  if (message.channel.id === '570803215310782480' && message.content.substring(0,5) != '+pay' && !message.author.bot){
  message.delete({timeout: 1000});
  }
	
  /*if(message.author.id == '275813544191328266'){
  message.react('400851460235067392');
  }*/
	
  if(message.content.includes("XD") ){
  message.delete({timeout: 1000});
  return;
  }
  
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;



	try {
		delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let ops = {
      ownerID: ownerID
    }

		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args, ops);

	} catch (e) {
		console.log(e.stack);
	}

});


client.on('ready', () => console.log('Launched!'));


client.login(process.env.BOT_TOKEN);
