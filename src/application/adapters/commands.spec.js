const { parseContent } = require("./commands")

test("should parse command correctly", () => {
    // "+boss <boss-name> <server-name>"
    const bossParsed = parseContent("+boss ank sa4")
    expected(bossParsed)
        .toBe("@everyone Pessoal, nasceu ${contentObj.boss} no ${contentObj.server}, vamos atacar mais tarde, fiquem ligados!")

    /*
    expect(bossParsed).toStrictEqual({
        boss: "Ankrahmur",
        server: "SA4",
        command: "+boss"
    })
    */

    // "+roll <seconds> <number-of-players> <item>"
    const rollParsed = parseContent("+roll 10s 12 fur neck")
    expect(rollParsed).toStrictEqual({
        command: "+roll",
        seconds: "10s",
        amount: "12",
        item: ["fur", "neck"]
    })

    const dummyMessage = parseContent("Hello everyone, it's a simple message!")
    expect(dummyMessage).toStrictEqual(undefined)
})

xtest("should send message to channel with everyone", () => {
    // "+boss <boss-name> <server-name>"
    const contentParsed = parseContent("")
})

