const heroes = require("./heroesList")

const dotaBuffLink = process.env.DOTA_BUFF_LINK

const getDotaBuffBuildHero = (heroCommand, sender) => {
    let heroName = heroCommand.toLowerCase().split(" ").slice(1).join(" ")
    let formatedHeroName = heroCommand.toLowerCase().split(" ").slice(1).join("-");    

    if (!heroes.heroesList.some(x => x === heroName))
        return `<@${sender}> o heroi **${heroName}** não existe`

    return `<@${sender}> Aqui está a build do heroi **${heroName}** \n ${dotaBuffLink}${formatedHeroName}`
}

module.exports = {
    getDotaBuffBuildHero
}