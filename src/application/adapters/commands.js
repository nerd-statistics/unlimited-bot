const { buildBossObject, buildRollObject } = require("../services")

const parseContent = content => {
    const contentList = content.split(" ")

    try {
        switch(contentList[0]) {
            case "+boss":
                let boss = buildBossObject(contentList)
                return `Pessoal, nasceu ${contentObj.boss} no ${contentobj.server}, vamos atacar mais tarde, fiquem ligados!`
                break;
            case "+roll":
                let roll = buildRollObject(contentList)
                return roll
                break;
            default:
                return
        }
    } catch(e) {
        const command = contentList[0]
        console.info({ e, command })
    }
}

const toEveryone = content => {
    return `@everyone ${content}`
}

module.exports = {
    parseContent,
    toEveryone,
}
