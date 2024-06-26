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
    const TwitterPreview = /https:\/\/vxtwitter.com/;
    const TwitterPattern = /https:\/\/twitter.com/;
    const XPreview = /https:\/\/fixvx.com/;
    const XPattern = /https:\/\/x.com/;
    const TikTokPreview = /https:\/\/www.vxtiktok.com/;
    const TikTokPattern = /https:\/\/www.tiktok.com/;
    const InstagramPreview = /https:\/\/g.ddinstagram.com/;
    const InstagramPattern = /https:\/\/www.instagram.com/;
    //console.log("new changes");
    //console.log("Twit:" + changePreviewLinks(TwitterPreview, TwitterPattern, msg.content));
    //console.log("X:" + changePreviewLinks(TwitterPreview, XPattern, msg.content));
    ///console.log("Tik:" + changePreviewLinks(TikTokPreview, TikTokPattern, msg.content));
    if (changePreviewLinks(TwitterPreview, TwitterPattern, msg.content)){
        msg.reply(msg.content.replace("twitter.com", "vxtwitter.com") ); 
    } else if (changePreviewLinks(XPreview, XPattern, msg.content)) {
        msg.reply(msg.content.replace("x.com", "fixvx.com"));
    } else if (changePreviewLinks(TikTokPreview, TikTokPattern, msg.content)) {
        msg.reply(msg.content.replace("tiktok.com", "vxtiktok.com"));
    } else if (changePreviewLinks(InstagramPreview, InstagramPattern, msg.content)) {
        msg.reply(msg.content.replace("www.instagram.com", "g.ddinstagram.com"));
    }
}) 
client.login(process.env.DISCORD_TOKEN);