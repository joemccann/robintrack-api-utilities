const test = require('tape')

const {
  downloadLatestLeaderboard,
  generateSymbolsFile
} = require('../src/')

test('sanity', t => {
  t.ok(true)
  t.end()
})

test('PASS: download latest leaderboard - default', async t => {
  try {
    const { data } = await downloadLatestLeaderboard()
    t.ok(data)
  } catch (e) {
    console.error(e)
  }
  t.end()
})

test('PASS: generate symbols file - default', async t => {
  try {
    const { data } = await generateSymbolsFile()
    t.ok(data)
  } catch (e) {
    console.error(e)
  }
  t.end()
})
