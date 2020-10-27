require("dotenv").config()

const Discord = require("discord.js");
const client = new Discord.Client();
const { commandsHandler } = require("./application/adapters")

const DISCORD_TOKEN = process.env.DISCORD_TOKEN

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {        
    if (msg.content.startsWith("+")) {
        const message = commandsHandler(msg.content, msg)
        msg.channel.send(message)
    }
});

client.login(DISCORD_TOKEN);
