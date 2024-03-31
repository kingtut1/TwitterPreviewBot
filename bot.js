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

function changePreviewLinks(PreviewPattern, RegularPattern, message){
    if (PreviewPattern.test(message) == false){
        if ( RegularPattern.test(message) ){
            return true;
        }
    }
    return false;
}

client.on("ready", () => { 
    console.log(`Logged in as ${client.user.tag}!`) 
}) 
client.on("messageCreate", msg => { 
    
    //console.log("Can see a message");
    //console.log("Contents of message", msg.content);
    const TwitterPreview = /https:\/\/vxtwitter.com/;
    const TwitterPattern = /https:\/\/twitter.com/;
    const XPattern = /https:\/\/x.com/;
    const TikTokPreview = /https:\/\/vxtiktok.com/;
    const TikTokPattern = /https:\/\/tiktok.com/
    //console.log("new changes");
    console.log(changePreviewLinks(TwitterPreview, TwitterPattern, msg.content));
    console.log(changePreviewLinks(TwitterPreview, XPattern, msg.content));
    console.log(changePreviewLinks(TikTokPreview, TikTokPattern, msg.content));
    if (changePreviewLinks(TwitterPreview, TwitterPattern, msg.content)){
        msg.reply(msg.content.replace("twitter.com", "vxtwitter.com") ); 
    } else if (changePreviewLinks(TwitterPreview, XPattern, msg.content)) {
        msg.reply(msg.content.replace("x.com", "vxtwitter.com"));
    } else if (changePreviewLinks(TikTokPreview, TikTokPattern, msg.content)) {
        msg.reply(msg.content.replace("tiktok.com", "vxttiktok.com"));
    }
}) 
client.login(process.env.DISCORD_TOKEN);