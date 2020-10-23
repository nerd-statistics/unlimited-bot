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

const buildContentOutput = content => {
    const contentList = content.split(" ")
    const contentObj = buildBossObject(contentList)

    return `Pessoal, nasceu **${contentObj.boss}** no **${contentobj.server}**, vamos atacar mais tarde, fiquem ligados!`
}

const capitalize = string => {
    return string
        .split(" ")
        .map(s => s[0].toUpperCase() + s.slice(1))
        .join(" ")
}

module.exports = {
    formatBossName,
    buildBossObject,
    buildContentOutput,
    capitalize,
}
