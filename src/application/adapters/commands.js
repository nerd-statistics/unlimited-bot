const { buildBossObject, buildRollObject, alertBoss } = require("../usecases")

const bossHandler = bossObject => { }
const rollHandler = () => { }

const commandsHandler = content => {
    const contentList = content.split(" ")

    try {
        switch (contentList[0]) {
            case "+boss":
                let messageReply = alertBoss(contentList)
                return toEveryone(messageReply)
            case "+roll":
                let roll = buildRollObject(contentList)
                return `O vencedor foi o número **${roll.winner}**, parabéns, você ganhou: **${roll.item}**!`
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
