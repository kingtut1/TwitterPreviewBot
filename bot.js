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
    
    console.log("Can see a message");
    console.log("Contents of message", msg.content);
    const TwitterPreview = /vxtwitter.com/;
    const TwitterPattern = /twitter.com/;
    if (TwitterPreview.test(msg.content) == false){
        if ( TwitterPattern.test(msg.content) ){
            msg.reply(msg.content.replace("twitter.com", "vxtwitter.com") ); 
        }
        else if ( msg.content === "x.com"){
            msg.content.replace("x.com", "vxtwitter.com") 
            msg.reply(msg.content);
        }
    }  
}) 
client.login(process.env.DISCORD_TOKEN);