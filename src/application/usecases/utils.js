const capitalize = string => string
    .split(" ")
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join(" ")

module.exports = { capitalize }
