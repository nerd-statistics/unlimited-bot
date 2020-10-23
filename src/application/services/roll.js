const moment = require("moment")

const scheduleAttack = (delayHour = 1) => {
    const schedule = moment().add(delayHour, "hour")
    return schedule.format("HH:mm a")
}

const buildRollObject = contentList => {
    const [ command, seconds, amount, ...item ] = contentList
    return { command, seconds, amount, item }
}

module.exports = {
    scheduleAttack,
    buildRollObject,
}
