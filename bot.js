require('dotenv').config(); 
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js"); 
/*
const client = new Discord.Client({intents: 
    ["GUILDS", "GUILD_MESSAGES"]}); 
*/
const client = new Discord.Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent
    ]
  })
client.on("ready", () => { 
    console.log(`Logged in as ${client.user.tag}!`) 
}) 
client.on("messageCreate", msg => { 
    
    //console.log("Can see a message");
    //console.log("Contents of message", msg.content);
    const TwitterPreview = /https:\/\/vxtwitter.com/;
    const TwitterPattern = /https:\/\/twitter.com/;
    const XPattern = /https:\/\/x.com/;
    //console.log("new changes");
    if (TwitterPreview.test(msg.content) == false){
        if ( TwitterPattern.test(msg.content) ){
            msg.reply(msg.content.replace("twitter.com", "vxtwitter.com") ); 
        }
        else if ( XPattern.test(msg.content)){
            //msg.content.replace("x.com", "vxtwitter.com") 
            msg.reply(msg.content.replace("x.com", "vxtwitter.com"));
        }
    }  
}) 
client.login(process.env.DISCORD_TOKEN);