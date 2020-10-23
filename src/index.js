require("dotenv").config()

const Discord = require("discord.js");
const client = new Discord.Client();
const { parseContent, toEveryone } = require("./application/adapters")

const DISCORD_TOKEN = process.env.DISCORD_TOKEN

function getRandomIntInclusive(min = 1, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (msg.content.startsWith("+")) {
        const message = parseContent(msg.content)
        msg.channel.send(message)
    }
});

client.login(DISCORD_TOKEN);
