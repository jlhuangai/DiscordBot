const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

// Reads different files under commands
const commandFiles = fs.readdirSync('./commands/').filter( file => file.endsWith('.js') );
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const commandFiles1 = fs.readdirSync('./commands/pings/').filter( file => file.endsWith('.js') );
for(const file of commandFiles1){
    const command = require(`./commands/pings/${file}`);
    client.commands.set(command.name, command);
}



client.once('ready', () => { 
    console.log("Vivy is online!");
})



client.on('message', message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // Return Avatar
  if (command === 'avatar' || command === 'av') {
    client.commands.get('avatar').execute(message,args);
}

  // Ping Commands
  if(command === 'pingme'){
      client.commands.get('pingme').execute(message,args);
      }
      else if(command === 'ping'){
        client.commands.get('ping').execute(message,args);
        }
  
  // Commands     
  if(command === 'youtube'){
        client.commands.get('youtube').execute(message,args);
       }
  if(command === "power"){
        client.commands.get('power').execute(message,args);
    }

    
    
});

require("dotenv").config();
client.login(process.env.BOT_TOKEN);