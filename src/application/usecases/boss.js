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
        boss: capitalize(bossName),
        server: serverName.toUpperCase(),
    }
}

const capitalize = string => string
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ")

const alertBoss = contentList => {
    const contentObj = buildBossObject(contentList)
    return `Pessoal, nasceu **${contentObj.boss}** no **${contentObj.server}**, vamos atacar mais tarde, fiquem ligados!`
}


module.exports = {
    formatBossName,
    buildBossObject,
    alertBoss,
    capitalize,
}
