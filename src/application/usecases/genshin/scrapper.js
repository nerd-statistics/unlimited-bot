const puppeteer = require("puppeteer")
const cheerio = require("cheerio")

const genshinURL = "https://genshin.gg/characters/Fischl"

async function fetchData(URI) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(URI, { waitUntil: "networkidle0"})
    const data = await page.evaluate(() => document.querySelector('*').outerHTML);
    browser.close()
    return data
}

async function parsePage(contentHtml) {
    const $ = cheerio.load(contentHtml)
    return $
}

async function getBuilds(page) {
    debugger;
    return await page(".build-list").contents()
}

async function getName(page) {
    return await page(".build-item > .build-name").text()
}

async function getDescription(page) {
    return await page(".build-item > .build-description").text()
}

function getWeapons(page) {
    return ""
}

function getArtifacts(page) {
    return ""
}

async function makeBuild(page) {
    const builds = await getBuilds(page)
    const buildsList = builds.map(content => {
        const buildName = getName(content)
        const description = getDescription(content)
        const weapons = getWeapons(content)
        const artifacts = getArtifacts(content)
        return { buildName, description, weapons, artifacts }
    })
    console.info({ buildsList })

    return { buildsList }
}

async function extractContent() {
    const data = await fetchData(genshinURL)
    const page = await parsePage(data)

    const payload = await makeBuild(page)
    console.info({ payload })
    // return payload

    // get builds
        // get weapons
            // weapon
                // getIcon
                // getRarity
                // getName
                // getStat
                // getDescription
        // get artifacts
            // artifact
                // getIcon
                // getName
                // getStat
                // getBonus
}

extractContent().then()
