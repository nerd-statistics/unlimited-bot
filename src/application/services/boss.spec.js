const { formatBossName, buildBossObject } = require("./boss")

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

xtest("should parse boss correctly", () => {
    // "+boss <boss-name> <server-name>"
    const bossParsed = parseContent("+boss ank sa4")
    expect(bossParsed).toStrictEqual({
        boss: "Ankrahmur",
        server: "SA4",
        command: "+boss"
    })
})
