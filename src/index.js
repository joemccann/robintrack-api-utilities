const fetch = require('node-fetch')
const csv = require('async-csv')
const { resolve } = require('path')
const fs = require('fs')

const writeFile = async (data = '', filename = 'ALL') => {
  await fs
    .writeFileSync(resolve(__dirname, `../json/${filename}.json`),
      JSON.stringify(data), 'utf-8')
}

const downloadLatestLeaderboard = async () => {
  const url = 'https://robintrack.net/api/most_popular.csv?limit=100000'
  try {
    const resp = await fetch(url)
    const data = await resp.text()
    return { data }
  } catch (e) {
    console.error(e)
  }
}

const generateSymbolsFile = async (filename = 'ALL') => {
  try {
    const data = await generateSymbolsJSON()
    if (!data) throw new Error('No symbols data to write.')
    await writeFile(data, filename)
  } catch (e) {
    console.error(e)
    return { data: null }
  }

  return { data: 'ok' }
}

const generateSymbolsJSON = async () => {
  try {
    const { data } = await downloadLatestLeaderboard()
    //
    // Convert CSV string into rows
    //
    const rows = await csv.parse(data)

    //
    // First row is "symbol" so delete it.
    //
    delete rows[0]

    let symbols = []

    rows.forEach(row => {
      symbols.push((row[0]).trim())
    })

    symbols.sort((a, b) => {
      if (a > b) return 1
      if (b > a) return -1
      return 0
    })

    //
    // Make unique
    //
    symbols = [...new Set(symbols)]

    return { data: symbols }
  } catch (e) {
    console.error(e)
    return { data: null }
  }
}

module.exports = {
  downloadLatestLeaderboard,
  generateSymbolsFile,
  generateSymbolsJSON
}
