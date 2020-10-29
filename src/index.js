require("dotenv").config()

const Discord = require("discord.js");
const client = new Discord.Client();
const { commandsHandler } = require("./application/adapters")

const DISCORD_TOKEN = process.env.DISCORD_TOKEN

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msgSent => {        
    if (msgSent.content.startsWith("+")) {
        const message = commandsHandler(msgSent)
        msgSent.channel.send(message)
    }
});

client.login(DISCORD_TOKEN);
