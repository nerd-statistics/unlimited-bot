const { alertBoss, giveaway, getDotaBuffBuildHero } = require("../usecases")

const commandsHandler = msgSent => {
    try {
        const command = msgSent.content.split(" ")[0]
        switch (command) {
            case "+boss":
                let bossMessageReply = alertBoss(msgSent.content)
                return toEveryone(bossMessageReply)
            case "+roll":
                let rollmessagereply = giveaway(msgSent.content)
                return rollmessagereply
            case "+oi":
                return "Hello World!"
            case "+dota":
                return getDotaBuffBuildHero(msgSent.content, msgSent.author.id)
            default:
                return `Foi mal lek, os comandos disponíveis até o momento são: **+boss** e **+roll**`
        }
    } catch (e) {
        const command = msgSent.content.split(" ")[0]
        console.info({ e, command })
        if (command === "+boss") {
            return `Comando inválido, tente: +boss **boss-name** **server-name**`
        } else if (command === "+roll") {
            return `Comando inválido, tente: +roll **tempo-segundos** **quantidade-players** **item-sorteio**`
        } else {
            return "Comando desconhecido!"
        }
    }
}

const toEveryone = content => {
    return `@everyone ${content}`
}

module.exports = {
    commandsHandler,
    toEveryone,
}
