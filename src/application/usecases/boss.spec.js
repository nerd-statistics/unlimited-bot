const { formatBossName, buildBossObject, capitalize, alertBoss } = require("./boss")

test("should be format boss name correctly", () => {
    const gromarak = formatBossName("groma")
    const ankrahmur = formatBossName("ank")

    expect(gromarak).toBe("Gromarak")
    expect(ankrahmur).toBe("Ankrahmur")
})

test("should be built boss object", () => {
    const obj = buildBossObject(["+boss", "ank", "sa4"])
    expect(obj).toStrictEqual({
        boss: "Ankrahmur",
        server: "SA4",
        command: "+boss"
    })
})

test("should be alerted of boss ", () => {
    const messageReply = alertBoss("+boss ank sa4")
    const expected = "Pessoal, nasceu **Ankrahmur** no **SA4**, vamos atacar mais tarde, fiquem ligados!"
    expect(messageReply).toBe(expected)
})

test("should capitalize the string", () => {
    const demo = capitalize("demonstration")
    expect(demo).toBe("Demonstration")

    const goodNews = capitalize("some good news")
    expect(goodNews).toBe("Some Good News")
})
