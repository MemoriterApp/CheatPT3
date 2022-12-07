require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js')
//Create a new Discord client object, which will be used to communicate with the Discord API:
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
    ]
    });

//console.log once client logs in
client.once('ready', () => {
    console.log('Logged in as ${client.user.tag}!');    
});

client.login(process.env.DISCORD_BOT_TOKEN);


// register a new command with the name "ping"
client.on('messageCreate', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
});

