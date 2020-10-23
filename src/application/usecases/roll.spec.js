const { scheduleAttack, buildRollObject, randomIntInclusive, giveaway } = require("./roll")

xtest("should add any hour after current time", () => {
    const plusHour = scheduleAttack()
    expect(plusHour).toBe("")
})

test("should build roll object correctly", () => {
    const expected = buildRollObject(["+roll", "10s", "12", "fur", "neck"])
    expect(expected).toStrictEqual({
        command: "+roll",
        seconds: "10s",
        amount: "12",
        item: "Fur Neck"
    })
})

test("should be randomize between two integers", () => {
    const firstRandomInteger = randomIntInclusive(1, 10)
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(firstRandomInteger)

    const secondRandomInteger = randomIntInclusive(5, 7)
    expect([5, 6, 7]).toContain(secondRandomInteger)

    const thirdRandomInteger = randomIntInclusive(9, 9)
    expect([9]).toContain(thirdRandomInteger)
})

test("should be giveaway to guild", () => {
    const giveawayWinner = giveaway("+roll 10s 12 demon axe")
    expect(giveawayWinner).toMatch(/Parabéns número \*\*\d+\*\*, você ganhou um \*\*Demon Axe\*\*/)
})
