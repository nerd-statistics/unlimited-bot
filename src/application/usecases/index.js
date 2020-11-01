const { formatBossName, buildBossObject, alertBoss } = require("./boss")
const { scheduleAttack, buildRollObject, giveaway } = require("./roll")
const { getDotaBuffBuildHero } = require("./dota")

module.exports = {
    formatBossName,
    scheduleAttack,
    buildBossObject,
    buildRollObject,
    alertBoss,
    giveaway,
    getDotaBuffBuildHero
}
