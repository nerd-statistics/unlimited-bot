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

module.exports = {
    formatBossName,
    buildBossObject,
}
