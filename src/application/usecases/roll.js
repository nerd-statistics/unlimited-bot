const moment = require("moment")
const { capitalize } = require("./utils")

const scheduleAttack = (delayHour = 1) => {
    const schedule = moment().add(delayHour, "hour")
    return schedule.format("HH:mm a")
}

const buildRollObject = contentList => {
    const [ command, amount, ...item ] = contentList
    return { command, amount, item: formatItemName(item) }
}

const formatItemName = itemList => capitalize(itemList.join(" "))

const giveaway = content => {
    const contentList = content.split(" ")
    const rollObject = buildRollObject(contentList)
    const winner = randomIntInclusive(1, rollObject.amount)

    return `Parabéns número **${winner}**, você ganhou um **${rollObject.item}**`
}


const randomIntInclusive = (min = 1, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// setTimeout(time, function)

module.exports = {
    scheduleAttack,
    buildRollObject,
    randomIntInclusive,
    giveaway,
}
