const Discord = require("discord.js");
const client = new Discord.Client();

const token = ""

const parseCommand = content => {
    const messages = content.split(" ")
    const prefixCommand = messages[0]

    return {
        prefix: prefixCommand.slice(0,1),
        command: prefixCommand.slice(1),
        arguments: messages.slice(1)
    }
}

function getRandomIntInclusive(min = 1, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    // "+boss <boss-name> <server-name>"
    if (msg.content.startsWith("+boss")) {
        const content = msg.content
        const [bossName, serverName] = content.split(" ").slice(1)
        const parsed = parseCommand(content)
        console.info({parsed})

        msg.channel.send(`
            @everyone,
            nasceu ${bossName} no ${serverName}, vamos partir às <+1 hora>.
            Estejam na call. :punch:
        `)
    }

    // "+roll 5 seconds <foobar> 10 players"
    if (msg.content.startsWith("+roll")) {
        // msg.reply("found!")
        msg.channel.send()
    }

    if (msg.content === "ping") {
        msg.reply("pong");
    }
});

client.login("NzY4OTgyMjkwMTAxMTc0Mjg0.X5IYkA.cXKIRierKnSlYJVot8HWkQcXIOE");
