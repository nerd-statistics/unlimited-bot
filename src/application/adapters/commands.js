const { alertBoss, giveaway } = require("../usecases")

const commandsHandler = content => {
    try {
        switch (contentList[0]) {
            case content.startsWith("+boss"):
                let bossMessageReply = alertBoss(content)
                return toEveryone(bossMessageReply)
            case content.startsWith("+roll"):
                let rollMessageReply = giveaway(content)
                return rollMessageReply
            default:
                return `Foi mal lek, os comandos disponíveis até o momento são: **+boss** e **+roll**`
        }
    } catch (e) {
        const command = contentList[0]
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
