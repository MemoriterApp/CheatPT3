//Create a new Discord client object, which will be used to communicate with the Discord API:
const Discord = require('discord.js');
const client = new Discord.Client(); 

//console.log once client logs in
client.once('ready', () => {
    console.log('Logged in as ${client.user.tag}!');
});

client.login('token');