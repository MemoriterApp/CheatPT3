require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js')
//Create a new Discord client object, which will be used to communicate with the Discord API:
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
    });

//console.log once client logs in
client.once('ready', () => {
    console.log('Logged in as '+ client.user.tag);    
});


// register a new command with the name "ping" 
client.on('message', async message => {
    if (message.content === 'hello') {
        // send back "Pong." to the channel the message was sent in
        await message.channel.send('world');
    }
});

client.login(process.env.DISCORD_BOT_TOKEN);