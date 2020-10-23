const moment = require("moment")

const scheduleAttack = (delayHour = 1) => {
    const schedule = moment().add(delayHour, "hour")
    return schedule.format("HH:mm a")
}

const buildRollObject = contentList => {
    const [ command, seconds, amount, ...item ] = contentList
    return { command, seconds, amount, item: formatItemName(item) }
}

const formatItemName = itemList => capitalize(itemList.join(" "))

const capitalize = string => string
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ")

const giveaway = contentList => {
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
