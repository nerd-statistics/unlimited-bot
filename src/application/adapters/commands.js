const { buildBossObject, buildRollObject } = require("../services")

const parseContent = content => {
    const contentList = content.split(" ")

    try {
        switch(contentList[0]) {
            case "+boss":
                let boss = buildBossObject(contentList)
                return boss
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

module.exports = {
    parseContent,
}
