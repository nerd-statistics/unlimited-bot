const formatBossName = boss => {
    if(boss === "ank") return "Ankrahmur"
    if(boss === "groma") return "Gromarak"
    return boss
}

const buildBossObject = contentList => {
    const [ command, boss, serverName ] = contentList
    const bossName = formatBossName(boss)

    return {
        command: command,
        boss: bossName,
        server: serverName.toUpperCase(),
    }
}

const buildContentOutput = content => {
    const contentList = content.split(" ")
    const contentObj = buildBossObject(contentList)

    return `Pessoal, nasceu ${contentObj.boss} no ${contentobj.server}, vamos atacar mais tarde, fiquem ligados!`
}

module.exports = {
    formatBossName,
    buildBossObject,
    buildContentOutput,
}
