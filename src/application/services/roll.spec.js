const { scheduleAttack, buildRollObject } = require("./roll")

test("should add any hour after current time", () => {
    const plusHour = scheduleAttack()
    expect(plusHour).toBe("")
})

test("should build roll object correctly", () => {
    const expected = buildRollObject(["+roll", "10s", "12", "fur", "neck"])
    expect(expected).toStrictEqual({
        command: "+roll",
        seconds: "10s",
        amount: "12",
        item: ["fur", "neck"]
    })
})
